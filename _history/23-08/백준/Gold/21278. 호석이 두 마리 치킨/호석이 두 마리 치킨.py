N, M = map(int, input().split())
FWgraph = [[float('inf')]*(N+1) for _ in range(N+1)]

for i in range(N+1):
    for j in range(N+1):
        if i == j:
            FWgraph[i][j] = 0

for _ in range(M):
    a, b = map(int, input().split())
    FWgraph[a][b] = 1
    FWgraph[b][a] = 1

for k in range(1, N+1):
    for a in range(1, N+1):
        for b in range(1, N+1):
            FWgraph[a][b] = min(FWgraph[a][b], FWgraph[a][k]+FWgraph[k][b])

smallestTime = float('inf')
bigBld = 0
smallBld = 0


for big in range(N, 1, -1):
    for small in range(big-1, 0, -1):
        eachSum = 0

        for idx in range(1, N+1):
            if idx == big or idx == small:
                continue
            eachSum += min(FWgraph[big][idx], FWgraph[small][idx])*2

        if eachSum <= smallestTime:
            smallestTime = eachSum
            bigBld = big
            smallBld = small

print(smallBld, bigBld, smallestTime)