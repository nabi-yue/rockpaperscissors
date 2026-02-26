let resultOfMatchContainer = document.querySelector(".results");

let resultsOfAction = document.createElement("p");
resultOfMatchContainer.appendChild(resultsOfAction);

let rockButton = document.querySelector(".rock-button");
let paperButton = document.querySelector(".paper-button");
let scissorsButton = document.querySelector(".scissors-button");
let humanScoreTracker = document.querySelector(".player-score");
let computerScoreTracker = document.querySelector(".computer-score");
let humanScoreCount = 0;
let computerScoreCount = 0;

humanScoreTracker.textContent = humanScoreCount;
computerScoreTracker.textContent = computerScoreCount;


function getComputerChoice() {
    let chosenNumber = ((Math.floor(Math.random()*3))+1);
    let computerChoice;
    switch (chosenNumber) {
        case 1:
            computerChoice="rock"
            break;
        case 2:
            computerChoice="paper"
            break;
        case 3:
            computerChoice="scissors"
            break;
    };
    return computerChoice;
};

let computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    computerSelection = getComputerChoice();
    if(humanScoreCount < 5 && computerScoreCount < 5){
        switch(humanChoice) {
            case "rock":
                if(computerChoice==="paper"){
                    resultsOfAction.textContent = "you lose";
                    computerScoreCount++
                    computerScoreTracker.textContent = computerScoreCount;
                } else if (computerChoice==="scissors"){
                    resultsOfAction.textContent = "you win";
                    humanScoreCount++;
                    humanScoreTracker.textContent = humanScoreCount;
                } else if (computerChoice==="rock") {
                    resultsOfAction.textContent = "you tied";
                }
                break;
            case "paper":
                if(computerChoice==="scissors"){
                    resultsOfAction.textContent = "you lose";
                    computerScoreCount++
                    computerScoreTracker.textContent = computerScoreCount;
                } else if (computerChoice==="rock"){
                    resultsOfAction.textContent = "you win";
                    humanScoreCount++;
                    humanScoreTracker.textContent = humanScoreCount;
                } else if (computerChoice==="paper") {
                    resultsOfAction.textContent = "you tied";
                }
                break;
            case "scissors":
                if(computerChoice==="rock"){
                    resultsOfAction.textContent = "you lose";
                    computerScoreCount++;
                    computerScoreTracker.textContent = computerScoreCount;
                } else if (computerChoice==="paper"){
                    resultsOfAction.textContent = "you win";
                    humanScoreCount++;
                    humanScoreTracker.textContent = humanScoreCount;
                } else if (computerChoice==="scissors") {
                    resultsOfAction.textContent = "you tied";
                }
                break;
        };
    } 
    if (humanScoreCount==5){
            alert ("You win!");
        } else if (computerScoreCount==5){
            alert ("You lose!");
        }
};

rockButton.addEventListener("click", () => {
    let humanSelection = "rock";
    playRound(humanSelection, computerSelection);
});

paperButton.addEventListener("click", () => {
    let humanSelection = "paper";
    playRound(humanSelection, computerSelection);
});

scissorsButton.addEventListener("click", () => {
    let humanSelection = "scissors"
    playRound(humanSelection, computerSelection);
});





