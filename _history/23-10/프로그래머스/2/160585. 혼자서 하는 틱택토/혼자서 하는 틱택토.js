// 1. 갯수가 O < X / O >= X + 2 일 때 
// 2. 완성된 게 2개 이상일 경우

function solution(board) {
    let [oCount, xCount] = [0, 0]
    let [oBCount, xBCount] = [0, 0]
    let [diagUp, diagDown] = ['', '']
    for (let i = 0; i < 3; i++){
        // 가로
        if (board[i] === 'OOO') oBCount += 1
        if (board[i] === 'XXX') xBCount += 1
        // 세로
        let colLine = ''
        // 대각선
        diagUp += board[i][i]
        diagDown += board[2-i][i]
        for (let j = 0; j < 3; j++){
            colLine += board[j][i]
            if (board[i][j] === 'O') oCount += 1
            if (board[i][j] === 'X') xCount += 1
        }
        if (colLine === 'OOO') oBCount += 1
        if (colLine === 'XXX') xBCount += 1
    }
    if (diagUp === 'OOO') oBCount += 1
    if (diagUp === 'XXX') xBCount += 1
    if (diagDown === 'OOO') oBCount += 1
    if (diagDown === 'XXX') xBCount += 1
    
    if (oCount < xCount || oCount >= xCount + 2) return 0

    if (oBCount > 0 && xBCount > 0) return 0
    if (oBCount < xBCount && oCount != xCount) return 0
    
    if (oCount === xCount && oBCount > 0) return 0
    if (oCount > xCount && xBCount > 0) return 0
    return 1;
}