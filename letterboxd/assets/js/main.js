// main.js — small interactive helpers for Cinematic Canvas

document.addEventListener('DOMContentLoaded', function () {
  // 1) Contact form validation + simulated submission
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      // honeypot check
      const hp = document.getElementById('hp');
      if (hp && hp.value) {
        // likely bot — silently ignore
        return;
      }

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        return;
      }

      // simulate submit success
      contactForm.classList.remove('was-validated');
      contactForm.reset();
      contactSuccess.classList.remove('d-none');

      // ARIA announce - polite
      contactSuccess.setAttribute('role', 'alert');
      contactSuccess.setAttribute('aria-live', 'polite');

      // hide success after a few seconds
      setTimeout(function() {
        contactSuccess.classList.add('d-none');
      }, 8000);
    }, false);
  }

  // 2) Quick view modal population (watchlist)
  const quickViewModal = document.getElementById('quickViewModal');
  if (quickViewModal) {
    quickViewModal.addEventListener('show.bs.modal', function (event) {
      const button = event.relatedTarget;
      const title = button.getAttribute('data-title') || 'Title';
      const poster = button.getAttribute('data-poster') || 'assets/img/poster1.jpg';
      const summary = button.getAttribute('data-summary') || '';
      // populate
      quickViewModal.querySelector('.modal-title').textContent = title;
      const posterEl = document.getElementById('quickViewPoster');
      if (posterEl) {
        posterEl.src = poster;
        posterEl.alt = `Poster: ${title}`;
      }
      quickViewModal.querySelector('#quickViewSummary').textContent = summary;
    });
  }

  // 3) Simple hero search validation (prevent empty)
  const heroSearch = document.getElementById('heroSearch');
  if (heroSearch && heroSearch.form) {
    heroSearch.form.addEventListener('submit', function (e) {
      if (!heroSearch.value.trim()) {
        e.preventDefault();
        heroSearch.classList.add('is-invalid');
        heroSearch.setAttribute('aria-invalid', 'true');
      } else {
        heroSearch.classList.remove('is-invalid');
        heroSearch.setAttribute('aria-invalid', 'false');
      }
    });
  }
});