//https://school.programmers.co.kr/learn/courses/30/lessons/49189
function solution(n, edge) {
  var answer = 0;
  let graphInfo = new Array(n).fill().map((_) => []);

  for (const info of edge) {
    graphInfo[info[0] - 1].push(info[1] - 1);
    graphInfo[info[1] - 1].push(info[0] - 1);
  }
  const visit = [1];
  const queue = [0];

  while (queue.length) {
    let current = queue.shift();

    for (const next of graphInfo[current]) {
      if (!visit[next]) {
        visit[next] = visit[current] + 1;
        queue.push(next);
      }
    }
  }
  answer = visit.filter((val) => {
    return val == Math.max(...visit);
  }).length;

  return answer;
}
