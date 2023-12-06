function solution(my_string, indices) {
    var answer = [];
     answer = my_string.split('').filter((x, i) => !indices.includes(i)).join("");
    return answer
}