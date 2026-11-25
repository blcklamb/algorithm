function solution(name, yearning, photo) {
  var answer = [];
  let yearnObj = {};
  name.forEach((ele, idx) => {
    yearnObj[ele] = yearning[idx];
  });
  return photo.map((ele) =>
    ele.reduce((a, b) => a + (yearnObj[b] ? yearnObj[b] : 0), 0)
  );
}

// 우수 코드
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}
