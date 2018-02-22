module.exports = class Dealer {

    constructor(params){

        this.hand = [];

    }


    playHand(){}


    cardTotal(){

        let total = 0;

        this.hand.each((cardValue) => {

            total += cardValue;

        });

        return total;

    }

}