let balance = document.getElementById("balance")

let Transaction = document.getElementById("Transaction")

let Amount = document.getElementById("Amount")
let BtnSub = document.getElementById("BtnSub")

let History1 = document.getElementById("history")

function amount(){
    let value = Amount.value
    return value
}

function clear(){
    Transaction.value = ""
    Amount.value = ""
}

function transaction(){
    let value = Transaction.value
    return value
}


function history(){

}


BtnSub.addEventListener("click",function(event){
    let li = document.createElement("li")
    li.innerHTML = `${transaction()} <p>${amount()}</p>`
    balance.textContent = amount()
    if(li){
        clear()
    }
    History1.appendChild(li)
    event.preventDefault()
})




































































// let date = Date.now()
// console.log(`starting timer`)
// setTimeout(() => {
//     let ms = Date.now() - date
//     console.log(`seconds elapsed = ${Math.floor( ms / 1000)}`)
// }, 2000);

// // console.log(Date.now + date)
