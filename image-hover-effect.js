var elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
    val.addEventListener("mouseenter" , ()=>{
       val.childNodes[3].style.opacity = 1;
     
    })
    val.addEventListener("mouseleave" , function(){
       val.childNodes[3].style.opacity = 0;

    })
    val.addEventListener("mousemove" , function(dets){
        val.childNodes[3].style.left = dets.x+"px";
        val.childNodes[3].style.top = dets.y-"px";
    })
});
// elem.addEventListener("mousemove" , function(dets){
//     elem1.style.opacity = 1;
//     elem1.style.left = dets.x+"px"
//     elem1.style.top = dets.y+"px"
// })
// elem.addEventListener("mouseleave" , ()=>{
//     elem1.style.opacity = 0;
// })