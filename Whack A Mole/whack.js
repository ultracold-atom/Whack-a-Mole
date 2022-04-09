let startBtn = document.querySelector(".start")
let stopBtn = document.querySelector(".stop")
let restartBtn = document.querySelector(".restart")
let pits = document.querySelectorAll(".pit")
let area = document.querySelector(".area")
let pitArray = Object.keys(pits)

const timeLeft = document.querySelector('#timeLeft')
const scoreDisplay = document.querySelector('#scoreDisplay')

let updateTime = 1000 //500 milisecond 
let currentTime = 20 // 10second for end of the game

let score = 0
let isGameStarted = false
let timerId 

//Generating place for Mole
let molePlace = () =>{
    return Math.floor(Math.random()*(9-1)+1)
}


area.addEventListener("click",function(e){
    if(e.target.style.backgroundColor === "blue"){
      score += 10
      scoreDisplay.textContent = score }
 })
 


//Starting game button
startBtn.addEventListener("click",function(){
    isGameStarted = true
    timerId = setInterval(Game,updateTime)
})

//Stopping game button
stopBtn.addEventListener("click",function(){
    clearInterval(timerId)
})

//Restarting game button
restartBtn.addEventListener("click",function(){
    location.reload();
    return false;
})


//Game Method
let Game = ()=>{
    
    let location = molePlace()
  
    pitArray.filter(pit=> pit!== location).map(index=> pits[index].style.backgroundColor = "brown")
    pits[location-1].style.backgroundColor = "blue"
  
    currentTime--   //We want to decrease game time in 1second
    timeLeft.textContent = currentTime
    if(currentTime == 0){
        alert(`Your score is:${score}`)
        clearInterval(timerId)
        return false;
    }
}
