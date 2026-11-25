function solution(dots) {
    var answer = 0;
    const slide = ([x1, y1], [x2, y2]) => Math.abs(y1-y2) / Math.abs(x1-x2)
    const dot1 = dots.splice(0, 1)[0]
    for (let i = 0; i < 3; i++){
        const dot2 = dots.pop();
        const slide12 = slide(dot1, dot2);
        const slide34 = slide(dots[0], dots[1]);
        if (slide12 === slide34){ 
            answer = 1
        }
        dots.unshift(dot2)
    }
    return answer;
}