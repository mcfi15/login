// var attempt = 3;

function getInfo() {
    event.preventDefault();

  var userName = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("result");

  const user = {
    username: "mcfi",
    password: "mcfi",
  };


  if (userName == user.username && password == user.password) {
    // alert("successful");
    message.innerHTML = 'Your Login Successfully!';
  } else {
    // alert("Incorrect Username or password");
    message.innerHTML = 'Incorrect Username or Password';
  }
}
