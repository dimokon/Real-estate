// 1. Select elements
const registerBtn = document.querySelector('.btn-outline');
const popup = document.querySelector('#formPopup');
const loginBtn = document.querySelector('.btn-primary');
const loginPopup = document.querySelector('#loginPopup');
const closeBtn1 = document.querySelector('.close-btn1');
const closeBtn2 = document.querySelector('.close-btn2');
const menuToggle = document.getElementById("menu-toggle");
const navCapsule = document.querySelector(".nav-capsule");

// 2. Open Popup 
registerBtn.onclick = function() {
    popup.style.display = 'block';
    console.log("Button clicked!");
};

loginBtn.onclick = function() { 
    loginPopup.style.display = 'block';
    console.log("Login button clicked!");
};

// 3. Close Popup
closeBtn1.onclick = function() {
    popup.style.display = 'none';
    console.log("Close button clicked!");
};

closeBtn2.onclick = function() {
    loginPopup.style.display = 'none';
    console.log("Login close button clicked!");
};

if (menuToggle && navCapsule) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navCapsule.classList.toggle("nav-open");
    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

loginPopup.addEventListener('submit', (e) => {
  e.preventDefault();
  // After validation passes, redirect to dashboard
  window.location.href = 'dashboard.html';
});