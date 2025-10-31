const btn = document.getElementById("btn")
const square = document.getElementById("square")


btn.addEventListener("click",function(){
// let sun = square.innerHTML = `<img src="sun.png">`
// let moon = square.innerHTML = `<img src="moon.png">`
    square.classList.toggle("animate")
        if(square.classList.contains("animate")){
        square.innerHTML = `<img src="moon.png">` 
        setTimeout(() => {
        square.classList.toggle("stop")              
        }, 2000); 
        }
        if(square.classList.contains("stop")) {
        square.innerHTML = `<img src="sun.png">`
        setTimeout(() => {
        square.classList.toggle("start")            
        }, 2000);
        }
})

// function stop(){

// }
// function start(){

// }