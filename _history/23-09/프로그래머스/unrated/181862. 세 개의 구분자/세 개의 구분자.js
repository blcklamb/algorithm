function solution(myStr) {
    const splited = myStr.split(/[a|b|c]/).filter(e=>e)
    return splited.length > 0 ? splited : ['EMPTY'];
}