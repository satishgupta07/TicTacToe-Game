
let sign = "x";
let disp = document.getElementById("player");

function printx(number){
    let isko = document.getElementById("r"+number)
    console.log(isko)
    
    if(isko.innerText==""){
        isko.innerText=sign;
        winner();

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
    if(checkMove(1,2,3,sign) || checkMove(4,5,6,sign) || checkMove(7,8,9,sign) ||
        checkMove(1,4,7,sign) || checkMove(2,5,8,sign) || checkMove(3,6,9,sign) ||
              checkMove(1,5,9,sign) || checkMove(7,5,3,sign) ){
                 
                    disp.innerHTML = "<center>"+ sign + " is Winner" + "</center>";

                    for(let i=1; i<=9; i++){
                        document.getElementById("r"+i).innerHTML = "";
                    }
                    throw "game end";
            }   
            
            else{
                if((getBox(1) != "") && (getBox(2) != "") && (getBox(3) != "") &&
                    (getBox(4) != "") && (getBox(5) != "") && (getBox(6) != "") &&
                    (getBox(7) != "") && (getBox(8) != "") && (getBox(9) != "") ){
                         
                        disp.innerHTML = "<center> Its A Tie </center>"
                        throw "its a tie";
                    }
                    
            }
}