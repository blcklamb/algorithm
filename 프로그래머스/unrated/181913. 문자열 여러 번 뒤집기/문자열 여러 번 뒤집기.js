function solution(my_string, queries) {
    return queries.reduce((a, [s, e]) => {
        const aStr = [...a]
        return [...aStr.slice(0, s), ...aStr.slice(s, e+1).reverse(), ...aStr.slice(e+1, aStr.length)].join('')
    }, my_string)
}