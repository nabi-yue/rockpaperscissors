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


function getHumanChoice() {
    let humanChoice = prompt("Pick between rock paper or scissors");
    return humanChoice;
};



let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;
    
    function playRound(humanChoice, computerChoice){
        switch(humanChoice) {
            case "Rock":
                    if(computerChoice="paper"){
                        console.log("You lose! Paper beats Rock");
                        computerScore++;
                    } else if(computerChoice="scissors"){
                        console.log("You win! Rock beats Scissors");
                        humanScore++;
                    } else if(computerChoice="rock"){
                        console.log("You tied!")
                    }
                    break;
            case "Scissors":
                if(computerChoice="paper"){
                        console.log("You win! Scissors beats Paper");
                        humanScore++;
                    } else if(computerChoice="rock"){
                        console.log("You lose! Rock beats Scissors");
                        computerScore++;
                    } else if(computerChoice="scissors"){
                        console.log("You tied!")
                    }
                    break;
            case "Paper":
                    if(computerChoice="rock"){
                        console.log("You win! Paper beats Rock");
                        humanScore++;
                    } else if(computerChoice="scissors"){
                        console.log("You lose! Rock beats Paper");
                        computerScore++;
                    } else if (computerChoice="paper"){
                        console.log("You tied!")
                    }
                    break;
        };

        console.log(computerChoice);
        return humanScore, computerScore;
    };

    
    while(roundCount<5){
        playRound(humanSelection, computerSelection);
        if(humanSelection!=undefined && computerSelection!=undefined){
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
        }
        roundCount++
    }

    if(roundCount=5){
        console.log(`Number of Rounds:${roundCount}, Human Score: ${humanScore}, Computer Score: ${computerScore}`)
    }
};



playGame();