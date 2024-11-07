

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click",function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked submit!");
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
        })
    }
})



function runGame () {

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