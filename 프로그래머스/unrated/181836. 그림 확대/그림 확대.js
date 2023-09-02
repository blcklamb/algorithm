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
        for (let i = 0; i < k; i++){
            a.push([...b].map(ele => ele.repeat(k)).join(''))
        }
        return a
    },[]);
}