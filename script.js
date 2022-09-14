const darkModeButton = document.getElementById("dark-mode-button");
const darkModeText = document.getElementById("darkModeText");

var darkMode = false;

function toDarkMode() {
    if (darkMode == false) {
        darkMode = true;
    } else darkMode = false;

    if (darkMode == false) {
        document.documentElement.setAttribute("data-theme", "dark");
        darkModeText.innerText = "Light Mode";
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        darkModeText.innerText = "Dark Mode";
    }
}
