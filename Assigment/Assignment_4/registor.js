function printErr(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// var submit=document.getElementById("submit");
// submit.onclick=function(){
//     validateForm();
// };
document.getElementById("submit").addEventListener("click", function (e) {
  validateForm();
});

function validateForm() {
  var form = document.getElementById("myForm");
  console.log(form);
  var name = form.Name.value;
  console.log(name);
  var num = form.pnum.value;
  console.log(num);
  var email = form.Email.value;
  console.log(email);
  var gen = form.Gender.value;
  console.log(gen);
  var qul = form.Qual.value;
  console.log(qul);
  var cor = form.course.value;
  console.log(cor);
  var con = form.Country.value;
  console.log(con);
  var check = document.getElementById("condition").checked;
  console.log(check);
  var nameErr = true;
  var emailErr = true;
  var numberErr = true;
  var courseErr = true;

  var genderErr = true;
  var conditionErr = true;
  var quliErr = true;
  var formErr;

  if (name == "") {
    printErr("nameErr", "Please enter a name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printErr("nameErr", "Please enter a valid name");
    } else {
      printErr("nameErr", "");
      nameErr = false;
    }
  }

  if (num == "") {
    printErr("numberErr", "Please enter your number");
  } else {
    var pn = /^\d{10}$/;
    if (pn.test(num) === false) {
      printErr("numberErr", "Please enter a valid number");
    } else {
      printErr("numberErr", "");
      numberErr = false;
    }
  }

  if (email == "") {
    printErr("emailErr", "*Please enter your email");
  } else {
    var mailformat =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (mailformat.test(email) === false) {
      printErr("emailErr", "*Please enter a valid email i'd");
    } else {
      printErr("emailErr", "");
      emailErr = false;
    }
  }

  if (gen == "") {
    printErr("genderErr", "Please select your gender");
  } else {
    printErr("genderErr", "");
    genderErr = false;
  }

  if (qul == "") {
    printErr("quliErr", "please select your qulification");
  } else {
    printErr("quliErr", "");
    quliErr = false;
  }

  if (cor == "") {
    printErr("courseErr", "Please select a course");
  } else {
    printErr("courseErr", "");
    courseErr = false;
  }

  if (check === false) {
    printErr("conditionErr", "please check the aggrement");
  } else {
    printErr("conditionErr", "");
    conditionErr = false;
  }

  if (
    nameErr ||
    numberErr ||
    emailErr ||
    genderErr ||
    quliErr ||
    courseErr ||
    conditionErr
  ) {
    printErr("formErr", "Please fill the Form");
    document.getElementById("formErr").style.color = "red";

    return false;
  } else {
    var datapreview =
      "You've entered the following details: \n" +
      "Name: " +
      name +
      "\n" +
      "Number: " +
      num +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Gender: " +
      gen +
      "\n" +
      "Country:" +
      con +
      "\n" +
      "Qualification: " +
      qul +
      "\n" +
      "Course: " +
      cor +
      "\n";
    alert(datapreview);
  }
}
