function solution(num_list) {
    return num_list.reduce((a, b) => {
        let count = 0;
        while (b > 1){
            b = b % 2 === 0 ? b / 2 : (b-1)/2
            count += 1
        }
        return a + count
    }, 0)
}