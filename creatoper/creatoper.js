// ---------------------------------------- Scroll To Top ---------------------------------------- //
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var scrollToTopButton = document.getElementById("scrolltotop");
window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}
// <div class="just-display-on-desktop">
// <button onclick="scrollToTop()" id="scrolltotop" class="just-display-on-desktop" style="transform: rotate(38deg);">&nwarr;</button>
// </div>



// --------------------------------------- Auto relnoopener --------------------------------------- //
function relnoopener() {
    const a = document.querySelectorAll('a[target="_blank"]');
    a.forEach(function (element) {
        if (!element.hasAttribute('rel')) {
            element.setAttribute('rel', 'noopener');
        }
    });
}
relnoopener();




// Test
// document.getElementById("test-creatoper").innerHTML = "> creatoper.js load successfully!";