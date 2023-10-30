function solution(arr, divisor) {
    var answer = [];
    var newArr = arr.filter((x)=> x % divisor=== 0).sort((a,b)=> a-b);
    if(newArr.length >= 1) answer = newArr;
    else answer = [-1];
    return answer;
}