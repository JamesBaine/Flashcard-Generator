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
			selectFlashCard();
			break;
		}
	});
};

var selectFlashCard = function(){
	inquirer.prompt([
		{
			type: "list",
			name: "pickFlashCard",
			message: "Select flash card: ",
			choices: [
				"1",
				"2",
				"3",
				"4",
				"5",
				"back"
			]
		}
	]).then(function(flash){
		switch(flash.pickFlashCard){

		case "1":
			if(flashCards[0]){
				flashCards[0].printFront();
				inquirer.prompt([
					{
						type: "confirm",
						name: "back",
						message: "View back?"
					}
				]).then(function(pick){
					if(pick.back){
						flashCards[0].printBack();
						selectFlashCard();
					} else {
						selectFlashCard();
					}
				});
			} else {
				console.log("There is not a flashcard in this slot");
			}
			break;

		case "2":
			if(flashCards[1]){
				flashCards[1].printFront();
				inquirer.prompt([
					{
						type: "confirm",
						name: "back",
						message: "View back?"
					}
				]).then(function(pick){
					if(pick.back){
						flashCards[1].printBack();
						selectFlashCard();
					} else {
						selectFlashCard();
					}
				});
			} else {
				console.log("There is not a flashcard in this slot");
			}
			break;

		case "3":
			if(flashCards[2]){
				flashCards[2].printFront();
				inquirer.prompt([
					{
						type: "confirm",
						name: "back",
						message: "View back?"
					}
				]).then(function(pick){
					if(pick.back){
						flashCards[2].printBack();
						selectFlashCard();
					} else {
						selectFlashCard();
					}
				});
			} else {
				console.log("There is not a flashcard in this slot");
			}
			break;

		case "4":
			if(flashCards[3]){
				flashCards[3].printFront();
				inquirer.prompt([
					{
						type: "confirm",
						name: "back",
						message: "View back?"
					}
				]).then(function(pick){
					if(pick.back){
						flashCards[3].printBack();
						selectFlashCard();
					} else {
						selectFlashCard();
					}
				});
			} else {
				console.log("There is not a flashcard in this slot");
			}
			break;

		case "5":
			if(flashCards[4]){
				flashCards[4].printFront();
				inquirer.prompt([
					{
						type: "confirm",
						name: "back",
						message: "View back?"
					}
				]).then(function(pick){
					if(pick.back){
						flashCards[4].printBack();
						selectFlashCard();
					} else {
						selectFlashCard();
					}
				});
			} else {
				console.log("There is not a flashcard in this slot");
			}
			break;
		}
	});
};

selections();
