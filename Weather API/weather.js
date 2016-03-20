


var apiUrl = "http://api.openweathermap.org/data/2.5/weather?"
var apiKey = "95baf913520556b07ab9e5a99c71ba95";
var zip;
var units;
var $temp = $("#temp");
var $icon = $("#icon");
var $location = $("#location");
var $description = $('#descr');
var $wind = $("#wind");
var fullUrl;




$("#submit").on("click", function() {
	zip = $("#zipcode").val();
	units = $("#units").val();
	var unit;

	fullUrl = apiUrl + "zip=" + zip + "&appid=" + apiKey + "&units=" + units;
	console.log(fullUrl);

	$.get(fullUrl, function(data) {

		if (units === "metric") {
			unit = " C";
		} else {
			unit = " F";
		}

		var temp = data.main.temp + unit;
		var descr = data.weather[0].description;
		var location = data.name;
		var wind = data.wind.speed + " knots";


		$temp.html("");	
		$temp.append(temp);

		$icon.html("");
		$icon.append("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");

		$location.html("");
		$location.append(location);

		$description.html("");
		$description.append(descr);

		$wind.html("");
		$wind.append(wind);
	});
});