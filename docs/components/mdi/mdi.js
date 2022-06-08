function MDI() {
    let mdi = document.querySelectorAll(".mdi");

    for (let i = 0; i < 999; i++) {
        if (mdi[i] == undefined) { break };
        mdi[i].addEventListener("click", function () {
            let src = mdi[i].getAttribute("src");
            let title = mdi[i].getAttribute("text");
            if (!title) {
                title = ""
            }
            document.body.insertAdjacentHTML(
                "afterend",
                "<div class='mdi-wrap' onclick='removemdi(this)'>" +
                "<div class='mdi-title'>" + title + "</div>" +
                "<img class='mdi-img' src='" + src + "'>" +
                "<div class='mdi-note'>Click anywhere to close</div>" +
                "</div>"
            );
        });
    }
}

function removemdi(this_mdi) {
    this_mdi.remove();
}

function initMDI() {
    document.head.insertAdjacentHTML(
        "beforeend",
        `
        <style>
        .mdi, #mdi-multi {
            cursor: pointer;
        }
        
        .mdi-wrap {
            background: rgba(22, 22, 22, 0.8);
            backdrop-filter: blur(2px);
            z-index: 1000;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: row;
            cursor: pointer;

            padding: 4rem 0;
        }
        
        .mdi-img {
            width: 100%;
            justify-content: center;
            align-items: center;
            object-fit: contain;
        }

        .mdi-title {
            position: fixed;
            top: 1.5rem;
            right: 0;
            width: 100%;
            text-align: center;
            font-size: 1rem;
            font-weight: 500;
        }
        .mdi-note {
            position: fixed;
            bottom: 1.5rem;
            right: 0;
            width: 100%;
            text-align: center;
            font-size: 0.9rem;
            color: gray;
        }


        .mdi-multi-wrap {
            background: rgba(22, 22, 22, 0.8);
            backdrop-filter: blur(2px);
            z-index: 1000;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            cursor: pointer;

            padding: 0;
            overflow-y: scroll;
        }
        .mdi-multi-img {
            height: 85%;
            justify-content: center;
            align-items: center;
            object-fit: contain;
            margin: 0.5rem 0;
        }
        </style>
        `
    );
}

initMDI();


// ==========================================================================
function MDI_Multi() {
    let mdi = document.querySelector("#mdi-multi");

    mdi.addEventListener("click", function () {
        document.body.insertAdjacentHTML(
            "afterend",
            "<div class='mdi-multi-wrap' onclick='removemdi(this)'>" +
            "<br><br>" +
            "<img class='mdi-multi-img' src='./assets/DesignITUS_1.jpg'>" +
            "<img class='mdi-multi-img' src='./assets/DesignITUS_2.jpg'>" +
            "<img class='mdi-multi-img' src='./assets/DesignITUS_3.jpg'>" +
            "<img class='mdi-multi-img' src='./assets/DesignITUS_4.jpg'>" +
            "<img class='mdi-multi-img' src='./assets/DesignITUS_5.jpg'>" +
            "<img class='mdi-multi-img' src='./assets/DesignITUS_6.jpg'>" +
            "<img class='mdi-multi-img' src='./assets/DesignITUS_7.jpg'>" +
            "<br><br><div style='text-align: center;'>Click anywhere to close</div><br><br>" +
            "</div>"
        );
    });
}