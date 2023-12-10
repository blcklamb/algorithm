# https://www.acmicpc.net/problem/5639
'''
class로 만들고 바로 답이 나오길래 '이게 왜 골드'라는 생각을 하던 중
input을 끝낼 수 있는 방법이 만만치 않다는 것을 깨닫고, 골드네... 생각 중
즉 마지막 숫자를 받고나서 더 이상 들어올 수 없는 것을 판단해야 한다.

sys.setrecursionlimit() : 없으면 런타임 에러
sys.stdin.readline : 넣어도 26% 쯤에 시간 초과

위의 고민은 쓸 데 없는 고민이었다... 시간 초과가 문제임
'''
'''
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

class BinaryTree:
    def __init__(self, start):
        self.left = None
        self.right = None
        self.node = start

    def insertNode(self, node):
        if self.node:
            if node < self.node:
                if self.left is None:
                    self.left = BinaryTree(node)
                else:
                    self.left.insertNode(node)
            elif node > self.node:
                if self.right is None:
                    self.right = BinaryTree(node)
                else:
                    self.right.insertNode(node)
        else:
            self.node = node
    
    def printTree(self):
        if self.left:
            self.left.printTree()
        
        if self.right:
            self.right.printTree()
        print(self.node)

firstNode = int(input())
answerTree = BinaryTree(firstNode)
while True:
    try:
        nextNode = int(input())
    except:
        break
    answerTree.insertNode(nextNode)
answerTree.printTree()    

# exampleTree = BinaryTree(50)
# exampleTree.insertNode(30)
# exampleTree.insertNode(24)
# exampleTree.insertNode(5)
# exampleTree.insertNode(28)
# exampleTree.insertNode(45)
# exampleTree.insertNode(98)
# exampleTree.insertNode(52)
# exampleTree.insertNode(60)
# exampleTree.printTree()
'''

import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

binaryTree = []

while True:
    try:
        node = int(input())
        binaryTree.append(node)
    except:
        break

def postOrderPrint(left, right):

    if left > right:
    # 반 자르다가 끝자락에 다달으면 그냥 return
        return
    # 오른쪽 조각들이 없을 수도 있으므로
    mid = right + 1
    for i in range(left+1, right+1):
        # 루트의 바로 하위 같은 레벨 왼쪽-오른쪽으로 분류하기
        if binaryTree[left] < binaryTree[i]:
            mid = i
            break

    # 왼쪽 반 갈라 자르다
    postOrderPrint(left+1, mid-1)
    # 오른쪽 반 갈라 자르다
    postOrderPrint(mid, right)
    print(binaryTree[left])

# 전위
def preOrderPrint(left, right):

    if left > right:
    # 반갈죽하다가 끝자락에 다달으면 그냥 return
        return
    # 오른쪽 조각들이 없을 수도 있으므로
    mid = right + 1
    for i in range(left+1, right+1):
        # 같은 레벨 왼쪽-오른쪽 짝이 됐을 때
        if binaryTree[left] < binaryTree[i]:
            mid = i
            break

    print(binaryTree[left])
    # 왼쪽 반갈죽
    preOrderPrint(left+1, mid-1)
    # 오른쪽 반갈죽
    preOrderPrint(mid, right)

# 중위
def inOrderPrint(left, right):

    if left > right:
    # 반갈죽하다가 끝자락에 다달으면 그냥 return
        return
    # 오른쪽 조각들이 없을 수도 있으므로
    mid = right + 1
    for i in range(left+1, right+1):
        # 같은 레벨 왼쪽-오른쪽 짝이 됐을 때
        if binaryTree[left] < binaryTree[i]:
            mid = i
            break
    # 왼쪽 반갈죽
    inOrderPrint(left+1, mid-1)
    print(binaryTree[left])
    # 오른쪽 반갈죽
    inOrderPrint(mid, right)
    

postOrderPrint(0, len(binaryTree)-1)
inOrderPrint(0, len(binaryTree)-1)
preOrderPrint(0,len(binaryTree)-1)