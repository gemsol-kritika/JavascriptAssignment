showData();
document.getElementById("invalid_name").style.display = "none";
document.getElementById("invalid_email").style.display = "none";
document.getElementById("invalid_phone").style.display = "none";
var valid_name, valid_email, valid_number;
var regexForName =
  /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/i;
var regexForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var regexForPhone = /^\d{10}$/;

function saveData() {
  let input_name, email, phone;
  valid_name = false;
  valid_email = false;
  valid_phone = false;
  input_name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;
  validation(input_name, email, phone);
}

function validation(input_name, email, phone) {
  if (input_name.length && regexForName.test(input_name)) {
    valid_name = true;
    document.getElementById("invalid_name").style.display = "none";
    document.getElementById("invalid_name").style.color = "red";
    document.getElementById("name").style.borderColor = "green";
  } else {
    valid_name = false;
    document.getElementById("name").style.borderColor = "red";
  }

  if (email.length && regexForEmail.test(email)) {
    valid_email = true;
    document.getElementById("invalid_email").style.display = "none";
    document.getElementById("email").style.borderColor = "green";
  } else {
    valid_email = false;
    document.getElementById("email").style.borderColor = "red";
  }

  if (phone.length && regexForPhone.test(phone)) {
    valid_phone = true;
    document.getElementById("invalid_phone").style.display = "none";
    document.getElementById("phone").style.borderColor = "green";
  } else {
    valid_phone = false;
    document.getElementById("invalid_phone").style.display = "block";
    document.getElementById("phone").style.borderColor = "red";
  }

  if (phone.length == 0 || phone.length == 10) {
    document.getElementById("phone").style.borderColor = "green";
  }

  if (!valid_name || !valid_email) {
    if (!valid_name) {
      alert("Please fill the name correctly.");
    } else if (!valid_email) {
      alert("Please fill the email correctly.");
    }
  } else if (valid_name && valid_email) {
    let data = new Array();
    data = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    if (
      data.some((value) => {
        return value.email == email;
      })
    ) {
      alert("Duplicate Data.");
    } else {
      data.push({
        name: input_name,
        email: email,
        phone: phone,
      });
      localStorage.setItem("users", JSON.stringify(data));
    }
    showData();
  }
}

function showData() {
  document.getElementById("displayData").innerHTML = "";
  let records = new Array();
  records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (records) {
    for (let i = 0; i < records.length; i++) {
      let new_div = document.createElement("tr");

      new_div.innerHTML = `<tr>
                <td>${records[i].name}</td>
                <td>${records[i].email}</td>
                <td>${records[i].phone}</td>
            `;
      document.getElementById("displayData").append(new_div);
    }
  }
}
