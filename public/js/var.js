/* page */
let introPage = document.getElementById("intro")
let uploadPage = document.getElementById("upload")
let startBtn = document.getElementById("intro__btnArea__startBtn")


/* upload */

let uploadUser = document.getElementById("upload__user");
let uploadBtnArea = document.getElementById("upload__btnArea")
let uploadOption = document.getElementById("upload__option")

/* view width, height */

let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
if (w > 1024) {
  document.querySelectorAll(".main").forEach((element) => {
    element.style.width = 0.5 * w + "px";
    element.style.height = 0.85 * h + "px";
    element.style.margin = "auto";
    /*     element.style.marginTop = "10vh"; */
  });
} else {
  document.querySelectorAll(".main").forEach((element) => {
    element.style.width = 1 * w + "px";
    element.style.height = 0.92 * h + "px";
  });
}

let isImgUploaded = 0


let newResultHtml =""