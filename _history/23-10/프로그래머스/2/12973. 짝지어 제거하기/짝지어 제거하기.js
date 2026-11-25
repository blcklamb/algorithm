function solution(s){

    let left = []
    let right = []
    for (let i = s.length -1 ; i >= 0; i--){
        if (s[i] === s[i-1]) {
            i--; 
            continue;
        }
        right.push(s[i])
    }

    while(right[0]){
        if (left[left.length - 1] === right[right.length - 1]){
            left.pop()
            right.pop()
            continue
        }
        left.push(right.pop())
    }

    return left[0] ? 0 : 1;
}