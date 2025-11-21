const flip = document.getElementById("flip")
const coin = document.getElementById("coin")
const result = document.getElementById("result")
const head = document.getElementById("head")
const tails = document.getElementById("tails")
const arrimg = ["palarupiah-removebg-preview.png","rupiah-removebg-preview.png"]
<<<<<<< HEAD
let index = 0 
const val1 = arrimg[0] 
const val2 = arrimg[1]
console.log(val1)
console.log(val2)
let rst1 = 0
let rst2 = 0
let interval;
let rdm;
=======
let time;
>>>>>>> b16ac21e76ca688cc5c443a38851c9d9e6ae2b0d

flip.addEventListener("click",function(){
   time = setInterval(() => {
    coin.style.height = "0rem"
    interval = setInterval(() => {        
    setTimeout(() => {
<<<<<<< HEAD
    rdm = arrimg[Math.floor(Math.random() *arrimg.length)]
    coin.src = rdm
    coin.style.height = "10rem"
    }, 500);
    }, 100);
    setTimeout(() => {
    if(val1 && rdm){
        rst1 += 5
        head.textContent = `${rst1} Heads`
        result.textContent = rst1
    } else if(val2 && rdm){
        rst2 += 10
        tails.textContent = `${rst2} Tails`
        result.textContent = rst2
    }
    coin.src = rdm
    clearInterval(interval)        
    }, 3000);
    
=======
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
>>>>>>> b16ac21e76ca688cc5c443a38851c9d9e6ae2b0d
})