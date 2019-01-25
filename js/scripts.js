// Business Logic

function beepboop(number) {

  result = "";
  for(i = 1; i <= number; i++)
    if (number.includes === "3") {
      console.log("sorry dave");
    } else {

    }
}




// User Interface Logic

$(document).ready(function() {

  $("form#formInput").submit(function(event) {
  alert("test");
    event.preventDefault();

    $("#split-results").empty();

    var inputNumber = $("input").val();

    if (inputNumber <= 0) {
     $(".error-message").show();
     $("#error-message").text("Please use only positive numbers");
   } else if (inputNumber > 100){
    beepboop(inputNumber);
    $(".display-title").show();
    $("#split-results").append("<div class='col-md-2'></div>");
  }
  });













});
