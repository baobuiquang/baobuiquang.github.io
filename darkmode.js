// Darkmode
function enableDarkMode() {
    document.body.classList.add("darkmode");
    localStorage.setItem("isDarkMode", "true");
}
function disableDarkMode() {
    document.body.classList.remove("darkmode");
    localStorage.setItem("isDarkMode", "false");
}
let isDarkMode = localStorage.getItem("isDarkMode");
if (isDarkMode === "true") {
    enableDarkMode();
}
const darkmodeButton = document.querySelector(".darkmode-button");
darkmodeButton.addEventListener("click", function () {
    isDarkMode = localStorage.getItem("isDarkMode");
    isDarkMode === "true" ? disableDarkMode() : enableDarkMode();
});