function solution(arr, intervals) {
    var answer = 0;
    const answer1 = arr.slice(intervals[0][0],intervals[0][1]+ 1).join(" ").split(" ").map(item => parseInt(item))
    const answer2 =  arr.slice(intervals[1][0],intervals[1][1] + 1).join(" ").split(" ").map(item => parseInt(item))
    answer = [...answer1,...answer2]
    return answer;
}