
let sign = "x";


function printx(number){
    let isko = document.getElementById("r"+number)
    console.log(isko)

    isko.innerText=sign;
    checksign()
}

function checksign(){
    if(sign=='x'){
        sign='o'
    }
    else{
        sign='x'
    }
}