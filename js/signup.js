var newemail = document.getElementById("emailsignup");
var newpassword = document.getElementById("passwordsignup");
var signupbtn = document.getElementById("signupbtn");
var message = document.getElementById("message");
var linking = document.getElementById("directing");
var username = document.getElementById("username");
var repeatingmsg = document.getElementById("repeatingmail");

// var pathparts = location.pathname.split("/")
// console.log(pathparts)
// var lastindex = pathparts.length - 1;
// console.log(lastindex)
var pathparts = location.pathname.split("/");

var baseURL = "";
for (var i = 0; i < pathparts.length - 1; i++) {
  baseURL += "/" + pathparts[i];
}
console.log(baseURL);
console.log(location.hostname);


if (localStorage.getItem("UsersData") !== null) {
    var allusers = JSON.parse(localStorage.getItem("UsersData"));
}
else {
    var allusers=[]
}
    
  
    
    
  signupbtn.addEventListener("click", function () {
    var user = {
      email: newemail.value,
        password: newpassword.value,
      username:username.value,
      };
      if (validateemail() == true && validatename() == true && validatepassword() == true && validaterepeatingemail() == true  ) {
           allusers.push(user);
           var Usersdata = JSON.stringify(allusers);
           localStorage.setItem("UsersData", Usersdata);
           message.innerHTML = "Success";
           message.classList.add("text-center");
           message.classList.add("text-success");
           console.log(baseURL);
           if (baseURL == "./") {
             location.replace("https://" + location.hostname + "/index.html");
           } else {
             location.replace(location.hostname + "/index.html");
           }

      }
   
  });

function validateemail() {
      var emailregex =
        /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
    var emailvalue = newemail.value;
    if (emailregex.test(emailvalue)) {
        newemail.classList.add("is-valid");

                document.getElementById("alertmsgmail").classList.add("d-none");
                newemail.classList.remove("is-invalid"); 


        return true
    }
    else {
        document.getElementById("alertmsgmail").classList.remove("d-none");
                        newemail.classList.add("is-invalid"); 
                newemail.classList.remove("is-valid"); 


        return false
  }
  
}
newemail.addEventListener("blur", validateemail);
function validatename() {
    var nameregex = /[a-zA-Z]{3,15}/gm;
    var namevalue = username.value;
    if (nameregex.test(namevalue)) {
        username.classList.add("is-valid")
                document
                  .getElementById("alertmsgname")
            .classList.add("d-none");
        username.classList.remove("is-invalid")

        return true
    }
    else {
        document.getElementById("alertmsgname").classList.remove("d-none");
        username.classList.add("is-invalid")
        username.classList.remove("is-valid")
        return false
    }
}
username.addEventListener("blur", validatename);

function validatepassword() {
    var passwordregex = /[0-9]{6,15}/gm;
    var passwordvalue = newpassword.value;
    if (passwordregex.test(passwordvalue)) {
        newpassword.classList.add("is-valid")
        newpassword.classList.remove("is-invalid")
        document.getElementById("alertpass").classList.add("d-none");
        return true
    }
    else {
                newpassword.classList.remove("is-valid");
        newpassword.classList.add("is-invalid");
        document.getElementById("alertpass").classList.remove("d-none");
        return false

    }
}
newpassword.addEventListener("blur",validatepassword)
  
// login part

function validaterepeatingemail() {
  if (localStorage.getItem("UsersData") !== null) {
     for (var i = 0; i < allusers.length; i++)
       if (newemail.value != allusers[i].email) {
         repeatingmsg.classList.add("d-none");
         newemail.classList.add("is-valid");
         newemail.classList.remove("is-invalid");
         return true;
       } else {
         repeatingmsg.classList.remove("d-none");
         newemail.classList.remove("is-valid");
         newemail.classList.add("is-invalid");
         return false;
       }
  }
  else {
    return true;
  }
   
   
}
newemail.addEventListener("blur",validaterepeatingemail)