// Business Logic
var number = "";
function beepboop(number) {

  result = "";
  for(i = 1; i <= number; i++)
    if (number.includes(3)) {
      $("#result").append(" sorry dave");
    } else if (number.includes(2)) {
      console.log("boop");
    } else if (number.includes(1)) {
      console.log("beep");
    } else {
      console.log(number);
    }
}




// User Interface Logic

$(document).ready(function() {

  $("form#formInput").submit(function(event) {

    event.preventDefault();

    var number = $("#number-input").val();

    beepboop(number);



  });

  if (inputNumber <= 0) {
       $(".error-message").show();
       $("#error-message").text("Please use only positive numbers");
     } else if (inputNumber > 100){
        beepboop(inputNumber);
        $(".display-title").show();
        $("#split-results").append("<div class='col-md-2'></div>");

        var columnLimit = Math.ceil(inputNumber/8);

        for (var i = 0; i < inputNumber; i+=columnLimit) {
          var section = result.slice(i, i+columnLimit);

          displayResults(section);

          $("#split-results").append("<div class='col-md-1'><span id='display-results"+[i]+"'  class='display-results'></span></div>");

          $("#display-results" + [i]).append(listResults);
        };
        $("#split-results").append("<div class='col-md-2'></div>").fadeIn();
      } else {
          beepboop(inputNumber);
          $(".display-title").show();
          $("#split-results").append("<div class='col-md-2'></div>");
          displayResults(result);
          $("#split-results").append("<div class='col-md-1'><span id='display-results'  class='display-results'></span></div>");
          $("#display-results").append(listResults).slideDown();
      }
    });
  });




});




//
// $("#split-results").empty();
//
// var inputNumber = $("input").val();
//
// if (inputNumber <= 0) {
//  $(".error-message").show();
//  $("#error-message").text("Please use only positive numbers");
// } else if (inputNumber > 100){
// beepboop(inputNumber);
// $(".display-title").show();
// $("#split-results").append("<div class='col-md-2'></div>");
// }
