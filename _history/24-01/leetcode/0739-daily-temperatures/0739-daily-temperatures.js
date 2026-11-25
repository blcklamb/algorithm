/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const answer = Array(temperatures.length).fill(0)
    const stack = []
    for (let i = temperatures.length - 1; i >= 0; i--){
        while (!!stack.length && temperatures[i] >= temperatures[stack.at(-1)]){
            stack.pop()
        }
        
        if (!stack.length){
            answer[i] = 0
        } else {
            answer[i] = stack.at(-1) - i
        }
        
        stack.push(i)
    }
    return answer
};
