const loginFormHandler = async (event) => {
    event.preventDefault();
    try {
      const email = document.querySelector('#email-login').value.trim();
      const password = document.querySelector('#password-login').value.trim(); 
      if (email && password) {
        // Send a POST request to the API endpoint
        const response = await $.post('/api/users/login', { email, password });
        document.location.replace('/');  
      }
    } catch {
      alert("Incorrect email or password. Try again.")
    }
    // Collect values from the login form  
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
    try {
      const name = document.querySelector('#name-signup').value.trim();
      const email = document.querySelector('#email-signup').value.trim();
      const password = document.querySelector('#password-signup').value.trim();   
      if (name && email && password) {
        const response = await $.post('/api/users/register', { name, email, password });
        (response) ? document.location.replace('/') : alert("Server Error. Sorry!");
      }
    } catch {
      alert("Failed to create user. Sorry! Try again later.")
    }

  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  

