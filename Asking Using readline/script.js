const { stdin, stdout } = require("process")
const read = require("readline")
let rl = read.createInterface({
    input: stdin,
    output: stdout
})

rl.question("Siapa Nama mu?: ",(nama)=>{
    console.log(`Hello ${nama}!`)
    rl.question("What can i do for you? || type Calculator Or Chat With Me!",(task)=>{
        let text = task.trim()

// Do Logic
    if(text.includes("Calculator")) {
        rl.question("Okay Lets Begin",()=>{
        console.log(`Lets begin to count some number!`)
        rl.question("choose your number first",(first)=>{
            let nb1 = Number(first.trim())
            rl.question("then choose +,-,/,*",(count)=>{
            let val1 = count.trim()
            // Plus
            if(val1.includes("+"))
            rl.question("your second number",(second)=>{
            let nb2 = Number(second.trim())
                if(nb1 && count && nb2) console.log(`${nb1}${count}${nb2}: ${nb1 + nb2}`)
                rl.close()
            })
            // Minus
            if(val1.includes("-"))
            rl.question("your second number",(second)=>{
            let nb2 = Number(second.trim())
                if(nb1 && count && nb2) console.log(`${nb1}${count}${nb2}: ${nb1 - nb2}`)
                rl.close()
            })
            // Divined
            if(val1.includes("/"))
            rl.question("your second number",(second)=>{
            let nb2 = Number(second.trim())
                if(nb1 && count && nb2) console.log(`${nb1}${count}${nb2}: ${nb1 / nb2}`)
                rl.close()
            })
            // Multiple
            if(val1.includes("*"))
            rl.question("your second number",(second)=>{
            let nb2 = Number(second.trim())
                if(nb1 && count && nb2) console.log(`${nb1}${count}${nb2}: ${nb1 * nb2}`)
                rl.close()
            })
        })
    })
        
        })
    }else if(text.includes("chat with me")){
    rl.question("Lets Begin Chat Me",(user) =>{
    if(user === "tolong saya") console.log(`Apa yang bisa saya bantu?`)
        else console.log(`Ada yang bisa saya bantu?`)

    rl.on("line",(ask) => {
    if(ask === "kamu siapa ya?") console.log(`Saya adalah chatbot model prototype`)
        else console.log(`Saya adalah chatbot model prototype`)
    rl.close()
            })
         })
    }
//
       })
})
