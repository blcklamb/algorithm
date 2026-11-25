function solution(money) {
    const AMERICANO = 5500
    return [~~(money / AMERICANO), money % AMERICANO];
}