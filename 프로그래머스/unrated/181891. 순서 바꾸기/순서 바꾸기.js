function solution(num_list, n) {
    var answer = [];
    var newArray = [];
    for(let i =0; i < num_list.length; i++){
        if(i < n){
            newArray.push(num_list[i])
        }else{
            answer.push(num_list[i])
        }
    }
    answer.push(...newArray)

    return answer;
}