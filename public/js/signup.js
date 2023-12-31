const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#form3Example1c').value.trim();
    const password = document.querySelector('#form3Example4c').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
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
  
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);