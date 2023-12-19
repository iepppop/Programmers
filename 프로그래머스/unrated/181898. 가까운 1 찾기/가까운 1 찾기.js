function solution(arr, idx) {
    var answer = 0;
    let num ;
    answer = arr.findIndex((x,i)=> i >= idx && x === 1)
    return answer;
}