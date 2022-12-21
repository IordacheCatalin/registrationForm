const registerForm = document.querySelector("form.register");

registerForm.addEventListener("submit", handleRegister);

function handleRegister(event) {
    event.preventDefault();
   const firstName = document.querySelector("#firstName");
   const message = document.querySelector("#message");
   message.innerText = "";


  if(firstName.value.length<2){
     message.innerText = "Please enter at least 2 characters for the first name";
  }
  const lastName = document.querySelector("#lastName");
  if(lastName.value.length<2){
    //\n new line between
   message.innerText += "\nPlease enter at least 2 characters for the last name";
  }

  const email = document.querySelector("#email");
  const regex = /[a-zA-Z]{2,}\@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/g;
   if (!email.value.match(regex)) {
    message.innerText += "\nPlease enter a valid email address";}

    
const password = document.querySelector("#password");
const regexPassword = /[0-9a-zA-Z]{8,}/g;
if (!password.value.match(regexPassword)) {
   message.innerText += "\nPlease enter a valid password";
}

if (!message.innerTest)
{const success = document.querySelector("#success");
success.innerText = "Congratulations, you have successfully register";}


};