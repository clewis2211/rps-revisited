//Function that tells the computer to select and return a random element from the array
function computerPlay(){
    const computerArray = ['Rock', 'Paper', 'Scissors'];
    let item = computerArray[Math.floor(Math.random()*computerArray.length)]
    // console.log(item)
    return item;
}

let player = 0;
let computer = 0;

player++;
computer++;

//Function that plays a  game of rock paper scissors against the computer
function playGame(playerSelection, computerSelection){

    for(let i = 0; i < 5; i++){   
        if(playerSelection === 'rock' && computerSelection === 'Rock'){
            return (`You chose ${playerSelection} and computer chose ${computerSelection}. It's a tie.`)

        } else if (playerSelection === 'paper' && computerSelection === 'Rock'){
            return (`You chose ${playerSelection} and computer chose ${computerSelection}. Paper beats rock. You have ${player++}`)

        } else if(playerSelection === 'scissors' && computerSelection === 'Rock'){
            return (`You chose ${playerSelection} and computer chose ${computerSelection}. Rock beats scissors. Computer has ${computer++}`)  

        } else if(playerSelection === 'rock' && computerSelection === 'Paper'){
            return (`You chose ${playerSelection} and computer chose ${computerSelection}. Paper beats rock. Computer has ${computer++}`)

        }else if(playerSelection === 'scissors' && computerSelection === 'Paper'){
            return (`You chose ${playerSelection} and computer chose ${computerSelection}. Scissors beats paper. You have ${player++}`)

        }else if(playerSelection === 'paper' && computerSelection === 'Paper'){
            return (`You chose ${playerSelection} and computer chose ${computerSelection}. It's a tie`)

        }else if(playerSelection === 'rock' && computerSelection === 'Scissors'){
            return (`You chose ${playerSelection} and computer chose ${computerSelection}. Rock beats scissors. You have ${player++}`)

        }else if(playerSelection === 'paper' && computerSelection === 'Scissors'){
            return (`You chose ${playerSelection} and computer chose ${computerSelection}. Scissors beats paper. Computer has ${computer++}`)

        }else if(playerSelection === 'scissors' && computerSelection === 'Scissors'){
            return (`You chose ${playerSelection} and computer chose ${computerSelection}. It's a tie`)

        }

        if(player > computer){
            return (`You with with ${player} points`)
        } else if(player < computer){
            return (`Computer wins with ${computer} points`)
        }
}
}
let playerPick = prompt('What do you choose?');
let computerPick = computerPlay();

console.log(playGame(playerPick, computerPick));













