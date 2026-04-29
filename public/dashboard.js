  // Nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') e.preventDefault();
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Viewing buttons
  document.querySelectorAll('.v-btn.ok').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = '✓';
      btn.style.background = '#16a34a';
      btn.style.color = '#fff';
    });
  });
  document.querySelectorAll('.v-btn.no').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.viewing').style.opacity = '0.4';
      btn.closest('.viewing').style.pointerEvents = 'none';
    });
  });

  // Budget bar
  setTimeout(() => { document.getElementById('budgetBar').style.width = '68%'; }, 300);
