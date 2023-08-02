N = int(input())
K = int(input())
sensorList = sorted(list(map(int, input().split())))

gapList = []
for idx in range(1, N):
    gapList.append(sensorList[idx] - sensorList[idx-1])

if K >= N:
    print(0)
else:
    print(sum(sorted(gapList, reverse=True)[(K-1):]))