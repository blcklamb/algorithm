function solution(participant, completion) {
  var answer = "";
  let partObj = {};
  participant.forEach((val) => {
    if (val in partObj) {
      partObj[val] += 1;
    } else {
      partObj[val] = 1;
    }
  });
  completion.forEach((val) => {
    if (val in partObj) {
      partObj[val] -= 1;
    }
  });
  for (const property in partObj) {
    if (partObj[property] > 0) {
      answer += property;
      break;
    }
  }

  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
