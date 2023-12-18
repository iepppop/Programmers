function solution(hp) {
    var answer = 0;
    var captin = Math.floor(hp / 5);
    var solider = Math.floor((hp - captin * 5) / 3)
    var worker = hp - (captin * 5) - (solider * 3)
    
    return (captin + solider + worker)
}