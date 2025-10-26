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
    if(value === "-"){
        const minus = storing.reduce((accumulator,currentValue) => accumulator - currentValue,0)
        return minus
    }else{}
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

BtnSub.addEventListener("click",function(event){
    event.preventDefault()
    let li = document.createElement("li")
    li.innerHTML = `${transaction()} <p>${Amount.value}</p>`
    let total = amount()
    balance.style.color = total < 0 ? "red" : "green"
    balance.textContent = amount()
    li ? clearAll() : clearAll()
    History1.appendChild(li)
})




































































// let date = Date.now()
// console.log(`starting timer`)
// setTimeout(() => {
//     let ms = Date.now() - date
//     console.log(`seconds elapsed = ${Math.floor( ms / 1000)}`)
// }, 2000);

// // console.log(Date.now + date)
