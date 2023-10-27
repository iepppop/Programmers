function solution(myString, pat) {
    var answer = 0;
    answer = [...myString].map((x)=>{
        if(x === 'A') return 'B'
        else return 'A'
    }).join("").includes(pat) ? 1 : 0
    return answer;
}