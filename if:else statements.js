// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.


function greaterNum(number, number2){



	var high = 0;


	if(number>number2) {
		high = number;
	}
	else if(number<number2){
		high = number2;
	}



	var result = "The greater the of " + number + " and " + number2 + " is " + high;
	console.log(result);
}
greaterNum(1,2);
greaterNum(5,2);

// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
function helloWorld(languageCode){

	if (languageCode === "es"){
		console.log("Spanish");

	}else if (languageCode === "de"){
		console.log("German");

	}else if (languageCode === "en"){
		console.log("English");
	}else {
		console.log("English");
	}
}

helloWorld("es");
helloWorld("de");
helloWorld("en");
helloWorld("fe");


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
// A=80+ B=70+ C=60+ D=50+ F=49- 

function assignGrade(score){
	if (score > 79) {
		console.log("A");
	}else if (score > 69){
		console.log("B");
	}else if (score > 59){
		console.log("C");
	}else if (score > 49){
		console.log("D");
	}else if (score < 50){
		console.log("F");
	}else {
		console.log("Score Error");
	}
}

assignGrade(80);
assignGrade(70);
assignGrade(60);
assignGrade(50);
assignGrade(49);
// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
function pluralize(noun, number){
	if (number < 2){
		console.log(number + " " + noun);
	}
	else{
		console.log(number + " " + noun + "s");	
	}
}
pluralize("dog", 2)
pluralize("dog", 1)

// Bonus: Make it handle a few collective nouns like "sheep" and "geese".










