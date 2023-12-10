import sys 
input = sys.stdin.readline
testClassNum = int(input())
testantNum = int(input())
main, sub = map(int, input().split())

print(testClassNum+round((testantNum-main)/sub)*testClassNum)

