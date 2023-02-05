// by using jquery
var ct = 0;
var image;
$("#get-img-btn").click(function () {
  var dogname = $("#slct").find(":selected").text();
  $.ajax({
    url: `https://dog.ceo/api/breed/${dogname}/images`,
    method: "GET",
    success: function (data) {
      image = data.message;

      $(".dis-img").attr("src", image[0]);
    }
  });
});

$("#nxt").click(function () {
  ct++;
  if (ct == image.length) {
    ct = 0;
  }
  $(".dis-img").attr("src", image[ct]);
});

$(window).on("load", function () {
  $.ajax({
    url: "https://dog.ceo/api/breed/akita/images",
    method: "GET",
    success: function (res) {
      image = res.message;
      $(".dis-img").attr("src", res.message[0]);
    }
  });
});
