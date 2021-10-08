const login = document.querySelector('#log-in');
const loginPage = document.querySelector('#log_in');

// main page log-in button
login.addEventListener('click', e => {
  e.preventDefault();
  location.replace('log-in.html');
});



// log-in page log-in button
loginPage.addEventListener('click', e  => {
  e.preventDefault();
  location.replace('chat-area.html');
});
