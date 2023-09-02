function solution(arr) {
    var answer = 1;
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if (arr[i][j] != arr[j][i]) {answer = 0; break;}
        }
    }
    return answer;
}