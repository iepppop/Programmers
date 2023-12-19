function solution(myString) {
    var answer = [];
    answer = myString.split("x").map(x => x.length)
    return answer;
}