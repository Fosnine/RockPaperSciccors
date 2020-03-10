let playerScore;
let computerScore;
let playerSelection;
let computerSelection
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case (0): computerSelection = "rock";
        break;
        case (1): computerSelection = "paper";
        break;
        case (2): computerSelection = "sciccors";
        break;
    }  
}
function playRound(playerSelection) {
    computerPlay();
    round.textContent = `ROUND ${nRound}`;
    results.appendChild(round);
    if (playerSelection == computerSelection) {
        computerScore += 0;
        playerScore += 0;
        roundResult.textContent = `You both picked ${playerSelection}, it's a draw!`;
        console.log(roundResult);
        results.appendChild(roundResult);
    }
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case("paper"):  
                    computerScore += 1;
                    roundResult.textContent = `You lost.. ${computerSelection} beats ${playerSelection}.`;                                       
                    results.appendChild(roundResult);
                    break;
            case("sciccors"):
                    playerScore += 1; 
                    roundResult.textContent = `Congratulations, you won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`;                                        
                    results.appendChild(roundResult);
                    break;
        }
    }
    if (playerSelection == "paper") {
        switch (computerSelection) {
            case("sciccors"): 
                    computerScore += 1;
                    roundResult.textContent = `You lost.. ${computerSelection} beats ${playerSelection}.`;    
                    results.appendChild(roundResult);
                    break;
            case("rock"): 
                    playerScore += 1;
                    roundResult.textContent = `Congratulations, you won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`;
                    results.appendChild(roundResult);
                    break;
        }
    }
    if (playerSelection == "sciccors") {
        switch (computerSelection) {
            case("rock"): 
                    computerScore += 1;
                    roundResult.textContent = `You lost.. ${computerSelection} beats ${playerSelection}.`;    
                    results.appendChild(roundResult);
                    break;
            case("paper"): 
                    playerScore += 1;
                    roundResult.textContent = `Congratulations, you won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`;
                    results.appendChild(roundResult);
                    break;
        }
    }
nRound++
score.textContent = `${playerScore} - ${computerScore}`;
results.appendChild(score);

}
function playerSelector() {
    playerSelection = window.prompt("Input your choice").toLowerCase()
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "sciccors") {
    playerSelection = window.prompt(`"${playerSelection}" is not a valid input. Please input rock, paper or sciccors`).toLowerCase();
    }
}
function playTo5points() {
    let playerScore = 0;
    let computerScore = 0;
    while ( (playerScore < 5) && (computerScore < 5) ) {
        computerPlay();
        playRound(e.target.value, computerSelection);
    }
}


playerScore = 0;
computerScore = 0;
nRound = 1;
addEventListener("click" , function(e) {
    console.log(nRound);
    if (nRound == 1) {
        finalResult.textContent = "";
    }
    if (e.target.value == undefined){
        return;
    } else {
        playRound(e.target.value);
        if ((playerScore>=5) || (computerScore>=5)) {
            if (playerScore>=5) {
                finalResult.textContent = `Congratulations, you won! the final result was ${playerScore} - ${computerScore}.`;
                
            } else {
                finalResult.textContent = `Too bad, you lost... the final result was ${playerScore} - ${computerScore}.`;
                
            }
            playerScore = 0;
            computerScore = 0;
            nRound = 1;
        }
    }
})
const btn = document.querySelectorAll("button");
const results = document.querySelector("#results");
const roundResult = document.createElement("p");
const score = document.createElement("p");
const round = document.createElement("p");
const finalResult = document.createElement("h3");
const body = document.querySelector("body");
const divider = document.querySelector("#divider");
body.insertBefore(results, divider);
body.insertBefore(finalResult, results);
score.classList.add("score", "center");
round.classList.add("round", "center");
roundResult.classList.add('roundResult', 'center');