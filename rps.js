let wins = 0
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
  console.log("You Tie.")
}
else if(player === "rock"){
  if (CPU === "scissors"){
    console.log("Rock Beats Scissors. You win")
    wins = wins + 1
    return wins
  }
  else {
    console.log("Paper covers Rock. You lose.")
  }

}
else if (player === "paper"){
  if (CPU === "rock"){
    console.log("Paper cover rock. You win")
    wins = wins + 1
    return wins
  }
  else {
    console.log("Scissors cut Paper. You lose")
  }
}
else if(player === "scissors"){
  if (CPU === "paper"){
    console.log("Scissors cut paper. You win")
    wins = wins + 1
    return wins
  }
  else{
    console.log("Rock Beats Scissors. You Lose")
  }
}
else {
  console.log("Something went wrong.")
}
}

// Main game loop
function mainLoop() {
 let player = prompt("Enter Rock, Paper or Scissors") 
 CPU = cpuSelect()
playRound(player, CPU)
console.log("You have " + wins + " wins")
}