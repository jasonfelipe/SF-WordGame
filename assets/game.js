
function gamestart() {


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
        "deejay"
    ];

    //This picks a random word from characters
    var word = characters[Math.floor(Math.random() * characters.length)];


    //This sets the amount of letters as "_" from the chosen character
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    };

    //This sets up the players progress towards guessing the word
    var remainingLetters = word.length;
    document.getElementById("answer").innerHTML = answerArray.join("");
   



    //This shows player input
    //QUESTIONS TO ASK
    //How do I save user keypress as a variable?
    //How do I get userGuess to not be undefined?


    var userGuess = event.key
    document.getElementById("gamestart").innerHTML = "Type a letter to begin!"
    document.getElementById("userInput").innerHTML = "You just typed " + userGuess
    document.onkeyup = function (event) {
        userGuess.textContent = event.key;
    };    

    for (var j = 0; j < word.length; j++) {
        if (word[j] === userGuess) {
            answerArray[j] = userGuess;
            remainingLetters--;
        }
    }
    

}
