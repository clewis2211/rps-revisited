let player = 0;
let computer = 0;

player++;
computer++;


function computerPlay(){
    const computerArray = ['Rock', 'Paper', 'Scissors'];
    let item = computerArray[Math.floor(Math.random()*computerArray.length)]
    return item;
}

function playerPlay(){
    let rkBtn = document.getElementById('rock');
    let rock = document.getElementsByClassName('rockbtn')
    rkBtn.addEventListener('click', rockChoice)
    function rockChoice(){
        console.log('rock')
        return 'ROCK'
    }
    
    let paperBtn = document.getElementById('paperBtn')
    let paper = document.getElementsByClassName('paper')
    paperBtn.addEventListener('click', paperChoice)
    function paperChoice(){
        console.log('paper')
        return 'PAPER'
    }
    
    let sicBtn = document.getElementById('sicBtn')
    let scissors = document.getElementsByClassName('paper')
    sicBtn.addEventListener('click', scissorsChoice)
    function scissorsChoice(){
        console.log('scissors')
       return 'SCISSORS'
    }
}



function playGame(playerSelection, computerSelection){
    console.log(`${playerSelection} + ${computerSelection}`) 
}

playGame(playerPlay, computerPlay)