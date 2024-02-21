// Define a general function to create dice with specified sides
function Dice(sides) {
    this.sides = sides;
}

// Add a method to the prototype of Dice to roll the dice
Dice.prototype.roll = function () {
    return Math.floor(Math.random() * this.sides) + 1;
}

// Create instances of dice for Player Red and Player Blue
var redDice = new Dice(6);
var blueDice = new Dice(6);

// Function to update the HTML with Player Red's numbers
function updateRedNumbers(num1, num2) {
    document.getElementById('redBox1').textContent = num1;
    document.getElementById('redBox2').textContent = num2;
    document.getElementById('redTotal').textContent = num1 + num2;
}

// Function to update the HTML with Player Blue's numbers
function updateBlueNumbers(num1, num2) {
    document.getElementById('blueBox1').textContent = num1;
    document.getElementById('blueBox2').textContent = num2;
    document.getElementById('blueTotal').textContent = num1 + num2;
}

// Function to handle button click for Player Red
document.getElementById('b1').onclick = function() {
    var resultR1 = redDice.roll();
    var resultR2 = redDice.roll();
    updateRedNumbers(resultR1, resultR2);
}

// Function to handle button click for Player Blue
document.getElementById('b2').onclick = function() {
    var resultB1 = blueDice.roll();
    var resultB2 = blueDice.roll();
    updateBlueNumbers(resultB1, resultB2);
}
