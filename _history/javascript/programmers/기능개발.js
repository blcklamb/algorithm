// https://school.programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
  var answer = [];
  var finishedDeploy = Array(progresses.length);

  function dayOver(input_progresses, input_speeds) {
    input_speeds.forEach((val, idx) => {
      if (input_progresses[idx] < 100) {
        input_progresses[idx] += val;
      }
    });
  }
  function checkDeploy(input_progresses) {
    let deployableFunc = [];
    for (let i = 0; i < input_progresses.length; i++) {
      if (finishedDeploy[i] == 1) {
        continue;
      }
      if (input_progresses[i] >= 100) {
        deployableFunc.push(input_progresses[i]);
        finishedDeploy[i] = 1;
      } else {
        break;
      }
    }
    return deployableFunc.length;
  }
  while (answer.reduce((a, b) => a + b, 0) < progresses.length) {
    dayOver(progresses, speeds);
    const todayDeploy = checkDeploy(progresses);
    if (todayDeploy > 0) {
      answer.push(todayDeploy);
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
