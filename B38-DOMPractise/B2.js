let icon = document.getElementById('icon');
let ip= document.getElementById('ip');
// ip.style.display="none";
ip.style.width = "0px"
let count = 1
icon.onclick= function(){
    
    count++
    if(count%2==0){
        // ip.style.display = "block"
        ip.style.width = "200px"
        
        
    } 
    else
    {
        // ip.style.display = "none"
        ip.style.width = "0px"
        
    } 
    ip.style.transition = "width 2s"
    // if(ip.value == "" && count !=2){
    //     setTimeout(offsearch,2000)
    // }
}
