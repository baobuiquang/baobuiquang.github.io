// ---------- AOS Animation ----------
AOS.init({
    duration: 1500,
    offset: 50,
    delay: 0,
});

// ----------------------------- Scroll To Top -----------------------------------
//Get the button
var mybutton = document.getElementById("scrolltotop");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// -------------------------- Fullscreen Overlay Navigation 1 ------------------------------
function openFullNav1() {
    document.getElementById("FullNav1").style.width = "100%";
}

function closeFullNav1() {
    document.getElementById("FullNav1").style.width = "0%";
}

// -------------------------- Auto-update copyright year ------------------------------
document.getElementById("auto-update-copyright-year").innerHTML = new Date().getFullYear();

// --------------------------- Snackbar Notification -----------------------------
function snackbarNotification() {
    var x = document.getElementById("snackbar-notification");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}

// -------------------------------- Modal Box -------------------------------------
// Get the modal
var modal = document.getElementById("modal-box");

// Get the button that opens the modal
var btn = document.getElementById("modal-box-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --------------------------------- Custom Cursor ------------------------------------
document.addEventListener("DOMContentLoaded", function (event) {
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll("a");
    var buttons = document.querySelectorAll("button");
    var justhover = document.querySelectorAll(".custom-cursor--justhover");
    var initCursor = false;

    for (var i = 0; i < links.length; i++) {
        var selfLink = links[i];

        selfLink.addEventListener("mouseover", function () {
            cursor.classList.add("custom-cursor--link");
        });
        selfLink.addEventListener("mouseout", function () {
            cursor.classList.remove("custom-cursor--link");
        });
    }

    for (var i = 0; i < buttons.length; i++) {
        var selfButton = buttons[i];

        selfButton.addEventListener("mouseover", function () {
            cursor.classList.add("custom-cursor--button");
        });
        selfButton.addEventListener("mouseout", function () {
            cursor.classList.remove("custom-cursor--button");
        });
    }

    for (var i = 0; i < justhover.length; i++) {
        var selfjusthover = justhover[i];

        selfjusthover.addEventListener("mouseover", function () {
            cursor.classList.add("custom-cursor--justhover-cursor");
        });
        selfjusthover.addEventListener("mouseout", function () {
            cursor.classList.remove("custom-cursor--justhover-cursor");
        });
    }

    window.onmousemove = function (e) {
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        if (!initCursor) {
            // cursor.style.opacity = 1;
            TweenLite.to(cursor, 0.3, {
                opacity: 1
            });
            initCursor = true;
        }

        TweenLite.to(cursor, 0, {
            top: mouseY + "px",
            left: mouseX + "px"
        });
    };

    window.onmouseout = function (e) {
        TweenLite.to(cursor, 0.3, {
            opacity: 0
        });
        initCursor = false;
    };
});


// -------------------------- Dark Mode Switch -------------------------------
function darkModeSwitch() {
    var element = document.getElementsByClassName("body-wrap")[0];
    var section1 = document.getElementsByClassName("section-1");
    for (var i = 0; i < section1.length; i++) {
        section1[i].classList.toggle("dark-mode");
    }
    var section2 = document.getElementsByClassName("section-2");
    for (var i = 0; i < section2.length; i++) {
        section2[i].classList.toggle("dark-mode");
    }
    var section3 = document.getElementsByClassName("section-3");
    for (var i = 0; i < section3.length; i++) {
        section3[i].classList.toggle("dark-mode");
    }
    element.classList.toggle("dark-mode");
}