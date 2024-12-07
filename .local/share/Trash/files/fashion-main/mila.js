function animatedform() {
const arrow=document.querySelectorAll(".fa-arrow-down");

 arrows.forEach(arrow => {
     arrow.addEventListener("click" ,=>{
     const input= arrow.previouselementsibling;
     const input=arrow.parentelement;
     const nextForm=parent.nextElementSibling;
     }


     //check for validation
     if (input type ==="Text" && validateUser(input)) {
         nextslide(parent.nextForm);
         
     } else if(input.type === email && validateEmail(input)){
         nextslide(parent.nextForm);
     }else if(input.type === 'password' && validateUser(input)){
         nextslide(parent.nextForm);
     }else{
        parent.style.animation =" shake 0.5s ease";
     }
     //get rid of animation
     parent.addEventListener("animationend",()=> {
         parent.style.animation ="";
     }
    
});
}
function validateUser(User){
if (User.value.length <5) {
    console.log ("not enough character");
    error("rgb,189,87,87");   
}else{
error ("rgb,255,128,255");
return true;

}
function validateEmail(email){
const validation 
if (validation text(email.value)) {
    error("rgb,189,87,87");   
    return true;
    else{
        ("rgb,255,128,255");
    }
}    
}

}
function nextslide(parent.nextForm);{
   parent.classlist.add ("inactive");
   parent.classlist.remove("active");
   nextForm.classlist.add ("active");
}

}
animatedform();