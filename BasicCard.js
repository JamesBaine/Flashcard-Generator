var MakeCard = function(front, back){
	this.front = front;
	this.back = back;
};

MakeCard.prototype.printInfo = function(){
	console.log();
	console.log("Card Front: " + this.front + "\nCard Back: " + this.back);
	console.log();
};

MakeCard.prototype.printInfo = function(){
	console.log();
	console.log("Card Front: " + this.front);
};

MakeCard.prototype.printBack = function(){
	console.log();
	console.log("Card Back: " + this.back);
	console.log();
};

module.exports = MakeCard;
