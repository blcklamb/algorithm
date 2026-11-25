#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = __dirname;
const problems = JSON.parse(fs.readFileSync(path.join(root, "problems.json"), "utf8"));
const ready = problems.filter((problem) => problem.status === "ready");
const unavailable = problems.length - ready.length;

function normalize(output) {
  return output
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/g, ""))
    .join("\n")
    .replace(/\n+$/g, "");
}

function firstDifference(expected, actual) {
  const expectedLines = expected.split("\n");
  const actualLines = actual.split("\n");
  const length = Math.max(expectedLines.length, actualLines.length);
  for (let index = 0; index < length; index++) {
    if (expectedLines[index] !== actualLines[index]) {
      return `줄 ${index + 1}: 예상 ${JSON.stringify(expectedLines[index] ?? "<없음>")}, 실제 ${JSON.stringify(actualLines[index] ?? "<없음>")}`;
    }
  }
  return "출력이 다릅니다.";
}

function check(problem) {
  const folder = path.join(root, problem.id.toLowerCase());
  const files = ["index.js", "input.txt", "output.txt"];
  for (const filename of files) {
    const file = path.join(folder, filename);
    if (!fs.existsSync(file) || fs.statSync(file).size === 0) {
      return { kind: "error", message: `${filename} 파일이 없거나 비어 있습니다.` };
    }
  }

  const input = fs.readFileSync(path.join(folder, "input.txt"), "utf8");
  const expected = normalize(fs.readFileSync(path.join(folder, "output.txt"), "utf8"));
  const result = spawnSync(process.execPath, [path.join(folder, "index.js")], {
    cwd: folder,
    input,
    encoding: "utf8",
    timeout: 10_000,
    maxBuffer: 8 * 1024 * 1024,
    windowsHide: true,
  });

  if (result.error?.code === "ETIMEDOUT") {
    return { kind: "timeout", message: "10초 제한을 넘었습니다." };
  }
  if (result.error || result.status !== 0) {
    const stderrLines = result.stderr?.trim().split("\n") || [];
    const detail = result.error?.message
      || stderrLines.find((line) => /\b(?:\w*Error|Exception):/.test(line))
      || stderrLines[0]
      || `종료 코드 ${result.status}`;
    return { kind: "error", message: detail };
  }

  const actual = normalize(result.stdout);
  if (actual !== expected) {
    return { kind: "fail", message: firstDifference(expected, actual) };
  }
  return { kind: "pass", message: "예제 출력과 일치합니다." };
}

function list() {
  let chapter = null;
  for (const problem of problems) {
    if (problem.chapter !== chapter) {
      chapter = problem.chapter;
      console.log(`\n${chapter}장`);
    }
    const label = problem.status === "ready" ? "예제 준비" : `제외: ${problem.reason}`;
    const name = problem.id ? `${problem.id} — ${problem.title}` : problem.title;
    console.log(`  ${name} [${label}]${problem.url ? ` ${problem.url}` : ""}`);
  }
  console.log(`\n전체 ${problems.length}개 · 예제 준비 ${ready.length}개 · 제외 ${unavailable}개`);
}

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error("사용법: node algospot/check.js <문제 ID|--all|--list>");
  process.exitCode = 2;
} else if (args[0] === "--list") {
  list();
} else {
  let selected;
  if (args[0] === "--all") {
    selected = ready;
  } else {
    const problem = problems.find((item) => item.id?.toLowerCase() === args[0].toLowerCase());
    if (!problem) {
      console.error(`목록에 없는 문제 ID: ${args[0]}`);
      process.exitCode = 2;
    } else if (problem.status !== "ready") {
      console.error(`${problem.id}: ${problem.reason}`);
      process.exitCode = 2;
    } else {
      selected = [problem];
    }
  }

  if (selected) {
    const counts = { pass: 0, fail: 0, error: 0, timeout: 0 };
    const labels = { pass: "통과", fail: "불일치", error: "실행 오류", timeout: "시간 초과" };
    for (const problem of selected) {
      const result = check(problem);
      counts[result.kind]++;
      console.log(`[${labels[result.kind]}] ${problem.id}: ${result.message}`);
    }
    const excluded = args[0] === "--all" ? unavailable : 0;
    console.log(`결과: 통과 ${counts.pass} · 불일치 ${counts.fail} · 실행 오류 ${counts.error} · 시간 초과 ${counts.timeout} · 제외 ${excluded}`);
    if (counts.fail + counts.error + counts.timeout > 0) process.exitCode = 1;
  }
}
