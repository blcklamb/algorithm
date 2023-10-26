function findSpecialSpot(maps){
        let lever = [null, null]
        let exit = [null, null]
        let start = [null, null]
        maps.forEach((ele, rIdx) => {
            ele.split('').forEach((cell, cIdx) => {
                if (cell === 'L') lever = [rIdx, cIdx]
                if (cell === 'E') exit = [rIdx, cIdx]
                if (cell === 'S') start = [rIdx, cIdx]
            })
        })
        return [start, lever, exit]
    }

function solution(maps) {
    var answer = 0;
    const [N, M]  = [maps.length, maps[0].length]
    
    const [start, lever, exit] = findSpecialSpot(maps)

    function DFS(start, end){
        let count = Array.from({length: N}, () => Array(M).fill(0))
        let queue = [start]
        
        const [dr, dc] = [[0, 0, 1, -1], [1, -1, 0, 0]]
        
        while (queue.length > 0){
            const [currR, currC] = queue.shift()
            
            for (let i = 0; i < 4; i++){
                const [nextR, nextC] = [currR + dr[i], currC + dc[i]]
                if (nextR >= N || nextR < 0 || nextC >= M || nextC < 0) continue
                if (maps[nextR][nextC] === 'X') continue
                if (count[nextR][nextC] != 0 && count[nextR][nextC] <= count[currR][currC] + 1) continue
                count[nextR][nextC] = count[currR][currC] + 1
                queue.push([nextR, nextC])
            }
        }
        return count[end[0]][end[1]]
    }
    const startToLever = DFS(start, lever)
    if (startToLever === 0) return -1
    const leverToExit = DFS(lever, exit)
    if (leverToExit === 0) return -1
    return startToLever + leverToExit;
}