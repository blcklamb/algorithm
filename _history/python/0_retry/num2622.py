totalMatch = int(input())
count = 0
firstLimit = totalMatch//2 if totalMatch//2>1 else 3
for i in range(1, firstLimit):
    for j in range(i, firstLimit):
        k = totalMatch -(i+j)
        print(i,j,k)
        if k != max(i,j,k):
            continue
        if i+j>k:
            count += 1
if totalMatch ==3:
    print(1)
else:
    print(count)