function solution(angle) {
    const RIGHT_ANGLE = 90
    const FLAT_ANGLE = 180

    return (angle < RIGHT_ANGLE ? 1 
    : angle === RIGHT_ANGLE ? 2 
    : angle != FLAT_ANGLE ? 3 
    : 4);
}