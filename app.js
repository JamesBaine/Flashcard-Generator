var flashCards = [];
var inquirer = require("inquirer");
var MakeCard = require("./BasicCard.js");
var flashCount = 0;

console.log("Follow the prompts to generate up to 5 flashcards.");
console.log();

var makeMore = function(){
	inquirer.prompt([
		{
			type: "confirm",
			name: "confirm",
			message: "Make another flash card?"
		}
	]).then(function(confirm){
		if(confirm.confirm){
			createFlashCard();
		} else {
			selections();
		}
	});
};

var createFlashCard = function(){
	if(flashCount < 5) {
		console.log("This is your " + (flashCount+1) + " flash card.");
		inquirer.prompt([
			{
				name: "front",
				message: "Front of Card"
			},{
				name: "back",
				message: "Back of Card"
			}
		]).then(function(answers){
			var newFlashCard = new MakeCard(answers.front, answers.back);
			flashCards.push(newFlashCard);
			console.log("Flash card saved");
			flashCount++;
			makeMore();
		});
	}
};

var selections = function(){
	inquirer.prompt([
		{
			type: "list",
			name: "pick",
			message: "What would you like to do?",
			choices: [
				"Make card",
				"Show card list",
				"Select card"
			]
		}
	]).then(function(selection){
		switch(selection.pick){
		case "Make card":
			createFlashCard();
			break;

		case "Show card list":
			console.log(flashCards);
			selections();
			break;

		case "Select card":
			selectFlashCard;
			break;
		}
	});
};

selections();
