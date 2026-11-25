import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.EnumMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class Check {
    private static final int TIMEOUT_SECONDS = 10;

    private record Problem(int chapter, String id, String title, String url,
                           String status, String reason) {}

    private enum Kind { PASS, FAIL, ERROR, TIMEOUT }

    private record Result(Kind kind, String message) {}

    public static void main(String[] args) throws IOException {
        int exitCode = run(args);
        if (exitCode != 0) System.exit(exitCode);
    }

    private static int run(String[] args) throws IOException {
        if (args.length != 1) {
            System.err.println("사용법: java algospot_java/Check.java <문제 ID|--all|--list>");
            return 2;
        }

        Path cwd = Path.of("").toAbsolutePath();
        Path root = Files.exists(cwd.resolve("problems.tsv")) ? cwd : cwd.resolve("algospot_java");
        List<Problem> problems = readCatalog(root.resolve("problems.tsv"));
        List<Problem> ready = problems.stream()
            .filter(problem -> problem.status().equals("ready"))
            .toList();
        int unavailable = problems.size() - ready.size();

        if (args[0].equals("--list")) {
            list(problems, ready.size(), unavailable);
            return 0;
        }

        List<Problem> selected;
        if (args[0].equals("--all")) {
            selected = ready;
        } else {
            Problem found = problems.stream()
                .filter(problem -> problem.id().equalsIgnoreCase(args[0]))
                .findFirst().orElse(null);
            if (found == null) {
                System.err.println("목록에 없는 문제 ID: " + args[0]);
                return 2;
            }
            if (!found.status().equals("ready")) {
                System.err.println(found.id() + ": " + found.reason());
                return 2;
            }
            selected = List.of(found);
        }

        Map<Kind, Integer> counts = new EnumMap<>(Kind.class);
        for (Kind kind : Kind.values()) counts.put(kind, 0);
        for (Problem problem : selected) {
            Result result = check(root, problem);
            counts.put(result.kind(), counts.get(result.kind()) + 1);
            System.out.printf("[%s] %s: %s%n", label(result.kind()), problem.id(), result.message());
        }
        int excluded = args[0].equals("--all") ? unavailable : 0;
        System.out.printf("결과: 통과 %d · 불일치 %d · 실행 오류 %d · 시간 초과 %d · 제외 %d%n",
            counts.get(Kind.PASS), counts.get(Kind.FAIL), counts.get(Kind.ERROR),
            counts.get(Kind.TIMEOUT), excluded);
        return counts.get(Kind.FAIL) + counts.get(Kind.ERROR) + counts.get(Kind.TIMEOUT) > 0 ? 1 : 0;
    }

    private static List<Problem> readCatalog(Path file) throws IOException {
        List<String> rows = Files.readAllLines(file, StandardCharsets.UTF_8);
        if (rows.isEmpty() || !rows.get(0).equals("chapter\tid\ttitle\turl\tstatus\treason")) {
            throw new IOException("문제 목록의 헤더가 올바르지 않습니다: " + file);
        }
        List<Problem> problems = new ArrayList<>();
        for (int index = 1; index < rows.size(); index++) {
            String[] fields = rows.get(index).split("\t", -1);
            if (fields.length != 6) {
                throw new IOException("문제 목록 형식 오류: " + (index + 1) + "행");
            }
            problems.add(new Problem(Integer.parseInt(fields[0]), fields[1], fields[2],
                fields[3], fields[4], fields[5]));
        }
        return problems;
    }

    private static void list(List<Problem> problems, int ready, int unavailable) {
        int chapter = -1;
        for (Problem problem : problems) {
            if (problem.chapter() != chapter) {
                chapter = problem.chapter();
                System.out.printf("%n%d장%n", chapter);
            }
            String name = problem.id().isEmpty() ? problem.title()
                : problem.id() + " — " + problem.title();
            String status = problem.status().equals("ready") ? "예제 준비"
                : "제외: " + problem.reason();
            String url = problem.url().isEmpty() ? "" : " " + problem.url();
            System.out.printf("  %s [%s]%s%n", name, status, url);
        }
        System.out.printf("%n전체 %d개 · 예제 준비 %d개 · 제외 %d개%n",
            problems.size(), ready, unavailable);
    }

    private static Result check(Path root, Problem problem) {
        Path folder = root.resolve(problem.id().toLowerCase(Locale.ROOT));
        for (String name : List.of("Main.java", "input.txt", "output.txt")) {
            Path file = folder.resolve(name);
            try {
                if (!Files.isRegularFile(file) || Files.size(file) == 0) {
                    return new Result(Kind.ERROR, name + " 파일이 없거나 비어 있습니다.");
                }
            } catch (IOException exception) {
                return new Result(Kind.ERROR, exception.getMessage());
            }
        }

        Path temporary = null;
        try {
            temporary = Files.createTempDirectory("algospot-java-check-");
            Path stdout = temporary.resolve("stdout.txt");
            Path stderr = temporary.resolve("stderr.txt");
            String java = Path.of(System.getProperty("java.home"), "bin", "java").toString();
            Process process = new ProcessBuilder(java, "-Dfile.encoding=UTF-8", "Main.java")
                .directory(folder.toFile())
                .redirectInput(folder.resolve("input.txt").toFile())
                .redirectOutput(stdout.toFile())
                .redirectError(stderr.toFile())
                .start();
            if (!process.waitFor(TIMEOUT_SECONDS, TimeUnit.SECONDS)) {
                process.destroyForcibly();
                process.waitFor();
                return new Result(Kind.TIMEOUT, TIMEOUT_SECONDS + "초 제한을 넘었습니다.");
            }
            if (process.exitValue() != 0) {
                String error = Files.readString(stderr, StandardCharsets.UTF_8);
                return new Result(Kind.ERROR, errorDetail(error, process.exitValue()));
            }
            String expected = normalize(Files.readString(folder.resolve("output.txt"), StandardCharsets.UTF_8));
            String actual = normalize(Files.readString(stdout, StandardCharsets.UTF_8));
            if (!expected.equals(actual)) {
                return new Result(Kind.FAIL, firstDifference(expected, actual));
            }
            return new Result(Kind.PASS, "예제 출력과 일치합니다.");
        } catch (IOException exception) {
            return new Result(Kind.ERROR, exception.getMessage());
        } catch (InterruptedException exception) {
            Thread.currentThread().interrupt();
            return new Result(Kind.ERROR, "실행이 중단되었습니다.");
        } finally {
            if (temporary != null) {
                try {
                    Files.deleteIfExists(temporary.resolve("stdout.txt"));
                    Files.deleteIfExists(temporary.resolve("stderr.txt"));
                    Files.deleteIfExists(temporary);
                } catch (IOException ignored) {
                    // 임시 파일 정리 실패는 판정 결과에 영향을 주지 않습니다.
                }
            }
        }
    }

    private static String normalize(String output) {
        String[] lines = output.replace("\r\n", "\n").replace('\r', '\n').split("\n", -1);
        String joined = String.join("\n", Arrays.stream(lines)
            .map(line -> line.replaceAll("[ \\t]+$", ""))
            .toList());
        return joined.replaceAll("\n+$", "");
    }

    private static String firstDifference(String expected, String actual) {
        String[] expectedLines = expected.split("\n", -1);
        String[] actualLines = actual.split("\n", -1);
        for (int index = 0; index < Math.max(expectedLines.length, actualLines.length); index++) {
            String wanted = index < expectedLines.length ? expectedLines[index] : "<없음>";
            String received = index < actualLines.length ? actualLines[index] : "<없음>";
            if (!wanted.equals(received)) {
                return "줄 " + (index + 1) + ": 예상 \"" + wanted + "\", 실제 \"" + received + "\"";
            }
        }
        return "출력이 다릅니다.";
    }

    private static String errorDetail(String error, int exitCode) {
        List<String> lines = error.lines().map(String::trim)
            .filter(line -> !line.isEmpty()).toList();
        return lines.stream().filter(line -> line.contains("Error:") || line.contains("Exception:")
            || line.contains("error:")).findFirst()
            .orElse(lines.isEmpty() ? "종료 코드 " + exitCode : lines.get(0));
    }

    private static String label(Kind kind) {
        return switch (kind) {
            case PASS -> "통과";
            case FAIL -> "불일치";
            case ERROR -> "실행 오류";
            case TIMEOUT -> "시간 초과";
        };
    }
}
