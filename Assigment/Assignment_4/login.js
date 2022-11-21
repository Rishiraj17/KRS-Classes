function printErr(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// var submit = document.getElementById("submit");
// console.log(submit);
// submit.onclick = function () {
//   validateForm();
// };

document.getElementById("submit").addEventListener("click", function (e) {
  validateForm();
});

function validateForm() {
  var form = document.getElementById("myForm");
  console.log(form);
  var username = form.Name.value;
  var password = form.Pass.value;
  console.log(password);
  var usernameErr = true;
  var passwordErr = true;

  // var form = document.getElementById("myForm");

  // var username = form.Name.value;
  // console.log(username);

  //   var usernameErr = true;
  //   var passwordErr = true;

  if (username == "") {
    printErr("usernameErr", "Please enter your name");
  } else {
    var regex = /^[a-zA-z\s]+$/;
    if (regex.test(username) === false) {
      printErr("usernameErr", "Please enter a valid Username");
    } else {
      printErr("usernameErr", "");
      usernameErr = false;
    }
  }

  if (password == "") {
    printErr("passwordErr", "Please enter a password");
  } else {
    var regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(password) === false) {
      printErr(
        "passwordErr",
        "Paswsword must contain 1 uppercase,1 lowercase,1 special character and of minimum 8 characters"
      );
    } else {
      printErr("passwordErr", "");
      passwordErr = false;
    }

    if ((usernameErr || passwordErr) == true) {
      return false;
    } else {
      // console.log("jsdfh");

      var dataPreview =
        "You've entered the following details:\n" +
        "username:" +
        username +
        "\n" +
        "password:" +
        password;

      alert(dataPreview);
    }
  }
}

// let fetchRes=fetch(
//     "https://jsonplaceholder.typicode.com/todos/1");
//     fetchRes.then(res=>
//         res.json()).then(d=>{
//             console.log(d)
//         }
//             )
