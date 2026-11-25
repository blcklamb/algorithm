function solution(arr)
{
    const removedArr = []
    
    arr.forEach((ele) => {
        if (removedArr[removedArr.length-1] !== ele){
            removedArr.push(ele)
        }
    })
    
    return removedArr
    
}