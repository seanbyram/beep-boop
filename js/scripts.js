// Business Logic

function beepboop(number) {

  answer = [];
  for(var i = 1; i <= number; i ++) {
    if (i === 3) {
      answer.push(" sorry dave");
    } else if (i === 2) {
      answer.push("boop");
    } else if (i === 3) {
      answer.push("beep");
    } else {
    answer.push(i);
    }
  };
  return answer;
};

function showAnswers(answers) {

    listAnswers = document.createElement('ul');

      for (var i = 0; i < answers.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(answers[i]));
        listAnswers.appendChild(li);
      }
      return listAnswers;
};

// User Interface Logic

$(document).ready(function() {

  $("form#formInput").submit(function(event) {

    event.preventDefault();
    $("#split-answers").empty();
    $(".error-message").hide();

    var inputNumber = parseInt($("input").val());

    if (inputNumber <= 0) {
     $(".error-message").show();
     $("#error-message").text("Please use only positive numbers");
   } else if (inputNumber > 100){
      beepboop(inputNumber);
      $(".display-title").show();
      $("#split-answers").append("<div class='col-md-2'></div>");

      var columnLimit = Math.ceil(inputNumber/8);

      for (var i = 0; i < inputNumber; i+=columnLimit) {
        var section = answer.slice(i, i+columnLimit);

        showAnswers(section);

        $("#split-answers").append("<div class='col-md-1'><span id='display-"+[i]+"'  class='display-answers'></span></div>");

        $("#display-answers" + [i]).append(listAnswers);
      };
      $("#split-answers").append("<div class='col-md-2'></div>").fadeIn();
    } else {
        beepboop(inputNumber);
        $(".display-title").show();
        $("#split-answers").append("<div class='col-md-2'></div>");
        showAnswers(answer);
        $("#split-answers").append("<div class='col-md-1'><span id='display-answers'  class='display-answers'></span></div>");
        $("#display-answers").append(listAnswers).slideDown();
    }
  });
});
