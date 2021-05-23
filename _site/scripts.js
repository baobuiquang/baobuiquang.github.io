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

// local_views
function localViewCount() {
    if (typeof Storage !== "undefined") {
        if (localStorage.local_views && localStorage.local_date) {
            localStorage.local_views = Number(localStorage.local_views) + 1;
        } else {
            localStorage.local_views = 1;
            const monthNames = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];
            var d = new Date();
            localStorage.local_date =
                monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
        }
        document.getElementById("local_views").innerHTML =
            localStorage.local_views +
            " VIEWS FROM YOU SINCE " +
            localStorage.local_date;
    } else {
        //     Don't display if !local storage
    }
}
localViewCount();


let code_block = document.querySelectorAll(".highlighter-rouge");
for (let i = 0; i < 1000; i++) {
    if (code_block[i] == undefined) break;
    if (code_block[i].querySelectorAll(".highlight").length > 0) {
        code_block[i].insertAdjacentHTML(
            "afterbegin",
            "<div class='highlighter-rouge-deco'>" +
            "<div class='dot1'></div>" +
            "<div class='dot2'></div>" +
            "<div class='dot3'></div>" +
            "</div>"
        );
    } else {
        code_block[i].style.top = "-1px";
        code_block[i].style.padding = "2px 8px 4px 8px";
    }
}


