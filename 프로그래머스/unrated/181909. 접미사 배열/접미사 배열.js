function solution(my_string) {
    return Array
        .from({length: my_string.length}, (_, idx) => idx)
        .map((ele) => my_string.slice(ele))
        .sort();
}