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
let EmailValid = document.getElementById("EmailValid")
let InputEmail = document.getElementById("Input-Email")
let BtnEmail = document.getElementById("BtnEmail")

BtnEmail.addEventListener("click",function(){
let regex1 = /\w{1,4}\d(@gmail.com)$/
let regex2 = /\w{5,7}\d(@gmail.com)$/
let regex3 = /\w{8,}\d(@gmail.com)$/
let value = InputEmail.value
if(regex1.test(value)){
    alert("Worst Email")
}if(regex2.test(value)){
    alert("Bad Email")
}if(regex3.test(value)){
    alert("Good Email")
}
})


