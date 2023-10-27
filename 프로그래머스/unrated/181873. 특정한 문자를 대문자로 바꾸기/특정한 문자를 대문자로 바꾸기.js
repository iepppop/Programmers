function solution(my_string, alp) {
    var answer = '';
    answer = [...my_string].map((x)=> {
        if(x === alp) return x.toUpperCase();
        else return x
    }).join('')
   
    return answer;
}