// get elements
const rockButton = document.getElementById("rock")
const paperButton = document.getElementById('paper')
const sissorsButton = document.getElementById("sissors")
const replayButton = document.querySelector(".replay")
const movesContainer = document.querySelector(".moves")
const playerMove = document.getElementById("player-move")
const computerMove = document.getElementById("computer-move")
const text = document.getElementById("title")
const myScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")

rockButton.addEventListener("click", ()=>game(0))
paperButton.addEventListener("click", ()=>game(1))
sissorsButton.addEventListener("click", ()=>game(2))
replayButton.addEventListener("click", ()=>toggleShowMoves())

const score={
    mine:0,
    opponent:0
}

const moveMapping = [{
    value:"rock",
    weak:"paper"
}, {
    value:"paper",
    weak:"sissors"
}, {
    value:"sissors",
    weak:"rock"
}]

function toggleShowMoves(){
    movesContainer.classList.toggle('hide')
    replayButton.classList.toggle('show')
}

function toggleShake(shake){
    if(shake){
        playerMove.classList.add('wait-move')
        computerMove.classList.add('wait-move')
    }
    else{
        playerMove.classList.remove('wait-move')
        computerMove.classList.remove('wait-move')
    }
}

function game(move){
    const moveObject = moveMapping[move]
    const opponentMoveIndex = Math.floor(Math.random()*3)
    toggleShowMoves()
    toggleShake(true)
    const opponentMoveObject = moveMapping[opponentMoveIndex]
    let textValue = ""

    if(opponentMoveObject.value===moveObject.value){
        textValue="It's a draw"
    }

    // player win
    else if(moveObject.value === opponentMoveObject.weak){
        score.mine+=1
        textValue="You win"
    }

    // computer win
    else{
        score.opponent+=1
        textValue="You loose"
    }


    function result(){
        toggleShake(false)
        playerMove.src = "assets/images/"+moveObject.value+".png"
        computerMove.src = "assets/images/"+opponentMoveObject.value+".png"

        text.innerText=textValue
        myScore.innerText=score.mine
        computerScore.innerText=score.opponent
    }

    setTimeout(result, 800)
}