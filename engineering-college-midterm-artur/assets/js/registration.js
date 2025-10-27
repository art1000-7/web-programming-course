const form = document.getElementById('registrationForm');
const feedback = document.getElementById('registrationFeedback');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  feedback.innerHTML = '';

  // Full Name
  const fullName = document.getElementById('fullName');
  if (!fullName.value.trim()) {
    fullName.classList.add('is-invalid');
    valid = false;
  } else {
    fullName.classList.remove('is-invalid');
  }

  // Email
  const email = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
    email.classList.add('is-invalid');
    valid = false;
  } else {
    email.classList.remove('is-invalid');
  }

  // Phone
  const phone = document.getElementById('phone');
  if (!phone.value.trim()) {
    phone.classList.add('is-invalid');
    valid = false;
  } else {
    phone.classList.remove('is-invalid');
  }

  // Program
  const program = document.getElementById('program');
  if (!program.value) {
    program.classList.add('is-invalid');
    valid = false;
  } else {
    program.classList.remove('is-invalid');
  }

  // Study Mode
  const studyMode = form.querySelector('input[name="studyMode"]:checked');
  if (!studyMode) {
    form.querySelectorAll('input[name="studyMode"]').forEach(radio => radio.classList.add('is-invalid'));
    valid = false;
  } else {
    form.querySelectorAll('input[name="studyMode"]').forEach(radio => radio.classList.remove('is-invalid'));
  }

  // Intended Intake
  const intake = document.getElementById('intake');
  if (!intake.value) {
    intake.classList.add('is-invalid');
    valid = false;
  } else {
    intake.classList.remove('is-invalid');
  }

  // Passwords
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  if (!password.value) {
    password.classList.add('is-invalid');
    valid = false;
  } else {
    password.classList.remove('is-invalid');
  }
  if (!confirmPassword.value || confirmPassword.value !== password.value) {
    confirmPassword.classList.add('is-invalid');
    valid = false;
  } else {
    confirmPassword.classList.remove('is-invalid');
  }

  // Agreement
  const agree = document.getElementById('agreePolicy');
  if (!agree.checked) {
    agree.classList.add('is-invalid');
    valid = false;
  } else {
    agree.classList.remove('is-invalid');
  }

  if (valid) {
    feedback.innerHTML = '<div class="alert alert-success">Registration successful! Thank you for applying.</div>';
    form.reset();
  } else {
    feedback.innerHTML = '<div class="alert alert-danger">Please correct the errors in the form.</div>';
  }
});
