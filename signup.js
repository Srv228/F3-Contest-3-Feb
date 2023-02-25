const signupForm = document.querySelector('form');
signupForm.addEventListener('submit', signup);

function signup(event) {
  event.preventDefault();

  const email = signupForm.elements.email.value;
  const name = signupForm.elements.name.value;
  const password = signupForm.elements.password.value;
  const confirmPassword = signupForm.elements.confirmPassword.value;

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = { email, name, password };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  alert('Signup successful');
  window.location.href = 'login.html';
}
