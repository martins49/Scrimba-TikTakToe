console.log("TikTakToe")
const CATS = "X"
const MONKEYS = "O"

let catsPicks = [];
let monkeysPicks = [];

let turn = CATS
const squareEl = document.querySelectorAll(".grid div")
const displayEl = document.getElementById("display-el")

console.log(squareEl.length)
// squareEl.addEventListener("click", function(){
//     console.log("i was clicked")
// })

for (let i = 0; i < squareEl.length; i++) {
    squareEl[i].addEventListener("click", takeTurn)
}

function takeTurn() {
    this.textContent = turn

    if (turn == CATS) {
        catsPicks.push(parseInt(this.id))
        turn = MONKEYS
    }
    else {
        monkeysPicks.push(parseInt(this.id))
        turn = CATS
    }
    //to remove the event listener
    this.removeEventListener("click", takeTurn)
    console.log(catsPicks)
    console.log(monkeysPicks)
    console.log(this.textContent)

    // this.textContent = (turn == CATS) ? CATS : MONKEYS
    // turn = (turn == CATS) ? MONKEYS : CATS
    //Determine index of Square
    //change paragraph text content 🐱 or 🐒
    //check for a winner
    //check for draw

    checkWinner()
    // checkDraw()
}

function checkWinner() {
    let display;
    if (JSON.stringify(catsPicks) == JSON.stringify([0, 1, 2]) ||
        JSON.stringify(catsPicks) == JSON.stringify([3, 4, 5]) ||
        JSON.stringify(catsPicks) ==JSON.stringify([6, 7, 8]) ||
        JSON.stringify(catsPicks) == JSON.stringify([0, 4, 8]) ||
        JSON.stringify(catsPicks) == JSON.stringify([2, 4, 6]) ||
        JSON.stringify(catsPicks) == JSON.stringify([0, 3, 6]) ||
        JSON.stringify(catsPicks) == JSON.stringify([1, 4, 7]) ||
        JSON.stringify(catsPicks) == JSON.stringify([2, 5, 8]) ||
        JSON.stringify(catsPicks) == JSON.stringify([6, 4, 2])
    )
        display = "Player 1 has Won!!!🐱🐱"
    else if (JSON.stringify(monkeysPicks) === JSON.stringify([0, 1, 2]) ||
        JSON.stringify(monkeysPicks) === JSON.stringify([3, 4, 5]) ||
        JSON.stringify(monkeysPicks) === JSON.stringify([6, 7, 8]) ||
        JSON.stringify(monkeysPicks) === JSON.stringify([0, 4, 8]) ||
        JSON.stringify(monkeysPicks) === JSON.stringify([2, 4, 6]) ||
        JSON.stringify(monkeysPicks) === JSON.stringify([0, 3, 6]) ||
        JSON.stringify(monkeysPicks) === JSON.stringify([1, 4, 7]) ||
        JSON.stringify(monkeysPicks) === JSON.stringify([2, 5, 8]) ||
        JSON.stringify(monkeysPicks) === JSON.stringify([6, 4, 2])

    )
        display = "Player 2 has Won!!!🐒🐒"
        displayEl.textContent = display
}


// function checkDraw() {

// }