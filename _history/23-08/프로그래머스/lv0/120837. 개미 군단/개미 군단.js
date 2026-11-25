function solution(hp) {
    const general_ant = parseInt(hp/5)
    const soldier_ant = parseInt((hp % 5)/3)
    const worker_ant = (hp % 5) - soldier_ant * 3
    return general_ant + soldier_ant + worker_ant;
}