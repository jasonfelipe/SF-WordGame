//these are global variables


//audio files
var gamestartaudio = new Audio ("assets/audio/characterselect.mp3")
var audioLose = new Audio ('assets/audio/lose.mp3')
var versus = new Audio ('assets/audio/versus.mp3')
var winaudio = new Audio ('assets/audio/win.mp3')

//GOOGLE CHROME DOESN'T WANT TO AUTOPLAY BECAUSE IT INTERNAL SETTINGS

//the words
var characters = [
    "ryu",
    "ken",
    "cammy",
    "balrog", 
    "honda",
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

//I don't know what to do with these.
var characterwin = [
    {name: "ryu", image: 'assets/images/ryu.gif'},
    {name: "ken", image: 'assets/images/ken.gif'},
    {name: "cammy", image: 'assets/images/cammy.gif'},
    {name: "balrog", image:'assets/images/balrog.gif'},
    {name: "honda", image: 'assets/images/honda.gif'},
    {name: "zangief", image: 'assets/images/zangief.gif'},
    {name: "guile", image: 'assets/images/guile.gif'},
    {name: "dhalsim", image: 'assets/images/dhalsim.gif'},
    {name: "sagat", image: 'assets/images/sagat.gif'},
    {name: "blanka", image: 'assets/images/blanka.gif'},
    {name: "chunli", image: 'assets/images/chunli.gif'},
    {name: "thawk", image: 'assets/images/thawk.gif'},
    {name: "feilong", image: 'assets/images/feilong.gif'},
    {name: "deejay", image: 'assets/images/deejay.gif'}
]
//I dont undertand
console.log(characterwin[{name}])

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

    //resets theme after win/lose.
    versus.play();
        if (gamestartaudio.play) {
        gamestartaudio.pause();
        }else{
        gamestartaudio.currentTime = 0
        }
    audioLose.pause();


    document.getElementById("gamestart").innerHTML = "Type a letter to begin!"
    document.getElementById('button').innerHTML = "RESET"

    //reset code
    chosenCharacter = characters[Math.floor(Math.random() *characters.length)];
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
    versus.play();
        if (gamestartaudio.play) {
        gamestartaudio.pause();
        }else{
        gamestartaudio.currentTime = 0
        }
    audioLose.pause();

    document.getElementById('characterimage').src = "assets/images/ssf2poster.jpg";

    document.getElementById("gamestart").innerHTML = "Type a letter to begin!"
    document.getElementById('button').innerHTML = "RESET"

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
        var userGuess = event.key //event is something the browser regisers
                                  //the browser 
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
            winaudio.play();
            console.log(chosenCharacter);
            

            for (var p = 0; p < characterwin.length; p++){ //Ok remember, double or triple equals is a comparison
                                                            // one equals assigns a value!!
                if (characterwin[p].name == chosenCharacter){
                     document.getElementById('characterimage').src = characterwin[p].image;
                } 
            }
        }
    else if (guessesleft === 0){
        losses++;
        document.getElementById("losses").innerHTML = "Losses " + losses;
        document.getElementById("answer").innerHTML = chosenCharacter.toUpperCase();
        document.getElementById('gamestart').innerHTML = "YOU LOSE <br><br> Will you TRY AGAIN? <br> (Or Press Any Key to TRY AGAIN!)"
        document.getElementById('button').innerHTML = "TRY AGAIN?"
        gamestartaudio.pause();
        audioLose.currentTime = 0; //resets the lose theme to 0
        audioLose.play();

        }
    }


//Not sure how I can improve this...
function winlossReset() {
    if (guessesleft <= -1) 
    {
        reset();
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
            winlossReset(); //supposed to reset if user presses any key after a loss, 
                         //but if user presses a key that's correct.... well... it breaks the game.
            winLose();
		}
	}		
		
}
