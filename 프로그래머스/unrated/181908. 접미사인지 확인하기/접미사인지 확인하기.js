function solution(my_string, is_suffix) {
    var answer = 0;
    answer = my_string.slice(-is_suffix.length) === is_suffix ? 1 : 0
    return answer;
}