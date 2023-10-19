r, c, k = map(int, input().split())
array = []
for _ in range(3):
    array.append(list(map(int, input().split())))
# R/C 연산 판별

# R 연산
    # 숫자 세기
    # 정렬
    # 배열에 넣기(0 붙이기)
    # 100개 넘으면 버리기

def countNum(arr):
    countedArr = []
    for i in range(min(arr), max(arr)+1):
        if i == 0: continue
        if i in arr:
            countedArr.append([i, arr.count(i)])
    return countedArr

def sortArr(arr):
    sortedArr = sorted(arr, key=lambda x:[x[1], x[0]])
    flatedArr = []
    for ele in sortedArr:
        flatedArr.extend(ele)
    return flatedArr

def makeNewArr(arr2D):
    maxLen = 0
    for ele in arr2D:
        maxLen = max(len(ele), maxLen)
    maxLen = min(maxLen, 100)
    for row in arr2D:
        while len(row)>maxLen:
            row.pop()
        while len(row)<maxLen:
            row.append(0)
    return arr2D

time = 0

while True:
    if r-1 < len(array) and c-1 < len(array[0]):
        if array[r-1][c-1] == k:
            break
    if time > 100:
        time = -1
        break
    if len(array) >= len(array[0]):
        newArr = []
        for row in array:
            newArr.append(sortArr(countNum(row)))
        array = makeNewArr(newArr).copy()
    else:
        tranformed = []
        for col in range(len(array[0])):
            colArr = []
            for row in range(len(array)):
                colArr.append(array[row][col])
            tranformed.append(colArr)
        newArr = []
        for row in tranformed:
            newArr.append(sortArr(countNum(row)))
        tranformed = makeNewArr(newArr).copy()
        returned = []
        for col in range(len(tranformed[0])):
            returnedRow = []
            for row in range(len(tranformed)):
                returnedRow.append(tranformed[row][col])
            returned.append(returnedRow)
        array = returned.copy()

    time += 1

print(time)