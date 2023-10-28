function solution(myString) {
    var answer = '';
    answer = myString.split("").map((x)=>{
        if (x === 'a' || x === 'A'){
            return x = x.toUpperCase()
        }else{
            return x = x.toLowerCase()
        }
    }).join("")
    return answer;
}