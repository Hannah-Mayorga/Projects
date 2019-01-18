var word1; var word2; var word3; var word4; var word5; 
var word6; var word7; var word8; var word9; var word10;
var word11; var word12; var word13; var word14; var word15;

// word 6 is repeated 
// word 7 is repeated 

function getInfo(){
    word1 = $("#word1").val();
    word2 = $("#word2").val();
    word3 = $("#word3").val();
    word4 = $("#word4").val();
    word5 = $("#word5").val();
    word6 = $("#word6").val();
    word7 = $("#word7").val();
    word8 = $("#word8").val();
    word9 = $("#word9").val();
    word10 = $("#word10").val();
    word11 = $("#word11").val();
    word12 = $("#word12").val();
    word13 = $("#word13").val();
    word14 = $("#word14").val();
    word15 = $("#word15").val();
}
function changeColor(){
    word1 = word1.fontcolor("red");
    word2 = word2.fontcolor("red");
    word3 = word3.fontcolor("red");
    word4 = word4.fontcolor("red");
    word5 = word5.fontcolor("red");
    word6 = word6.fontcolor("red");
    word7 = word7.fontcolor("red");
    word8 = word8.fontcolor("red");
    word9 = word9.fontcolor("red");
    word10 = word10.fontcolor("red");
    word11 = word11.fontcolor("red");
    word12 = word12.fontcolor("red");
    word13 = word13.fontcolor("red");
    word14 = word14.fontcolor("red");
    word15 = word15.fontcolor("red");
}
function showInfo(){
    getInfo();
    changeColor();
    var madlib = "If you like to talk to " + word1 + 
                "<br /> If a " + word2 + " can make you " + word3 + 
                "<br /> If you like to waltz with " + word4 + 
                "<br /> Up and down the produce " + word5 +
                "<br /> Have we got a/an " + word6 + " for you! <br /> " 
                + word7 + "Tales, " + word7 + "Tales, " + word7 + "Tales, " + word7 + "Tales, <br />" 
                + word7 + "Tales, " + word7 + "Tales, " + word7 + "Tales, " + word7 + "Tales! <br />" +
                "Broccoli! " + word8 + " Gotta be <br />"
                + word7 + "Tales! <br />"
                + word9 + " beans! Collard " + word10 + "! " + word11 + " " + word12 + "! <br />"
                + word7 + "Tales! <br />" +
                "Cauliflower! " + word13 + " and sour! Half a/an " + word14 + "! <br />" 
                + word7 + "Tales! <br />" +
                "There's never-ever-ever-ever-ever been a/an " + word6 + " like " + word7 + "Tales! <br />" +
                "There's never-ever-ever-ever-ever been a/an " + word6 + " like " + word7 + "Tales! <br />" +
                "It's " + word15 + " for " + word7 + "Tales!"
    $('#output').html(madlib).slideDown("slow");
  
}
