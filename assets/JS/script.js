

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

/*eventlistener for when the submit button is clicked. if submit button clicked alert given. 
else the other buttons will give the alert based on the button clicked(i.e.gametype - multiplication or division etc.) */

    for(let button of buttons) {
        button.addEventListener("click",function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You Clicked Submit!");
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You Clicked ${gameType}`);
            }
        })
    }
})


/**
 * The main game "loop", called when the script is first loaded 
 * and after the users answer has been processed 
 */

function runGame () {

    //creates two random numbers between 1 and 24. adds 1 to prevent 0 from being generated 
    let num1 = Math.floor(Math.random() * 25+) 1
    let num2 = Math.floor(Math.random() * 25+) 1
}

function checkAnswer() {

}

function CalculateCorrectAnswer () { 

}

function IncrementScore () {

}

function IncrementWrongAnswer () {

}

function AdditionQuestion () {

}

function SubtractQuestion () {

}

function MultiplyQuestio () {

}