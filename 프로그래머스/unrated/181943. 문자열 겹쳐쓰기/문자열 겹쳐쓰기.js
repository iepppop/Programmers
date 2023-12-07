function solution(my_string, overwrite_string, s) {
    var answer = '';
    var y = my_string.slice(0,s);
    var x = my_string.slice(s + overwrite_string.length);
    answer =  y + overwrite_string + x
    return answer;
}