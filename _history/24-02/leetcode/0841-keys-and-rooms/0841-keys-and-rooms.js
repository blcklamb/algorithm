/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const isOpen = Array.from({length: rooms.length}, (_, idx) => idx === 0)
    const stack = [0]
    while (stack.length){
        const current = stack.pop()        
        for (const roomKey of rooms[current]){
            if (!isOpen[roomKey]){
                isOpen[roomKey] = true
                stack.push(roomKey)
            }
        }
    }
    return isOpen.reduce((prev, ele) => prev && ele)
};