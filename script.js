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

async function getHumanChoice() {
    let playerChoice = document.querySelector("#player-choices");
    // trying to refactor my code to work while changing very little led me to learning about promises
    return new Promise((resolve) => {
        playerChoice.addEventListener('click', (e) => {
            let target = e.target;
            switch(target.id) {
                case 'rock':
                case 'paper':   
                case 'scissors':
                    resolve(target.id);  
                    break;
            }
        }, { once: true });
    });
}

async function playGame() {
    let humanScore = 0;
    let compScore = 0;
    const choice = await getHumanChoice();

    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(choice, getCompChoice());       
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
        console.log('You lost the game! Your score: ' + humanScore +' Computer score: ' + compScore)
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
    
    let resultTxt = document.querySelector('#results');

}
playGame();     