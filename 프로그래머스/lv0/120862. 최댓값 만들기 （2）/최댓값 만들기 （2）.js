function solution(numbers) {
    if (numbers.length === 2) return numbers[0]*numbers[1]
    var answer = 0;
    for (let i = 0; i < numbers.length-1; i++){
        for (let j = i+1; j < numbers.length; j++){
            answer = Math.max(answer, numbers[i]*numbers[j])
        }
    }
    return answer;
}