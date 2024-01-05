var usernames = JSON.parse(localStorage.getItem("usernames"));
lastindex = usernames.length - 1
var welcomemsg = document.getElementById("welcome");

welcomemsg.innerHTML=`welcome,${usernames[0]}`