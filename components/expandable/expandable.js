var coll = document.getElementsByClassName("expandable");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("expandable_active");
        var expandable_content = this.nextElementSibling;
        if (expandable_content.style.maxHeight) {
            expandable_content.style.maxHeight = null;
        } else {
            expandable_content.style.maxHeight = expandable_content.scrollHeight + "px";
        }
    });
}