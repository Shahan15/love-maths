

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

/*eventlistener for when the submit button is clicked. if submit button clicked alert given. 
else the other buttons will give the alert based on the button clicked(i.e.gametype - multiplication or division etc.) */

    for(let button of buttons) {
        button.addEventListener("click",function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

   document.getElementById('answer-box').addEventListener("keydown",function(event) {
    if(event.key==="Enter") {
        checkAnswer();
    }
   })

    runGame("addition");
});


/**
 * The main game "loop", called when the script is first loaded 
 * and after the users answer has been processed 
 */

function runGame (gameType) {

    document.getElementById('answer-box').value = "";
    document.getElementById('answer-box').focus();
    
    //creates two random numbers between 1 and 24. adds 1 to prevent 0 from being generated 
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType==="addition"){ 
        displayAdditionQuestion (num1, num2);
    } else if (gameType==="multiply") {
        MultiplyQuestion (num1, num2);
    } else if (gameType==="subtract") {
        SubtractQuestion (num1, num2);
    } else if (gameType==="division") {
        DivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}


/**
 * Checks the answer against the first element in the CalculateCorrectAnswer array
 * (as answer is returned as an array) ([X,'addition] with X being the answer)
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = CalculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert ('Well done you got the correct answer :D');
        IncrementScore();
    } else {
        alert (`Awww....you answered ${userAnswer} however the correct answer was ${calculatedAnswer[0]}! `);
        IncrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * gets the operator and the operand directly from the DOM and calculates
 *  if it is the correct answer 
 */

function CalculateCorrectAnswer () { 
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x"){
        return [operand1*operand2, "multiply"];
    } else if (operator === "-"){
        return [operand1-operand2, "subtract"];
    } else if (operator=== "/") {
        return [operand1/operand2, "division"];
    }
    else {
        alert(`Unimplemented operator ${operator} `);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * Adds 1 to correct answers (score) if answer is correct
 */

function IncrementScore () {
    let score = parseInt(document.getElementById('scores').innerHTML)
    document.getElementById('scores').innerText = score + 1 
}

/**
 * Adds 1 to incorrect answers (incorrect) if answer is incorrect
 */
function IncrementWrongAnswer () {
    let incorrect = parseInt(document.getElementById('incorrect').innerHTML)
    document.getElementById('incorrect').innerText = incorrect + 1 
}

/**
 * Displays the addition question
 */

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    
}

/**
 * Displays the subtraction question, makes sure there are no negative answers 
 */
function SubtractQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

/**
 * Displays the multiplication question
 */
function MultiplyQuestion (operand1,operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function DivisionQuestion (operand1, operand2) { 
    operand1 = operand1 * operand2;
    
    document.getElementById('operand1').textContent = operand1 
    document.getElementById('operand2').textContent = operand2
    document.getElementById('operator').textContent = "/";
}


