function solution(numLog) {
    return numLog.map((ele, idx) => {
        if (idx === numLog.length-1) return
        const diff = numLog[idx+1] - ele
        if (diff === 1) return 'w'
        if (diff === -1) return 's'
        if (diff === 10) return 'd'
        if (diff === -10) return 'a'
    }).join('');
}