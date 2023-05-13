class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }

    viewHand() {
        let output = '';

        for (let c of this.hand) {
            output += c.toString() + '\n';
        }

        return output;
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

    shuffleDeck() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    createNewGame(player1, player2) {
        this.createNewDeck();
        this.shuffleDeck();

        const middleIndex = Math.ceil(this.cards.length / 2);

        player1.hand = this.cards.splice(0, middleIndex);
        player2.hand = this.cards.splice(-middleIndex);
    }

    runGame(player1, player2) {
        for (let i = 0; i < player1.hand.length; i++) {
            console.log(player1.hand[i].toString() + " vs " + player2.hand[i].toString());

            if (player1.hand[i].value > player2.hand[i].value) {
                player1.score++;
                console.log(`${player1.name} wins this round!`);
            } else if (player2.hand[i].value > player1.hand[i].value) {
                player2.score++;
                console.log(`${player2.name} wins this round!`);
            } else {
                console.log("Tie game.");
            }
        }

        let output = '--------------------\nGame Results:\n';

        if (player1.score > player2.score) {
            output += `${player1.name} wins!`;
        } else if (player2.score > player1.score) {
            output += `${player2.name} wins!`;
        } else {
            output += `There's no winners in life. Tie Game.`
        }

        console.log(output);
        console.log(player1.name + ": " + player1.score + " | " + player2.name + ": " + player2.score);
    }
}

class Card {
    constructor(number, suit, value) {
        this.number = number;
        this.suit = suit;
        this.value = value;
    }

    toString() {
        let output = '';

        switch (this.number) {
            case 1:
                output += "Ace ";
                break;
            case 11:
                output += "Jack ";
                break;
            case 12:
                output += "Queen ";
                break;
            case 13:
                output += "King ";
                break;
            default:
                output += this.number + " ";
        }

        return output + "of " + this.suit;
    }
}

let deck = new Deck();
let p1 = new Player("Khalil");
let p2 = new Player("Dave");

deck.createNewGame(p1, p2);
deck.runGame(p1, p2);