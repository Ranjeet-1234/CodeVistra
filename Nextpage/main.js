$(document).ready(function () {
  $(".off").hide();

  $(".off").hide();
  $(".on").fadeIn();
  $("#powerOn")[0].play();
  $("#powerOff")[0].play();
  $(this).toggleClass("active");
  $(
    ".machine-art-container, .machine-lights-container, .boon h1, .bane h1"
  ).toggleClass("active");

  $(".menu a").mouseover(function () {
    $("#hover")[0].play();
  });
  $(".menu a").mouseout(function () {
    $("#hover")[0].pause();
    $("#hover")[0].currentTime = 0;
  });
});
