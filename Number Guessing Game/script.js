let option = document.querySelectorAll(".option")
let select = document.getElementById("difficulty")
let range = document.getElementById("range")

select.addEventListener("click",function(){
    let values = select.value
    
    if(values === "easy"){
        range.textContent = 10
        rdmS
    }
    
    if(values === "medium"){
        range.textContent = 50 
        rdmM
    }
    if(values === "hard"){
        range.textContent = 100
        rdmH
    }
})

// console.log(rdmS())
console.log(rdmM())
console.log(rdmH())

console.log(select)


function rdmS(){
    let random1 = Math.floor(Math.random() * 10) + 1
    return random1
}

function rdmM(){
    let random2 = Math.floor(Math.random() * 50) + 1
    return random2
}
 
function rdmH(){
    let random3 = Math.floor(Math.random() * 100) + 1
    return random3
}

let guesses = document.getElementById("guesses")



let attempts = document.getElementById("attempts")
let guess = document.getElementById("guess")

    // console.log(typeof Number(guess),typeof rdmS())


guess.addEventListener("keydown",(e)=>{

attempts = 3


    console.log(guess.value)
    console.log(Number(rdmS()))
    console.log(Number(rdmM()))
    console.log(Number(rdmH ()))
    
    if(e.key === "Enter"){
        attempts.textContent -= 1
    if(attempts === 0){
        attempts === 3
    }
    if(Number(guess.value) === Number(rdmS())){
        guesses.textContent = "Your Right"
        console.log(`Benar`)
    }else{
        console.error('salah')
        guesses.textContent = "Wrong"
    }
    if(Number(guess.value) === Number(rdmM())){
        guesses.textContent = "Your Right"
        console.log(`Benar`)
    }else{
        console.error('salah')
        guesses.textContent = "Wrong"
    }if(Number(guess.value) === Number(rdmH())){
        guesses.textContent = "Your Right"
        console.log(`Benar`)
        
    }else{
        guesses.textContent = "Wrong"
        console.error('salah')
    }
}

})
