// Get the current user from local storage
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Get the name element and set the text to the current user's name
const nameElement = document.getElementById('name');
nameElement.textContent = currentUser.name;

// Get the logout button and add a click event listener
const logoutButton = document.getElementById('logout-btn');
logoutButton.addEventListener('click', () => {
  // Remove the current user from local storage
  localStorage.removeItem('currentUser');
  // Redirect the user to the login page
  window.location.href = 'login.html';
});

// Get the change password form and add a submit event listener
const changePasswordForm = document.getElementById('change-password-form');
changePasswordForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the old password, new password, and confirm new password values from the form
  const oldPassword = document.getElementById('old-password').value;
  const newPassword = document.getElementById('new-password').value;
  const confirmNewPassword = document.getElementById('confirm-new-password').value;

  // Check if the old password is correct
  if (oldPassword !== currentUser.pass) {
    alert('Old password is incorrect. Please try again.');
    return;
  }

  // Check if the new password and confirm new password match
  if (newPassword !== confirmNewPassword) {
    alert('New password and confirm new password do not match. Please try again.');
    return;
  }

  // Update the current user's password in local storage
  currentUser.pass = newPassword;
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  // Reset the form and show an alert message
  changePasswordForm.reset();
  alert('Password changed successfully!');
});
