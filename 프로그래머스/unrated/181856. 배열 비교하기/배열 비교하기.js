function solution(arr1, arr2) {
    var answer = -1;
    if(arr1.length > arr2.length){
        answer = 1
    }else if(arr1.length === arr2.length){
        var a = arr1.reduce((acc,cur)=> acc+cur);
        var b = arr2.reduce((acc,cur)=> acc+cur);
        if(a>b) answer = 1
        else if(a===b) answer = 0
        else answer = -1 
    }
    return answer;
}