

function readURL(input) {
  hide(document.getElementById("upload__dropbox"))
  block(uploadPage)
  uploadPage.style.backgroundColor="#eaf0f6"
  flex(uploadBtnArea)
  flex(uploadOption)
  isImgUploaded =1
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-upload-wrap").hide();
      $(".file-upload-image").attr("src", e.target.result);
      flex(uploadUser);
      $(".image-title").html(input.files.name);
    };

    reader.readAsDataURL(input.files[0]);

    } else {
    removeUpload();
  }
}

function startAi(){
  newResultHtml=""
  startLoading()
  init().then(()=>{
    predict().then(()=>{
      let alertHtml = `<div id="result">`+ newResultHtml +`</div>`
      finishLoading()
      showResultAlert(alertHtml)
    })
    })
}


function triggerClick(){
  console.log("isImgUploaded는",isImgUploaded)
  if(isImgUploaded == 0){
    $('.file-upload-input').trigger( 'click' )
  }
}


function removeUpload() {
  hide(uploadOption)
  hide(uploadBtnArea)
  isImgUploaded=0
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".image-upload-wrap").show();
}
$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});
