let button = document.getElementById("toggle");
let body = document.getElementsByTagName("body");
let mode = "light";

button.addEventListener("click",()=>{
    if(mode=="light"){
        mode="dark";
    }
    else{
        mode="light";
    }
})

button.addEventListener("click",()=>{
    if(mode=="light"){
        body[0].style.backgroundColor="black";
    }
    else{
        body[0].style.backgroundColor="white";
    }
})