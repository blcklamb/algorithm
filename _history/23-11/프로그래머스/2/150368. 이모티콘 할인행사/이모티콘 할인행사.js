function permutation(arr, selectedNum) {
    const result = []
    if (selectedNum === 1) return arr.map(ele => [ele])
    
    arr.forEach((ele, idx) => {
        const permutated_arr = permutation(arr, selectedNum - 1)
        const add_fix = permutated_arr.map(pa_ele => [ele, ... pa_ele])
        result.push(...add_fix)
    })
    
    return result
}

function solution(users, emoticons) {
    var answer = [0, 0];
    const max_discount = Math.ceil(users.reduce((prev, curr) => {
        const [discount, ] = curr;
        return Math.max(discount, prev)
    }, 0) * 0.1 )
    
    const possible_discount = Array.from({length: max_discount}, (ele, idx) => (max_discount-idx) * 10)
    
    const pd_emoticon = permutation(possible_discount, emoticons.length)
    
    pd_emoticon.forEach(discount => {
        const this_answer = [0, 0]
        users.forEach(([ratio, limit_price]) => {
            let emoticon_price = 0
            emoticons.forEach((emoticon, idx) => {
                if (discount[idx] >= ratio) {
                    
                    emoticon_price += emoticon * (100 - discount[idx]) * 0.01
                    
                }
            })
            if (emoticon_price >= limit_price){
                this_answer[0] += 1
            } else {
                this_answer[1] += emoticon_price
            }
        })
        if (answer[0] < this_answer[0]){
            answer = this_answer
        } else if (answer[0] === this_answer[0]){
            if (answer[1] < this_answer[1]){
                answer = this_answer
            }
        }
    })
    
    
    
    return answer;
}