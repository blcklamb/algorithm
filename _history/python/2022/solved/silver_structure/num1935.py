import sys
operandCount = int(sys.stdin.readline())
calculateList = sys.stdin.readline().rstrip()

operandList = []
for _ in range(operandCount):
    operandList.append(int(sys.stdin.readline()))

resultStack = []
operatorList = ['+', '-', '/', '*']

def calculate(a, b, operator):
    if operator == '+':
        return a + b
    if operator == '-':
        return a - b
    if operator == '/':
        return a/b
    if operator == '*':
        return a*b

for data in calculateList:
    if data not in operatorList:
        resultStack.append(operandList[ord(data)-65])
    else:
        secondNum = resultStack.pop()
        firstNum = resultStack.pop()
        result = calculate(firstNum, secondNum, data)
        resultStack.append(result)

print(format(resultStack[0], ".2f"))