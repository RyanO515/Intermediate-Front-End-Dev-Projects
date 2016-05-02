
// gather all stream and API information in variables
var streamUrl = 'https://api.twitch.tv/kraken/streams/';
var channelUrl = 'https://api.twitch.tv/kraken/channels/';
var streams = ["ESL_LOL", "freecodecamp", "ceh9", "agromon26", "B0aty", "Nightblue3", "imaqtpie", "Reckful","RobotCaleb","Peeve","noobs2ninjas","rxnexus"]; 


function callStreams () {  

  streams.forEach(function (streamer) {
      // send API request
      $.getJSON(streamUrl + streamer, function (data) {
        console.log(data);
        //defaults
        var streamHTML = "";
        var unknownIcon = 'http://www.marketing-professionnel.fr/wp-content/uploads/2011/09/donnees-off-line-on-line.jpg';
        var userURL = "http://www.twitch.tv/" + streamer;


        // offline stream
        if (data.stream === null || data.stream === undefined) {
          streamHTML += "<div class='stream offline'>";
          streamHTML += "<img src='" + unknownIcon + "' class='img-rounded' alt='logo' />";
          streamHTML += "<a href='" + userURL + "'>" + streamer + "</a>";
          streamHTML += "<span class='status-info pull-right'>Offline</span>";
        } 
        // success
        else {
          streamHTML += "<div class='stream online'>";
          streamHTML += "<img src='" + data.stream.channel.logo + "' class='img-rounded' alt='logo'/>";
          streamHTML += "<a href='" + data.stream.channel.url + "'>" + data.stream.channel.display_name + "</a>";
          streamHTML += "<span class='status-info pull-right'>" + data.stream.channel.status.slice(0, 25) + "..." + "</span>";
        }
        streamHTML += "</div>";
        $("#channels").append(streamHTML);
        console.log(streamer);
        console.log(streamHTML);

      });
    });  
 };   //function callstreams


$(document).ready(function () {
  
  callStreams();

  // all streams called, minor functionality
  // for active and offline tabs
  $(".status-pill").on("click", function() {
    $(".status-pill").removeClass('active');
    $(this).addClass('active');
    $(".stream").css("display", "block");

    if ($('#online').hasClass('active')) {
      $('.offline').css('display', 'none');
    }

    if ($('#offline').hasClass('active')) {
      $('.online').css('display', 'none');
    }

  });  
});













