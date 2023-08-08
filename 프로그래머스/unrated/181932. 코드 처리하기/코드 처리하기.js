function solution(code) {
    let ret = '';
    let mode = 0;
    [...code].forEach((ele, idx) => {
        if (!mode){
            if (ele === '1'){
                mode = 1
            } else {
                ret += (idx % 2 === 0) ? ele : ''
            }
        } else {
            if (ele === '1'){
                mode = 0
            } else {
                ret += (idx % 2 != 0 ) ? ele : ''
            }
        }
    })
    return ret.length != 0 ? ret : 'EMPTY';
}