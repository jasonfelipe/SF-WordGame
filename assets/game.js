var characters = [
    "ryu",
    "vega",
    "bison",
    "ken",
    "cammy",
    "balrog",
    "honda",
    "akuma",
    "zangief",
    "guile",
    "dhalsim",
    "sagat",
    "blanka", 
    "chunli",
    "thawk",
    "feilong",
    "deejay",
]


//This picks a random word from characters
var word = characters[Math.floor(Math.random() * characters.length)];

//This sets the amount of letters as "_" from the amount from a character
var answerArray = [];
for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
}

//This sets up the players progress towards guessing the word
var remainingLetters = word.length;

while (remainingLetters > 0) {
    // Game code goes here
    answerArray.join("");  // Show the player their progress
    // Take input from the player
    // Update answerArray and remainingLetters for every correct guess
   }

function guess () {
    var g = document.getElementById("charactername");
    g.value = g.value.toLowerCase();
}