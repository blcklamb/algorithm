N, M = map(int, input().split())

roomInfo = []
for _ in range(N):
    row = list(map(int, input().split()))
    roomInfo.append(row)

DP = [[0 for _ in range(M)] for _ in range(N)]

for r in range(N):
    for c in range(M):

        left = DP[r][c-1] if c - 1 >= 0 else 0
        upper = DP[r-1][c] if r - 1 >= 0 else 0
        diagonal = DP[r-1][c-1] if c - 1 >= 0 and r - 1 >= 0 else 0
        DP[r][c] = max(left, upper, diagonal) + roomInfo[r][c]

print(DP[N-1][M-1])