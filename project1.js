var heading = document.querySelector("h2");

var btn = document.querySelector("#add");

var check = 0;

btn.addEventListener("click" , ()=>{
   if(check == 0){
    btn.innerHTML = "Remove Friend"
    btn.style.color = "cadetBlue"
    btn.style.transition = "all linear 0.5s"
    heading.innerHTML = "Friend"
    heading.style.color = "green"
    btn.style.background = "#fff"
    check=1;
   }else{
    btn.innerHTML = "Add Friend"
    btn.style.color = "#fff"
    heading.innerHTML = "Stranger"
    heading.style.color = "red"
    btn.style.background = "cadetBlue"
    check=0;
   }
})