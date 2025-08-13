let num=Math.round(Math.random()*100);
let lives=10;

function game(){
    let a=document.querySelector("#message");
    let userinput=Number(document.querySelector("#display").value);
    lives--;
    document.getElementById("message").style.display='block';
    
    if(num==userinput){
        location.href="win.html";
    }
    else if(lives==0){
        location.href="lose.html";
    }
    if(num<userinput){
        a.innerHTML="oops! user input is too High and Remaining life is  "+lives;
    }
    else if(num>userinput){
         a.innerHTML="oops! user input is too low and Remaining life is  "+lives;
    }
    document.querySelector("#display").value="";
}