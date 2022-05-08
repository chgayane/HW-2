function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

const solution = (chessPlayers, finishedMatches) => {
    let haventPlay = []
    
    for(i=0; i<chessPlayers; i++){
        for(j=i+1; j<chessPlayers; j++){
            let cnt = 0;
            finishedMatches.forEach( elem => {
                if(!(arrayEquals(elem, [i,j]) || arrayEquals(elem, [j,i]))){
                    cnt++;
                }
            })
            if(cnt === 3){haventPlay.push([i,j])}
        }
    }
    return haventPlay
}
const arr = [[0, 1], [1, 2], [2, 0]]
console.log(solution(4,arr))