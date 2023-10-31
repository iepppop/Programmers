function solution(num_list) {
    var answer = [];
    answer = num_list.sort((a,b)=> b-a).slice(-5).sort((a,b)=> a-b)
    return answer;
}