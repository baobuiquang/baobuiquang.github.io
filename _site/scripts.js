// Test
document.getElementById("test-scripts").innerHTML = "> scripts.js load successfully!";

// Service-worker register
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js');
}

// ------------ Expandable -----------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}