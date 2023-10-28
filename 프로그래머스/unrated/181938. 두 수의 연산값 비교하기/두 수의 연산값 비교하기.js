function solution(a, b) {
    var answer = 0;
    var ab = parseInt(`${a}${b}`);
    var abx = 2 * a * b;
    if(ab > abx) answer =  ab
    else answer = abx
    return answer;
}