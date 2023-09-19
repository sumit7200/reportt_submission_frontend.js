//Signup
var form = document.getElementById("submitButton");
let data;
form.addEventListener("click", function (e) {
  e.preventDefault();

  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const formData = {
    name: username,
    email: email,
    password: password,
  };

  fetch("http://localhost:8080/sign-up", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((response) => {
      data = JSON.stringify(response);
      console.log(JSON.stringify(response));

      if (response.status === 200) {
        console.log("hiiiiiiiii", response.status);
      }
    });
});

//Login
var getID = document.getElementById('login-form');
if(getID){
document.getElementById('login-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const apiUrl = 'http://localhost:8080/authenticate';
  const username = document.getElementById('email1').value;
  const password = document.getElementById('password1').value;
  const tokenResult = document.getElementById('token-result');
  let formData = {
      email: username,
      password:password
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
        window.location.href="./dashboard.html";
      }
    // tokenResult.innerHTML = `JWT Token: ${jwtToken}`;
  } catch (error) {
      console.error('Error fetching JWT token:', error);
      tokenResult.innerHTML = 'Login failed';
  }
});
function preventBack(){window.history.forward();}
    setTimeout("preventBack()", 0);
    window.onunload=function(){null};

}
window.history.go();
