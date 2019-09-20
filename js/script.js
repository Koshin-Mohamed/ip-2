// function date() {}

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

var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//Ghanaian names in order from Sunday to Saturday

function dow() {
  var formula =
    (CC.slice(8) / 4 -
      2 * CC.slice(8) -
      1 +
      (5 * YY.slice(8)) / 4 +
      (26 * (MM.slice(3, 5) + 1)) / 10 +
      DD.slice(0, 2)) %
    7;
  // Date of Week equation
  alert(formula);
}
