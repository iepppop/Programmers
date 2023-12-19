function solution(num) {
    var answer = [num];
    let val = num;

    while (val !== 1) {
        if (val % 2 === 0) {
            val = val / 2;
        } else {
            val = 3 * val + 1;
        }
        answer.push(val);
    }

    return answer;
}