module.exports = class Dealer {

    constructor(params){

        this.hand = [];
        this.deck = params.deck;

    }


    reset(){

        this.hand = [];

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
        const aces = this.hand.filter(card => card === 'A');

        this.hand.forEach((cardValue) => {

            const adjustedCardValue = (cardValue === 'A') ? 11 : cardValue;

            total += adjustedCardValue;

        });

        // account for Aces
        aces.forEach(() => {
            if(total > 21){
                total -= 10;
            }
        });

        return total;

    }

};