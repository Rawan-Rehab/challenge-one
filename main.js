
let but=document.querySelector("button");
let input=document.querySelector("input");
but.onclick=function(ev){
let email=input.value.trim();
    if(email===""){
       input.value=" this is required";

    }
}
//////////////////////////////////////////////////////////////////////////
// function isValidEmail(email) {





function isValidEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Assuming 'but' is a button element
  but.onclick = function() {
    var emailInput = input.value;
    if (isValidEmail(emailInput)) {
      alert("Email is valid");
    } else {
      alert("Email is not valid");
    }
  }

 