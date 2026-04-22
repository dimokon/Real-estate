// 1. Select elements
const registerBtn = document.querySelector('.btn-outline');
const popup = document.querySelector('#formPopup');
const loginBtn = document.querySelector('.btn-primary');
const loginPopup = document.querySelector('#loginPopup');
const closeBtn1 = document.querySelector('.close-btn1');
const closeBtn2 = document.querySelector('.close-btn2');

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
