function solution(code) {
    let ret = '';
    let mode = 0;
    [...code].forEach((ele, idx) => {
        if (+ele){
            mode = Math.abs(mode - 1)
            return
        } 
        if (!mode) ret += (idx % 2 === 0) ? ele : ''
        if (mode) ret += (idx % 2 != 0 ) ? ele : ''
    })
    return ret.length != 0 ? ret : 'EMPTY';
}