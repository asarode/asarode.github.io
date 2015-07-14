$(document).ready(function() {
	$.ajax({
		url: "https://api.github.com/gists/79de1d997a5bd0e28ad3"
	}).success(function(res) {
		var favs = JSON.parse(res.files["favs.json"].content).data;
		addFavs(favs);
	});

	function addFavs(favs) {
		var favContainer = $('<div>', {id: 'favs-background'});

		var favText = '';
		for (var i = 0; i < 5; i++) {
			shuffle(favs);
			favs.map(function(fav) {
				favText += ' [ ' + fav + ' ] ';
			});
		}
		
		var favItem = $('<span>' + favText + '</span>')
		favContainer.append(favItem);
		favContainer.appendTo('#favs-background-wrapper');
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