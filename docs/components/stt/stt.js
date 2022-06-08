function STT() {
    document.body.insertAdjacentHTML(
        "afterbegin",
        "<div id='scrolltotop' class='desktop-only'></div>"
    );

    let stt = document.querySelector("#scrolltotop");
    let html = document.querySelector("html");

    stt.innerHTML = "&raquo;";

    document.addEventListener("scroll", function () {
        if (html.scrollTop < 800) {
            stt.style.opacity = "0.0";
        } else {
            stt.style.opacity = "1.0";
        }
    });

    stt.addEventListener("click", function () {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
}

function initSTT() {
    document.head.insertAdjacentHTML(
        "beforeend",
        `
        <style>
        #scrolltotop {
            width: 70px;
            height: 88px;
            position: fixed;
            z-index: 1000;
            bottom: 0px;
            right: 0px;
            font-size: 22px;
            transform: rotate(-90deg);
            opacity: 0.0;
            cursor: pointer;
            transition: all ease 0.3s;
            display: flex;
            justify-content: center;
            align-items: center;
            color: grey;
        }
        #scrolltotop:hover {
            color: white;
        }
        </style>
        `
    );
    console.log(">> Component STT initialized");
}

initSTT();