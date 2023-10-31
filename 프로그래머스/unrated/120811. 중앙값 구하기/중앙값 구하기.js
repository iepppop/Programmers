function solution(array) {
    var answer = 0;
    var newArr = array.sort((a,b)=> a-b);
    var middle = Math.floor(newArr.length / 2);
    answer = newArr[middle]
    return answer;
}