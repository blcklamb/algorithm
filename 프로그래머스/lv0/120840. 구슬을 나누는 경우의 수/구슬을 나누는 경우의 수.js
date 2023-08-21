function solution(balls, share) {
    var answer = 1;
    let count = 1;
    while (count <= share){
        answer *= balls--
        answer /= count++
    }
    return answer;
}