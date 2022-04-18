let player = 0;
let computer = 0;

player++;
computer++;

//Player Button Choices
// function buttonChoices(){
//     rockChoice()
//     paperChoice()
//     scissorsChoice()
// }

//Function that tells the computer to select and return a random element from the array
function computerPlay(){
    const computerArray = ['Rock', 'Paper', 'Scissors'];
    let item = computerArray[Math.floor(Math.random()*computerArray.length)]
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
let rock = document.getElementsByClassName('rockbtn')
rkBtn.addEventListener('click', rockChoice);
function rockChoice(e){
    // console.log(e.target)
    choiceContainer.innerHTML =  '<h1>ROCK</h1>';
    let cpuPlay = computerPlay();
let computerChoice = document.getElementById('computerChoice');
computerChoice.innerHTML = '<h1>' +cpuPlay+ '</h1>';
}

//PAPER BUTTON 
let paperBtn = document.getElementById('paperBtn');
paperBtn.addEventListener('click', paperChoice);
function paperChoice(e){
    // console.log(e.target)
    choiceContainer.innerHTML = '<h1>PAPER</h1>';
    let cpuPlay = computerPlay();
let computerChoice = document.getElementById('computerChoice');
computerChoice.innerHTML = '<h1>' +cpuPlay+ '</h1>';
}

//SCISSORS BUTTON
let sicBtn = document.getElementById('sicBtn');
sicBtn.addEventListener('click', scissorsChoice);
function scissorsChoice(e){
    // console.log(e.target)
    choiceContainer.innerHTML = '<h1>SCISSORS</h1>';
    let cpuPlay = computerPlay();
let computerChoice = document.getElementById('computerChoice');
computerChoice.innerHTML = '<h1>' +cpuPlay+ '</h1>';
}

//CONTAINER FOR PLAYER AND COMPUTER SCORE
// let choiceContainer = document.getElementById('choiceContainer');
// choiceContainer.addEventListener('mouseover', runEvent)
// function runEvent(e){
//     console.log(e.target)
// }

let scoreContainer = document.getElementById('scoreContainer')
// function keepScore(e){
//     if()
//     let playerScore = document.createElement('p')
//     playerScore.innerText = player
//     scoreContainer.appendChild(player)
//     document.body.appendChild(scoreContainer)
// }


//Function that plays a  game of rock paper scissors against the computer
function playGame(playerSelection, computerSelection){

    //ROCK
    if(playerSelection = rock){
        // console.log('Its a tie. You both chose rock')
        console.log('you chose rock')

    }else if(playerSelection = rock){
        // console.log('Computer won. Paper beats rock')
        console.log('you chose rock')


    }else if(playerSelection = rock){
        // console.log(playerSelection + ' wins. Rock beats scissors')
        console.log('you chose rock')

    }

    //PAPER
    if(playerSelection = paperBtn){
        // console.log('Its a tie. You both chose paper')
        console.log(playerSelection)

       
    } else if(playerSelection = paperBtn){
        // console.log(' Player wins. Paper beats rock')
        console.log(playerSelection)

        
    } else if(playerSelection = paperBtn){
        // console.log('Computer won. Scissors beats paper')
        console.log(playerSelection)

    }

    //Scissors
    if(playerSelection = sicBtn){
        // console.log(' Player wins. Scissors beats paper')
        console.log(playerSelection)

        
    } else if(playerSelection = sicBtn){
        // console.log('Computer won. Rock beats scissors')
        console.log(playerSelection)


    } else if(playerSelection = sicBtn){
        // console.log('Its a tie. You both chose scissors')
        console.log(playerSelection)


    } 


    // let playerBtn = rkBtn;
    // playerBtn.addEventListener('click', function(e){
    //     return player++;
    // })

}


