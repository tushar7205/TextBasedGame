import PromptSync from "prompt-sync"
const prompt = PromptSync()


export function quizGame(){
    console.clear();
    console.log(`\n------------------------------`)
    console.log(`.....Welcome To Quiz Game.....`)
    console.log(`------------------------------\n`)

    setTimeout(function(){
        console.log(`\nTotal Questions = 5 \nTotal Time = 40sec\n`)
        setTimeout(function(){
            console.log(`1. Which city is the capital of Nepal?\n\n a. New Delhi\n b. Katmandu\n c. Mumbai\n d. Siligudi\n`)
            const ans1 = prompt('Enter your choice : ')
            if(ans1 == 'b' || ans1 == 'B'){
                console.log('\nRight answer...\n')
            } else{
                console.log('\nWrong answer...')
                console.log('\nCorrect answer : b. Katmandu\n')
            }
    
            setTimeout(function(){
                console.log(`2. Which animal is the national animal of India?\n\n a. Lion\n b. Elephant\n c. Tiger\n d. Bear\n`)
                const ans2 = prompt('Enter your choice : ')
                if(ans2 == 'c' || ans2 == 'C'){
                    console.log('\nRight answer...\n')
                } else{
                    console.log('\nWrong answer...')
                    console.log('\nCorrect answer : c. Tiger\n')
                }
    
                setTimeout(function(){
                    console.log(`3. Which is the biggest snake of the world?\n\n a. Python\n b. Cobra\n c. Rana\n d. Anaconda\n`)
                    const ans3 = prompt('Enter your choice : ')
                    if(ans3 == 'd' || ans1 == 'D'){
                        console.log('\nRight answer...\n')
                    } else{
                        console.log('\nWrong answer...')
                        console.log('\nCorrect answer : d. Anaconda\n')
                    }
                    
                    setTimeout(function(){
                        console.log(`4. Which country has the highest population in the world?\n\n a. China\n b. India\n c. Japan\n d. Canada\n`)
                        const ans4 = prompt('Enter your choice : ')
                        if(ans4 == 'a' || ans4 == 'A'){
                            console.log('\nRight answer...\n')
                        } else{
                            console.log('\nWrong answer...')
                            console.log('\nCorrect answer : a. China\n')
                        }
    
                        setTimeout(function(){
                            console.log(`5. Which country is the most powerful country in the world?\n\n a. India\n b. USA\n c. China\n d. Russia\n`)
                            const ans5 = prompt('Enter your choice : ')
                            if(ans5 == 'b' || ans5 == 'B'){
                                console.log('\nRight answer...\n')
                            } else{
                                console.log('\nWrong answer...')
                                console.log('\nCorrect answer :  b. USA\n')
                            }
                        },2000)
                    },2000)
                }, 2000)
            }, 2000)
        },2000)  
    },1000)

   
}