let player = 0;
let computer = 0;

player++;
computer++;

//Function that plays a  game of rock paper scissors against the computer
function playGame(playerSelection, computerSelection){

        // if(playerSelection === 'rock' && computerSelection === 'Rock'){
        //     return (`You chose ${playerSelection} and computer chose ${computerSelection}. It's a tie.`)

        // } else if (playerSelection === 'paper' && computerSelection === 'Rock'){
        //     return (`You chose ${playerSelection} and computer chose ${computerSelection}. Paper beats rock. You have ${player++}`)

        // } else if(playerSelection === 'scissors' && computerSelection === 'Rock'){
        //     return (`You chose ${playerSelection} and computer chose ${computerSelection}. Rock beats scissors. Computer has ${computer++}`)  

        // } else if(playerSelection === 'rock' && computerSelection === 'Paper'){
        //     return (`You chose ${playerSelection} and computer chose ${computerSelection}. Paper beats rock. Computer has ${computer++}`)

        // }else if(playerSelection === 'scissors' && computerSelection === 'Paper'){
        //     return (`You chose ${playerSelection} and computer chose ${computerSelection}. Scissors beats paper. You have ${player++}`)

        // }else if(playerSelection === 'paper' && computerSelection === 'Paper'){
        //     return (`You chose ${playerSelection} and computer chose ${computerSelection}. It's a tie`)

        // }else if(playerSelection === 'rock' && computerSelection === 'Scissors'){
        //     return (`You chose ${playerSelection} and computer chose ${computerSelection}. Rock beats scissors. You have ${player++}`)

        // }else if(playerSelection === 'paper' && computerSelection === 'Scissors'){
        //     return (`You chose ${playerSelection} and computer chose ${computerSelection}. Scissors beats paper. Computer has ${computer++}`)

        // }else if(playerSelection === 'scissors' && computerSelection === 'Scissors'){
        //     return (`You chose ${playerSelection} and computer chose ${computerSelection}. It's a tie`)

        // }

        // if(player > computer){
        //     return (`You with with ${player} points`)
        // } else if(player < computer){
        //     return (`Computer wins with ${computer} points`)
        // }

        if(playerSelection === )


}

// playGame(buttonChoices, computerPlay)

function buttonChoices(){
    rockChoice()
    paperChoice()
    scissorsChoice()
}

//Function that tells the computer to select and return a random element from the array
function computerPlay(){
    const computerArray = ['Rock', 'Paper', 'Scissors'];
    let item = computerArray[Math.floor(Math.random()*computerArray.length)]
    console.log(item)
    return item;
}


//CONTAINER FOR THE COMPUTERS CHOICE
// let cpuPlay = computerPlay();
// let computerChoice = document.getElementById('computerChoice');
// computerChoice.innerHTML = '<h1>' +cpuPlay+ '</h1>';

//CONTAINER FOR THE PLAYER AND COMPUTER CHOICES
let choiceContainer = document.getElementById('choiceContainer');
choiceContainer.addEventListener('mouseover', runEvent)
function runEvent(e){
    console.log(e.target)
}

//ROCK BUTTON EVENT
let rkBtn = document.getElementById('rock');
rkBtn.addEventListener('click', rockChoice);
function rockChoice(e){
    console.log(e.target)
    choiceContainer.innerHTML =  '<h1>ROCK</h1>';
    let cpuPlay = computerPlay();
let computerChoice = document.getElementById('computerChoice');
computerChoice.innerHTML = '<h1>' +cpuPlay+ '</h1>';
}

//PAPER BUTTON 
let paperBtn = document.getElementById('paperBtn');
paperBtn.addEventListener('click', paperChoice);
function paperChoice(e){
    console.log(e.target)
    choiceContainer.innerHTML = '<h1>PAPER</h1>';
    let cpuPlay = computerPlay();
let computerChoice = document.getElementById('computerChoice');
computerChoice.innerHTML = '<h1>' +cpuPlay+ '</h1>';
}

//SCISSORS BUTTON
//PAPER BUTTON 
let sicBtn = document.getElementById('sicBtn');
sicBtn.addEventListener('click', scissorsChoice);
function scissorsChoice(e){
    console.log(e.target)
    choiceContainer.innerHTML = '<h1>SCISSORS</h1>';
    let cpuPlay = computerPlay();
let computerChoice = document.getElementById('computerChoice');
computerChoice.innerHTML = '<h1>' +cpuPlay+ '</h1>';
}










