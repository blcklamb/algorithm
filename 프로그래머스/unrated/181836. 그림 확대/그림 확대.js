function solution(picture, k) {
  // var answer = [];
  // picture.forEach(row => {
  //     for (let i = 0; i < k; i++){
  //         let basicRow = '';
  //         [...row].forEach(cell => {
  //             basicRow += cell.repeat(k)
  //         })
  //         answer.push(basicRow)
  //     }
  // })
  // return answer;
  return picture.reduce((a, b) => {
    for (let i = 0; i < k; i++) {
      a.push([...b].map((ele) => ele.repeat(k)).join(""));
    }
    return a;
  }, []);
}

// 결과
```
'평균 시간: 0.341ms'
'평균 메모리: 33.604MB'
'최고 시간: 0.95ms'
'최저 시간: 0.08ms'
'최고 메모리: 34.3MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.315'
'메모리 표준 편차: 7.068'
```;
