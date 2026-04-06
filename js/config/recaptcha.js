// reCAPTCHA Configuration
const RECAPTCHA_SITE_KEY = 'YOUR_SITE_KEY_HERE';

// Verify reCAPTCHA
function verifyRecaptcha() {
  const response = grecaptcha.getResponse();
  if (response.length === 0) {
    return false;
  }
  return true;
}

// Reset reCAPTCHA
function resetRecaptcha() {
  grecaptcha.reset();
}