let Pass = document.getElementById("PassValid")
let button = document.getElementById("Pass-Btn")
let InputPass = document.getElementById("Input-Pass")
button.addEventListener("click",function(){
    let value = InputPass.value
    let matching = /^\w.*\d$/
    if(matching.test(value)){
        Swal.fire({
        title: "Good job!",
        text: "Password Has Been Create!",
        icon: "success"
});
    }else{
        Swal.fire("End Character With Number!");
    }
})  