# 알고리즘 문제 해결 전략 Java 예제 모음

[JS 버전의 문제 목록](../algospot/problems.json)과 같은 97개 항목을 [problems.tsv](./problems.tsv)에 정리했습니다. 공식 예제가 있는 93개 문제에는 `Main.java`, `input.txt`, `output.txt`가 있으며, 예제 입력과 출력은 JS 버전과 같습니다.

Java 17 이상에서 저장소 루트 기준으로 실행합니다.

```sh
java algospot_java/Check.java --list
java algospot_java/Check.java FESTIVAL
java algospot_java/Check.java --all
```

`Main.java`는 표준 입력을 UTF-8로 읽는 기본 코드입니다. 풀이를 작성하면 검증기가 `input.txt`를 전달하고 표준 출력을 `output.txt`와 비교합니다. 줄 끝 공백과 마지막 개행만 무시하며, 숫자 오차나 다른 유효한 답은 허용하지 않습니다. 각 실행의 제한 시간은 소스 파일 실행 시간을 포함해 10초입니다. 풀이가 없는 기본 코드는 출력이 없으므로 **불일치**가 정상입니다.

공식 문제 페이지를 사용할 수 없는 4개 항목은 목록에만 남기고 전체 검사에서 제외합니다. 검증기 실행 중 생성하는 출력·오류 임시 파일은 시스템 임시 폴더에서 처리합니다.
