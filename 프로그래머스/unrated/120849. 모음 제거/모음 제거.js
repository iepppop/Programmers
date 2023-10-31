function solution(my_string) {
    var answer = '';
    const arr = ['a','e','i','o','u']
    answer = my_string.split("").filter(x => !arr.includes(x)).join('')
    return answer;
}