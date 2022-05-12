//Player Red - Die variable with sides, and roll:function to generate random number of die being rolled between 1-6  
var dice = {
    sides: 6,
    roll: function () {
        var randNumRed = Math.floor(Math.random() * this.sides) + 1;
        return randNumRed;
    }
}
// Print Player Red number in the left corner (Float left in CSS)
function TheNumber(rednum1, rednum2) {
    var redBox1 = document.getElementById('redBox1');
    redBox1.innerHTML = rednum1;
    var redBox2 = document.getElementById('redBox2');
    redBox2.innerHTML = rednum2;
    var redTotal = document.getElementById('redTotal');
    redTotal.innerHTML = rednum1 + rednum2;
}
//Create button variable to get the button of Player Red by id then add .onclick for functionality and connect to dice.roll() 
var button = document.getElementById('b1')
// Use .roll() to put random number generated as an argument in TheNumber function
    button.onclick = function() {
    var resultR1 = dice.roll();
    var resultR2 = dice.roll();
    TheNumber(resultR1,resultR2);
}
//Player Blue - Die2 variable with sides, and roll:function to generate random number of die2 being rolled between 1-6 
var dice2 = {
    sides: 6,
    roll: function () {
        var randNumBlue = Math.floor(Math.random() * this.sides) + 1;
        return randNumBlue;
    }
}
// Print Player Blue number in Right corner (Float right in CSS)
function TheNumber2(bluenum1, bluenum2) {
    var blueBox1 = document.getElementById('blueBox1');
    blueBox1.innerHTML = bluenum1;
    var blueBox2 = document.getElementById('blueBox2');
    blueBox2.innerHTML = bluenum2;
    var blueTotal = document.getElementById('blueTotal');
    blueTotal.innerHTML = bluenum1 + bluenum2;
}
//Create button2 variable to get the button of Player Blue by id then add .onclick for functionality and connect to dice2 variable
var button2 = document.getElementById('b2')
// Use .roll() to put random number generated as an argument in TheNumber2 function 
    button2.onclick = function() {
    var resultB1 = dice2.roll();
    var resultB2 = dice2.roll();
    TheNumber2(resultB1,resultB2);
}