/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const VOWEL = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const vowelList = []
    const sList = s.split("")
    sList.forEach((ele, idx) => {
        if (VOWEL.includes(ele)){
            sList[idx] = ""
            vowelList.push(ele)
        }
    })
    sList.forEach((ele, idx) => {
        if (ele === ""){
            sList[idx] = vowelList.pop()
        }
    })
    return sList.join("")
};