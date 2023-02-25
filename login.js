const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', login);


//go to sighup 

const gotosighup = document.getElementById('gotosighup');
gotosighup.addEventListener('click', () => {
  // Remove the current user from local storage
  localStorage.removeItem('users');
  // Redirect the user to the login page
  window.location.href = 'index.html';
});



function login(event) {
  event.preventDefault();

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const currentUser = {
      email: user.email,
      name: user.name,
      password: user.password,
      token: generateToken()
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    alert('Login successful');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password');
  }
}

function generateToken() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    token += chars[randomIndex];
  }
  return token;
}
