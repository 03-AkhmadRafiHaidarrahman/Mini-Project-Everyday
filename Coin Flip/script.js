const flip = document.getElementById("flip")
const coin = document.getElementById("coin")

const arrimg = ["palarupiah-removebg-preview.png","rupiah-removebg-preview.png"]
let time;

flip.addEventListener("click",function(){
   time = setInterval(() => {
    coin.style.height = "0rem"
    setTimeout(() => {
    const random = arrimg[Math.floor(Math.random() * arrimg.length)] 
    coin.src = random    
    console.log(random)
    console.log(coin.src)
    coin.style.height = "8rem"
    }, 500);        
    }, 300);

    setTimeout(() => {
        clearInterval(time)
    }, 3000);
})