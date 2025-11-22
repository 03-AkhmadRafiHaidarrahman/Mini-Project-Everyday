

const flip = document.getElementById("flip")
const coin = document.getElementById("coin")
const result = document.getElementById("result")
const head = document.getElementById("head")
const tails = document.getElementById("tails")
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
    // clear any existing timers to avoid overlapping animations
    if (interval) clearInterval(interval);
    let time;

    // start a fast "flip" animation: hide, pick random image, show
    interval = setInterval(() => {
        coin.style.height = "0rem";

        // brief delay to simulate the flip before showing new image
        setTimeout(() => {
            rdm = arrimg[Math.floor(Math.random() * arrimg.length)];
            coin.src = rdm;
            coin.style.height = "10rem";
        }, 300);
    }, 500);

    // stop the animation after 3 seconds and ensure the last image remains
    time = setTimeout(() => {
        clearInterval(interval);
        coin.src = rdm;
        coin.style.height = "10rem";
    }, 3000);
});