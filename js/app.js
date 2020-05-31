/*************
 * Variables *
 ************/
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


/**************
 * Game Logic *
 *************/
// Win condition
// This array contains all the possible ways to win a game
var win = [
// rows
    [aa, ab, ac],
    [ba, bb, bc],
    [ca, cb, cc],
// columns
    [aa, ba, ca],
    [ab, bb, cb],
    [ac, bc, cc],
// diagonals
    [aa, bb, cc],
    [ca, bb, ac]
];



/**********
 * Events * 
 *********/
// when divs are clicked on -->> write `x` and `o`
// top row
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
//this function 
//pushes event information to array
function major(e) {
    console.log("The id is: " + e.target.id);
}



