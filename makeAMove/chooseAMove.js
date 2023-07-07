const bestMoveTolerance = require('../Configuration')('bestMoveTolerance');

function chooseAMove (moves){
    let bestScore = 0;
    moves.forEach(move => {
        if(move.score > bestScore) bestScore = move.score;
    });
    const goodMoves = moves.filter(move => {
        return bestScore - move.score >= bestMoveTolerance;
    });
    return goodMoves[Math.floor(Math.random()*goodMoves.length)];
}

module.exports = chooseAMove;