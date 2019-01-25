// Business Logic

function beepboop(number) {

  answers = [];
  for(i = 1; i <= number; i++) {
    if (i === 3) {
      result.push(" sorry dave");
    } else if (number.includes(2)) {
      result.push("boop");
    } else if (number.includes(1)) {
      result.push("beep");
    } else {
    result.push(i);
    }
  };
  return answers;
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

    var number = $("#number-input").val();

    beepboop(number);



  });







});
