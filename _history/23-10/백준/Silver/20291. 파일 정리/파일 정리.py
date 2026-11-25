import sys
from collections import defaultdict
input = sys.stdin.readline
N = int(input())
extension = defaultdict(int)
for _ in range(N):
    fileName = input().strip().split('.')[1]
    extension[fileName] += 1

for key, value in sorted(extension.items(), key=lambda x:x[0]):
    print(key, value)