function getCompChoice() {
    let randomNum = Math.floor((Math.random() * 3) + 1);
    if (randomNum === 1) {    
        return "rock"
    } else if (randomNum === 2) {    
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt('rock, paper, or scissors?');
    if (choice.toLowerCase() == 'rock' 
        || choice.toLowerCase() == 'paper' 
        || choice.toLowerCase() == 'scissors') {
            return choice.toLowerCase();
    } else {
        console.log('Invalid input. Please try again.');
        return alert('Invalid input. Please try again.');
    }
}

function playGame() {
    let humanScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(getHumanChoice(), getCompChoice());       
        if (roundResult == 'You won the round!') {
            humanScore++
            alert('You won the round!');
        } else if (roundResult == 'You lost! Better luck next time!') {
            compScore++
            alert('Round lost! Better luck next time!');
        } else {
            alert('Draw!');
        }    
    }
    console.log(humanScore);
    console.log(compScore);
    if (humanScore > compScore){
        console.log('Congrats, you won the game! Your score: ' + humanScore +' Computer score: ' + compScore)
        alert('Congrats, you won the game! Your score: ' + humanScore +' Computer score: ' + compScore);
    } else if (compScore > humanScore) {
        console.log('YOu lost the game! Your score: ' + humanScore +' Computer score: ' + compScore)
        alert('You lost the game! Your score: ' + humanScore +' Computer score: ' + compScore);
    } else {
        console.log('Tie!')
        alert('Tie!')
    }

    function playRound(humanChoice, compChoice) {
        if ((humanChoice == 'rock' && compChoice == 'scissors') 
            || (humanChoice == 'paper' && compChoice == 'rock')
            || (humanChoice == 'scissors' && compChoice == 'paper')) {
                console.log(humanChoice);
                console.log(compChoice);
                console.log('You won the round!');
                return 'You won the round!';
        } else if ((compChoice == 'rock' && humanChoice == 'scissors') 
            || (compChoice == 'paper' && humanChoice == 'rock')
            || (compChoice == 'scissors' && humanChoice == 'paper')) {
                console.log(humanChoice);
                console.log(compChoice);
                console.log('You lost! Better luck next time!');
                return 'You lost! Better luck next time!'
        } else {
            console.log(humanChoice);
            console.log(compChoice);
            console.log('Draw!');
            return 'Draw!';
        }   
    }
}
playGame();     