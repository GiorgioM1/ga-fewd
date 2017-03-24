console.log("Love")

$("div").text("hey GIRLLLLLLL")
  
$("div").css("background-color", "blue")
 
$("div#boxone").on("click", function() {
  $("div#boxtwo").toggleClass("bigger");
  // $("div#boxone").css("height", "500px")
  // $("div#boxone").css("width", "500px")
});

var shoudGetBigger = true;

$("div#boxtwo").on("click", function() {
  $("div#boxtwo").toggleClass("bigger")
  // if ( shoudGetBigger === true) {
  //   $("div#boxtwo").addClass("bigger");
  //   shoudGetBigger = false;
  // } else {
  //   $("div#boxtwo").removeClass("bigger")
  //   shoudGetBigger = true;
  // }
});