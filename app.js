var elements = document.querySelectorAll("button");
var screen = document.getElementById("screen");
var clear = document.getElementById("clear");
var del = document.getElementById("delete");

for(let i = 0; i < elements.length; i++){
if(elements[i].innerHTML === "="){
  elements[i].addEventListener("click", calculate(i));
}else{
  
    elements[i].addEventListener("click", addtoCurrentValue(i));
}
}
function addtoCurrentValue (i){
  return function(){
    screen.value  += elements[i].innerHTML;
  };
 }
 clear.addEventListener("click",()=>{
screen.value = '';

})

function calculate(i) {
return function () {
  screen.value = eval(screen.value);
};
}

del.addEventListener("click",()=>{
screen.value = screen.value.slice(0,-1)
})


