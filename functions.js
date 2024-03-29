// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
function tellFortune(numberOfChildren, partnersName, geographicLocation, jobTitle) {
	var fortune = "you will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.";
	console.log(fortune);
}


// Call that function 3 times with 3 different values for the arguments.
tellFortune(3, "lisa", "toronto", "web dev");
tellFortune(4, "steph", "ontario", "programmer");
tellFortune(7, "linda", "newyork", "artist");
// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
function calculateAge(birthYear, currentYear)
{
	var age = currentYear - birthYear;
	var age2 = age++;
	var calculator = "You are either " + age + " or " + age2;
	console.log(calculator);
}

calculateAge(2000, 2015);
calculateAge(1988, 2015);
calculateAge(1984, 2015);
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
function calculateSupply(age, amountPerDay){
	var amountPerYear = amountPerDay * 365;
	var supply = age * amountPerDay;
	var calculator = "You will need " + supply + " to last you until the rip old age of " + age;
	console.log(calculator);
}

calculateSupply(30, 5);
calculateSupply(80, 2);
calculateSupply(120, 3);
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:
function calcCircumfrence(radius){
	var diameter = radius * 2;
	var circumference = diameter * Math.PI;
	var calculator = "The circumference is " + circumference; 
	console.log(calculator);
}

calcCircumfrence(5);
calcCircumfrence(3);
calcCircumfrence(10);

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
function calcArea(radius){
	var r2 = Math.pow(radius, 2);
	var area = Math.PI * r2;
	var calculator = "The area is " + area;
	console.log(calculator);
}
calcArea(5);
calcArea(10);
calcArea(15);
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:


// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."