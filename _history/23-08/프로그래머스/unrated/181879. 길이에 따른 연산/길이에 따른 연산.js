function solution(num_list) {
    const LENGTH = num_list.length
    const INIT = LENGTH >=11 ? 0 : 1
    return num_list.reduce((a,b) => {
        return (LENGTH >= 11) ? a+b : a*b 
    }, INIT);
}