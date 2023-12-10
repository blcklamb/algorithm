#전에 손도 못 댔다가 다시 보니 풀려서 남긴 코드

# 해당 단어를 같은 문자끼리 쪼갰을 때 그룹의 갯수를 반환
def howManyGroup(str):
    count = 0
    for i in range(len(str)-1):
    	# 단어의 처음부터 돌면서 다음 문자열과 동일한지 구별, 다르면 그룹 추가
        if str[i] != str[i+1]:
            count += 1
    return count + 1

# 그룹 단어가 맞는지 boolean으로 반환
def isGroup(str):
    beforeSorted = howManyGroup(str)
    afterSorted = howManyGroup(sorted(str))
    if beforeSorted == afterSorted: return True
    else: return False

howManyGroupStr = 0
# 입력 갯수를 입력받고, 그 횟수만큼 단어를 입력 받아 총 그룹 단어의 갯수 증가시키기
checkWordCount = int(input())
for i in range(checkWordCount):
    print(i)
    tempA = 0
    if isGroup(input()):
        howManyGroupStr+=1

print(tempA)

print(howManyGroupStr)


# 입력 때마다 무언가를 출력해야할 때



# 입력 다 받은 다음 결과 하나 출력해야할 떄

tempA = []
tempNum = 0

for A in [0, 1, 2]:
    tempNum += A
    tempA.append(tempNum)

print(tempA)