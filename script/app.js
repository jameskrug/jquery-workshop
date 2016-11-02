
//This is not the ISS location, but the api was down at the time of coding so couldn't test properly
jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=sydney').then(
    function(res) {
        $("h1").after('<div class = "location">this is where the iss is: ' + res.results[0].geometry.location.lat + " : " + res.results[0].geometry.location.lng + "</div>")
        $(".location").after("<div class = 'whynotiss'>this is actually the location of syndey, the iss api was down at the time of coding</div>")
        console.log(res.results[0].geometry.location);
    }
);