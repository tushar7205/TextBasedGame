import promptSync from 'prompt-sync'
const prompt = promptSync()

import {selectGame} from './functions.js'

console.log(`\n-------------------------------------`)
console.log(`.....Welcome To TEXT_BASED_GAME.....`)
console.log(`-------------------------------------\n`)

let name = prompt(`Enter your name : `)

function Welcome(){
    console.log(`\nHii ${name}..`)
}

setTimeout(Welcome, 1000);

function selectToPlay(){
    console.log(`\n${name} would you want to play now ?\n`)
    
    const choose = prompt(`Press 'y' for YES & 'n' for NO : `)
    if (choose == 'y' || choose == 'Y'){
        setTimeout(selectGame, 2000);
    } else{
        console.log(`\nHave a nice day ${name}\n`)
        return 0;
    }
}

setTimeout(selectToPlay, 2000);