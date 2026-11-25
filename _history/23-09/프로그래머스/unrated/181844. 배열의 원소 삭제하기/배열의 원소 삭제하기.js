function solution(arr, delete_list) {
    delete_list.forEach(a => {
        const idx = arr.indexOf(a)
        if (idx !== -1)  arr.splice(idx, 1)
    })
    return arr;
}