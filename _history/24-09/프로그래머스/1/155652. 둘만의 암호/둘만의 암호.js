function solution(s, skip, index) {

    let possibleUnicodeArr = Array(26).fill(97).map((x, index) => x + index)
    
    skip.split('').forEach(skipStr => {
        const skipSkrUnicode = skipStr.charCodeAt(0)
        possibleUnicodeArr = possibleUnicodeArr.filter(ele => ele !== skipSkrUnicode)
    })
    
    const answer = s.split('').map(originStr => {
        const originSkrUnicode = originStr.charCodeAt(0)
        const startIndex = possibleUnicodeArr.findIndex(ele => ele === originSkrUnicode)
        const targetSkrUnicode = possibleUnicodeArr[(startIndex + index)%(26-skip.length)]
        return String.fromCharCode(targetSkrUnicode)
        
    }).join('')
    return answer;
}