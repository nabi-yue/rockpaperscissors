let resultOfMatchContainer = document.querySelector(".results");

let resultsOfAction = document.createElement("p");
resultOfMatchContainer.appendChild(resultsOfAction);

let rockButton = document.querySelector(".rock-button");

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
    switch(humanChoice) {
        case "rock":
            if(computerChoice==="paper"){
                resultsOfAction.textContent = "you lose";
                console.log("paper");
            } else if (computerChoice==="scissors"){
                resultsOfAction.textContent = "you win";
                console.log("scissors");
            } else if (computerChoice==="rock") {
                resultsOfAction.textContent = "you tied";
                console.log("rock");
            }
            break;
    }
}

rockButton.addEventListener("click", () => {
    let humanSelection = "rock";

    playRound(humanSelection, computerSelection);
    
})

