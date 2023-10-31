function solution(my_string, n) {
    var answer = '';
    my_string.split('').map((x)=>answer += x.repeat(n))
    return answer;
}