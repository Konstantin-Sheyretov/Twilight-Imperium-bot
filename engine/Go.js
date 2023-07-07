class Go {
    constructor (boardstate, goFunction){
        this.boardstate = boardstate;
        this.goFunction = goFunction;
    }

    go(){
        return this.goFunction(this.boardstate);
    }
}