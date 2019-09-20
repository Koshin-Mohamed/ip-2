function getDD() {
  var DD = document.getElementById("dob").value;
  DD.slice(0, 2);
  
}
// DD is for the day of the month

function getMM() {
  var MM = document.getElementById("dob").value;
  MM.slice(3, 5);
}
// MM is for the month of the year

function getCC() {
  var CC = document.getElementById("dob").value;
  CC.slice(6, 8);
}
// CC is for the century

function getYY() {
  var YY = document.getElementById("dob").value;
  CC.slice(8);
}
// YY is for the year of the century

var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//Ghanaian names in order from Sunday to Saturday

function dow() {
  var formula =
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
  // Date of Week equation
  alert(formula);
}
