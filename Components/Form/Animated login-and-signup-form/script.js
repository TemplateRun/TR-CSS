// Assigning the Variables
let signupButton = document.getElementById('signupbtn'),
    loginButton = document.getElementById('loginbtn'),
	signupBtn = document.getElementById('signbtn-mb'),
    loginBtn = document.getElementById('loginbtn-mb'),
	forgetButton = document.getElementById('forgetbtn'),
    Forms = document.getElementById('form'),
	loginForm = document.getElementById('login'),
	signUpForm = document.getElementById('signup');

// Adding event listener to the "Signup" button mobile
signupBtn.addEventListener('click', () => {
	Forms.classList.remove('forgotpassword');
   Forms.classList.remove('show-login');
   Forms.classList.add('show-signup');	
}, false)

// Adding event listener to the "Sign Up" button
signupButton.addEventListener('click', () => {
	Forms.classList.remove('forgotpassword');
	 Forms.classList.remove('right');
	 Forms.classList.add('Left');	
   }, false)

// Adding event listener to the "Login" button
loginButton.addEventListener('click', () => {
Forms.classList.remove('forgotpassword');
  Forms.classList.remove('Left');
  Forms.classList.add('right');
}, false)

// Adding event listener to the "Login" button mobile
loginBtn.addEventListener('click', () => {
	Forms.classList.remove('forgotpassword');
  Forms.classList.add('show-login');	
	Forms.classList.remove('show-signup');
}, false)

// Adding event listener to the "Forget Password" button
forgetButton.addEventListener('click', () => {
	Forms.classList.add('forgotpassword');
	Forms.classList.remove('show-login');
	Forms.classList.remove('show-signup');	
}, false)
