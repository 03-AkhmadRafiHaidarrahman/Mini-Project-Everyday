

const input = document.getElementById("input")
const btn = document.getElementById("btn")
const result = document.getElementById("result")
btn.addEventListener("click",function(){
    const li = document.createElement("li")
    let value = input.value
    let balik = value.split("").reverse().join("")
    value === balik ? li.innerHTML = "benar" : li.innerHTML = "salah"
    if(value === balik){
        li.classList.toggle("benar")
    }else{
        li.classList.toggle("salah")
    }  
    result.appendChild(li)
    setTimeout(() => {
        result.removeChild(li)
    }, 2000);
    console.log(balik)
})