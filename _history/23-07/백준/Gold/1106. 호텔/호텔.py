
def solution():
    C, N = map(int, input().split())

    DP = [float('inf') for _ in range(1101)]

    for _ in range(N):
        cost, customer = map(int, input().split())
        DP[customer] = min(DP[customer], cost)

    for i in range(1, len(DP)):
        for j in range(i):
            DP[i] = min(DP[i], DP[j] + DP[i-j])

    return min(DP[C:])


print(solution())