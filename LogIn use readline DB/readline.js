let fs = require("fs")
const { stdin, stdout } = require("process")
let readline = require("readline")

let cl = readline.createInterface({
    input: stdin,
    output: stdout
})

function readDB(){
    let data = fs.readFileSync("database.json","utf-8")
    return JSON.parse(data)
} 

function writeDB(db){
    fs.writeFileSync("database.json",JSON.stringify(db,null,2))
}


let signUp = {
    usname: "",
    grade: "",
    password: ""
}

cl.question(` Welcome!
    1. Sign up 
    2. LogIn `,(choice)=>{
        if(choice === "1"){
        console.log(`Okay Sign up! || enter again to contiuned`)
            cl.question("name? ",(username)=>{
                signUp.usname = username
                cl.question("grade? ",(grd)=>{
                    signUp.grade = grd
                    cl.question("password? ",(pw)=>{
                        signUp.password = pw

                        const db = readDB()
                        db.users.push({
                            id: Date.now(),
                            usname: signUp.usname,
                            grade: signUp.grade,
                            password: signUp.password
                        })
                        writeDB(db)
                        console.log("user log!")
                        cl.close()
                })
            })
        })  
        }
        if(choice === "2"){
            console.log(`Okay LogIn!`)
                cl.question("your username?",()=>{
                    
                    cl.close()
                })
        } 
    })