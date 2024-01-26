let btn1= document.getElementById('btn-1');
let btn2= document.getElementById('btn-2');
let cir1 = document.getElementById('cir-1')
let cir2 = document.getElementById('cir-2')
let cir3 = document.getElementById('cir-3')
let cir4 = document.getElementById('cir-4')
let space1= document.getElementById('space-1');
let space2= document.getElementById('space-2');
let space3= document.getElementById('space-3');
let div3=document.getElementById('div-3');
let div2=document.getElementById('div-2');
let div1=document.getElementById('div-1');

function borC4(){
    cir4.style.borderColor = 'rgb(38 136 209)'
}
function borC1(){
    cir1.style.borderColor = 'rgb(38 136 209)'
}
function borC2(){
    cir2.style.borderColor = 'rgb(38 136 209)'
}
function borC3(){
    cir3.style.borderColor = 'rgb(38 136 209)'
}

let step = 1
btn1.onclick= function(){
    step--
    if(step < 1) step = 1
    console.log(step)
    if(step == 4){
        btn2.style.backgroundColor = 'rgb(220 220 220)'
    }else btn2.style.backgroundColor = 'rgb(38 136 209)'
    if(step == 1){
        btn1.style.backgroundColor = 'rgb(220 220 220)'
    }else btn1.style.backgroundColor = 'rgb(38 136 209)'
    if(step == 1){
        borC1
        div1.style.backgroundColor = 'rgb(255 255 255)'
        space1.className='backward'
        cir2.style.borderColor = 'white'
        space2.style.backgroundColor = 'white'
        cir3.style.borderColor = 'white'
        space3.style.backgroundColor = 'white'
        cir4.style.borderColor = 'white'
    }else if(step == 2){
        borC1
        space1.style.backgroundColor = 'rgb(38 136 209)'
        setTimeout(borC2,900)
        div2.style.backgroundColor = 'rgb(255 255 255)'
        space2.className='backward'
        cir3.style.borderColor = 'white'
        space3.style.backgroundColor = 'white'
        cir4.style.borderColor = 'white'
    }
    else if(step ==3){
        borC1
        space1.style.backgroundColor = 'rgb(38 136 209)'
        cir2.style.borderColor = 'rgb(38 136 209)'
        space2.style.backgroundColor = 'rgb(38 136 209)'
        cir3.style.borderColor = 'rgb(38 136 209)'
        // space3.style.backgroundColor = 'white'
        cir4.style.borderColor = 'white'
        div3.style.backgroundColor = 'rgb(255 255 255)'
        space3.className='backward'
    }
}
btn2.onclick= function(){
    step++
    if(step > 4) step = 4
    console.log(step)
    if(step == 1){
        btn1.style.backgroundColor = 'rgb(220 220 220)'
    }else btn1.style.backgroundColor = 'rgb(38 136 209)'
    if(step == 4){
        btn2.style.backgroundColor = 'rgb(220 220 220)'
    }else btn2.style.backgroundColor = 'rgb(38 136 209)'
    if(step == 1){
        borC1
        space1.style.backgroundColor = 'white'
        cir2.style.borderColor = 'white'
        space2.style.backgroundColor = 'white'
        cir3.style.borderColor = 'white'
        space3.style.backgroundColor = 'white'
        cir4.style.borderColor = 'white'
    }else if(step == 2){
        borC1
        div1.style.backgroundColor = 'rgb(255 255 255)'
        space1.className = 'forward'
        space1.style.backgroundColor = 'rgb(38 136 209)'
        setTimeout(borC2,900)
        space2.style.backgroundColor = 'white'
        cir3.style.borderColor = 'white'
        space3.style.backgroundColor = 'white'
        cir4.style.borderColor = 'white'
    }else if(step ==3){
        borC1
        space1.style.backgroundColor = 'rgb(38 136 209)'
        div2.style.backgroundColor = 'rgb(255 255 255)'
        space2.className = 'forward'
        space2.style.backgroundColor = 'rgb(38 136 209)'
        space3.style.backgroundColor = 'white'
        setTimeout(borC3,900)
        cir4.style.borderColor = 'white'
    }else if(step ==4){
        borC1
        space1.style.backgroundColor = 'rgb(38 136 209)'
        cir2.style.borderColor = 'rgb(38 136 209)'
        space2.style.backgroundColor = 'rgb(38 136 209)'
        div3.style.backgroundColor = 'rgb(255 255 255)'
        space3.className = 'forward'
        cir3.style.borderColor = 'rgb(38 136 209)'
        space3.style.backgroundColor = 'rgb(38 136 209)'
        setTimeout(borC4,900)
        
    }
}
cir1.style.borderColor = 'rgb(38 136 209)'