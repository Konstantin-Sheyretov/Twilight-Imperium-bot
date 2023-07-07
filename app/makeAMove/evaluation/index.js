function makeAMove(boardstate) {
    const phase = boardstate.getTurnPhase();
    switch (phase) {
        case 'strategy': return require('./strategy')(boardstate);
        case 'action': return require('./action')(boardstate);
        case 'agenda': return require('./agenda')(boardstate);
        case 'draft': return require('./draft')(boardstate);
        case 'react': return require('./react')(boardstate);
        default: throw new Error(`Unknown phase: ${phase}`);
    }
}

module.exports = makeAMove;



