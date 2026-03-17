/* ===== Registration Form ===== */
(function () {
  const VALIDATION = {
    username: {
      minLength: 4,
      maxLength: 32,
      pattern: /^[a-zA-Z0-9]+$/,
      message: 'Username must be 4-32 characters, letters and numbers only.'
    },
    password: {
      minLength: 6,
      maxLength: 12,
      message: 'Password must be 6-12 characters.'
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      allowedDomains: [
        'gmail.com', 'googlemail.com',
        'yahoo.com', 'yahoo.co.uk', 'yahoo.ca',
        'outlook.com', 'hotmail.com', 'live.com', 'msn.com',
        'icloud.com', 'me.com', 'mac.com',
        'aol.com',
        'protonmail.com', 'proton.me', 'pm.me',
        'zoho.com',
        'mail.com',
        'gmx.com', 'gmx.net'
      ],
      message: 'Please enter a valid email address.',
      domainMessage: 'Please use a major email provider (Gmail, Outlook, Yahoo, iCloud, ProtonMail, etc.).'
    }
  };

  const ERROR_MESSAGES = {
    USERNAME_TAKEN: 'That username is already taken.',
    EMAIL_TAKEN: 'That email is already registered.',
    INVALID_USERNAME: 'Invalid username format.',
    INVALID_PASSWORD: 'Invalid password.',
    INVALID_EMAIL: 'Invalid email address.',
    INVALID_BIRTHDAY: 'Invalid birthdate.',
    RATE_LIMITED: 'Too many attempts. Please try again later.',
    NETWORK_ERROR: 'Could not reach the server. Please try again later.'
  };

  function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const error = input?.parentElement.querySelector('.form-error');
    if (input) input.classList.add('error');
    if (error) {
      error.textContent = message;
      error.classList.add('visible');
    }
  }

  function clearError(fieldId) {
    const input = document.getElementById(fieldId);
    const error = input?.parentElement.querySelector('.form-error');
    if (input) input.classList.remove('error');
    if (error) error.classList.remove('visible');
  }

  function clearAllErrors() {
    document.querySelectorAll('.form-group input').forEach(input => {
      input.classList.remove('error');
    });
    document.querySelectorAll('.form-error').forEach(el => {
      el.classList.remove('visible');
    });
  }

  function showFormMessage(type, message) {
    const msgEl = document.querySelector('.form-message');
    if (!msgEl) return;
    msgEl.className = `form-message ${type}`;
    msgEl.textContent = message;
  }

  function hideFormMessage() {
    const msgEl = document.querySelector('.form-message');
    if (!msgEl) return;
    msgEl.className = 'form-message';
    msgEl.textContent = '';
  }

  function validateForm() {
    clearAllErrors();
    let valid = true;

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value.trim();
    const birthday = document.getElementById('birthday').value;

    // Username
    if (!username) {
      showError('username', 'Username is required.');
      valid = false;
    } else if (username.length < VALIDATION.username.minLength || username.length > VALIDATION.username.maxLength) {
      showError('username', VALIDATION.username.message);
      valid = false;
    } else if (!VALIDATION.username.pattern.test(username)) {
      showError('username', VALIDATION.username.message);
      valid = false;
    }

    // Password
    if (!password) {
      showError('password', 'Password is required.');
      valid = false;
    } else if (password.length < VALIDATION.password.minLength || password.length > VALIDATION.password.maxLength) {
      showError('password', VALIDATION.password.message);
      valid = false;
    } else if (username && password.toLowerCase().includes(username.toLowerCase())) {
      showError('password', 'Password cannot contain your username.');
      valid = false;
    } else if (username && username.toLowerCase().includes(password.toLowerCase())) {
      showError('password', 'Password is too similar to your username.');
      valid = false;
    }

    // Confirm password
    if (password !== confirmPassword) {
      showError('confirm-password', 'Passwords do not match.');
      valid = false;
    }

    // Email
    if (!email) {
      showError('email', 'Email is required.');
      valid = false;
    } else if (!VALIDATION.email.pattern.test(email)) {
      showError('email', VALIDATION.email.message);
      valid = false;
    } else {
      var domain = email.split('@')[1].toLowerCase();
      if (!VALIDATION.email.allowedDomains.includes(domain)) {
        showError('email', VALIDATION.email.domainMessage);
        valid = false;
      }
    }

    // Birthday
    if (!birthday) {
      showError('birthday', 'Birthdate is required.');
      valid = false;
    } else {
      const date = new Date(birthday);
      const now = new Date();
      if (isNaN(date.getTime()) || date > now) {
        showError('birthday', 'Please enter a valid birthdate.');
        valid = false;
      }
    }

    return valid;
  }

  function updatePasswordStrength() {
    const password = document.getElementById('password')?.value || '';
    const bar = document.querySelector('.password-strength-bar');
    if (!bar) return;

    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    const percent = (strength / 5) * 100;
    const colors = ['#ef4444', '#f59e0b', '#f59e0b', '#22c55e', '#22c55e'];
    bar.style.width = `${percent}%`;
    bar.style.background = colors[Math.max(0, strength - 1)] || '#ef4444';
  }

  async function handleSubmit(e) {
    e.preventDefault();
    hideFormMessage();

    if (!validateForm()) return;

    const submitBtn = document.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Creating Account...';

    const payload = {
      username: document.getElementById('username').value.trim(),
      password: document.getElementById('password').value,
      email: document.getElementById('email').value.trim(),
      birthday: document.getElementById('birthday').value
    };

    try {
      const response = await fetch(`${CONFIG.apiBaseUrl}/api/account/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.success) {
        showFormMessage('success', 'Account created! Download the game to play.');
        document.getElementById('register-form').reset();
        updatePasswordStrength();
      } else {
        const msg = ERROR_MESSAGES[data.error] || data.message || 'Registration failed. Please try again.';
        showFormMessage('error', msg);
      }
    } catch {
      showFormMessage('error', ERROR_MESSAGES.NETWORK_ERROR);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Create Account';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    if (!form) return;

    form.addEventListener('submit', handleSubmit);

    // Live password strength
    document.getElementById('password')?.addEventListener('input', updatePasswordStrength);

    // Clear errors on input
    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', () => clearError(input.id));
    });
  });
})();
