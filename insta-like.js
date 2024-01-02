var target = document.querySelector("#card");

var icon = document.querySelector("i");

target.addEventListener("dblclick", ()=>{
    icon.style.transform= "translate(-50%,-50%) scale(1)";
    icon.style.opacity = 1;
    setTimeout(function(){
        icon.style.transform= "translate(-50%,-50%)  scale(0)";
        icon.style.opacity = 0;
    },2000)
    
})