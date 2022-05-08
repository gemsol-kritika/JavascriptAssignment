
var index=1;
var user;
var userEmail;
var userPhone;
var isNameValid;
var isEmailValid;
var isPhoneValid;
function util(){
isNameValid=true;
isEmailValid=true;
isPhoneValid=true;
user = document.getElementById("user").value;
userEmail = document.getElementById("useremail").value;
userPhone = document.getElementById("userphone").value;
validation();
}


function validation() {
    if (user == "") {
      isNameValid=false;
      document.getElementById("username").innerHTML =
        "PLEASE FILL THE VALUE FOR THE NAME FIELD";
      return false;
    }
    if (user.length <= 2 || user.length >= 25) {
      isNameValid=false;
      document.getElementById("username").innerHTML =
        "PLEASE ENTER A VALID NAME";
      return false;
    }
    if (!isNaN(user)) {
      isNameValid=false;
      document.getElementById("username").innerHTML = "DIGITS NOT ALLOWED";
      return false;
    }
var user_name = document.getElementsByName("user").value;
var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //unacceptable chars
if (pattern.test(user_name)) {
  isNameValid=false;
    document.getElementById("username").innerHTML = "SPECIAL CHARACTERS NOT ALLOWED";
      return false;
}
    if (userEmail == "") {
      isEmailValid=false;
      document.getElementById("emailuser").innerHTML =
        "PLEASE FILL THE VALUE FOR THE EMAIL FIELD";
      return false;
    }
    if (userPhone != "" && userPhone.length < 10) {
      isPhoneValid=false;
      document.getElementById("numberuser").innerHTML =
        "THE VALUE FOR THE MOBILE NUMBER IS INCORRECT";
      return false;
    }
  alert(user+" "+userPhone+" "+userEmail);
 
  if (isNameValid && isEmailValid && isPhoneValid) {
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
    <th scope="row">${index+"."}</th>
    <td>${localStorage.getItem(index + "name")}</td>
    <td>${localStorage.getItem(index + "email")}</td>
    <td>${localStorage.getItem(index + "mobileno")===null?"":localStorage.getItem(index + "mobileno")}</td>
  </tr>`;
    table.append(row);
    index++;
  }
