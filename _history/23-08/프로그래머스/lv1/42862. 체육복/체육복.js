function solution(n, lost, reserve) {
    let clothesList = new Array(n+1).fill(1)
    for (let i = 1; i <= n; i++){
        if (reserve.includes(i)){
            clothesList[i] += lost.includes(i) ? 0 : 1
        } else {
            if (lost.includes(i)){
                if (clothesList[i-1] === 2) {
                    clothesList[i-1] -= 1
                } else if (reserve.includes(i+1)){
                    clothesList[i+1] -= 1
                } else {
                    clothesList[i] -= 1
                }
            }
        }
    }
    return clothesList.slice(1).filter((ele) => ele >0).length;
}