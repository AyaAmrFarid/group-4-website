var getUsername = prompt("Enter you name") ;

console.log(getUsername);

document.getElementById("username").innerText = getUsername;

// tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })