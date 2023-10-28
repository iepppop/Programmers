function solution(arr, n) {
    var answer = arr;
    if(answer.length % 2 !== 0){
        for(let i=0; i<arr.length; i+=2){
            answer[i] += n
        }
    }else{
        for(let i=0; i<arr.length; i++){
        if (i % 2 === 1) answer[i] += n;
        }
    }
    return answer;
}