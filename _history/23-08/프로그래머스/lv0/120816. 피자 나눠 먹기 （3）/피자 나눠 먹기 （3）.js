function solution(slice, n) {
    let totalPizzaSlices = slice
    while (true){
        if (totalPizzaSlices/n >= 1){
            break
        }
        totalPizzaSlices += slice
    }
    return totalPizzaSlices / slice;
}