function solution(quiz) {
    return quiz.map(ele => {
        const [ope, result] = ele.split(' = ')
        return (eval(ope) === +result) ? 'O' : 'X'
    })
}
