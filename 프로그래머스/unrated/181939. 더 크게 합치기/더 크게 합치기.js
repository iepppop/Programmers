function solution(a, b) {
    var answer = 0;
    var ab = a.toString() + b.toString();
    var ba = b.toString() + a.toString();
    if(ab > ba || ab === ba){
        answer = parseInt(ab);
    }else if(ab < ba){
        answer = parseInt(ba)
    }
    return answer;
}