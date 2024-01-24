/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let left = [asteroids.shift()]
    for (const asteroid of asteroids){
        while (true){
            const target = left.at(-1)
            if (!target) {
                left.push(asteroid)
                break
            }
            if (target < 0){
                left.push(asteroid)
                break
            } else {
                if (target + asteroid < 0){
                    left.pop()
                } else if (target + asteroid === 0){
                    left.pop()
                    break
                } else {
                    if (asteroid > 0){
                        left.push(asteroid)
                    } 
                    break
                }
            }
            
        }
    }
    return left
};