function ScoreController () {
    // let ctrl = this;
    this.score = 0;
    this.test = "hello";
    this.scoreCalculation = () => {
        let country1 = Math.floor(Math.random() * 4);
        let country2 = Math.floor(Math.random() * 4);
        this.score = country1 - country2;
        console.log(this.score);
    };
};

angular
    .module('app')
    .controller('ScoreController', ScoreController);
