let inputEmail = document.getElementById("email"); 
​
const validateEmail = () =>{
    let errorSpan = document.getElementById("error_span");
    let regexPattern = /^\w+@\w+(\.\w{2,3})+$/;
    if (!regexPattern.test(email.value)){
        errorSpan.innerHTML="invalid email adress!";
        errorSpan.style.color="red";
    }
    else{
        errorSpan.innerHTML ="your email is valid";
        errorSpan.style.color ="green";
    }
}