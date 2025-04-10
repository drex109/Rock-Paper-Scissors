// FUNCTION returns rock, paper, or scissors
    // assigns a random number between 1 & 3 to a variable
    // IF random number is 1
        // RETURN rock
    // IF random number is 2  
        // RETURN paper
    // ELSE
        // RETURN scissors
function getCompChoice() {
    let randomNum = Math.floor((Math.random() * 3) + 1);
    if (randomNum === 1) {    
        return "rock"
    } else if (randomNum == 2) {    
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(getCompChoice());

// FUNCTION returns players choice of rock, paper, or scissors
    // ask the user their choice and store in variable
    // IF the players choice is a valid pick
        // store that choice in a variable and return it
    // ELSE
        // return and error and try again

function getHumanChoice() {
    let choice = prompt('rock, paper, or scissors?').toLowerCase();
    if (choice == 'rock' 
        || choice == 'paper' 
        || choice == 'scissors') {
            return choice.toLowerCase();
    } else {
        console.log('Invalid input. Please try again.');
        return alert('Invalid input. Please try again.');
    }
}

console.log(getHumanChoice());

let humanScore = 0;
let compScore = 0;

// FUNCTION takes player choice and computer choice as arguments
    // IF player choice is rock and comp choice is scissors
    // OR player chose paper and comp chose rock
    // OR player chose scissors and comp chose paper
        // log player as winner
    // ELSE
        // log player as loser

function playRound(humanChoice, compChoice) {
    if ((humanChoice == 'rock' && compChoice == 'scissors') 
        || (humanChoice == 'paper' && compChoice == 'rock')
        || (humanChoice == 'scissors' && compChoice == 'paper')) {
            console.log('You won the round!');
            return alert('You won the round!');
        } else {
            console.log('You lost! Better luck next time!');
            alert('You lost! Better luck next time!');
        }
}