function flex(element) {
    element.style.display = "flex";
}

function block(element) {
    element.style.display = "block";
}

function hide(element) {
    element.style.display = "none";
}

function blur(element) {
    element.style.opacity = "0.7";
}

function shuffle(a) {
    let j,
        x,
        i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

let generateRandom = function (min, max) {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
};
