// DD is for the day of the month
function getDD() {
  var DD = document.getElementById("dob").value;
  return DD.slice(0, 2);
}

// MM is for the month of the year
function getMM() {
  var MM = document.getElementById("dob").value;
  return MM.slice(3, 5);
}

// CC is for the century
function getCC() {
  var CC = document.getElementById("dob").value;
  return CC.slice(6, 8);
}

// YY is for the year of the century
function getYY() {
  var YY = document.getElementById("dob").value;
  return YY.slice(8);
}

// Date of Week function
function dow() {
  var formula =
    (getCC() / 4 -
      2 * getCC() -
      1 +
      (5 * getYY()) / 4 +
      (26 * (getMM() + 1)) / 10 +
      getDD()) %
    7;

  var date = new Date(getCC() + getYY() + "/" + getMM() + "/" + getDD());
  var day = date.getDay();
}

// Radio result and Akan name function & Ghanaian names in order from Sunday to Saturday

function akan() {
  var male = document.getElementById("male");
  var female = document.getElementById("female");

  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  if ((dow(0)) && male.checked == true) {
    alert("Your Akan name is " + maleName[0] + "!")
  }
}
