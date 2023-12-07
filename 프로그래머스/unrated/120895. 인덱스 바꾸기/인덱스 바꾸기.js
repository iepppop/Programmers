function solution(my_string, num1, num2) {
    var answer = '';
    const x = my_string.split("");
    [x[num1],x[num2]] = [x[num2],x[num1]]
    answer = x.join("");
    return answer;
}