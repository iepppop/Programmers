function solution(my_strings, parts) {
    var answer;
    answer = my_strings.reduce((acc,cur,idx)=>{
        const [start, end] = parts[idx];
        const curSlice = cur.slice(start , end+1);
        return acc + curSlice
    },"")
    return answer;
}
