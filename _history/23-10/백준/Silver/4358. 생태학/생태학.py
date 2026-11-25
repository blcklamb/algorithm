import sys
from collections import defaultdict
input = sys.stdin.readline
treeDict = defaultdict(int)
totalTreeCount = 0

while True:
    tree = input().strip()
    if tree == '':
        break
    treeDict[tree] += 1
    totalTreeCount += 1

for key, value in sorted(treeDict.items(), key=lambda x: x[0]):
    print("%s %.4f" % (key,value/totalTreeCount*100))