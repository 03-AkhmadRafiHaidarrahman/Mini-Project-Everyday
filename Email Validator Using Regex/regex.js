const input = document.getElementById("input")
const btn = document.getElementById("btn")

btn.addEventListener("click",function(){
    
    const value = input.value
    const regex = /^[\w.-]+@[\w.-]+\.\w+$/

    if(regex.test(value)){
        alert(`Must Have `)
    }else{
        console.log(`TETTE`)    
    }

})