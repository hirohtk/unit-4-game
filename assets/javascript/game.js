var randomGoal;
var userScore = 0;
var runningTotal = 0;

var wins = 0;
var losses = 0;

var choiceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var choiceRed;
var choiceYellow;
var choiceGreen;
var choiceBlue;

var newDiv;

/*function unique(choice) {
    choice = Math.floor(Math.random() * choiceArray.length);
    var roll = choiceArray.splice(choice, 1);
    choice = roll[0];
    console.log(roll[0]);
    console.log("this is running")
}*/



function initialize() {
    newDiv = "";
    userScore = 0;
    runningTotal = 0;
    $("#yourScore").text(runningTotal);

    $("#red-crystal").val(0); // The val() method returns or sets the value attribute of the selected elements.
    $("#yellow-crystal").val(0); // The val() method returns or sets the value attribute of the selected elements.
    $("#green-crystal").val(0); // The val() method returns or sets the value attribute of the selected elements.
    $("#blue-crystal").val(0); // The val() method returns or sets the value attribute of the selected elements.

    var choiceRed = 0;
    var choiceYellow = 0;
    var choiceGreen = 0;
    var choiceBlue = 0;
    var choiceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    choiceRed = Math.floor(Math.random() * choiceArray.length);
    var roll = choiceArray.splice(choiceRed, 1);   //Javascript splice() removes indexed items from an array and returns the item(s) as an array. Perfect for this use.
    choiceRed = roll[0];

    choiceYellow = Math.floor(Math.random() * choiceArray.length);
    var roll = choiceArray.splice(choiceYellow, 1);   //Javascript splice() removes indexed items from an array and returns the item(s) as an array. Perfect for this use.
    choiceYellow = roll[0];

    choiceGreen = Math.floor(Math.random() * choiceArray.length);
    var roll = choiceArray.splice(choiceGreen, 1);   //Javascript splice() removes indexed items from an array and returns the item(s) as an array. Perfect for this use.
    choiceGreen = roll[0];

    choiceBlue = Math.floor(Math.random() * choiceArray.length);
    var roll = choiceArray.splice(choiceBlue, 1);   //Javascript splice() removes indexed items from an array and returns the item(s) as an array. Perfect for this use.
    choiceBlue = roll[0];


    //unique(choiceRed);
    //unique(choiceYellow);
    //unique(choiceGreen);
    //unique(choiceBlue);

    console.log(choiceRed);
    console.log(choiceYellow);
    console.log(choiceGreen);
    console.log(choiceBlue);

    randomGoal = Math.floor(Math.random() * 120) + 19;

    console.log(randomGoal);

    $("#goalNumber").text(randomGoal);

    $("#red-crystal").val(choiceRed); // The val() method returns or sets the value attribute of the selected elements.
    $("#yellow-crystal").val(choiceYellow); // The val() method returns or sets the value attribute of the selected elements.
    $("#green-crystal").val(choiceGreen); // The val() method returns or sets the value attribute of the selected elements.
    $("#blue-crystal").val(choiceBlue); // The val() method returns or sets the value attribute of the selected elements.

    game();
}

initialize();

function game() {


    $(".crystal").on("click", function () {

        console.log($(this).val());
        var userScoreParser = $(this).val();
        userScore = parseInt(userScoreParser); // for some reason $(this).value wasn't an integer, so had to parseInt

        runningTotal += userScore;

        $("#yourScore").text(runningTotal);
        userScoreParser = 0;
        check();
    });

    function check() {
        if (runningTotal === randomGoal) {
            wins++;
            newDiv = $("<div>");
            newDiv.text("You win!");
            $("#winNumber").prepend(newDiv);
            $("#winNumber").text(wins);
            initialize();
        }
        else if (runningTotal > randomGoal) {
            losses++;
            newDiv = $("<div>");
            newDiv.text("You lose.");
            $("#winNumber").prepend(newDiv); // still trouble here
            $("#lossNumber").text(losses);
            initialize();
        }
        else {

        }
    }
}


