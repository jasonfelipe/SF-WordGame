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



var word = characters[Math.floor(Math.random() * characters.length)];

var answerArray = [];
for (var i = 0; i < characters.length; i++) {
 answerArray[i] = "_";
}
var remainingLetters = characters.length;

