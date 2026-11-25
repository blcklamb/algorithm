from collections import deque
N = int(input())
balloon = list(map(int, input().split()))

balloonDeq = deque([[idx+1, count] for (idx, count) in enumerate(balloon)])
answer = []

while len(balloonDeq) > 0:
    popped = balloonDeq.popleft()
    answer.append(popped[0])
    if popped[1] >= 0:
        balloonDeq.rotate(-(popped[1]-1))
    else:
        balloonDeq.rotate(-popped[1])

print(*answer)