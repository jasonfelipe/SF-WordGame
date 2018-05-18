//these are global variables


//the words
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


//this is to record which keys were pressed
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
];


//THE CHOSEN!
var chosenCharacter = "";
//the letters inside the character.  array
var lettersinCharacter = [];
//number of blanks in character word. array
var characterBlanks
//holds right letters. array
var answersArray = [];
//holds wrong letters. array
var wrongLetter = [];

//the wins and losses, counter variables
var wins = 0;
var losses = 0;
var guessesleft = 5;
var rightGuess = 0;

//--------------------RESET FUNCTION-------------------------------

function reset() 
{
    //reset code
    chosenCharacter = characters[Math.floor(Math.random() * characters.length)];
    lettersinCharacter = chosenCharacter.split(''); 
    characterBlanks = lettersinCharacter.length;
    
    //reset variables
    letterGuessed = 0;
    rightGuess = 0;
    guessesleft = 5;
    wrongLetter = [];
    answersArray = [];
    alphabet = [
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
    ];
    test=false;
    gamestart();
}
function gamestart() 
{
    //This picks a random word from characters
    chosenCharacter = characters[Math.floor(Math.random() * characters.length)];

    //split allows for the letters to be their own string
    lettersinCharacter = chosenCharacter.split(''); 
    
    //This gives the number of blank spaces 
    characterBlanks = lettersinCharacter.length;


    //resets after game win/loss
    rightGuess = 0;
    guessesleft = 5;
    wrongLetter = [];
    answersArray = [];
    alphabet = [
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
    ];


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


    function compareLetters(userGuess) {
        var userGuess = event.key
        if (chosenCharacter.indexOf(userGuess) > -1) //user input check
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
        else 
            {
                wrongLetter.push(userGuess);
                guessesleft--; 
                document.getElementById("guessesleft").innerHTML =  "Guesses Left: " + guessesleft;
                document.getElementById("wrong").innerHTML = "Wrong Letters <br><br>" + wrongLetter;

            }
}
function winLose ()
{
    if (rightGuess === characterBlanks)
        {
            wins++;
            document.getElementById('wins').innerHTML = "Wins " + wins;
            document.getElementById('answer').innerHTML = chosenCharacter.toUpperCase();
            document.getElementById('gamestart').innerHTML = "YOU WIN! <br><br> Press CONTINUE to play again!"
            document.getElementById('button').innerHTML = "CONTINUE?"

        }
    else if (guessesleft === 0){
        losses++;
        document.getElementById("losses").innerHTML = "Losses " + losses;
        document.getElementById("answer").innerHTML = chosenCharacter.toUpperCase();
        document.getElementById('gamestart').innerHTML = "YOU LOSE <br><br> Will you TRY AGAIN? <br> (Or Press Any Key to TRY AGAIN!)"
        document.getElementById('button').innerHTML = "TRY AGAIN?"
        var audioLose = new Audio ('assets/audio/lose.mp3')
        audioLose.play();
            if (guessesleft  > 0)
            {
                reset();
            }
        }
    }



document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < alphabet.length; i++)
	{	
		if(letterGuessed === alphabet[i] && test === true)
		{
			var spliceDword = alphabet.splice(i,1);
			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}
