$(document).ready( function () {

	var Search = {

		init: function () {
			$('#submit').on('click', this.getResults);
			$('#search').on('keypress', function (e) {
				if (e.keyCode === 13 ) {
					Search.getResults();
				}
			});
			$("#wiki-link").on("click", this.getRandomResult);
		},

		results: {},

		getResults: function () {
			var input = $('#search').val();

			$.getJSON('http://en.wikipedia.org/w/api.php?action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&format=json&callback=?&gsrsearch=' + input, function(data) {
				var s = Search;

				if (data.query !== undefined) {
					s.results = data.query.pages;
					Search.showResults();
				} else {
					s.results = '<p class="failed"> Sorry, no articles matched your search...</p>';
					$('.articles').html(s.results);
				}
			});

			$('#search').val("");
		},

		showResults: function () {
			var s = Search;

			$('.articles').html("");

			for (var entry in s.results) {
				if ( s.results.hasOwnProperty(entry)) {
					$('.articles').append(

						'<div class="entry"><h3 class="title"><a href="http://en.wikipedia.org/?curid=' + s.results[entry].pageid + 'target="_blank">' + s.results[entry].title + '</a></h3><p class="description">' + s.results[entry].extract + '</p></div>'

					);
				}
			}
		},

		getRandomResult: function () {
			$('.articles').html("");

			$.getJSON('http://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&explaintext&exsentences=3&format=json&callback=?', function(data) {
				var results = data.query.pages;

				$.map(results, function (entry) {
					$(".articles").append('<div class="entry"><h3 class="title"><a href="http://en.wikipedia.org/?curid=' + entry.pageid + 'target="_blank">' + entry.title + '</a></h3><p class="description">' + entry.extract + '</p></div>');
				});
			});
		}

	}; // Search

	Search.init();

});