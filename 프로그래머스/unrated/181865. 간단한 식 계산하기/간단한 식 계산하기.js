function solution(binomial) {
    var answer = 0;
    var arr = binomial.split(" ")
    arr[0] = parseInt(arr[0])
    arr[2] = parseInt(arr[2])
    if(arr[1] === '+'){
       answer = arr[0] + arr[2]
    }else if(arr[1] === '-'){
        answer = arr[0] - arr[2]
    }else{
         answer = arr[0] * arr[2]
    }
    
    return answer;
}