/* color */

let firstColor = "#4641D9";
let secondColor = "#3DB7CC";
let thirdColor = "#47C83E";
let fourthColor = "#998A00";
let fifthColor = "#664B00";


/* page */
let introPage = document.getElementById("intro")
let uploadPage = document.getElementById("upload")
let resultPage = document.getElementById("result")


/* btn */
let startBtn = document.getElementById("intro__btnArea__startBtn")
let againBtn = document.getElementById("result__againBtn")

/* upload */

let uploadUser = document.getElementById("upload__user");
let uploadBtnArea = document.getElementById("upload__btnArea")
let uploadOption = document.getElementById("upload__option")

/* view width, height */

let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

if (w > 1024) {
    document.querySelector("body").style.backgroundColor = "#f0f0f0"
}

let isImgUploaded = 0


let newResultHtml = ""
