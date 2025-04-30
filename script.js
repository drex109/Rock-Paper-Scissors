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
    let humanScoreTxt = document.querySelector('#human-score');
    let compScoreTxt = document.querySelector('#computer-score');

    while (humanScore < 5 && compScore < 5) {
        let roundResult = playRound(await getHumanChoice(), getCompChoice());       
        if (roundResult == 'You won the round!') {
            humanScore++;
            humanScoreTxt.textContent = humanScore;
        } else if (roundResult == 'You lost! Better luck next time!') {
            compScore++;
            compScoreTxt.textContent = compScore;    
        }
    }

    let gameTxt = document.querySelector('#game-results');

    console.log(humanScore);
    console.log(compScore);
    if (humanScore > compScore){
        console.log('Congrats, you won the game!');
        gameTxt.style.color = 'green'
        gameTxt.textContent = 'Congrats, you won the game!';
    } else if (compScore > humanScore) {
        console.log('You lost the game!');
        gameTxt.style.color = 'red'
        gameTxt.textContent = 'You lost the game!';
    } else {
        console.log('Tie!');
        gameTxt.textContent = 'Tie!';
    }

    function playRound(humanChoice, compChoice) {
        let roundTxt = document.querySelector('#round-results');

        if ((humanChoice == 'rock' && compChoice == 'scissors') 
            || (humanChoice == 'paper' && compChoice == 'rock')
            || (humanChoice == 'scissors' && compChoice == 'paper')) {
                console.log(humanChoice);
                console.log(compChoice);
                console.log('You won the round!');
                roundTxt.style.color = 'green';
                roundTxt.textContent = 'You won the round!';
                return 'You won the round!';
        } else if ((compChoice == 'rock' && humanChoice == 'scissors') 
            || (compChoice == 'paper' && humanChoice == 'rock')
            || (compChoice == 'scissors' && humanChoice == 'paper')) {
                console.log(humanChoice);
                console.log(compChoice);
                console.log('You lost! Better luck next time!');
                roundTxt.textContent = 'You lost! Better luck next time!';
                roundTxt.style.color = 'red';
                return 'You lost! Better luck next time!';
        } else {
            console.log(humanChoice);
            console.log(compChoice);
            console.log('Draw!');
            roundTxt.style.color = 'black'
            roundTxt.textContent = 'Draw!';
            return 'Draw!';
        }   
    }

}
playGame();     