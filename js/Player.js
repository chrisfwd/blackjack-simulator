const decisionTable = require('./decisionTable');

module.exports = class Player {

    constructor(params){

        this.cash = params.cash || 10.00;
        this.deck = params.deck;
        this.betAmount = 0;
        this.hand = [];
        this.canDouble = true;

    }


    reset(){

        this.betAmount = 0;
        this.hand = [];

    }


    playHand(options){

        console.log('player playing...');

        let stay = false,
            dealerCard = options.dealerShows,
            cardTotal = 0;

        // decide to hit, stay, double, split
        while(!stay){

            cardTotal = this.cardTotal();

            if(!decisionTable[cardTotal]) {
                stay = true;
                break;
            }

            let action = decisionTable[cardTotal][dealerCard];
            //console.log('player action', action);

            if(action === 'DH'){
                if(this.canDouble && this.canBet(this.betAmount)){
                    action = 'D';
                } else {
                    action = 'H';
                }
            }

            switch(action){
                case 'D': // Double down
                    this.bet(this.betAmount);
                    this.hand.push(this.deck.pickCard());
                    console.log('Double down', this.hand, this.cardTotal(), 'new bet amount: ', this.betAmount);
                    break;
                case 'P': // sPlit
                    // split functionality
                    stay = true;
                    break;
                case 'H': // Hit
                    this.hand.push(this.deck.pickCard());
                    console.log('hit', this.hand, this.cardTotal());
                    break;
                case 'S': // Stay
                    console.log('stay');
                    stay = true;
                    break;
                default: break;
            }

        }

        console.log('player done', this.hand, this.cardTotal());

    }


    cardTotal(){

        let total = 0;

        this.hand.forEach((cardValue) => {

            total += cardValue;

        });

        return total;

    }


    canBet(betAmount){

        return this.cash >= betAmount;

    }


    bet(betAmount){

        // return if player doesnt have enough cash
        if(!this.canBet(betAmount)) return 0;

        this.betAmount += betAmount;

        this.cash -= betAmount;

        console.log('player cash', this.cash);
        console.log('player bets', this.betAmount);

        return this.betAmount;

    }

}