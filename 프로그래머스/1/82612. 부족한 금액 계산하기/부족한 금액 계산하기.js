function solution(price, money, count) {
    var answer = 0;
    var arr = []
    for(let i=1; i<=count; i++){
        arr.push(i * price)
    }
    answer = arr.reduce((acc,cur)=> acc+cur) - money;
    return answer < 0 ? 0 : answer
}