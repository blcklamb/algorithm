function solution(numlist, n) {
    const sortedList = numlist.map((ele) => ele - n).sort((a, b) => {
        const A = Math.abs(a)
        const B = Math.abs(b)
        return (A < B) ?  -1 : (A > B) ?  1 : ( a < 0 ) ?  1 :  -1
    })
    return sortedList.map((ele) => ele + n);
}