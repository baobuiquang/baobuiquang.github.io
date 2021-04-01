// Test
document.getElementById("test-scripts").innerHTML = "> scripts.js load successfully!";

// Auto
function relnoopener() {
    const a = document.querySelectorAll('a[target="_blank"]');
    a.forEach(function (element) {
        if (!element.hasAttribute('rel')) {
            element.setAttribute('rel', 'noopener');
        }
    });
}
relnoopener();

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