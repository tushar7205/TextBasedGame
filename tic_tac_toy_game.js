import promptSync from 'prompt-sync'
const prompt = promptSync()

const gameBoard = [['','',''],
                   ['','',''],
                   ['','','']]

let currentPlayer = 'X'

function drawingGameBoard(){
    console.log(`${gameBoard[0][0]}|${gameBoard[0][1]}|${gameBoard[0][2]}`)
    console.log(`-+-+-`)
    console.log(`${gameBoard[1][0]}|${gameBoard[1][1]}|${gameBoard[1][2]}`)
    console.log(`-+-+-`)
    console.log(`${gameBoard[2][0]}|${gameBoard[2][1]}|${gameBoard[2][2]}`)
}

function inputItems(){
    let row = prompt(`Player ${currentPlayer}, Enter the row (0-2) : `)
    let column = prompt(`Player ${currentPlayer}, Enter the column (0-2) : `)

    if((row < 0 || row > 2) || (column < 0 || column > 2)){
        console.log('Invalid choice !!')
        inputItems()
    } else if(gameBoard[row][column] !== ''){
        console.log('This square is not Empty !!')
        inputItems()
    } else{
        gameBoard[row][column] = currentPlayer
    }
}

function checkForWin(){
    // for diagonals
    if (gameBoard[0][0] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][2] === currentPlayer){
        return true
    }
    if (gameBoard[0][2] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][0] === currentPlayer){
        return true
    }

    // Check rows
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] === currentPlayer && gameBoard[i][1] === currentPlayer && gameBoard[i][2] === currentPlayer) {
          return true;
        }
    }
    
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (gameBoard[0][j] === currentPlayer && gameBoard[1][j] === currentPlayer && gameBoard[2][j] === currentPlayer) {
        return true;
      }
    }

   return false
}

function switchPlayers(){
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'
}

export function playGame(){
    console.clear();
    console.log(`\n-------------------------------`)
    console.log('| Welcome to TIC-TAC-TOY game |')
    console.log(`-------------------------------\n`)

    while(true){
        drawingGameBoard()
        inputItems()

        if(checkForWin()){
            console.log(`Player ${currentPlayer} Wins !!`)
            drawingGameBoard()
            console.log(`Game Over !! Winner : ${currentPlayer}`)
            break
        }else if (gameBoard.every(row => row.every(square => square !== ''))) {
            console.log("It's a tie!")
            drawingGameBoard()
            break
        }else{
            switchPlayers()
        }
    }

}
