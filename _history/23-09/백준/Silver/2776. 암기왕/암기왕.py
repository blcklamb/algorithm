import sys
input = sys.stdin.readline
TC = int(input())

for _ in range(TC):
    N = int(input())
    note1 = list(map(int, input().split()))
    M = int(input())
    note2 = list(map(int, input().split()))
    setNote1 = set(note1)
    for num in note2:
        if num in setNote1: 
            print(1)
        else:
            print(0)