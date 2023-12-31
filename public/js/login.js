const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#form3Example2c').value.trim();
    const password = document.querySelector('#form3Example3c').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
  