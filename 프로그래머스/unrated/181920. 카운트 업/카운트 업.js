function solution(start_num, end_num) {
    var answer = [];
    for(let i=0; i <= end_num; i++){
        if(i >= start_num) answer.push(i)
    }
    return answer;
}