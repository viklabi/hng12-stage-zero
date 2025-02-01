document.addEventListener('DOMContentLoaded', function() {
  const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
  const now = new Date();
  const utcTime = now.toUTCString();
  currentTimeUTC.textContent = `Current Time (UTC): ${utcTime}`;
});