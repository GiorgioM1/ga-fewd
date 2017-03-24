// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// When user clicks thumbnail
  // Grabs thumbnail image
  // changes big image to thumbnail image.
  // 


$("img#first").on("click", function() {
 $("img#bigimage").attr("src","img/1.jpg");
 

});

$("img#second").on("click", function() {
 $("img#bigimage").attr("src","img/2.jpg");


});

$("img#third").on("click", function() {
 $("img#bigimage").attr("src","img/3.jpg");


});

$("img#fourth").on("click", function() {
 $("img#bigimage").attr("src","img/4.jpg");
 

});