function solution(num_list) {
    return Math.max(...num_list.reduce((a, b, idx) =>{
        return idx % 2 === 0 ? [a[0] + b, a[1]] : [a[0], a[1] + b]
    }, [0, 0]));
}