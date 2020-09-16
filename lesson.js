let btn = document.getElementById("first");
let output = document.getElementById("outputtext");

let number = [Math.floor(Math.random ()*100)]

btn.addEventListener("click", function(){
let input = document.getElementById("userinput").value;
if (input == number){
    output.innerHTML = 'correct ur num was' 
}else if(input<number){
    output.innerHTML = 'u gues too low' 
}
else
{
   output.innerHTML='u gues too high'
}
}
);