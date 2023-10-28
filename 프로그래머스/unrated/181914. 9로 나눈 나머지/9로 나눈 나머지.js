function solution(number) {
    var answer = 0;
    answer = number.split("").map(x=> parseInt(x)).reduce((acc,cur)=> acc+cur) % 9 
    return answer;
}