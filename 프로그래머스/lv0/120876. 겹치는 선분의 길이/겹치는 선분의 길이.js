function solution(lines) {
    
    const intersectionArray = []
    const unionArray = []
    lines.forEach((ele) => {
        const [ start, end ] = ele
        for ( let i = start; i < end; i ++ ){
            if (unionArray.indexOf(i) != -1){
                if (intersectionArray.indexOf(i) == -1){
                    intersectionArray.push(i)
                }
            } else {
                unionArray.push(i)
            } 
        }
    })
    console.log(intersectionArray.length)
    
    return intersectionArray.length
}