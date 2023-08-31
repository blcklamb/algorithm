function solution(myString, pat) {
    for (let i = myString.length; i >= pat.length-1; i--){
        if(myString.slice(i-pat.length, i) === pat){
            return myString.slice(0, i)
        }
    }
}