/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

var getHashObjFromString = function(word) {
    const obj = {}
    word.split('').forEach(ele => {
        if (obj[ele]){
            obj[ele] += 1
        } else {
            obj[ele] = 1
        }
    })
    return obj
}

var isArraySame = function(array1, array2, isNum=true) {
    const [array1Len, array2Len] = [array1.length, array2.length]
    if (array1Len !== array2Len) return false
    
    if (isNum){
        array1.sort((a, b) => a - b)
        array2.sort((a, b) => a - b)
    } else {
        array1.sort()
        array2.sort()
    }
    
    for (let i = 0; i < array1Len; i++){
        if (array1[i] !== array2[i]) return false
    }
    return true
}

var closeStrings = function(word1, word2) {
    const obj1 = getHashObjFromString(word1)
    const obj2 = getHashObjFromString(word2)
    
    const [obj1Key, obj1Val] = [Object.keys(obj1), Object.values(obj1)]
    const [obj2Key, obj2Val] = [Object.keys(obj2), Object.values(obj2)]

    if (!isArraySame(obj1Key, obj2Key, false)) return false
    if (!isArraySame(obj1Val, obj2Val)) return false
    return true
};