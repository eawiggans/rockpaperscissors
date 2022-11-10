// ## Instructions

// The completed application should meet the following criteria:

var wins = 0;
var losses = 0;
var ties = 0;

var letsGo = alert("let's play rock, paper, scissors!");

function playGame() {

    var enterHere = prompt("enter r, p, or s")

    if (enterHere === "r" || enterHere === "p" || enterHere === "s") {
        var options = ("r" + "p" + "s");
        var response = Math.floor(Math.random() * options.length);
        var compChoice = options[response]
        

        if (
            enterHere == "s" && compChoice == "s" ||
            enterHere == "s" && compChoice == "s" ||
            enterHere == "s" && compChoice == "s"
        ) {
            ties++
            alert("you tie.")
        }
        else if (
            enterHere == "s" && compChoice == "p" ||
            enterHere == "r" && compChoice == "s" ||
            enterHere == "p" && compChoice == "r"
        ) {
            wins++
            alert("you win!")
        }
        else {
            losses++
            alert("you lose.")
        }

        alert("stats:\nwins: " + wins + "\nlosses: " + losses + "\nties: " + ties);

        var playAgain = confirm("want to play again?")
        if (playAgain) {
            playGame()
        }
        else {
            document.write("thanks for playing! see ya later.");
        }
    }
    else {
        alert("please enter r, p, or s!")
        playGame();
    }
}

playGame();
   