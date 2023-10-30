function solution(numbers) {
    var answer = -1;
    var arr = [0,1,2,3,4,5,6,7,8,9,0];
    answer = arr.filter(x => !numbers.includes(x)).reduce((acc,cur)=> acc + cur)
    return answer;
}