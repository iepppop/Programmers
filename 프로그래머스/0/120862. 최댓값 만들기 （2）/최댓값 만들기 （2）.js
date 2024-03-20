function solution(numbers) {
    var answer = 0;
    const numSort =  numbers.sort((a, b) => a - b);
    const max = numSort[numSort.length - 1]
    const secondMax = numSort[numSort.length - 2];
    
    const min = numSort[0];
    const secondMin = numSort[1];
    
     return Math.max(max * secondMax, min * secondMin);
}