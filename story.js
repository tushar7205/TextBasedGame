import promptSync from 'prompt-sync'
const prompt = promptSync()



export function readStory(){
    console.clear();
    console.log(`\n-----------`)
    console.log(`| STORIES |`)
    console.log(`-----------`)
    console.log(`1. "Love"\n2. "A Deadly Encounter With a Shower Unit Head"\n3. "What's An Alien?"\n4. "True Intelligence?"\n5. "An Old-Fashioned Long Distance Romance"\n6. "Computer Dating"\n7.  Exit\n`)
    
    const choice =parseInt(prompt("Enter your choice to read : "))

    switch(choice){
        case 1:
            console.log(`\n----------`)
            console.log(`| "LOVE" |`)
            console.log(`----------`)
            console.log("With love, my mother gave birth and nurtured me.\nWith love, my girlfriend stared into my eyes, squealing 'Yes!' to my proposal.\nWith love, my children laughed and squeezed my hand and needed me so much.\nWith love, my friends mourned my passing.\nWhat love! The measure of my success.\n")
            break
        case 2:
            console.log(`\n------------------------------------------------`)
            console.log(`| "A Deadly Encounter With a Shower Unit Head" |`)
            console.log(`------------------------------------------------`)
            console.log("To myopic eyes the shower unit head resembled a cobra, poised to strike.\nMistakenly he hit the cold tap—in January. The shower spat icy venom. Shrieking, he leapt with mongoose agility. One hand snaked towards the tap and turned rapidly.\nIn a second it was over.\nHe was safe.\n")
            break
        case 3:
            console.log(`\n----------------------`)
            console.log(`| "What's An Alien?" |`)
            console.log(`----------------------`)
            console.log(`An aggressive alien creature visited our planet.\nIt was ugly, with a big nose, pinkish hairy skin, and feet that smelled. It was frightened of us for no reason. It resented our differences. It laid claim to our planet.\nThis strange alien was an Earth Human.\nIt called me 'alien.'\n`)
            break
        case 4:
            console.log(`\n------------------------`)
            console.log(`| "True Intelligence?" |`)
            console.log(`------------------------`)
            console.log("An intelligent man spent his life studying, learning everything about everything.\nA stupid man spent his life giving love, learning nothing.\nThe intelligent man died rich and famous - alone.\nThe stupid man died surrounded by friends.\nThe intelligent man knew nothing that mattered.\nThe stupid man knew all that mattered.\n")
            break        
        case 5:
            console.log(`\n--------------------------------------------`)
            console.log(`| "An Old-Fashioned Long Distance Romance" |`)
            console.log(`--------------------------------------------`)
            console.log(`I awoke to a grey morning. My heart was heavy, my soul lifeless.\nMy lover writes each month. Today the letter finally arrived, so colour flooded my day. Emotions stirred my heart. Sparks revitalised my soul. I came alive.\nA month now to fade to grey until my next awakening.\n`)
            break
        case 6:
            console.log(`\n---------------------`)
            console.log(`| "Computer Dating" |`)
            console.log(`---------------------`)
            console.log(`Maurice loved his computer and loved internet dating.\nVery thorough and logical, he spent months scoring every respondent out of one thousand, cross-referencing virtues and failings;\n  writing hundreds of emails,\n  analysing their replies.\nSadly, he never had time to go out and meet anyone, so he married his computer instead.\n`)
            break   
        case 7:
            console.log("Have a nice day")
            return 0;      
        default:
            console.log("Please enter valid choice")
    }
}

export function writeStory(){
    console.clear()
    console.log("\nHey! Are you ready for writting a story.....\n")
    const choose = prompt("Enter 'w' for writting story : ")
    if(choose == 'w' || choose == "W"){
        console.log(`\n----------------------------------------------------------------------------------------`)
        const story = prompt(`Write here : `)
        console.log(`----------------------------------------------------------------------------------------\n`)
        
        console.log(`\n"`,story,`"\n`)
        console.log('Oh! It is a nice story...\n')
    }
}
