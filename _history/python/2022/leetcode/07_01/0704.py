'''
135. Candy
https://leetcode.com/problems/candy/
'''

class Solution:
    def sequenceOp(seqList):
        for i in seqList:
            preprocessedSeq = list(set(i))
            
        
    def candy(self, ratings: List[int]) -> int:
        totalCandy = len(ratings)
        
        tempRating = ratings[0]
        tempSeq = [tempRating]
        
        seqList = []
        
        for i in ratings[1:]:
            if tempSeq[-1] >= i:
                tempSeq.append(i)
            else:
                seqList.append(tempSeq)
                tempSeq = [i]
        if tempSeq:
            seqList.append(tempSeq)
        print(seqList)
        
            
            
    
            
        