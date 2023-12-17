function solution(order) {
    var answer = String(order).split("").filter((x)=> x === '3' || x === '6' || x === '9')
    return answer.length;
}