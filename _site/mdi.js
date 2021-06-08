let mdi = document.querySelectorAll(".mdi");

for (let i = 0; i < 1000; i++) {
    if (mdi[i] == undefined) break;
    mdi[i].addEventListener("click", function () {
        let src = mdi[i].getAttribute("src");
        mdi[i].insertAdjacentHTML(
            "afterend",
            "<div class='mdi-wrap' onclick='removemdi(this)'>" +
            "<img src='" +
            src +
            "'>" +
            "</div>"
        );
    });
}

function removemdi(this_mdi) {
    this_mdi.remove();
}

initMDI();

function initMDI() {
    document.body.insertAdjacentHTML(
        "afterbegin",
        "<style>" +
        "" +
        "</style>"
    );
}
