//Function that tells the computer to select and return a random element from the array
function computerPlay(){
    const computerArray = ['Rock', 'Paper', 'Scissors'];
    let item = computerArray[Math.floor(Math.random()*computerArray.length)]
    // console.log(item)
    return item
}

let question = function(){
    return prompt('What do you choose?', '')
}


//Function that plays a 5 round game of rock paper scissors against the computer
function playGame(playerSelection, computerSelection){


    for(i = 0; i < 5; i++){
        question()

        if(playerSelection === "rock " &&  computerSelection === 'Rock'){
            // alert("It's a tie")
            // console.log("It's a tie")
            console.log(typeofcomputerSelection)
            console.log(playerSelection)

        } else if(playerSelection === "paper " && computerSelection === 'Rock'){
            // alert('Paper beats rock')
            // console.log('Paper beats rock')

            console.log(computerSelection)
            console.log(playerSelection)
        } else if(playerSelection === "scissors " && computerSelection === 'Rock'){
            // alert('Rock beats scissors')
            // console.log('Rock beats scissors')

            console.log(computerSelection)
            console.log(playerSelection)
        } 

        if(playerSelection === "rock " && computerSelection === 'Paper'){
            // alert('Paper beats rock')
            // console.log('Paper beats rock')

            console.log(computerSelection)
            console.log(playerSelection)
        } else if(playerSelection === "paper "  && computerSelection === 'Paper'){
            // alert("It's a tie")
            // console.log("It's a tie")

            console.log(computerSelection)
            console.log(playerSelection)
        } else if (playerSelection === "scissors "  && computerSelection === 'Paper'){
            // alert('Scissors beats Paper')
            // console.log('Scissors beats Paper')

            console.log(computerSelection)
            console.log(playerSelection)
        } 

        if(playerSelection === "rock "  && computerSelection === 'Scissors'){
            // alert('Rock beates Scissors')
            // console.log('Rock beates Scissors')

            console.log(computerSelection)
            console.log(playerSelection)
        } else if(playerSelection === "paper "  && computerSelection === 'Scissors'){
            // alert("Scissors beats paper")
            // console.log("Scissors beats paper")

            console.log(computerSelection)
            console.log(playerSelection)
        } else if (playerSelection === "scissors "  && computerSelection === 'Scissors'){
            // alert("It's a tie")
            // console.log("It's a tie")

            console.log(computerSelection)
            console.log(playerSelection)
        } 


    }



}

playGame(prompt('What do you choose?'), computerPlay())

