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
let Warn = document.getElementById("WarningMsg")

BtnEmail.addEventListener("click",function(){  
let regex1 = /^\w{1,4}\d(@gmail.com)$/
let regex2 = /^\w{5,7}\d(@gmail.com)$/
let regex3 = /^\w{8,}\d(@gmail.com)$/
let value = InputEmail.value

if(regex1.test(value)){
    alert("Worst Email")
    let li1 = document.createElement("li")
    li1.textContent = `Worst Email`
    Warn.appendChild(li1)
    setTimeout(() => {
        Warn.removeChild(li1)
    }, 1000);
}
if(regex2.test(value)){
    alert("Bad Email")
    let li2 = document.createElement("li")
    li2.textContent = `Bad Email`
    Warn.appendChild(li2)
    setTimeout(() => {
        Warn.removeChild(li2)
    }, 1000);
}if(regex3.test(value)){
    alert("Good Email")
    let li3 = document.createElement("li")
    li3.textContent = `Good Email`
    Warn.appendChild(li3)
    setTimeout(() => {
        Warn.removeChild(li3)
    }, 1000);
}
})

const UrlInput = document.getElementById("UrlInput")
const UrlBtn = document.getElementById("UrlBtn")
let WarnUrl = document.getElementById("WarningUrl")

UrlBtn.addEventListener("click",function(){
    let value = UrlInput.value
    let InputReg = /^https?:\/\/[\w.-]+\.[a-z]{2,}$/

    if(InputReg.test(value)){
        let li1 = document.createElement("li")
        li1.textContent = `Good Link!`
        WarnUrl.appendChild(li1)
        setTimeout(() => {
        WarnUrl.removeChild(li1)
        }, 1000);
    }else{
        alert("salah")
    }
})

const Dateinp = document.getElementById("DateInp")
const DateBtn = document.getElementById("DateBtn")

DateBtn.addEventListener("click",function(){
    let value = Dateinp.value
    const regex = /^(\d[0-9])[\-./](\d[0-2])[\-./](20\d{2})$/

    if(regex.test(value)){
        alert("benar")
    }else{
        alert("salah")
    }

})

const InputTag = document.getElementById("InputTag")
const BtnTag = document.getElementById("BtnTag")
const HtmlTag = document.getElementById("HtmlTag")

BtnTag.addEventListener("click",function(){
    let value = InputTag.value
    const regex = /(<\w{1,4}>)\w(<\/\w{1,4}>)$/
    if(regex.test(value)){
         let li1 = document.createElement("li")
    li1.textContent = `Nice!`
    HtmlTag.appendChild(li1)
    setTimeout(() => {
        HtmlTag.removeChild(li1)
    }, 1000);
    }else{
        console.log("salah")
    let li1 = document.createElement("li")
    li1.textContent = `You Must Have any description inside or else`
    HtmlTag.appendChild(li1)
    setTimeout(() => {
        HtmlTag.removeChild(li1)
    }, 1000);
    }

})