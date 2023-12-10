# 아... 메모리 초과
'''
import sys
input = sys.stdin.readline

numInteger = int(input())
numList = list(map(int, input().strip().split()))

maxNum = max(numList)
minNum = min(numList)

if minNum < 0:
    countList = [0 for _ in range(minNum, maxNum+1)]
else:
    countList = [0 for _ in range(maxNum+1)]
for i in numList:
    if minNum<0:
        i += -(minNum)
    countList[i] += 1

# answer = []
for i in numList:
    count = 0
    if minNum<0:
        i += -(minNum)
    checkList = countList[:i]
    for j in checkList:
        if j > 0:
            count += 1
    print(count, end=' ')
    # answer.append(count)

# print(*answer)

'''
# https://www.acmicpc.net/problem/18870
# 아... 시간 초과
import sys
input = sys.stdin.readline

numInteger = int(input())
numDic = {}

numList = list(map(int, input().strip().split()))
numSet = set(numList)

for num in numSet:
    numDic[num] = 1

countDic = {}

for num in numList:
    try:
        print(countDic[num], end=' ')
    except:
        count = 0
        for key in numDic.keys():
            if num == key:
                continue
            if num > key:
                count += 1
        countDic[num] = count
        print(count, end=' ')
