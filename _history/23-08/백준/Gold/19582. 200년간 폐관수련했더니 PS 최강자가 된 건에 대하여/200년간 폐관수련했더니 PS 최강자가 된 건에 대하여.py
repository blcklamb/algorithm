import sys
input = sys.stdin.readline
N = int(input())

answer = 'Kkeo-eok'

contest = []
perfectSum = [0]

for idx in range(N):
    x, p = map(int, input().split())
    contest.append([x, p])

    perfectSum.append(p + perfectSum[idx])

firstFailedContest = -1

for (idx, accum) in enumerate(perfectSum[:-1]):
    if accum > contest[idx][0]:
        firstFailedContest = idx
        break


secondFailed = False
if firstFailedContest != -1:
    for (idx, accum) in enumerate(perfectSum[:-1]):
        if idx > firstFailedContest:
            excluded = accum - contest[firstFailedContest][1]
            if excluded > contest[idx][0]:
                secondFailed = True
                break


if secondFailed:
    maxIdx, maxP = -1, float('-inf')
    for idx in range(firstFailedContest):
        x, p = contest[idx]
        if p > maxP:
            maxIdx = idx
            maxP = p
    for (idx, accum) in enumerate(perfectSum[:-1]):
        if idx >= maxIdx:
            excluded = accum - contest[maxIdx][1]
            if excluded > contest[idx][0]:
                answer = 'Zzz'
                break


print(answer)