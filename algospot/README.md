# 알고리즘 문제 해결 전략 예제 모음

[Algospot 위키의 JMBook 문제 목록](https://algospot.com/wiki/read/JMBook_%EB%AC%B8%EC%A0%9C%EB%93%A4_%EB%A7%81%ED%81%AC)과 [책 공식 연습문제 목록](https://book.algospot.com/problems.html)의 합집합을 [problems.json](./problems.json)에 정리했습니다. 중복을 합친 97개 항목 중 93개에는 공식 예제 입력과 출력이 있습니다. 장별 문제명과 링크는 다음 명령으로 볼 수 있습니다.

```sh
node algospot/check.js --list
```

각 문제 ID의 소문자 폴더에는 다음 파일이 있습니다.

- `index.js`: 문제 링크와 표준 입력을 읽는 기본 코드. 여기에 풀이를 작성합니다.
- `input.txt`: 문제 페이지의 예제 입력.
- `output.txt`: 문제 페이지의 예제 출력. 풀이 소스가 아닙니다.

저장소 루트에서 예제를 검사합니다.

```sh
node algospot/check.js FESTIVAL
node algospot/check.js --all
```

검증기는 `input.txt`를 `index.js`의 표준 입력으로 전달하고 표준 출력을 `output.txt`와 비교합니다. 줄 끝 공백과 마지막 개행만 무시하며 숫자 오차나 다른 유효한 답은 허용하지 않습니다. 각 실행의 제한 시간은 10초입니다. 아직 풀이를 작성하지 않은 기본 코드는 출력이 없으므로 **불일치**가 정상입니다. 전체 검사에서는 제외된 문제의 수도 요약합니다.

공식 목록의 `HANOI4B` 링크는 HTTP 404를 반환합니다. 공식 문제 페이지가 준비 중인 `마일리지로 여행하기`, `도난당한 조각상`, `국책 사업`과 함께 목록에만 기록했습니다. 위키의 오래된 UVa 링크는 [UVa 10385 Duathlon 공식 문제 PDF](https://onlinejudge.org/external/103/10385.pdf)로 바로잡았고, 예제는 `uva10385` 폴더에 넣었습니다.

[Java 버전](../algospot_java/README.md)도 같은 예제 입력과 출력을 사용합니다.
