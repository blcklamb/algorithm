import math

xs, ys = map(int, input().split())
xe, ye, dx, dy = map(int, input().split())

if dx == 0 and dy == 0:
    print(xe, ye)
    exit()

def getDeg(v1, v2):
    sizeV1 = math.sqrt(v1[0]**2 + v1[1]**2)
    sizeV2 = math.sqrt(v2[0]**2 + v2[1]**2)

    # v1*v2
    innerProduct = v1[0]*v2[0] + v1[1]*v2[1]

    # |v1|*|v2|
    sizeMultiply = sizeV1 * sizeV2

    angleDeg = math.degrees(math.acos(innerProduct/sizeMultiply))
    return angleDeg

angleDeg = getDeg([xs-xe, ys-ye], [dx, dy])

if angleDeg < 90:
    if dy == 0:
        print(xs, ye)
    elif dx == 0:
        print(xe, ys)
    else:
        shortestX = ((dx*dy)/(dy**2 + dx**2)) * (dx/dy*xs + ys + dy/dx*xe - ye)
        shortestY = (dy/dx)*shortestX - (dy/dx*xe) + ye
        print(int(shortestX), int(shortestY))
else:
    print(xe, ye)