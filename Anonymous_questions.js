import PromptSync from "prompt-sync"
const prompt = PromptSync()

export function Anonymous_Questions(){
    console.clear()
    const subjects = new Array()
    const marks = new Array()
    console.log(`\n------------------------`)
    console.log(`| MarkList Calculation |`)
    console.log(`------------------------\n`)
    const noOfSub = parseInt(prompt(`Enter your total number of subjects in 12th : `))
    console.log()
    for (let i = 0 ; i < noOfSub ; i++){
        let subName = prompt(`Enter the name of subject ${i+1} : `)
        subjects.push(subName)
    }
    console.log(`\nEnter your secured marks out of 100 : \n`)
    for(let i = 0 ; i < subjects.length; i++){
        let mark = parseInt(prompt(`Secured marks in ${subjects[i]} : `))
        marks.push(mark)
    }
    console.log()
    let totalMark = 0
    let totlaPercentage = 0
    for (let i = 0; i< marks.length; i++){
        console.log(`${subjects[i]} : ${marks[i]}`)
        totalMark += marks[i]
    }
    totlaPercentage = parseFloat((totalMark/(noOfSub*100))*100)
    console.log(`\n---------------------------------------------------`)
    console.log(`Total marks : ${totalMark}`)
    console.log(`Total percentage : ${totlaPercentage}`)
    console.log(`---------------------------------------------------\n`)
}
