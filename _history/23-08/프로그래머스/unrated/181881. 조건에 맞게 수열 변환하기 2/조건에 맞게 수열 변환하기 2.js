function solution(arr) {
    var answer = 0;
    let initArr = arr.slice(0)
    while (true){
        let isSame = true;
        initArr = initArr.map(ele =>{
            let nextEle = ele;
            if (ele >= 50 & ele % 2 === 0) nextEle = ele / 2;
            if (ele < 50 & ele % 2 != 0) nextEle = ele * 2 + 1;
            if (nextEle != ele) isSame = false;
            return nextEle
        })
        if (isSame) break;
        answer += 1;
    }
    return answer;
}