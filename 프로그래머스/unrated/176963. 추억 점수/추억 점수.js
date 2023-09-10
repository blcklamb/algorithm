function solution(name, yearning, photo) {
    var answer = [];
    let yearnObj = {}
    name.forEach((ele, idx) => {
        yearnObj[ele] = yearning[idx]
    })
    return photo.map((ele) => ele.reduce((a, b) => a + (yearnObj[b] ? yearnObj[b] : 0), 0));
}