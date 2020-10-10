
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".image-upload-wrap").hide();
      $(".file-upload-image").attr("src", e.target.result);
      flex(uploadUser);
      $(".image-title").html(input.files.name);
      document.getElementById("removeBtn").style.display="flex"
    };
    reader.readAsDataURL(input.files[0]);
/*    startLoading() */
   init().then(function() {
 /*    predict() */
});

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".file-upload-content").hide();
  $(".image-upload-wrap").show();
  document.getElementById("removeBtn").style.display="none"
}
$(".image-upload-wrap").bind("dragover", function () {
  $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
  $(".image-upload-wrap").removeClass("image-dropping");
});
