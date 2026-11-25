def sortElement(arr):
    arr.sort()
    return arr

def solution(sizes):
    sortedSizes = list(map(sortElement, sizes))
    
    maxW = 0
    maxH = 0
    
    for [w, h] in sortedSizes:
        maxW = max(w, maxW)
        maxH = max(h, maxH)
    
    return maxW*maxH