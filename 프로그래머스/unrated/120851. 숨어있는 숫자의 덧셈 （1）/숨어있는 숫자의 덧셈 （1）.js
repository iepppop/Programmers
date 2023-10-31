function solution(my_string) {
    var answer = [];
    answer = my_string.split("").filter((x)=> parseInt(x)).map((x)=> parseInt(x)).reduce((acc,cur)=> acc+cur)
    return answer;
}