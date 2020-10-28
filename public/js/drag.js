let bodyPage = document.querySelector("body");
let dragPage = document.getElementById("drag");

var $drop = $("body");

let upload = document.getElementById("upload");

bodyPage.addEventListener("dragover", function (e) {
    block(dragPage);

    e.stopPropagation();
    e.preventDefault();
    console.log("드래그 오버");
});

dragPage.addEventListener("dragleave", () => {
    console.log("드래그 리브 dragpage");
    hide(dragPage);

});

$drop.on("drop", function (e) {
    hide(dragPage);

    e.preventDefault();
    let uploadFiles = e.originalEvent.dataTransfer;
    readURL(uploadFiles);
});

/*  */

upload.addEventListener("dragover", function (e) {
    block(dragPage);
    e.stopPropagation();
    e.preventDefault();
    console.log("드래그 오버");
});
