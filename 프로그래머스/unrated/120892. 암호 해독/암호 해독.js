function solution(cipher, code) {
    var answer = [];
    cipher.split("").map((x,i)=> (i + 1) % code === 0 && answer.push(x))
    return answer.join("");
}