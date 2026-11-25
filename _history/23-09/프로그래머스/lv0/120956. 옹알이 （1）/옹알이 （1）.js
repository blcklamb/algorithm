function solution(babbling) {
    return babbling.filter(ele => {
        const splited = ele.split(/aya|ye|woo|ma/g).filter(e => e)
        const matched = ele.match(/aya|ye|woo|ma/g)
        return !splited.length | matched
    }).length;
}