//----------------------------- Anti Copy Content -------------------------------
document.addEventListener('copy', function (e) {
    e.preventDefault();
    e.clipboardData.setData("text/plain", "Please do not copy the content! If you actually need this for the right purpose, feel free to mail me directly. Thanks!");
})