const { stdin, stdout } = require("process")
const read = require("readline")
let rl = read.createInterface({
    input: stdin,
    output: stdout
})
rl.question("Kalkulator",()=>{
    rl.question("Choose Number: ",(one)=>{
        let pertama = one
        rl.question("Choose +,-,/,*",(plus,minus,divined,multiple)=>{
            let kurang = minus
            let bagi = divined
            let kali = multiple
            if(plus === "+"){
                console.log(tambah)
                rl.close()
            }
        })
    })
})