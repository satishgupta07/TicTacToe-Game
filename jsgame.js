
let sign = "x";
let disp = document.getElementById("player");

function printx(number){
    let isko = document.getElementById("r"+number)
    console.log(isko)
    
    if(isko.innerText==""){
        isko.innerText=sign;
        checksign()
        disp.innerHTML = "<center>"+ sign + " ka turn hai"+"</center>" 
    }
    
}

function checksign(){
    if(sign=='x'){
        sign='o'
    }
    else{
        sign='x'
    }
}