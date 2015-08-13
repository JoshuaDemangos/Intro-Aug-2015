$(document).ready(function() {
	
	var quotes = [
		"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
		"I can't change the direction fo the wind, but I can adjust my sails to always reach my destination.",
		"Somewhere, something incredible is waiting to be known.",
		"Perfection is not attainable, but if we chase perfection we can catch excellence.",
		"Put your heart, mind and soul into even your smallest acts. This is the secret of success.",
		"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor and some style.",
		"If opportunity doesn't knock, build a door.",
		"Believe you can and you're halfway there.",
		"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.",
		"Two roads diverged in a wood and I - I took the one less traveled by, and that has made all the difference."
	];
	
	function getRandomQuote() {
		return quotes[Math.floor(Math.random() * quotes.length)];
	}
	
	function setTextToRandomQuote() {
		var randomQuote = "\"" + getRandomQuote() + "\"";
		
		$("#quoteText").text(randomQuote);
	}
	
	$("#generateButton").click(setTextToRandomQuote);
	
	setTextToRandomQuote();

	
});