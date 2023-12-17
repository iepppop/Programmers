function solution(spell, dic) {
    var answer = dic.filter(v => spell.every(c => v.includes(c))).length  ? 1 : 2;
    return answer;
}