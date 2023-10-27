function solution(my_string) {
    var answer = [];
    answer = my_string.split(" ").filter((x)=> x!== '')
    return answer;
}