def solution():
    N, M = map(int, input().split())
    roomInfo = [[0 for _ in range(M+1)]]
    for _ in range(N):
        row = list(map(int, input().split()))
        roomInfo.append([0] + row)

    DP = [[0 for _ in range(M+1)] for _ in range(N + 1)]

    for r in range(1, N + 1):
        for c in range(1, M + 1):
            DP[r][c] = max(DP[r][c-1], DP[r-1][c],
                           DP[r-1][c-1]) + roomInfo[r][c]

    return DP[N][M]


print(solution())