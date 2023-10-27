function solution(start_num, end_num) {
    var answer = [];
    for(let i=0; i<start_num + 1 ; i++){
       if(i > end_num - 1){
           answer.push(i)
       }
    }
    answer.reverse()
    return answer;
}