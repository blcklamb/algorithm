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