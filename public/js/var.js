/* upload */

let uploadUser = document.getElementById("upload__user");

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
