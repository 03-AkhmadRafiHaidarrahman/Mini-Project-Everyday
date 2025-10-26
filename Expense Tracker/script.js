let balance = document.getElementById("balance")

let Transaction = document.getElementById("Transaction")

let Amount = document.getElementById("Amount")
let BtnSub = document.getElementById("BtnSub")

let History1 = document.getElementById("history")

let storing = []
function amount(){
    let value = Number(Amount.value)
    storing.push(value)
    const initial = storing.reduce((accumulator,currentValue) => accumulator+currentValue, 0)
    return initial
}

function clearAll(){
    document.querySelectorAll("input").forEach(input =>{
        input.value = ""
    })
}

function transaction(){
    let value = Transaction.value
    return value
}


function history(){
    
 
 
    const sum = amount().reduce((a,b) => a+b,0)
    return sum
}


BtnSub.addEventListener("click",function(event){
    event.preventDefault()
    let li = document.createElement("li")
    li.innerHTML = `${transaction()} <p>${amount()}</p>`
    balance.textContent = amount()
    if(li){
        clearAll()
    }
    History1.appendChild(li)
})




































































// let date = Date.now()
// console.log(`starting timer`)
// setTimeout(() => {
//     let ms = Date.now() - date
//     console.log(`seconds elapsed = ${Math.floor( ms / 1000)}`)
// }, 2000);

// // console.log(Date.now + date)
