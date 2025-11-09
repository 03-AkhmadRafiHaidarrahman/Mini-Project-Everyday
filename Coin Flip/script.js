const flip = document.getElementById("flip")
const coin = document.getElementById("coin")

const arrimg = ["palarupiah-removebg-preview.png","rupiah-removebg-preview.png"]
let index = 0 

flip.addEventListener("click",function(){
    coin.style.height = "0rem"
    setTimeout(() => {
    index = (index + 1) % arrimg.length
    coin.src = arrimg[index]
    coin.style.height = "10rem"
    }, 500);

})