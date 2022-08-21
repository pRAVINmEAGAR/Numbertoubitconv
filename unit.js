const inputq=document.querySelector("#get-vl"),
      buTTon=document.querySelector("#buTn"),
      para1=document.querySelector("#paraG1"),
      para2=document.querySelector("#paraG2"),
      para3=document.querySelector("#paraG3"),
      para4 = document.querySelector("#eror")

buTTon.addEventListener("click",function btna(){
    if(inputq.value > 0 ){
        var snd = new Audio("buttonclicked.mp3");
         
         snd.play();
        console.log(inputq.value)
        first()
        seco()
        third()
        para4.textContent=""
    }
    else{
         clear()
    }

})
function clear(){
    let all=inputq.value=" "
    para1.textContent= all
    para2.textContent= all
    para3.textContent= all
    para4.textContent= "pls enter valued number only"

}
function first(){
    para1.textContent=inputq.value+" meter = "+ 
     inputq.value*3.280839895.toFixed(3)+" feet " + " | " + inputq.value +
     " feet = " + inputq.value*0.3048.toFixed(3) + " " + " meter"
}
function seco(){
    para2.textContent=
    inputq.value + " liters = " + inputq.value*0.264172.toFixed(3) + " gallons"
    +" | " + inputq.value +" gallons = "+ inputq.value*75.7082.toFixed(3)
    +" liters"
}
function third(){
    para3.textContent=
    inputq.value + " kilos = " + inputq.value*2.20462.toFixed(3)
    +" pounds " + " | "
    +inputq.value + " pounds = " +inputq.value*0.453592.toFixed(3) 
    +" kilos"
}
