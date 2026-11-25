function solution(sides) {
    sides.sort((a,b) => a-b);
    const [a, b, c] = sides;
    return c < a + b ? 1 : 2;
}