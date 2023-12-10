// https://school.programmers.co.kr/learn/courses/30/lessons/120861

// 이유는 모르겠으나 switch가 잘 안됨
function solution(keyinput, board) {
  var answer = [];
  x_count = 0;
  y_count = 0;
  keyinput.forEach((ele) => {
    switch (ele) {
      case "right":
        x_count += 1;
      case "left":
        x_count -= 1;
      case "up":
        y_count += 1;
      case "down":
        y_count -= 1;
    }
    console.log(ele, x_count, y_count);
  });
  console.log(x_count, y_count);
  return answer;
}

// 정답!
function solution(keyinput, board) {
  var answer = [];
  x_count = 0;
  y_count = 0;
  x_limit = (board[0] - 1) / 2;
  y_limit = (board[1] - 1) / 2;
  keyinput.forEach((ele) => {
    if (ele === "right") {
      x_count = Math.min(x_count + 1, x_limit);
    } else if (ele === "left") {
      x_count = Math.max(x_count - 1, -x_limit);
    } else if (ele === "up") {
      y_count = Math.min(y_count + 1, y_limit);
    } else {
      y_count = Math.max(y_count - 1, -y_limit);
    }
  });

  answer = [x_count, y_count];
  return answer;
}

```
'평균 시간: 0.129ms'
'평균 메모리: 33.427MB'
'최고 시간: 0.24ms'
'최저 시간: 0.06ms'
'최고 메모리: 33.5MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.058'
'메모리 표준 편차: 10.077'

```;
