$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    $(".hide-me").hide();
    console.log("hi")
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var number3 = parseInt($("#number3").val());

    if (number1 + number2 <= number3 || number2 + number3 <= number1 || number3 + number1 <= number2) {
      alert("That will NOT make a triangle. The sum of two of any sides must be greater than the third side.");
    } else if (number1 === number2 && number2 === number3 && number1 === number3) {
      $(".equilateral").show();
    } else if (number1 === number2 || number2 === number3 || number1 === number3) {
      $(".isosceles").show();
    } else if (number1 !== number2 && number2 !== number3 && number3 !== number1) {
      $(".scalene").show();
    } else {
      alert("Please make sure that all numbers are filled out.");
    }
  });
});
