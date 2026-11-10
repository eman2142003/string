function validatedData(){

    var user= document.getElementById("user").value.trim();
    var email= document.getElementById("email").value.trim();
    var pass= document.getElementById("password").value;
    var confirmPassword= document.getElementById("confirm_password").value;
    var result= document.getElementById("result");
    result.setAttribute("class", "alert alert-danger text-center");

    if(user=="" && email=="" && pass=="" && confirmPassword==""){
        result.innerHTML="Enter Data!";
        return false;
    }else if(user.length<3 || user.length>15){
        result.innerHTML="Enter 3-15 character in Name";
        return false;
    }else if(email.indexOf("@", 1) == -1 || email.indexOf(".com")== -1){
        result.innerHTML="Enter Valid email";
        return false;
    }else if(pass==""){
        result.innerHTML="Enter Password"
        return false;
    }else if(pass.length<8){
        result.innerHTML="Weak password";
        return false;
    }else if(pass!=confirmPassword){
        result.innerHTML="Matched password";
        return false;
    }
    

}


