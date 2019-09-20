function getDD() {
  var DD = document.getElementById("dob").value;
  return DD.slice(0, 2);
}
// DD is for the day of the month

function getMM() {
  var MM = document.getElementById("dob").value;
  return MM.slice(3, 5);
}
// MM is for the month of the year

function getCC() {
  var CC = document.getElementById("dob").value;
  return CC.slice(6, 8);
}
// CC is for the century

function getYY() {
  var YY = document.getElementById("dob").value;
  return YY.slice(8);
}
// YY is for the year of the century

var gender = document.querySelector('input[name="gender"]:checked').value;

// YY is for the year of the century

// Date of Week equation

var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//Ghanaian names in order from Sunday to Saturday

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




