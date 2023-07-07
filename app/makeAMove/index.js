const chooseAMove = require('./chooseAMove');

function makeAMove (boardstate){
    const possibleMoves = moves(boardstate);
    const evaluatedMoves = possibleMoves.map(move => {
        return {
            name: move.getName(),
            score: evaluation(boardstate, move)
        }
    });
    return chooseAMove(evaluatedMoves);
}

module.exports = makeAMove;