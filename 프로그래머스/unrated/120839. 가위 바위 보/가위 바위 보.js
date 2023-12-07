function solution(rsp) {
    var answer = '';
    answer = rsp.split("").map((x)=> x === "2" ? x = "0": x === "0" ? x = "5" : x === "5" ? x = "2" :"").join("")
    return answer;
}