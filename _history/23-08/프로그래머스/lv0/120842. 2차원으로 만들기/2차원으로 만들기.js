function solution(num_list, n) {
    var answer = Array.from({length: num_list.length/n}, () => []);
    num_list.forEach((ele, idx) => answer[parseInt(idx/n)].push(ele))
    return answer;
}