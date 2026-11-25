
N = int(input())
W = []

for _ in range(N):
    row = list(map(int, input().split()))
    W.append(row)

minByStartCity = [float('inf') for _ in range(N)]


def circuitByStartCity(current, visited, answer, start):
    global W, minAnswer

    if visited.count(True) == N:
        if W[current][start] != 0:
            minAnswer = min(minAnswer, answer+W[current][start])
        return

    for i in range(N):

        if visited[i] or i == current:
            continue
        if W[current][i] == 0:
            continue

        if minAnswer < answer + W[current][i]:
            return

        visited[i] = True
        circuitByStartCity(i, visited, answer+W[current][i], start)
        visited[i] = False


for i in range(N):
    minAnswer = float('inf')
    visited = [False if j != i else True for j in range(N)]
    circuitByStartCity(i, visited, 0, i)
    minByStartCity[i] = minAnswer


print(min(minByStartCity))
