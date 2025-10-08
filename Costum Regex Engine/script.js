/*
My Purpose:
    To create a function that can recognize words or character patterns — exactly 
    how a real regex engine works, but coded manually by you.
*/

// Still In Learning Not Finish!!

function recognize(string1,string2){
    // if(!string1) return true
    // if(!string2) return false
    // if(string1 === ".") return true
    // return string1 === string2
    // return string1 === string2

    if(string1.length !== string2.length) return false

    for (let i = 0; i < string1.length; i++) {
        if(string1[i] === ".") continue
        if(string1[i] !== string2[i])return false
        // if(string1 !== string2) return true
        // if(!string1[i]) return true
        // if(!string2) return false
        // if(string1 === ".") return true
        // return string1 === string2
    }

        return true
    
}

console.log(recognize("a","z"))
console.log(recognize("a","a"))
console.log(recognize("a",1))
console.log(recognize("a",""))
console.log(recognize("a","."))
console.log(recognize(".","z"))

// function match(string1,string2){
//     if(string1 === "")return true
//     else{
//         return(
//         recognize(string1[0],string2[0]) && match(string1.slice(1), string2.slice(1))
//         )
//     }

// }
// console.log(match("a",""))
