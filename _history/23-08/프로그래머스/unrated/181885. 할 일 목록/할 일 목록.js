function solution(todo_list, finished) {
    return todo_list.filter((ele, idx) => !finished[idx]);
}