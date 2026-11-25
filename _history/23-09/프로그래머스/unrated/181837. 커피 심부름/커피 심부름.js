function solution(order) {
    const [PRICE_AM, PRICE_CL] = [4500, 5000]
    const [americano, cafelatte] = order.reduce((a, b) => {
        if (b.includes('americano')) a[0] += 1
        if (b.includes('cafelatte')) a[1] += 1
        if (b.includes('anything')) a[0] += 1
        return a
    }, [0, 0]);
    return americano * PRICE_AM + cafelatte * PRICE_CL
}