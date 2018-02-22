

// https://wizardofodds.com/games/blackjack/strategy/4-decks/
// 4-8 decks. dealer stands on soft 17
const decisionTable = {
    4: {2:"H",3:"H",4:"H",5:"H",6:"H",7:"H",8:"H",9:"H",10:"H","A":"H"},
    5: {2:"H",3:"H",4:"H",5:"H",6:"H",7:"H",8:"H",9:"H",10:"H","A":"H"},
    6: {2:"H",3:"H",4:"H",5:"H",6:"H",7:"H",8:"H",9:"H",10:"H","A":"H"},
    7: {2:"H",3:"H",4:"H",5:"H",6:"H",7:"H",8:"H",9:"H",10:"H","A":"H"},
    8: {2:"H",3:"H",4:"H",5:"H",6:"H",7:"H",8:"H",9:"H",10:"H","A":"H"},
    9: {2:"H",3:"DH",4:"DH",5:"DH",6:"DH",7:"H",8:"H",9:"H",10:"H","A":"H"},
    10: {2:"DH",3:"DH",4:"DH",5:"DH",6:"DH",7:"DH",8:"DH",9:"DH",10:"H","A":"H"},
    11: {2:"DH",3:"DH",4:"DH",5:"DH",6:"DH",7:"DH",8:"DH",9:"DH",10:"DH","A":"H"},
    12: {2:"H",3:"H",4:"S",5:"S",6:"S",7:"H",8:"H",9:"H",10:"H","A":"H"},
    13: {2:"S",3:"S",4:"S",5:"S",6:"S",7:"H",8:"H",9:"H",10:"H","A":"H"},
    14: {2:"S",3:"S",4:"S",5:"S",6:"S",7:"H",8:"H",9:"H",10:"H","A":"H"},
    15: {2:"S",3:"S",4:"S",5:"S",6:"S",7:"H",8:"H",9:"H",10:"H","A":"H"},
    16: {2:"S",3:"S",4:"S",5:"S",6:"S",7:"H",8:"H",9:"H",10:"H","A":"H"},
    17: {2:"S",3:"S",4:"S",5:"S",6:"S",7:"S",8:"S",9:"S",10:"S","A":"S"}
};

module.exports = decisionTable;