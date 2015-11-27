// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
var currentYear = 2015;
// Store their birth year in a variable.
var birthYear = 1999;
// Calculate their 2 possible ages based on the stored values.
var possibleAge = currentYear - birthYear; 
var possibleAge2 = possibleAge++;
// Output them to the screen like so: "They are either NN or NN", substituting the values.
var totalAge = "They are either " + possibleAge + " or " + possibleAge2; 
console.log(totalAge);



// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
var currentAge = 20;
// Store a maximum age into a variable.
var maxAge = 100;
// Store an estimated amount per day (as a number).
var storePerDay = 20;
// Calculate how many you would eat total for the rest of your life.
var consumeLifeTotal = storePerDay * 365;
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var yearsLeft= maxAge - currentAge;
var totalSupplyNeeded = "You will need " + (consumeLifeTotal * yearsLeft) + " to last you until the ripe old age of " + maxAge;
console.log(totalSupplyNeeded);
// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
var radius = 5;
// Calculate the circumference based on the radius, and output "The circumference is NN".
var diameter = radius * 2;
var circumference = diameter * Math.PI;
console.log(circumference);
// Calculate the area based on the radius, and output "The area is NN".
var area = Math.pow(circumference, 2) / Math.PI*4;
console.log(area);
// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
var celsius = 25;
// Convert it to fahrenheit and output "NN°C is NN°F".
var fahrenheit = celsius * 9/5 +32;
var temperature = celsius + " is " + fahrenheit;
console.log(temperature);
// Now store a fahrenheit temperature into a variable.
var fahrenheit = 60;
// Convert it to celsius and output "NN°F is NN°C."
var celsius = fahrenheit - 32 *5/9;
var tempC = fahrenheit + "is" + celsius;
console.log(tempC);