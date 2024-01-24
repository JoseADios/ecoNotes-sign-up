var password = document.getElementById("password")
var confirm_password = document.getElementById("confirmPassword")

function validatePassword(){
  if(password.value !== confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.addEventListener("change", validatePassword);
confirm_password.addEventListener("change", validatePassword);
