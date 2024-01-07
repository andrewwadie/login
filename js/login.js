// login part
var incorrectmsg = document.getElementById("incorrectmsg");
var welcomemsg = document.getElementById("welcome");
var loginemail = document.getElementById("loginemail");
var loginpassword = document.getElementById("loginpassword");
var loginbtn = document.getElementById("loginbtn");
var pathparts = location.pathname.split("/");
var baseURL = "";
var usernames = [];
for (var i = 0; i < pathparts.length - 1; i++) {
  baseURL += "/" + pathparts[i];
}
console.log(baseURL);
console.log(location.hostname)

if (localStorage.getItem("UsersData") !== null) {
  var allusers = JSON.parse(localStorage.getItem("UsersData"));
} else {
  var allusers = [];
}
loginbtn.addEventListener("click", loginfun)

function loginfun() {
    for (var i = 0; i < allusers.length; i++) {
      if (
        loginemail.value == allusers[i].email &&
        loginpassword.value == allusers[i].password
      ) {
          var z = i
        if (baseURL == "./") {
          location.replace("https://" + location.hostname + "./home.html");
        } else {
          location.replace(baseURL + "./home.html");
        }
        }
      else {
          incorrectmsg.classList.remove("d-none")
        }

    }
    usernames.push(allusers[z].username)
    var usernamesdata = JSON.stringify(usernames)
    localStorage.setItem("usernames",usernamesdata)
}

