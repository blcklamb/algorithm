import math
N, M, L = map(int, input().split())
cakes = [0 for _ in range(M+1)]
cakes[M] = L

for i in range(M):
    cakes[i] = int(input())

def sliceCake(stPiece, cakes, cutCount):
    prev = 0
    for cake in cakes:
        if cake - prev >= stPiece:
            cutCount -= 1
            prev = cake
    return cutCount < 0 

for _ in range(N):
    answer = 0
    cutCount = int(input())
    start = 0
    end = L
    while start <= end:
        mid = math.floor((start + end) / 2)
        if sliceCake(mid, cakes, cutCount):
            start = mid + 1
            answer = max(answer, mid)
        else:
            end = mid - 1
    print(answer)