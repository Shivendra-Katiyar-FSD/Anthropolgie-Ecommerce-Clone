document.querySelector("form").addEventListener("submit", signUP);

let signUpArray=JSON.parse(localStorage.getItem("userData")) || [];

function signUP(event){
    event.preventDefault();

    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;

    let signUpObj={
        name:name,
        email:email,
        password:password,
    };

    if(checkExistingEmail(signUpObj.email)===true && (signUpObj.name=="" || signUpObj.email=="" || signUpObj.password=="")) alert("Please enter all the required details !!")
    else if(checkExistingEmail(signUpObj.email)===true){
        signUpArray.push(signUpObj);
        localStorage.setItem("userData", JSON.stringify(signUpArray));
        alert("Sign Up Successful, You can Log In Now :)")
        window.location.href="signIn.html"
    }
    else{
        alert("Account already exits !! Please use a different Email to create a new User Account");
    }


}


function checkExistingEmail(email){
    let filterEmail=signUpArray.filter(function(element){
        return email===element.email;
    })
    if(filterEmail.length>0) return false;
    else return true;
}