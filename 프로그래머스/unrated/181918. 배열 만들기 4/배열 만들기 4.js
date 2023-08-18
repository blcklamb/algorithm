function solution(arr) {
    var stk = [];
    let i = 0
    while (true){
        if (i >= arr.length) break
        if (stk.length != 0 && stk[stk.length -1] >= arr[i]){
            stk.pop()
            continue;
        }
        stk.push(arr[i]);
        i++;
    }
    return stk;
}