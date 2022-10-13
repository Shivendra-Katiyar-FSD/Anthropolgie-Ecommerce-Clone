document.querySelector("form").addEventListener("submit", signIn);

let signInArray=JSON.parse(localStorage.getItem("userData")) || [];

function signIn(event){
    event.preventDefault();

    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;

    let signInObj={
        email:email,
        password:password,
    };

    if(checkLoginCredentials(signInObj.email, signInObj.password)===true){
        localStorage.setItem("credentials", JSON.stringify(signInObj));
        alert("Sign In Successfull :)");
        window.location.href="index.html";
    }
    else{
        alert("Wrong Credentials !!");
    }

}


function checkLoginCredentials(email, password){
    let filterEmailPassword=signInArray.filter(function(element){
        return element.email===email && element.password===password;
    })
    if(filterEmailPassword.length>0) return true;
    else return false;
}
