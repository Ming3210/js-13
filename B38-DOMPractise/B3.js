let div = document.getElementById("div-id");
function delay (n,t,percent){
    setTimeout(function(){
        div.style.opacity = n
        div.textContent = percent + "%"
    },t)
}
delay(0.1,200,"10")
delay(0.3,600,"20")
delay(0.5,1100,"45")
delay(0.6,1200,"57")
delay(0.8,1500,"74")
delay(0.9,1700,"90")
delay(1,2000,"100")