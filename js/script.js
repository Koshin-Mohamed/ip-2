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
function dayOfWeek() {
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

  return day;
}

// Radio result and Akan name function & Ghanaian names in order from Sunday to Saturday
function akan() {
  var male = document.getElementById("male");
  var female = document.getElementById("female");

  var maleName = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];
  var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  if (dayOfWeek() == 0 && male.checked == true) {
    alert("Your Akan name is " + maleName[0] + "!");
  } else if (dayOfWeek() == 1 && male.checked == true) {
    alert("Your Akan name is " + maleName[1] + "!");
  } else if (dayOfWeek() == 2 && male.checked == true) {
    alert("Your Akan name is " + maleName[2] + "!");
  } else if (dayOfWeek() == 3 && male.checked == true) {
    alert("Your Akan name is " + maleName[3] + "!");
  } else if (dayOfWeek() == 4 && male.checked == true) {
    alert("Your Akan name is " + maleName[4] + "!");
  } else if (dayOfWeek() == 5 && male.checked == true) {
    alert("Your Akan name is " + maleName[5] + "!");
  } else if (dayOfWeek() == 6 && male.checked == true) {
    alert("Your Akan name is " + maleName[6] + "!");
  } else if (dayOfWeek() == 0 && female.checked == true) {
    alert("Your Akan name is " + femaleName[0] + "!");
  } else if (dayOfWeek() == 1 && female.checked == true) {
    alert("Your Akan name is " + femaleName[1] + "!");
  } else if (dayOfWeek() == 2 && female.checked == true) {
    alert("Your Akan name is " + femaleName[2] + "!");
  } else if (dayOfWeek() == 3 && female.checked == true) {
    alert("Your Akan name is " + femaleName[3] + "!");
  } else if (dayOfWeek() == 4 && female.checked == true) {
    alert("Your Akan name is " + femaleName[4] + "!");
  } else if (dayOfWeek() == 5 && female.checked == true) {
    alert("Your Akan name is " + femaleName[5] + "!");
  } else if (dayOfWeek() == 6 && female.checked == true) {
    alert("Your Akan name is " + femaleName[6] + "!");
  } else if (getDD() <= 0 || getDD() > 31) {
    alert("Please enter a valid number between 01 and 31");
  } else if (getMM() <= 0 || getMM() > 12) {
    alert("Please enter a valid number between 01 and 12");
  } else {
    alert("Please select a gender");
  }
}
