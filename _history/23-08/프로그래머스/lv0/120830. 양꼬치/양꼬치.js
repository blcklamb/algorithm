function solution(n, k) {
    const RAMB_SCEW_PRICE = 12_000
    const DRINK_PRICE = 2_000
    return RAMB_SCEW_PRICE * n + DRINK_PRICE*(k-Math.floor(n/10));
}