function solution(num_list) {
    var answer = [];
    const LEN = num_list.length
    const LAST = num_list[LEN-1]
    const SECOND_LAST = num_list[LEN-2]
    if (LAST > SECOND_LAST) {
        num_list.push(LAST - SECOND_LAST)
    } else {
        num_list.push(LAST * 2)
    }
    return num_list;
}