function solution(num_list, n) {
    const sliced = num_list.splice(n)
    return sliced.concat(num_list);
}