let arr = document.getElementsByClassName("number")
console.log(arr)
function delay (arr,tick,number,increase){
    let t = 1
    setInterval(function(){
        if(t<number){
            arr.innerHTML = t
            t = t + increase
        }else{
            arr.innerHTML = number
        }
    },tick)
}
delay(arr[0],10,12000,70)
delay(arr[1],10,5000,20)
delay(arr[2],10,7500,30)

