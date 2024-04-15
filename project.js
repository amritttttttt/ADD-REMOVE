var isstatus = document.querySelector("h5")
var btn = document.querySelector("#add")

var check = 0
 

btn.addEventListener("click",function(){
   
   if(check == 0){

   
    isstatus.innerHTML = "Friends"
    isstatus.style.color = "green"
    btn.innerHTML = "Remove friend"


check = 1
}

else{

   
    isstatus.innerHTML = "strangers"
    isstatus.style.color = "red"
    btn.innerHTML = "Add friend"
    
    check = 0
}


})
