console.log("HELLOOOO!");

// var orginalText = $("p.cool").text() 
// var additionalText = "Boom":
// $ ("p.cool").text(orginalText + additionalText)

// var clickCount = 0;
// var orginalText = $("p.cool").text();


// $("button").on("click", function() {
//   // console.log("I WAZ CLICKED!");
//   // clickCount = clickCount + 1;
//   // console.log(clickCount)
//   // "button was clicked" >>> p.cool
//   // if (clickCount === 2) {
// //     $("p.cool").text("Button was clicked");
// // } else {
//   // put it back the way it was
//   // $("p.cool").text(orginalText); 



// });

// write code such that 
// when a user enters text in the input
// and presses the button
// then, that text appears appears AS theH1 text

$("button").on("click", function() {
  var orginalInput = $("input").val();
    $("h1").text(orginalInput)
});
