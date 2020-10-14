let bodyPage = document.querySelector("body");
let dragPage = document.getElementById("drag");
let dragIcon = document.getElementById("drag__icon");
var $drop = $("body");

let upload = document.getElementById("upload");

bodyPage.addEventListener("dragover", function (e) {
    block(dragPage);
    block(dragIcon);
    e.stopPropagation();
    e.preventDefault();
    console.log("드래그 오버");
});

dragPage.addEventListener("dragleave", () => {
    console.log("드래그 리브 dragpage");
    hide(dragPage);
    hide(dragIcon);
});

$drop.on("drop", function (e) {
    hide(dragPage);

    hide(dragIcon);
    e.preventDefault();
    let uploadFiles = e.originalEvent.dataTransfer;
    readURL(uploadFiles);
});

/*  */

upload.addEventListener("dragover", function (e) {
    block(dragPage);
    block(dragIcon);
    e.stopPropagation();
    e.preventDefault();
    console.log("드래그 오버");
});
