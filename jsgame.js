
let sign = "x";
let disp = document.getElementById("player");

function printx(number){
    let isko = document.getElementById("r"+number)
    console.log(isko)
    
    if(isko.innerText==""){
        isko.innerText=sign;
        checksign()
        disp.innerHTML = "<center>"+ sign + " ka turn hai"+"</center>" 
        winner();
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

function getBox(no){
    return document.getElementById("r"+no).innerHTML;
}

function checkMove(a,b,c,m){
    if(getBox(a)==m && getBox(b)==m && getBox(c)==m){
        return true;
    }
    else {
        return false;
    }
}

function winner(){
    if(checkMove(1,2,3,"x") || checkMove(4,5,6,"x") || checkMove(7,8,9,"x") ||
        checkMove(1,4,7,"x") || checkMove(2,5,8,"x") || checkMove(3,6,9,"x") ||
              checkMove(1,5,9,"x") || checkMove(7,5,3,"x") ){
                 
                    alert("X is Winner");
            }         
}