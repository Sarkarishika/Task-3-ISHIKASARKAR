// Welcome Message Button

const welcomeBtn = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

welcomeBtn.addEventListener("click", function () {
    message.textContent = "Welcome to my portfolio! 🚀";
});

// Dark Mode Button

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }

});