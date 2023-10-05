n, d, k, c = map(int, input().split())

sushi = []
noServiceIdx = []
for i in range(n):
    sushiNum = int(input())
    if sushiNum != c:
        noServiceIdx.append(i)
    sushi.append(sushiNum)

noServiceIdx.reverse()

startIdx = n if len(noServiceIdx) == 0 else noServiceIdx[-1]
result = 1

while len(noServiceIdx) > 0:
    startIdx = noServiceIdx.pop()
    
    eaten = sushi[startIdx: startIdx+k]
    if startIdx + k > n:
        for i in range(0, startIdx + k - n):
            eaten.append(sushi[i])

    totalNum = len(set(eaten))

    if c not in eaten:
        totalNum += 1
    result = max(result, totalNum)

print(result)