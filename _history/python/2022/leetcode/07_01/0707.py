class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        
        tempS1 = ''
        tempS2 = ''
        
        tempIndex = 0
        
        answer = ''
        
        if s2==s3 or s1==s3:
            answer = "true"
            return answer
        
        for tempStr in s3:
            if len(s1)-len(tempS1) == 0:
                if tempStr[tempIndex:] == s2[len(tempS2):]:
                    answer = "true"
                    break
                else: 
                    answer = "false"
                    break           
            elif len(s2)-len(tempS2) == 0:
                if tempStr[tempIndex:] == s1[len(tempS1):]:
                    answer = "true"
                    break
                else: 
                    answer = "false"
                    break
                
            else:
                if s1[tempIndex-len(tempS2)] == tempStr:
                    tempS1 += s1[tempIndex-len(tempS2)]
                elif s2[tempIndex-len(tempS1)] == tempStr:
                    tempS2 += s2[tempIndex-len(tempS1)]
                else:
                    answer = "false"
                    break           
            tempIndex += 1
            
        return answer