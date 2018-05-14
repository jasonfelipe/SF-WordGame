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
    }

    //This sets up the players progress towards guessing the word
    var remainingLetters = word.length;

    // The game loop
    while (remainingLetters > 0) {
        // Show the player their progress
        alert(answerArray.join(" "));



        // Get a guess from the player
        var guess = prompt("Guess a letter, or click Cancel to stop playing.");
        if (guess === null) {
            // Exit the game loop
            break;
        } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
        } else {
            // Update the game state with the guess
            for (var j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        } // The end of the game loop
    }
    // Show the answer and congratulate the player
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);

}