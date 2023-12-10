import sys

response = sys.stdin.readline().rstrip()

bracketCount = 0
for pointer in response:
    if pointer == '(': bracketCount += 1
    if pointer == ')': break

print(bracketCount)

def prepareDeleteIndexList(bracket:int):
    indexList = []
    for i in range(1, bracket+1):
        indexList.append([i])
        previousCount = len(indexList) -1
        print('i', i, previousCount, indexList)
        print(indexList[:previousCount])
        for j in indexList[:previousCount]:
            print('j', j, )
            # indexList.append()
    return indexList

print(prepareDeleteIndexList(2))

print(prepareDeleteIndexList(4))

# for _ in range(bracketCount**2-1):
