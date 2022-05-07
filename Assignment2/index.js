
function validation() {
    var index=1;
    var user = document.getElementById("user").value;
    var userEmail = document.getElementById("useremail").value;
    var userPhone = document.getElementById("userphone").value;
function isNameOfUserValid(){
    if (user == "") {
      document.getElementById("username").innerHTML =
        "PLEASE FILL THE VALUE FOR THE NAME FIELD";
      return false;
    }
    if (user.length <= 2 || user.length >= 25) {
      document.getElementById("username").innerHTML =
        "PLEASE ENTER A VALID NAME";
      return false;
    }
    if (!isNaN(user)) {
      document.getElementById("username").innerHTML = "DIGITS NOT ALLOWED";
      return false;
    }

function checkUserName() {
var user_name = document.getElementsByName("user").value;
var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //unacceptable chars
if (pattern.test(user_name)) {
    document.getElementById("username").innerHTML = "SPECIAL CHARACTERS NOT ALLOWED";
      return false;
}
return true; 
}
return true;
}
function isEmailOfUserValid(){
    if (userEmail == "") {
      document.getElementById("emailuser").innerHTML =
        "PLEASE FILL THE VALUE FOR THE EMAIL FIELD";
      return false;
    }
    return true;
}
function isPhoneNumberOfUserValid(){
    if (userPhone != "" && userPhone.length < 10) {
      document.getElementById("numberuser").innerHTML =
        "THE VALUE FOR THE MOBILE NUMBER IS INCORRECT";
      return false;
    }
    return true;
}
  if (isNameOfUserValid && isEmailOfUserValid && isPhoneNumberOfUserValid) {
    localStorage.setItem(index + "name",user);
    localStorage.setItem(index + "email",userEmail);
    localStorage.setItem(index+ "mobileno",userPhone);
    showTable()
  }
}
function showTable() {
    var table = document.getElementById("table_body");
    var tHead = document.getElementById("table_head");
    let row = document.createElement("tr");
    if(index == 1) {
      let head = document.createElement("tr");
      head.innerHTML = `<tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
    </tr>`;
    tHead.append(head);
    }
    row.innerHTML = `<tr>
    <th scope="row">${serialNo+"."}</th>
    <td>${localStorage.getItem(index + "name")}</td>
    <td>${localStorage.getItem(index + "email")}</td>
    <td>${localStorage.getItem(index + "mobileno")===null?"":localStorage.getItem(index + "mobileno")}</td>
  </tr>`;
    table.append(row);
    index++;
}