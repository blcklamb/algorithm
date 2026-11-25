function solution(price) {
    let answer = price
    const priceAndDiscount = [[100_000, 5], [300_000, 10], [500_000, 20]]

    for (const discountInfo of priceAndDiscount){
        const [range, percentage] = discountInfo
        if (price < range) break
        answer = parseInt(price * (100 - percentage) * 0.01)
    }
    return answer
}