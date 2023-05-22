import PromptSync from "prompt-sync"
const prompt = PromptSync()

function Pet(){
    setTimeout(function(){
        console.log()
        const petName = prompt(`So what is your pet's name : `)
        console.log(`Oh! "${petName}" It is nice name..`)
        setTimeout(function(){
            console.log()
            const petColor = prompt(`So what is the color of your pet : `)
            console.log(`Yaa! ${petColor} pets are really beautiful..`)
            setTimeout(function(){
                console.log()
                const timeSpend = prompt(`How many hours do you spend with "${petName}" in holidays : `)
                console.log(`Oh! ${timeSpend}hours.. It is great! \nThank You!!`)
            },2000)
        },2000)
    },1500)
}

function Bicycle(){
    setTimeout(function(){
        console.log()
        const bicycleColor = prompt(`So what is the color of your Bicycle : `)
        console.log(`Yaa! ${bicycleColor} Bicycle are really fantastic..`)
        setTimeout(function(){
            console.log()
            const timeSpend = prompt(`How many hours do you spend to ride : `)
            console.log(`Oh! ${timeSpend}hours.. It is great!`)
            setTimeout(function(){
                console.log()
                const buyTime = prompt(`When do you buy the bicycle : `)
                console.log(`Oh! from ${buyTime}.. you are so caring.. \nThank You!!`)
            },2000)
        },2000)
    },1500)
}

export class Talk_about_yourself {
    introduction(){
        console.clear()
        console.log(`-----------------------`)
        console.log("| Talk About Yourself |")
        console.log(`-----------------------`)
        const name = prompt("Enter your name : ")
        const age = parseInt(prompt("Enter your age : "))
        const height = parseInt(prompt("Enter your height : "))
        const weight = parseInt(prompt("Enter your body weight : "))
        // storing all attributes into an object
        const personalData = {
            Name : name,
            Age : age,
            Height : height,
            weight : weight
        }

        console.log()
        let choose
        const choice = prompt(`Ok "${name}" do you have any Pet (y/n) : `)
        if(choice == 'y' || choice == 'Y'){
            Pet()
        } else{
            choose = prompt(`Ok "${name}" do you have any Bicycle (y/n) : `)
            if(choose == 'y' || choose == 'Y'){
                 Bicycle()
            }
        }

        if((choice == 'n' || choice == 'N') && (choose == 'n' || choose == 'N')){
            setTimeout(function(){
                console.log(`------------------------------------------------`)
                console.log(`\nHey! ${name} let us play a word game..`)
                setTimeout(function(){
                    console.log(`\nWrite a sentense which starts with "hello" and ends with "world"`)
                    setTimeout(function(){
                        const sentense = prompt(`Write here : `)
                        const regex = /^hello.*world$/; // REGEX
                        if(regex.test(sentense.toLocaleLowerCase())){
                            console.log("You are right")
                        } else {
                            console.log("You are wrong")
                        }
                    },3000)
                },2000)
            },2000)
        }
    }
}

