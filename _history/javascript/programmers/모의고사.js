//https://school.programmers.co.kr/learn/courses/30/lessons/42840#
function solution(answers) {
  var answer = [];
  function duplicate(arr, val) {
    let duplicated = [];
    let i = 0;
    while (i < val) {
      duplicated = duplicated.concat(arr);
      i++;
    }
    return duplicated;
  }
  const [iter01, iter02, iter03] = [5, 8, 10].map((val) => {
    return Math.ceil(answers.length / val);
  });
  const answer01 = duplicate([1, 2, 3, 4, 5], iter01);
  const answer02 = duplicate([2, 1, 2, 3, 2, 4, 2, 5], iter02);
  const answer03 = duplicate([3, 3, 1, 1, 2, 2, 4, 4, 5, 5], iter03);
  let checked = [[0], answer01, answer02, answer02].map((supo) => {
    let howMany = 0;
    answers.forEach((ans, idx) => {
      if (ans == supo[idx]) {
        howMany++;
      }
    });
    return howMany;
  });

  const maxNum = Math.max(...checked);
  if (maxNum == 0) {
    return [1, 2, 3];
  }
  let idx = checked.indexOf(maxNum);
  while (idx !== -1) {
    answer.push(idx);
    idx = checked.indexOf(maxNum, idx + 1);
  }
  return answer;
}

function solution(answers) {
  var answer = [];
  function duplicate(arr, val) {
    let duplicated = [];
    let i = 0;
    while (i < val) {
      duplicated = duplicated.concat(arr);
      i++;
    }
    return duplicated;
  }
  const [iter01, iter02, iter03] = [5, 8, 10].map((val) => {
    return Math.ceil(answers.length / val);
  });
  const answer01 = duplicate([1, 2, 3, 4, 5], iter01);
  const answer02 = duplicate([2, 1, 2, 3, 2, 4, 2, 5], iter02);
  const answer03 = duplicate([3, 3, 1, 1, 2, 2, 4, 4, 5, 5], iter03);
  let count = [0, 0, 0];
  answers.forEach((val, idx) => {
    if (val === answer01[idx]) {
      count[0]++;
    }
    if (val === answer02[idx]) {
      count[1]++;
    }
    if (val === answer03[idx]) {
      count[2]++;
    }
  });

  count.forEach((val, idx) => {
    if (val === Math.max(...count)) {
      answer.push(idx + 1);
    }
  });
  return answer;
}
