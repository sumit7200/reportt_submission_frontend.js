//Signup
var form = document.getElementById("submitButton");
let data;
form.addEventListener("click", function (e) {
  e.preventDefault();

  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  //validation
  if (!validateUsername(username) || !validateEmail(email) || !validatePassword(password)) {
    return;
  }

  const formData = {
    name: username,
    email: email,
    password: password,
    role:role,
  };

  fetch("http://localhost:8080/sign-up", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.status == 200) {
        showSuccessPopup();
        clearSignupFields();
      }
      response.json();
    })
    .then((response) => {
      data = JSON.stringify(response);
      console.log(JSON.stringify(response));
    });
});

//validation
function validateUsername(username) {
  if (username.trim() === "") {
    alert("Username cannot be empty");
    return false;
  }
  return true;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }
  return true;
}

function validatePassword(password) {
  if (password.length < 8) {
    alert("Password must be at least 8 characters long with One Upper case one Lower case one Number & one Special character");
    return false;
  }
  return true;
}

function showSuccessPopup() {
  alert("Signup Successful");
}

function clearSignupFields() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

//Login
var getID = document.getElementById('login-form');
if (getID) {
  document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const apiUrl = 'http://localhost:8080/authenticate';
    const username = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;
    const tokenResult = document.getElementById('token-result');
    let formData = {
      email: username,
      password: password
    }
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      if (!data.jwtToken) {
        throw new Error('Token not found in response');
      }

      const jwtToken = data.jwtToken;
      if (jwtToken) {
        window.location.href = "./dashboard.html";
      }
    } catch (error) {
      console.error('Error fetching JWT token:', error);
      tokenResult.innerHTML = 'Login failed';
    }
  });

}
