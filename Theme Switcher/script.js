const btn = document.getElementById("btn")
const square = document.getElementById("square")



btn.addEventListener("click",function(){
let sun = square.innerHTML = `<img src="sun.png">`
let moon = square.innerHTML = `<img src="moon.png">`
if(parseInt(square.style.left) > 10){
    document.querySelector("h1").style.color = 'black'
    square.style.left = '10px'
    square.innerHTML = `<img src="sun.png">`
    document.getElementById("background").style.background = "white"
    square.style.background = `rgb(253, 215, 0)`
}else{
    document.querySelector("h1").style.color = 'white'
    document.getElementById("background").style.background = "black"
    square.innerHTML = `<img src="moon.png">`
    square.style.boxShadow = `0rem 0rem 1rem 1rem white`
    square.style.background = `rgb(8, 39, 139)`
    square.style.left = '100px'
}




    // square.classList.toggle("animate")
    //     if(square.classList.contains("animate")){
    //     square.innerHTML = `<img src="moon.png">` 
    //     document.body.style.background = 'black'
    //     setTimeout(() => {
    //     square.classList.toggle("stop")              
    //     }, 2000); 
    //     }
    //     if(square.classList.contains("stop")) {
    //     square.innerHTML = `<img src="sun.png">`
    //     document.body.style.background = 'white'
    //     setTimeout(() => {
    //     square.classList.toggle("start")            
    //     }, 2000);
    //     }

    // if(square.classList.contains("stop")){
    //     square.classList.toggle("start")
    //     if(square.classList.contains("start")){
    //         square.classList.add("stop")
    //     }
    // }


})

// function stop(){

// }
// function start(){

// }