//these are global variables


//audio files
var gamestartaudio = new Audio("assets/audio/characterselect.mp3")
var audioLose = new Audio('assets/audio/lose.mp3')
var versus = new Audio('assets/audio/versus.mp3')
var winaudio = new Audio('assets/audio/win.mp3')

//GOOGLE CHROME DOESN'T WANT TO AUTOPLAY BECAUSE IT INTERNAL SETTINGS

//the words/assets

var character = [
    { name: "ryu", win: 'assets/images/ryu.gif', lose: 'assets/images/ryulose.gif'},
    { name: "ken", win: 'assets/images/ken.gif', lose: 'assets/images/kenlose.gif'},
    { name: "cammy", win: 'assets/images/cammy.gif', lose: 'assets/images/cammylose.gif' },
    { name: "balrog", win: 'assets/images/balrog.gif', lose: 'assets/images/balroglose.gif' },
    { name: "honda", win: 'assets/images/honda.gif', lose: 'assets/images/hondalose.gif' },
    { name: "zangief", win: 'assets/images/zangief.gif', lose: 'assets/images/zangieflose.gif' },
    { name: "guile", win: 'assets/images/guile.gif', lose: 'assets/images/guilelose.gif' },
    { name: "dhalsim", win: 'assets/images/dhalsim.gif', lose: 'assets/images/dhalsimlose.gif' },
    { name: "sagat", win: 'assets/images/sagat.gif', lose: 'assets/images/sagatlose.gif' },
    { name: "blanka", win: 'assets/images/blanka.gif', lose: 'assets/images/blankalose.gif' },
    { name: "chunli", win: 'assets/images/chun-li.gif', lose: 'assets/images/chun-lilose.gif' },
    { name: "thawk", win: 'assets/images/thawk.gif', lose: 'assets/images/thawklose.gif' },
    { name: "feilong", win: 'assets/images/feilong.gif', lose: 'assets/images/feilonglose.gif' },
    { name: "deejay", win: 'assets/images/deejay.gif', lose: 'assets/images/deejaylose.gif' }
]

//Game is set to false at the start to prevent any accidental key presses.
let gameState = false;

//THE CHOSEN!
var chosenCharacter = "";
//the letters inside the character 
var lettersinCharacter = [];
//number of blanks in character word 
var characterBlanks =[];
//holds right letters 
var answersArray = [];
//holds wrong letters 
var wrongLetter = [];

//holds the guessed letters regardless of right or wrong. (actually records any keypress)
let guessedLetters = ["Alt", 'Control', 'Space'];


//the wins and losses, counter variables
var wins = 0;
var losses = 0;
var guessesleft = 5;
var rightGuess = 0;

//if gamestate is true, keypresses should work.

//when a key is pressed down this should be recorded.
document.onkeydown = function (event) {
    if (gameState) {
        var guess = event.key
        if (!guessedLetters.includes(guess)) {
            guessedLetters.push(guess);
        }
        else {
        }
        compareLetters(guess);
        winLose();
    }
}

//=================
//~~ GAME START ~~
//=================

function gamestart() {
    gameState = true;

    console.log(gameState);

    //plays our audio file.
    versus.play();
    if (gamestartaudio.play) {
        gamestartaudio.pause();
    } else {
        gamestartaudio.currentTime = 0
    }
    audioLose.pause();
    document.getElementById('characterimage').src = "assets/images/ssf2poster.jpg";
    document.getElementById("gamestart").innerHTML = "Type a letter to begin!"
    document.getElementById('button').innerHTML = "RESET"

    //This picks a random word from characters
    chosenCharacter = character[Math.floor(Math.random() * character.length)].name

    //split allows for the letters to be their own string
    lettersinCharacter = chosenCharacter.split('');

    //This gives the number of blank spaces 
    characterBlanks = lettersinCharacter.length;


    //resets after game win/loss
    rightGuess = 0;
    guessesleft = 5;
    wrongLetter = [];
    answersArray = [];
    guessedLetters = [];

    //for blanks
    for (var i = 0; i < characterBlanks; i++) {
        answersArray[i] = "_"; //places the underscores to replace the letters
        document.getElementById('answer').innerHTML = answersArray;  //puts it in the selected id in the html
    }

    document.getElementById("gamestart").innerHTML = "Type a letter to begin!"
    document.getElementById("guessesleft").innerHTML = "Guesses Left: " + guessesleft;
    document.getElementById("answer").innerHTML = answersArray.join(' ');
    document.getElementById("wrong").innerHTML = wrongLetter;
}

//=================
//~~~~~ RESET ~~~~~
//=================
function reset() {

    gameState = true;

    //resets theme after win/lose.
    versus.play();
    if (gamestartaudio.play) {
        gamestartaudio.pause();
    } else {
        gamestartaudio.currentTime = 0
    }
    audioLose.pause();


    document.getElementById("gamestart").innerHTML = "Type a letter to begin!"
    document.getElementById('button').innerHTML = "RESET"

    //reset code
    chosenCharacter = character[Math.floor(Math.random() * character.length)].name
    lettersinCharacter = chosenCharacter.split('');
    characterBlanks = lettersinCharacter.length;
    //reset variables
    letterGuessed = 0;
    rightGuess = 0;
    guessesleft = 5;
    guessedLetters = [];
    wrongLetter = [];
    answersArray = [];
    test = false;
    gamestart();
}


function compareLetters(userGuess) {
    if (chosenCharacter.indexOf(userGuess) > -1 || !guessedLetters.includes(userGuess)) //user input check
    {
        for (var i = 0; i < characterBlanks; i++) //this is the loop that checks blanks
        {
            if (lettersinCharacter[i] === userGuess)//this fills in user's correct letter into the array
            {
                rightGuess++;
                answersArray[i] = userGuess;
                document.getElementById('answer').innerHTML = answersArray.join('');
            }


        }
    }
    //wrong stuff
    else {
        wrongLetter.push(userGuess);
        guessesleft--;
        document.getElementById("guessesleft").innerHTML = "Guesses Left: " + guessesleft;
        document.getElementById("wrong").innerHTML = "Wrong Letters <br><br>" + wrongLetter;

    }
}
function winLose() {
    if (rightGuess === characterBlanks) {
        wins++;
        document.getElementById('wins').innerHTML = "Wins " + wins;
        document.getElementById('answer').innerHTML = chosenCharacter.toUpperCase();
        document.getElementById('gamestart').innerHTML = "YOU WIN! <br><br> Press CONTINUE to play again!"
        document.getElementById('button').innerHTML = "CONTINUE?"
        winaudio.play();
        gameState = false;


        for (var p = 0; p < character.length; p++) {
            if (character[p].name == chosenCharacter) {
                document.getElementById('characterimage').src = character[p].win;
            }
        }
    }
    else if (guessesleft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses " + losses;
        document.getElementById("answer").innerHTML = chosenCharacter.toUpperCase();
        document.getElementById('gamestart').innerHTML = "YOU LOSE <br><br> Will you TRY AGAIN? <br> (Or Press Any Key to TRY AGAIN!)"
        document.getElementById('button').innerHTML = "TRY AGAIN?"
        gamestartaudio.pause();
        audioLose.currentTime = 0; //resets the lose theme to 0
        audioLose.play();
        gameState = false;

        for (var p = 0; p < character.length; p++) {
            if (character[p].name == chosenCharacter) {
                document.getElementById('characterimage').src = character[p].lose;
            }
        }

    }
}


