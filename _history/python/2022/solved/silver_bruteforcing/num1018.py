import sys
tableSize =list(map(int, sys.stdin.readline().split()))

availableSize = [[[0, 0] for _ in range(tableSize[1]-7)] for _ in range(tableSize[0]-7)]

chessLine01 = ['W', 'B']*4
chessLine02 = ['B', 'W']*4
availableChessTable01 = [chessLine01 if i%2==0 else chessLine02 for i in range(8)]
availableChessTable02 = [chessLine02 if i%2==0 else chessLine01 for i in range(8)]

inputChessTable = []
for _ in range(tableSize[0]):
    tableLine = list(sys.stdin.readline().rstrip())
    inputChessTable.append(tableLine)

# spare
for row in range(tableSize[0]-7):
    for column in range(tableSize[1]-7):
        for j in range(8):
            for i in range(8):
                if inputChessTable[row+j][column:column+8 if column+8<=tableSize[1] else -1][i] != availableChessTable01[j][i]:
                    availableSize[row][column][0] += 1
                if inputChessTable[row+j][column:column+8 if column+8<=tableSize[1] else -1][i] != availableChessTable02[j][i]:
                    availableSize[row][column][1] += 1

minimumChange = min(availableSize[0][0])
for possibleChange in availableSize:
    for changeSet in possibleChange:
        if minimumChange > min(changeSet):
            minimumChange = min(changeSet)
    
print(minimumChange)




