let icon = document.getElementById('icon');
let ip= document.getElementById('ip');
ip.style.display="none";
function offsearch() {
    ip.style.display = "none"
}
icon.onclick= function(){
    ip.style.display = "block"
    ip.style.width = "200px"
    if(ip.value == ""){
        setTimeout(offsearch,2000)
    }
}
ip.onmouseover = function(){
    ip.style.width="200px";
}
