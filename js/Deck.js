module.exports = class Deck {

    constructor(settings){

        this.suitCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 1];
        this.singleDeck = this.suitCards.concat(this.suitCards, this.suitCards, this.suitCards);
        this.cards = this.refreshDeck(settings.numDecks || 8);

    }


    refreshDeck(numDecks){

        let fullDeck = [];

        for(let i = 0; i < numDecks; i++){
            fullDeck = fullDeck.concat(this.singleDeck);
        }

        return fullDeck;

    }


    pickCard(){


        let cardIndex = Math.floor(Math.random() * Math.floor(this.cards.length)),
            card = this.cards[cardIndex];

        //console.log('pickCard()');
        //console.log('cards', this.cards.length);
        //console.log('cardIndex', cardIndex);
        //console.log('card', card);

        //remove the selected card from the deck
        this.cards.splice(cardIndex, 1);

        return card;

    }

}