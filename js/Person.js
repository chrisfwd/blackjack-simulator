module.exports = class Person {

    constructor(){

        this.hand = [];

    }

    cardTotal(){

        let total = 0;

        this.hand.each((cardValue) => {

            total += cardValue;

        });

        return total;

    }

}