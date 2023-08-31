function solution(s) {
    let answer = '';
    const charObj = {};
    [...s].forEach(ele => {
        if (charObj[ele]) charObj[ele] += 1
        else charObj[ele] = 1
    });
    for (const [key, value] of Object.entries(charObj)){
        if (value === 1) answer += key
    }
    return [...answer].sort().join('');
}