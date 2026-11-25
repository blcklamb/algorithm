function solution(numbers) {
    const replaceToNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    replaceToNum.forEach((numString, num) => {
        numbers = numbers.replaceAll(numString, num)
    })
    
    return Number(numbers);
}