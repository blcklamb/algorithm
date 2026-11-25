from itertools import combinations
N, M= map(int, input().split())

bitList = [[i, 0] for i in range(N)]

for i in range(N):
    [_, yn] = input().split()
    toBin = ''
    for possiblity in yn:
        if possiblity == 'Y':
            toBin += '1'
        else: 
            toBin += '0'
    bitList[i][1] = toBin

playable = 0
minGuitar = -1

for i in range(1, N+1):
    for combi in combinations(bitList, i):
        result = '0'
        for guitar in combi:
            result = bin(int(result, 2) | int(guitar[1], 2))
        if result.count('1') > playable:
            minGuitar = i
            playable = result.count('1')

print(minGuitar)