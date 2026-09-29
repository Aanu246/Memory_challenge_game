



$(document).on("keypress", function(event){
    $("h1").text("level 1");
    var buttonColours = [".red", ".blue", ".green", ".yellow"];
var randomNum = Math.floor(Math.random() * 4);
var randomChosenColour = buttonColours[randomNum];
$(randomChosenColour).fadeOut(100).fadeIn(100);

});
