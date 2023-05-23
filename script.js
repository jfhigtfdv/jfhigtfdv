// Wrap the code inside DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
  // Create audio element
  var audio = document.createElement('audio');
  audio.id = 'myAudio';
  audio.loop = true;
  audio.preload = 'auto';

  var source = document.createElement('source');
  source.src = 'Let the Living Beware.mp3';
  source.type = 'audio/mpeg';

  audio.appendChild(source);

  // Add audio element to the body
  document.body.appendChild(audio);

  // Login function
  function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform authentication (you can replace this with your own logic)
    // For demonstration purposes, the username and password are hardcoded
    if (username === '' || password === '') {
      document.getElementById('error').textContent = 'Username and password are required';
      document.getElementById('error').style.display = 'block';
    } else if (username === 'admin' && password === 'password') {
      sessionStorage.setItem('loggedIn', 'true');
      document.getElementById('error').style.display = 'none';
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('homePage').style.display = 'block';
      document.getElementById('contentFrame').src = 'homepage.html';
      audio.play();
    } else {
      document.getElementById('error').textContent = 'Wrong username or password';
      document.getElementById('error').style.display = 'block';
    }
  }

  // Register event listener for login button
  document.getElementById('loginButton').addEventListener('click', login);

  // Redirect to login page on page reload
  window.onbeforeunload = function() {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
  };
});
