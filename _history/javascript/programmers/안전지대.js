function solution(board) {
  const N = board.length;
  const dangerChecked = Array(N).fill(Array(N).fill(0));
  const dr = [0, -1, -1, 0, 1, 1, 1, 0, -1];
  const dc = [0, 0, 1, 1, 1, 0, -1, -1, -1];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (board[r][c] == 1) {
        Array.from({ length: 9 }, (x, i) => i).forEach((ele) => {
          let nextDr = r + dr[ele];
          let nextDc = c + dc[ele];
          if (0 <= nextDr && nextDr < N && 0 <= nextDc && nextDc < N) {
            dangerChecked[nextDr][nextDc] += 1;
          }
          console.log(nextDr, nextDc, dangerChecked);
        });
        for (let i = 0; i < 9; i++) {
          let nextDr = r + dr[i];
          let nextDc = c + dc[i];
          if (0 <= nextDr && nextDr < N && 0 <= nextDc && nextDc < N) {
            dangerChecked[nextDr][nextDc] += 1;
          }
        }
      }
    }
  }
  console.log(dangerChecked);
}

function solution(board) {
  const N = board.length;
  const dangerChecked = Array.from({ length: N }, () => Array(N).fill(0));
  const di = [0, -1, -1, 0, 1, 1, 1, 0, -1];
  const dj = [0, 0, 1, 1, 1, 0, -1, -1, -1];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 1) {
        Array.from({ length: 9 }, (_, idx) => idx).forEach((dIdx) => {
          let [newI, newJ] = [i + di[dIdx], j + dj[dIdx]];
          if ((0 <= newI) & (newI < N) & (0 <= newJ) & (newJ < N)) {
            dangerChecked[newI][newJ] = 1;
          }
        });
      }
    }
  }
  const safeAreaCount = dangerChecked.reduce(
    (a, b) => a + b.filter((cell) => cell === 0).length,
    0
  );
  return safeAreaCount;
}

("평균 시간: 0.349ms");
("평균 메모리: 33.529MB");
("최고 시간: 0.69ms");
("최저 시간: 0.15ms");
("최고 메모리: 33.6MB");
("최저 메모리: 33.5MB");
("시간 표준 편차: 0.163");
("메모리 표준 편차: 8.961");

function solution(board) {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;

  board.forEach((row, y, self) =>
    row.forEach((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
        ? false
        : safezone++;
    })
  );

  return safezone;
}
("평균 시간: 0.219ms");
("평균 메모리: 33.414MB");
("최고 시간: 0.35ms");
("최저 시간: 0.09ms");
("최고 메모리: 33.5MB");
("최저 메모리: 33.3MB");
("시간 표준 편차: 0.074");
("메모리 표준 편차: 8.961");
