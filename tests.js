const expect = chai.expect
const assert = chai.assert

describe('Week 6 Assignment Tests:', () => {
    describe('Test: Inspect The Deck', () => {
      it('#Should return a new deck of 52 Card objects', () => {
        // Copy & paste your debugged code from war.js
        class Card {
            constructor(number, suit, value) {
                this.number = number;
                this.suit = suit;
                this.value = value;
            }
        }

        class Deck {
            constructor() {
                this.cards = [];
            }

            createNewDeck() {
                let suits = ['Spade', 'Heart', 'Club', 'Diamond'];
        
                for (let i = 1; i < 14; i++) {
                    for (let j = 0; j < suits.length; j++) {
                        if (i < 11) {
                            this.cards.push(new Card(i, suits[j], i));
                        } else {
                            this.cards.push(new Card(i, suits[j], 10));
                        }
                    }
                }
            }
        }

        // Write tests to ensure it works for multiple examples
        let deck = new Deck();
        deck.createNewDeck();

        expect(deck.cards.length).to.equal(52);
      })
    })
})