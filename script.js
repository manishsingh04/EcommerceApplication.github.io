const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");

const close = document.getElementById("close");


//for opening the hemburger menu
if(bar){

    bar.addEventListener('click',()=>{

        nav.classList.add('active');
    })
}

//for closing
if(close){

    close.addEventListener('click',()=>{

        nav.classList.remove('active');
    })
}


// js for changing image on click

let mainimg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img");


smallimg[0].onclick = function(){

    mainimg.src = smallimg[0].src;

}

smallimg[1].onclick = function(){

    mainimg.src = smallimg[1].src;
    
}

smallimg[2].onclick = function(){

    mainimg.src = smallimg[2].src;
    
}

smallimg[3].onclick = function(){

    mainimg.src = smallimg[3].src;
    
}