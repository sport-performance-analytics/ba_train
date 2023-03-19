// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user);
    } else {
        setupUI();
    }
  })

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();

  document.getElementById('home-background').classList.remove('hidden');
  document.getElementById('app-container').classList.remove('showing');
  document.getElementById('app-container').classList.add('hidden');
});

// login

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

  document.getElementById('home-background').classList.add('hidden');
  document.getElementById('app-container').classList.remove('hidden');
  document.getElementById('app-container').classList.add('showing');

});
