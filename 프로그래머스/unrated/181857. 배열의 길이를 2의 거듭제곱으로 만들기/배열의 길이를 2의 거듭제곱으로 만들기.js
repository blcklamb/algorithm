function solution(arr) {
    while (arr.length.toString(2).split(1).length-1 != 1){
        arr.push(0)
    }
    return arr;
}