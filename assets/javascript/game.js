var randomGoal;
var userScore = 0;
var runningTotal = 0;

var wins = 0;
var losses = 0;


var choiceRed;
var choiceYellow;
var choiceGreen;
var choiceBlue;

var newDiv;

function crystalValueReset() {
    $("#red-crystal").val(0); 
    $("#yellow-crystal").val(0); 
    $("#green-crystal").val(0); 
    $("#blue-crystal").val(0);
}

function check() {
    if (runningTotal === randomGoal) {
        wins++;
        $(".winLossStatus").remove();
        newDiv = $("<div>");
        newDiv.text("You win!");
        newDiv.addClass("winLossStatus")
        $(".winLossBox").prepend(newDiv);
        $("#winNumber").text(wins);
        crystalValueReset();
        initialize();
        
    }
    else if (runningTotal > randomGoal) {
        losses++;
        $(".winLossStatus").remove();
        newDiv = $("<div>");
        newDiv.text("You lose.");
        newDiv.addClass("winLossStatus")
        $(".winLossBox").prepend(newDiv);
        $("#lossNumber").text(losses);
        crystalValueReset();
        initialize();

    }
    else {
        
    }
}

function initialize() {

    var choiceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    userScore = 0;
    runningTotal = 0;
    $("#yourScore").text(runningTotal);
    var roll;

    var choiceRed = Math.floor(Math.random() * choiceArray.length);
    roll = choiceArray.splice(choiceRed, 1);   //Javascript splice() removes indexed items from an array and returns the item(s) as an array. Prevents duplicate numbers on crystals
    choiceRed = roll[0];

    var choiceYellow = Math.floor(Math.random() * choiceArray.length);
    roll = choiceArray.splice(choiceYellow, 1);   //Javascript splice() removes indexed items from an array and returns the item(s) as an array. Prevents duplicate numbers on crystals
    choiceYellow = roll[0]; 

    var choiceGreen = Math.floor(Math.random() * choiceArray.length);
    roll = choiceArray.splice(choiceGreen, 1);   //Javascript splice() removes indexed items from an array and returns the item(s) as an array. Prevents duplicate numbers on crystals
    choiceGreen = roll[0];
   
    var choiceBlue = Math.floor(Math.random() * choiceArray.length);
    roll = choiceArray.splice(choiceBlue, 1);   //Javascript splice() removes indexed items from an array and returns the item(s) as an array. Prevents duplicate numbers on crystals
    choiceBlue = roll[0];

    randomGoal = Math.floor(Math.random() * 120) + 19;

    console.log(randomGoal);

    $("#goalNumber").text(randomGoal);

    $("#red-crystal").val(choiceRed); // The val() method returns or sets the value attribute of the selected elements.
    $("#yellow-crystal").val(choiceYellow); // The val() method returns or sets the value attribute of the selected elements.
    $("#green-crystal").val(choiceGreen); // The val() method returns or sets the value attribute of the selected elements.
    $("#blue-crystal").val(choiceBlue); // The val() method returns or sets the value attribute of the selected elements.

    console.log($("#red-crystal").val());
    console.log($("#yellow-crystal").val());
    console.log($("#green-crystal").val());
    console.log($("#blue-crystal").val());

    // USED TO HAVE game() CALL HERE. WHAT THIS DID WAS MAKE THE DUPLICATION ERROR.  Essentailly on("click") function ran again every game when
    // it already existed from the first time.  So every new game had put out another "listener" on the crystals, so two identical functions were running at the same time.
}

initialize();
game(); // critical that I put game here or else duplication error happened (see above).  
        // if I run this once, the listener will always be there


function game() {

    $(".crystal").on("click", function () {

        console.log("Current crystal value is" + " " + $(this).val()); 
        var userScoreParser = $(this).val();
        userScore = parseInt(userScoreParser); // for some reason $(this).value wasn't an integer, so had to parseInt

        runningTotal += userScore;
        console.log("running total is" + " " + runningTotal)

        $("#yourScore").text(runningTotal);

        check();
        
    });
}


