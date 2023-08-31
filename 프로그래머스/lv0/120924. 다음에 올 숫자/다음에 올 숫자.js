function solution(common) {
    const [a1, a2, a3] = common;
    return ((a2-a1) === (a3-a2)) 
        ? 
        common[common.length-1] + (a2-a1) : a1*((a2/a1)**(common.length))
}