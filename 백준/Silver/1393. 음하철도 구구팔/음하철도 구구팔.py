xs, ys = map(int, input().split())
xe, ye, dx, dy = map(int, input().split())

distance = (xs - xe)**2 + (ys - ye)**2

after1SecDistance = (xe + dx - xs)**2 + (ye + dy - ys)**2

if after1SecDistance > distance:
    print(xe, ye)
elif dx == 0 and dy == 0:
    print(xe, ye)
else:
    if dy == 0:
        print(xs, ye)
    elif dx == 0:
        print(xe, ys)
    else:
        shortestX = ((dx*dy)/(dy**2 + dx**2))*(dx/dy*xs + ys + dy/dx*xe - ye)
        shortestY = (dy/dx)*shortestX - (dy/dx*xe) + ye
        print(int(shortestX), int(shortestY))