
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

    var alphabet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ]

    //this keeps track of wins, losses, and lives
    var wins = 0
    var losses = 0
    var tries = 3



    //This picks a random word from characters
    var word = characters[Math.floor(Math.random() * characters.length)];


    //This sets the amount of letters as "_" from the chosen character
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    //This sets up the players progress towards guessing the word
    var remainingLetters = word.length;
    document.getElementById("answer").innerHTML = answerArray.join("");


    //This shows player input
    //TIPS: the variable of event.key won't work unless the parameter is met inside the brackets.
    //What I mean by this is that userGuess = event.key has to be inside for this to work.
    document.getElementById("gamestart").innerHTML = "Type a letter to begin!"
    // document.onkeyup = function (event) {
    //     var userGuess = event.key
    //     document.getElementById("userInput").innerHTML = "You just guessed " + userGuess


    document.onkeyup = function (event) {
        var userGuess = event.key
        document.getElementById("userInput").innerHTML = "You just guessed " + userGuess

            }

        }

