function solution(num_list) {
    var answer = 0;
    var odd = num_list.filter((x,i)=> i % 2 !== 0).reduce((acc,cur)=> acc+cur)
    var even = num_list.filter((x,i)=> i % 2 === 0).reduce((acc,cur)=> acc+cur)
    if (odd > even) answer = odd
    else answer = even
    return answer;
}