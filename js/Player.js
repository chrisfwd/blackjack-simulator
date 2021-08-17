module.exports = class Player {

    constructor(params){

        this.decisionMap = params.decisionMap;
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
            cardTotal = 0,
            aces = this.hand.filter(card => card === 'A').length;

        // decide to hit, stay, double, split
        while(!stay){

            cardTotal = this.cardTotal();

            const map = aces ? this.decisionMap.soft : this.decisionMap.hard;

            if(!map[cardTotal]) {
                stay = true;
                break;
            }

            // use the map to decide what decision to make
            let action = map[cardTotal][dealerCard];
            // console.log('player action', action);

            if(action === 'DS'){
                if(this.canDouble && this.canBet(this.betAmount)){
                    action = 'D';
                } else {
                    action = 'S';
                }
            }

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

};