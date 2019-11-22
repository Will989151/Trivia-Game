$(document).ready(function ()
{

var questions = [
{
    question: "blabla?",
    possibleAnswers: ["skoop", "dee", "poopty", "hoopty"],
    answer: 0,
},
{
    question: "blabla?",
    choices: ["skoop", "dee", "poopty", "hoopty"],
    answer: 0,
},
{
    question: "blabla?",
    choices: ["skoop", "dee", "poopty", "hoopty"],
    answer: 0,
},
{
    question: "blabla?",
    choices: ["skoop", "dee", "poopty", "hoopty"],
    answer: 0,
}];

var clock;
var correct;
var incorrect;
var answered;
var unanswered;
var userPick;

$("#gamediv").hide();

$("#startButton").on("click", function()
{
    $(this).hide();
    newGame();

/*    $("#resetButton").on("click", function()
{
    $(this).hide();
    newGame();
}); */
})

function newGame() {
    $("#timeLeft").empty();
    $("#correctAnswers").empty();
    $("#wrongAnswers").empty();
    $("#unanswered").empty();
    $("#gameDiv").show();
    correct = 0;
    incorrect = 0;
    unanswered = 0;

}

for(var i = 0; i <= 4; i++) {

    var choices = $("<div>");
    possibleAnswers.text(possibleAnswers.choices[i]);
    choices.attr({"data-index": i});
    choices.addClass("currentChoice");
    $("#answers").append(choices);
}

function timer() {
    seconds = 30;
    $("#timeLeft").html(seconds);
    answered = true;
    clock = setInterval(timerDisplay, 1000);
}
    function timerDisplay() {
        seconds --;

        if(seconds === 0) {
            clearInterval(clock);
            answered = false;
            resultsPage();
        }
    }

    function resultsPage() {
        $(".currentChoice").empty();
        $(".questions").empty();
    }