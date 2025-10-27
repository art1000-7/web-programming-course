const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  feedback.innerHTML = '';

  // Name
  const name = document.getElementById('name');
  if (!name.value.trim()) {
    name.classList.add('is-invalid');
    valid = false;
  } else {
    name.classList.remove('is-invalid');
  }

  // Email (with regex)
  const email = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
    email.classList.add('is-invalid');
    valid = false;
  } else {
    email.classList.remove('is-invalid');
  }

  // Subject
  const subject = document.getElementById('subject');
  if (!subject.value) {
    subject.classList.add('is-invalid');
    valid = false;
  } else {
    subject.classList.remove('is-invalid');
  }

  // Message
  const message = document.getElementById('message');
  if (!message.value.trim()) {
    message.classList.add('is-invalid');
    valid = false;
  } else {
    message.classList.remove('is-invalid');
  }

  // Anti-spam
  const antispam = document.getElementById('antispam');
  if (antispam.value.trim() !== '5') {
    antispam.classList.add('is-invalid');
    valid = false;
  } else {
    antispam.classList.remove('is-invalid');
  }

  if (valid) {
    feedback.innerHTML = '<div class="alert alert-success">Thank you! Your message has been sent.</div>';
    form.reset();
  } else {
    feedback.innerHTML = '<div class="alert alert-danger">Please correct the errors in the form.</div>';
  }
});
