function solution(array) {

    const numCount = Array(1000).fill(0)
    
    let maxCount = 0
    for (const ele of array) {
        numCount[ele] += 1
        maxCount = Math.max(maxCount, numCount[ele])
    }
    
    let maxNumArray = []
    
    numCount.forEach((ele, idx) => {
        if (ele === maxCount){
            maxNumArray.push(idx)
        }
    })
    
    
    if (maxNumArray.length > 1){
        return -1
    }
    return maxNumArray[0]
}