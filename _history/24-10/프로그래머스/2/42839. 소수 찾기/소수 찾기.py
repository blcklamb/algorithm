from itertools import permutations

def isPrimeNumber(number):
    if number == 1 or number == 0:
        return False
    for d in range(2, round(number**(1/2)+1)):
        if number%d == 0:
            return False
    return True
        
def solution(numbers):
    answer = set([])
    numberList = list(map(int, list(numbers)))
    
    for n in range(1, len(numberList)+1):
        for permu in permutations(numberList, n):
            permutatedNumber = int("".join(str(per) for per in permu))
            if isPrimeNumber(permutatedNumber):
                answer.add(permutatedNumber)

    return len(answer)