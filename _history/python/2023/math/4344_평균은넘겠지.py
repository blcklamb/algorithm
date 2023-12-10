# https://www.acmicpc.net/problem/4344

TC = int(input())

for _ in range(TC):
    inputList = list(map(int, input().split()))
    studentCount = inputList[0]
    studentList = inputList[1:]
    average = sum(studentList) / studentCount

    overAverageCount = 0
    for each in studentList:
        if each > average:
            overAverageCount += 1
    answer = str(round(overAverageCount / studentCount*100, 3))
    if len(answer.split('.')[1]) < 3:
        answer += '0'*(6-len(answer.split('.')[1]))
    print('{}%'.format(answer))


'''
num = int(input())

for i in range(num):
    exam = list(map(int, input().split()))
    del exam[0]
    aver = sum(exam)/len(exam)
    count = 0
    for j in exam:
        if j > aver:
            count += 1
    print(len(exam))
    print("%.3f%%" % (count/len(exam)*100))
'''
'''
num = int(input())

for i in range(num):
    exam = list(map(int, input().split()))
    exam = exam[1:]
    aver = sum(exam)/len(exam)
    count = 0
    for j in exam:
        if j > aver:
            count += 1
    print("%.3f%%" % (count/len(exam)*100))
'''
