$(document).ready(function() {
	// $.ajax({
	// 	url: "https://api.github.com/gists/79de1d997a5bd0e28ad3"
	// }).success(function(res) {
	// 	var favs = JSON.parse(res.files["favs.json"].content).data;
	// 	addFavs(favs);
	// });

	var favs = [
		"Psycho-Pass",
		"No Game No Life",
		"Steins;Gate",
		"Fullmetal Alchemist: Brotherhood",
		"Katekyo Hitman Reborn!",
		"Ano Hana",
		"Commando, Infantry, or Police. Who are you?",
		"Superhero.js",
		"What every programmer needs to know about game networking",
		"To understand code you have to build a mental model",
		"Your first GraphQL Server",
		"AngularJS Tutorial: A Comprehensive 10,000 Word Guide",
		"Common Misconceptions About Inheritance in Javascript",
		"Git from the inside out",
		"Using RxJS for data flow instead of Flux with React",
		"What is the Flux Application Architecture?",
		"A Brief History of User Experience Design",
		"The Sad Tragedy of Micro-Optimzation Theater",
		"REACT",
		"IMMUTABLE JS",
		"RETHINK DB",
		"MONGO DB",
		"ALT JS",
		"EXPRESS JS",
		"HAPI",
		"JOI",
		"NODE JS",
		"RXJS",
		"FLUX",
		"PASSPORT",
		"SOCKET.IO",
		"BLUEBIRD",
		"ASYNC",
		"BABEL",
		"SWIFTLY JSON",
		"OBOE JS"
	];

	addFavs(favs);

	function addFavs(favs) {
		var favContainer = $('<div>', {id: 'favs-background'});

		var favText = '';
		for (var i = 0; i < 5; i++) {
			shuffle(favs);
			favs.map(function(fav) {
				favText += ' [ ' + fav + ' ] ';
			});
		}
		
		$('#favs-background span').text(favText);
		// var favItem = $('<span>' + favText + '</span>')
		// favContainer.append(favItem);
		// favContainer.appendTo('#favs-background-wrapper');
	}

	// http://stackoverflow.com/a/2450976
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
});