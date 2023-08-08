function solution(num_list) {
    const odd_num = num_list.filter(c => c % 2 === 1).join('')
    const even_num = num_list.filter(c => c % 2 === 0).join('')
    return (+odd_num) + (+even_num);
}