function solution(N, number) {
    var answer = -1;
    const numArray = Array.from({length: 9}, () => new Set())
    numArray.map((val, idx) => {
      if (idx != 0){
        val.add(parseInt(N.toString().repeat(idx)))
      }
    })

    for (let i = 1; i <= 8; i++){
        for (let j = 1; j <= i; j++){
            for (const op01 of numArray[j].values()){
                for (const op02 of numArray[i-j].values()){
                    numArray[i].add(op01+op02)
                    numArray[i].add(op01-op02)
                    numArray[i].add(op01*op02)
                    if (op02 != 0){
                        numArray[i].add(Math.floor(op01 / op02))
                    }
                }
            }
        }
        if (numArray[i].has(number)){
            answer = i
            break
        } 
    }

    return answer;
}