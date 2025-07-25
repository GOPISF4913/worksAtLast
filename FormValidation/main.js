const form = document.getElementById("myform");

const username = document.getElementById("name");


username.addEventListener("blur", (e)=>{
    validateInputs();
})
//creating the form add listener
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

//validating the form
function validateInputs(){
    const usernameVal = username.value.trim();
   let result= validateUser(usernameVal);
   if(! result){
    setError(username,"User name is required");
    return false;
   }
   else{
    setSuccess(username);
    window.location.href="message.html";
    return true;
   }

}

function setError(element, message){
    const inputGroup = element.parentNode;
    const errorElement = inputGroup.querySelector("#error-name");
    errorElement.textContent = message;
    errorElement.classList.add('error');
    errorElement.classList.remove('success');

}
function setSuccess(element){
    const inputGroup = element.parentNode;
    const errorElement = inputGroup.querySelector("#error-name");
    errorElement.textContent = '';
    errorElement.classList.remove('error');
    errorElement.classList.add('success');

}

const validateUser =(user)=>{
    let regexName = /^[a-zA-Z ]+$/
    if(regexName.test(user)){
        return true
    }
    else{
        return false
    }
}