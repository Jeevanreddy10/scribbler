function SignIn() {
    document.getElementById('signInModal').style.display='block';
}
    
function SignUp() {
    document.getElementById('signUpModal').style.display='block';
}

function onCloseModalClicked() {
    document.getElementById('signInModal').style.display='none';
    document.getElementById('signUpModal').style.display='none';
}

function openSignUpButton(){
    document.getElementById('signUpModal').style.display='block';
}