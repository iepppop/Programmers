function solution(my_string, index_list) {
    var answer = '';
    answer = index_list.map((x)=> my_string[x]).join("")
    return answer;
}