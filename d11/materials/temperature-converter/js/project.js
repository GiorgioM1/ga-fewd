


$("button").on("click", function(){
  var celsius = $("input").val();
  var farenheit = celsius * 9/5 + 32;
  $("span#converted").text(farenheit)
  // $(userinput)

});