let digit = document.getElementById("digit")
let Input = document.getElementById("input")
let clear = document.getElementById("clear")

Input.addEventListener("input",function(){
    let length = Input.value.length
    console.log(length)
    let max = Input.maxLength    
    digit.textContent = `${length} / ${max}`
    clear.style.background = length >= 100 ? 'red' : 'black'
    console.log(max)

})

clear.addEventListener("click",function(){
    digit.textContent = 100
})