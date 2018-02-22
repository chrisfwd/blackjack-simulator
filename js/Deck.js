module.exports = class Deck {

    constructor(settings){

        this.suitCards = [2, 3, 4, 5, 6];
        this.singleDeck = this.suitCards.concat(this.suitCards, this.suitCards, this.suitCards);
        this.cards = this.freshDeck(settings.numDecks || 4);

    }


    freshDeck(numDecks){

        let fullDeck = [];

        for(let i = 0; i < numDecks; i++){
            fullDeck = fullDeck.concat(this.singleDeck);
        }

        return fullDeck;

    }


    pickCard(){

        let cardIndex = Math.floor(Math.random() * Math.floor(this.cards.length)),
            card = this.cards[cardIndex];

        //remove the selected card from the deck
        this.cards.splice(cardIndex, 1);

        return card;

    }

}