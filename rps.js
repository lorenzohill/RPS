let wins = 0
let cpuWins = 0

const points = document.querySelector('#wins')
const results = document.querySelector('#results')
const pPaper = document.querySelector('#paper')

pPaper.addEventListener("click", function(){
  mainLoop('paper')
})
mainLoop
const pRock = document.querySelector('#rock')
pRock.addEventListener("click", function(){
  mainLoop('rock')
})

const pScissor = document.querySelector('#scissor')
pScissor.addEventListener("click", function(){
  mainLoop('scissors')
})

// Gets CPU input

function cpuSelect(){
let select = ["rock", "paper","scissors"]
select = select[Math.floor(Math.random()*select.length)];
return select
}

// Gets Player Input
function playRound(player, CPU) {
player = player.toLowerCase()
console.log("Player Chose " + player)
console.log("CPU selected " + CPU)
// Check Win state
if (player === CPU){
  results.innerHTML = "You Tie."
}
else if(player === "rock"){
  if (CPU === "scissors"){
    results.innerHTML = "Rock Beats Scissors. You win"
    wins = wins + 1
    points.innerHTML = "Player wins: " + wins + " CPU Wins: " + cpuWins
    return wins
  }
  else {
    results.innerHTML = "Paper covers Rock. You lose."
    cpuWins = cpuWins + 1
    points.innerHTML = "Player wins: " + wins + " CPU Wins: " + cpuWins
  }

}
else if (player === "paper"){
  if (CPU === "rock"){
    results.innerHTML = "Paper cover rock. You win"
    wins = wins + 1
    points.innerHTML = "Player wins: " + wins + " CPU Wins: " + cpuWins
    return wins
  }
  else {
    results.innerHTML = "Scissors cut Paper. You lose"
    cpuWins = cpuWins + 1
    points.innerHTML = "Player wins: " + wins + " CPU Wins: " + cpuWins
  }
}
else if(player === "scissors"){
  if (CPU === "paper"){
    results.innerHTML = "Scissors cut paper. You win"
    wins = wins + 1
    points.innerHTML = "Player wins: " + wins + " CPU Wins: " + cpuWins
    return wins
  }
  else{
    results.innerHTML = "Rock Beats Scissors. You Lose"
    cpuWins = cpuWins + 1
    points.innerHTML = "Player wins: " + wins + " CPU Wins: " + cpuWins
  }
}
else {
  results.innerHTML("Something went wrong.")
}
}

// Main game loop
function mainLoop(player) { 
CPU = cpuSelect()
playRound(player, CPU)
if (wins == 5){
  alert("You have won")
  document.querySelector('#game').classList.add("hide")
  document.querySelector('#winPage').classList.remove("hide")
  document.querySelector('h1').innerHTML = "You have Won! Congrats!"
}

if (cpuWins == 5){
  alert("You have lost :(")
  document.querySelector('#game').classList.add("hide")
  document.querySelector('#winPage').classList.remove("hide")
  document.querySelector('h1').innerHTML = "You have lost!"
}

console.log("You have " + wins + " wins")
}

function reset(){
  wins = 0
  cpuWins = 0
  results.innerHTML = "Click your selection to Play"
  points.innerHTML = " "
  document.querySelector('#winPage').classList.add("hide")
  document.querySelector('#game').classList.remove("hide")
}