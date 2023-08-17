import sys
input = sys.stdin.readline

def solution2():
    N, M, B = map(int, input().split())

    heightList = [0 for _ in range(257)]
    minHeight = 256
    maxHeight = 0
    for _ in range(N):
        blockRow = list(map(int, input().split()))
        for cell in blockRow:
            heightList[cell] += 1
        minHeight = min(minHeight, min(blockRow))
        maxHeight = max(maxHeight, max(blockRow))

    targetHeight = -1
    targetTime = float('inf')

    for height in range(minHeight, maxHeight+1):
        time = 0
        inventory = B
        for i in range(minHeight, maxHeight+1):
            if i < height:
                time += (height - i) * heightList[i]
                inventory -= (height - i) * heightList[i]
            else:
                time += 2 * (i - height) * heightList[i]
                inventory += (i - height) * heightList[i]
        if inventory >= 0:
            if targetTime >= time:
                targetTime = time
                targetHeight = height

    return (targetTime, targetHeight)


print(*solution2())
