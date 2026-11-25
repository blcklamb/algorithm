function solution(n) {

    return n % 6 === 0 ? parseInt(n/6) : n % 3 === 0 ? parseInt(n/3) : n % 2 === 0 ? parseInt(n/2) : n;
}