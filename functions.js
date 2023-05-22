import promptSync from 'prompt-sync'
const prompt = promptSync()

import { quizGame } from './quiz_game.js'
import {playGame} from './tic_tac_toy_game.js'
import { readStory, writeStory } from './story.js'
import {Anonymous_Questions} from './Anonymous_questions.js'

import { Talk_about_yourself } from './Talk_about_yourself.js'


function gameOver(){
    console.log(`\nGame over....`)
    console.log(`\nDo you want to play again...\n`)
    const choice = prompt("Enter 'y' for YES & 'n' for NO : ")
    if(choice == 'y' || choice == 'Y'){
        selectGame()
    } else{
        console.log(`\nThanks you!! PLAY AGAIN....\n`)
        return 0;
    }
}

export function selectGame(){
    console.clear();
    console.log(`\n------------------`)
    console.log(`| Gaming Modules |`)
    console.log(`------------------`)
    console.log(`1. Play Quiz game\n2. Read a story\n3. Write a story\n4. Anonymous question and answer\n5. Play TIC-TAC-TOY game\n6. Talk about your self\n7. Exit\n`)
    
    const choice =parseInt(prompt("Enter your choice to play : "))

    switch(choice){
        case 1:
            setTimeout(quizGame, 2000)
            setTimeout(gameOver, 40000)
            break
        case 2:
            setTimeout(readStory, 2000)
            setTimeout(gameOver, 10000)
            break
        case 3:
            writeStory()
            setTimeout(gameOver, 2000)
            break
        case 4:
            setTimeout(Anonymous_Questions, 2000)
            setTimeout(gameOver, 3000)
            break        
        case 5:
            setTimeout(playGame, 2000)
            setTimeout(gameOver, 3000)
            break
        case 6:
            let object = new Talk_about_yourself()
            object.introduction()
            setTimeout(gameOver, 20000)
            break   
        case 7:
            console.log("Have a nice day")
            return 0;      
        default:
            console.log("\nPlease enter valid choice\n")
            setTimeout(gameOver, 2000)
    }
}
