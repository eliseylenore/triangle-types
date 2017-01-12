$(document).ready(function() {
  $(".btn").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var number3 = parseInt($("#number3").val());
  });
});
