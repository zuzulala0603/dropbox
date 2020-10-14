let changeBtn = document.getElementById("upload__option__change")
let flippedBtn = document.getElementById("upload__option__reversal")


changeBtn.addEventListener("click", () => {
    $('.file-upload-input').trigger('click')
})

flippedBtn.addEventListener("click", () => {
    document.getElementById("upload__user__img").classList.toggle("flipped")
})
