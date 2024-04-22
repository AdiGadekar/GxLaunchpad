document.addEventListener("DOMContentLoaded", function() {
    // Set the username and password fields with pre-defined values
    document.querySelector('.userInputs[type="email"]').value = "";
    document.querySelector('.userInputs[type="password"]').value = "Example@123";
});

let clickCount = 0;
let email="",password="";

function nextbtn() 
{
    let inputfield = document.getElementsByClassName('userInputs');
    let value = inputfield[0].value;

    if(clickCount==0 && value!="")
    {
        email = value;
        inputfield[0].value="";

        clickCount+=1;
        let inpEmail = document.getElementsByClassName("enterInputs");
        inpEmail[0].style.display = 'none';


        var userinput = document.getElementsByClassName("userInputs");
        userinput[0].placeholder = "Password";
        userinput[0].type = "password";

        var backBtns = document.getElementsByClassName("backbtn");
        backBtns[0].style.visibility = 'hidden';
        
        var logHeading = document.getElementsByClassName("loginheading");
        logHeading[0].textContent = "Enter password";


        var signinbtn = document.getElementsByClassName("nextbtn");
        signinbtn[0].innerHTML = "Sign in";

        changeForgotPassword()
        hideSignInOption()
    }
    else if(clickCount==0 && value=="")
    {
        inputError();
    }
    else if(clickCount==1 && value!="")
    {
        password = value;
        clickCount+=1;
    }
    else{
        inputError()
    }
    

    if(clickCount==2)
    {
        // Check if the entered username and password match the pre-filled values
        if (email === "adigadekar@galaxe.com" && password === "Example@123") {
            // Navigate to index.html if successful
            window.location.href = "home.html";
        } else {
            // Display an error message if the username or password is incorrect
            alert("Incorrect username or password. Please try again.");
        }
    }
}

function changeForgotPassword()
{
    var forgotPassword = document.getElementsByClassName("notAccessLink");
    forgotPassword[0].textContent = "Forgot my password"
}

function hideSignInOption()
{
    var signOptions = document.getElementsByClassName("signInOptionsContainer");
    signOptions[0].style.visibility = 'hidden';
}

function inputError()
{
    let inpEmail = document.getElementsByClassName("enterInputs");
    if(clickCount==0)
    {
        inpEmail[0].textContent = "Enter a valid email address, phone number, or Skype name.";
    }
    else if(clickCount==1)
    {
        inpEmail[0].textContent = "Please enter your password.";
    }
    inpEmail[0].style.display = 'contents';
}
