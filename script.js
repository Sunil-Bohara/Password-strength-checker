console.log("start js");

const inputField = document.querySelector("#password");
const resultText = document.querySelector("#result");

inputField.addEventListener("input", () => {
  let password = inputField.value;

  if(password.length < 8){
    resultText.textContent = "Password must contain atleast '8' characters.";
    resultText.style.color = "red";
  } else {

    if(password.search(/[a-z]/) == -1){
      resultText.textContent = "Password must contain at least one 'lowercase' letter.";
      resultText.style.color = "red";
    }else if(password.search(/[A-Z]/) == -1){
      resultText.textContent = "Password must contain at least one 'uppercase' letter.";
      resultText.style.color = "red";
    }else if(password.search(/[0-9]/) == -1){
      resultText.textContent = "Password must contain at least one 'number'.";
      resultText.style.color = "red";
    }else if(password.search(/[!\@\#\$\%\^\&\*\(\)\{\}\[\]\<\>\"\'\?\,\/\.]/) == -1){
      resultText.textContent = "Password must contain at least one 'special character'.";
      resultText.style.color = "red";
    }else {
      resultText.textContent = "Password is strong.";
      resultText.style.color = "green";
    }
  }
})