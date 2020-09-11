function ScoreController () {
    // ctrl = this;
    this.message = "The game is about to start!";
    this.scoreFrance = 0;
    this.scoreArgentine = 0;
    this.test = "France - Argentine";
    // this.result = "";
    this.color = "";
    this.scoreCalculation = () => {
        let France = Math.floor(Math.random() * 4);
        let Argentine = Math.floor(Math.random() * 4);

        if (France > Argentine) {
            this.message = `France Wins! ${France} - ${Argentine}`;
            this.result = "win";
        } else if (France < Argentine) {
            this.message = `France Loses! ${France} - ${Argentine}`;
            this.result = "lose";
        } else {
            this.message = `It's a draw! ${France} - ${Argentine}`;
            this.result = "draw";
        };
    };
};

angular
    .module('app')
    .controller('ScoreController', ScoreController);
