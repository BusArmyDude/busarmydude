// Get the theme toggle button and body
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check the saved theme in localStorage (if any)
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    themeToggleButton.textContent = "🌞"; // Sun icon for dark mode
} else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    themeToggleButton.textContent = "🌙"; // Moon icon for light mode
}

// Toggle between light and dark mode on button click
themeToggleButton.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        themeToggleButton.textContent = "🌞"; // Change to Sun icon
        localStorage.setItem("theme", "dark"); // Save dark mode preference
    } else {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        themeToggleButton.textContent = "🌙"; // Change to Moon icon
        localStorage.setItem("theme", "light"); // Save light mode preference
    }
});
