module.exports = class Dealer {

    constructor(params){

        this.hand = [];
        this.deck = params.deck;

    }


    playHand(){

        console.log('dealer playing...');

        let stay = false;

        // decide to hit, stay, double, split
        while(!stay){

            if(this.cardTotal() < 17){
                // hit
                let card = this.deck.pickCard();
                this.hand.push(card);
                console.log('hit', this.hand, this.cardTotal());
                //console.log('dealer has', this.cardTotal());
            } else {
                // stay
                console.log('stay');
                stay = true;
                break;
            }

        }

        console.log('dealer done', this.hand, this.cardTotal());

    }


    cardTotal(){

        let total = 0;

        this.hand.forEach((cardValue) => {

            total += cardValue;

        });

        return total;

    }

}