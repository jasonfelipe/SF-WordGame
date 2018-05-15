
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

    document.getElementById("gamestart").innerHTML = "Type a letter to begin!"
    document.getElementById("userInput").innerHTML = "You just typed "

    var userGuess = document.getElementById("userGuess");

    document.onkeyup = function (event) {
        userGuess.textContent = event.key;
    };


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


        if (userGuess != word) {
            document.getElementById("gamestart").innerHTML = "You got it wrong!"
        }
        else {
            for (var j = 0; j < word.length; j++) {
                if (word[j] === userGuess) {
                    answerArray[j] = userGuess;
                    remainingLetters--;
                }
            }
        }
    

}
