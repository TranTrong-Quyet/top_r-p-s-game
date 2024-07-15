console.log('Hello World');

function getComputerChoice() {
    const moves = ['rock', 'paper', 'scissors'];
    randomIndex =  Math.floor(Math.random() * moves.length);
    return moves[randomIndex]; 
}

function getHumanChoice() {
    const playerChoice = prompt('Enter your choice')
    return playerChoice.toLowerCase();
};

// Determine the winer
function playRound(humanSelection, computerSelection) {
         if (humanSelection === computerSelection) {
            console.log(`It is a tie, Both choose ${humanSelection}`);
         } else if (
          (humanSelection === 'rock' && computerSelection === 'paper') ||
          (humanSelection === 'scissors' && computerSelection === 'rock')  ||
          (humanSelection === 'paper' && computerSelection === 'scissors')
         ) {
            console.log(`Bot wins! You choose ${humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1)}, Bot chooses ${computerSelection}`);
            return 'Computer';
            
         } else if (
          (humanSelection === 'paper' && computerSelection === 'rock') ||
          (humanSelection === 'rock' && computerSelection === 'scissors')  ||
          (humanSelection === 'scissors' && computerSelection === 'paper')
         )  {
            console.log(`You wins! You choose ${humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1)}, Bot chooses ${computerSelection}`)
            return 'Human';

         } else 
             {
            alert('Please choose a valid move')
        }
         
};




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        const winner = playRound(humanSelection, computerSelection);

        if (winner === 'Human') {
            humanScore++;
        } else if (winner === 'Computer') {
            computerScore++;
        };

        console.log(`Round ${i+1},Your score is now: ${humanScore}, Bot's score is: ${computerScore}`);
    }
    // humanScore > computerScore ? console.log(`You win the game`) : console.log('You lose the game');
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("The game is a tie!");
    }
}

playGame()
//This is the code from the other branch !!