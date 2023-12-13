function solution(num, k) {
    var answer = 0;
    answer = Array.from(String(num), Number).findIndex((x,i)=> x === k)
    if(answer !== -1) answer += 1 
    return answer;
}