/*************
 * Variables *
 ************/
var gamePrompt = document.getElementById('msgbox');
var boardGame = document.getElementById('board-game');
var topLeft = document.getElementById('aa');
var topMid = document.getElementById('ab');
var topRight = document.getElementById('ac');
var midLeft = document.getElementById('ba');
var mid = document.getElementById('bb');
var midRight = document.getElementById('bc');
var botLeft = document.getElementById('ca');
var botMid = document.getElementById('cb');
var botRight = document.getElementById('cc');
var getAll = document.getElementsByClassName('grid');
var count = 0;

var playerX = [];
var playerO = [];

// Win condition
// This array contains all the possible ways to win a game
var win = [
// rows
    ['aa', 'ab', 'ac'],
    ['ba', 'bb', 'bc'],
    ['ca', 'cb', 'cc'],
// columns
    ['aa', 'ba', 'ca'],
    ['ab', 'bb', 'cb'],
    ['ac', 'bc', 'cc'],
// diagonals
    ['aa', 'bb', 'cc'],
    ['ca', 'bb', 'ac']
];

/**********
 * Events * 
 *********/
// when divs are clicked on: write `x` and `o`
// top row:
topLeft.addEventListener('click', major);
topMid.addEventListener('click', major);
topRight.addEventListener('click', major);
midLeft.addEventListener('click', major);
mid.addEventListener('click', major);
midRight.addEventListener('click', major);
botLeft.addEventListener('click', major);
botMid.addEventListener('click', major);
botRight.addEventListener('click', major);


/*************
 * Functions *
 ************/
function turn() {
// determines `x` when true and `o` when false
    if (count % 2 === 0) {
// returns true for even turns: 0, 2, 4, 6, 8..
        count++;
        return true;
    } else {
// returns false for odd turns: 1, 3, 5, 7, 9..
        count++;
        return false;
    }
}
// check which player won by checking `count` even or odd
function whichPlayer(count) {
    if (count % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Function to check win condition
function checkWin(playerArray) {
    for (i = 0; i < win.length; i++) {
        let counter = 0;
        for (j = 0; j < win[i].length; j++) {
           if (playerArray.includes(win[i][j])) {
            counter++;
            if (counter === 3) {
                let whoWon = whichPlayer(count);
                    if (whoWon) {
                        gamePrompt.textContent = "O wins!";
                    } else {
                        gamePrompt.textContent = "X wins!";
                    }
                    shutDown();
                }
            }
        }
    }   
}

function shutDown() {
    topLeft.removeEventListener('click', major);
    topMid.removeEventListener('click', major);
    topRight.removeEventListener('click', major);
    midLeft.removeEventListener('click', major);
    mid.removeEventListener('click', major);
    midRight.removeEventListener('click', major);
    botLeft.removeEventListener('click', major);
    botMid.removeEventListener('click', major);
    botRight.removeEventListener('click', major);
}



function major(e) {
// this runs everything needed on 'click' event
    // console.log("The id is: " + e.target.id);
    let playerTurn = turn();
    if (e.target.id === 'aa') {
        if (playerTurn) {
            topLeft.textContent = 'X';
        } else {
            topLeft.textContent = 'O';
        }
    } if (e.target.id === 'ab') {
        if (playerTurn) {
            topMid.textContent = 'X';
        } else {
            topMid.textContent = 'O';
        }
    } if (e.target.id === 'ac') {
        if (playerTurn) {
            topRight.textContent = 'X';
        } else {
            topRight.textContent = 'O';
        }
    } if (e.target.id === 'ba') {
        if (playerTurn) {
            midLeft.textContent = 'X';
        } else {
            midLeft.textContent = 'O';
        }
    } if (e.target.id === 'bb') {
        if (playerTurn) {
            mid.textContent = 'X';
        } else {
            mid.textContent = 'O';
        }
    } if (e.target.id === 'bc') {
        if (playerTurn) {
            midRight.textContent = 'X';
        } else {
            midRight.textContent = 'O';
        }
    } if (e.target.id === 'ca') {
        if (playerTurn) {
            botLeft.textContent = 'X';
        } else {
            botLeft.textContent = 'O';
        }
    } if (e.target.id === 'cb') {
        if (playerTurn) {
            botMid.textContent = 'X';
        } else {
            botMid.textContent = 'O';
        }
    } if (e.target.id === 'cc') {
        if (playerTurn) {
            botRight.textContent = 'X';
        } else {
            botRight.textContent = 'O';
        }
    }

    //.push to each player's array
    if (playerTurn) {
        playerX.push(e.target.id);
        //checkDraw function;
        if (count === 9) {
            checkWin(playerX)
            if (gamePrompt.textContent !== "X wins!") {
                gamePrompt.textContent = 'DRAW'
            }
        } else {
        checkWin(playerX);
        }
    } else {
        playerO.push(e.target.id);
        //checkDraw function;
        if (count === 9) {
            gamePrompt.textContent = 'DRAW';
            shutDown();
        } else {
            checkWin(playerO);
        }
    }
    e.target.removeEventListener('click', major);
}




