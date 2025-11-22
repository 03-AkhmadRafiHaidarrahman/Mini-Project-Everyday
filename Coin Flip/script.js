const flip = document.getElementById("flip")
const coin = document.getElementById("coin")
const result = document.getElementById("result")
const head = document.getElementById("head")
const tails = document.getElementById("tails")
const reset = document.getElementById("reset")
const arrimg = ["palarupiah-removebg-preview.png","rupiah-removebg-preview.png"]
let index = 0 
const val1 = arrimg[0] 
const val2 = arrimg[1]
console.log(val1)
console.log(val2)
let rst1 = 0
let rst2 = 0
let interval;
let rdm;
flip.addEventListener("click", function () {
    if (interval) clearInterval(interval);
    let time;

    interval = setInterval(() => {
        coin.style.height = "0rem";
        setTimeout(() => {
            rdm = arrimg[Math.floor(Math.random() * arrimg.length)];
            console.log(rdm)
            coin.src = rdm;
            coin.style.height = "10rem";
        }, 300);
    }, 500);

    time = setTimeout(() => {
        clearInterval(interval);
        coin.src = rdm;
        coin.style.height = "10rem";
    }, 2000);

    setTimeout(() => {
    if(arrimg[0] === rdm) {
        rst1 += 1
        result.textContent = rst1
        head.textContent = `${rst1} Heads`
    }else if(arrimg[1] === rdm){
        rst2 += 5
        result.textContent = rst2
        tails.textContent = `${rst2} Tails`
    }
    }, 3000);
    
});

reset.addEventListener("click",function(){
    result.textContent = `0`
    head.textContent = `0 Heads`
    tails.textContent = `0 Tails`
})