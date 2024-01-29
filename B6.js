let water = document.getElementById("water");
let arr = document.getElementsByClassName("glass")
let percent = document.getElementById("percent");
let remain = document.getElementById("remain");
arr[0].onclick =  function (){
    if(arr[0].style.backgroundColor != "white"){
        arr[0].style.backgroundColor = "white";
        water.style.height = "40px"
        percent.innerHTML = "12.5%"
    }else{
        arr[0].style.backgroundColor = "cyan";
        water.style.height = "0px"
        percent.innerHTML = "0%"
    }
}