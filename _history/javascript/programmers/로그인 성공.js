// https://school.programmers.co.kr/learn/courses/30/lessons/120883?language=javascript

function solution(id_pw, db) {
  var answer = "fail";
  db.forEach((eachInfo) => {
    let [id, pw] = eachInfo;
    if (id_pw[0] == id) {
      answer = "wrong pw";
      if (id_pw[1] == pw) {
        answer = "login";
      }
      return false;
    }
  });
  return answer;
}
```
'평균 시간: 0.082ms'
'평균 메모리: 33.425MB'
'최고 시간: 0.1ms'
'최저 시간: 0.06ms'
'최고 메모리: 33.5MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.036'
'메모리 표준 편차: 11.814'
```;

function solution(id_pw, db) {
  var answer = "fail";
  db.forEach((eachInfo) => {
    let [id, pw] = eachInfo;
    if (id_pw[0] == id) {
      answer = id_pw[1] == pw ? "login" : "wrong pw";
      return false;
    }
  });
  return answer;
}

("평균 시간: 0.060ms");
("평균 메모리: 33.413MB");
("최고 시간: 0.06ms");
("최저 시간: 0.06ms");
("최고 메모리: 33.5MB");
("최저 메모리: 33.4MB");
("시간 표준 편차: 0.021");
("메모리 표준 편차: 11.844");
