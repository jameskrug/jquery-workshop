
var intervalID = window.setInterval(myCallback, 3000);

jQuery.getJSON('https://api.wheretheiss.at/v1/satellites/25544')
    .then(function(res) {
        console.log(res);
        $("h1").after('<div class = "location">this is where the iss is: ' + res.latitude + " : " + res.longitude + "</div>")
        $(".location").after("<div class = 'whynotiss'>this is actually the location of syndey, the iss api was down at the time of coding</div>")
        var mapHere = "<img class = 'mapimage' src = https://maps.googleapis.com/maps/api/staticmap?center="+res.latitude+","+res.longitude+"&zoom=5&size=640x640&&markers=color:red%7Clabel:J%7C"+res.latitude+","+res.longitude+"&key=AIzaSyD1iWqFKtyklWjC2DCHB0si1UIkeDgdO0E>";
        $(".whynotiss").after(mapHere);
});

function myCallback() {
    jQuery.getJSON('https://api.wheretheiss.at/v1/satellites/25544')
    .then(function(res) {
        $(".location").text("this is where the iss is: " + res.latitude + " : " + res.longitude);
        var mapHere = "https://maps.googleapis.com/maps/api/staticmap?center="+res.latitude+","+res.longitude+"&zoom=5&size=640x640&&markers=color:red%7Clabel:J%7C"+res.latitude+","+res.longitude+"&key=AIzaSyD1iWqFKtyklWjC2DCHB0si1UIkeDgdO0E";
        console.log("themap", mapHere);
        $("img").attr("src", mapHere);
    }
    );
}



// var x = 0;
// var intervalID = window.setInterval(myCallback, 2000);

// jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=annecy')
//     .then(function(res) {
//         $("h1").after('<div class = "location">this is where the iss is: ' + res.results[0].geometry.location.lat + " : " + res.results[0].geometry.location.lng + "</div>")
//         $(".location").after("<div class = 'whynotiss'>this is actually the location of syndey, the iss api was down at the time of coding</div>")
//         var mapHere = "<img class = 'mapimage' src = https://maps.googleapis.com/maps/api/staticmap?center="+res.results[0].geometry.location.lat+","+res.results[0].geometry.location.lng+"&zoom=8&size=640x640&&markers=color:red%7Clabel:J%7C"+res.results[0].geometry.location.lat+","+res.results[0].geometry.location.lng+"&key=AIzaSyD1iWqFKtyklWjC2DCHB0si1UIkeDgdO0E>";
//         console.log(mapHere);
//         $(".whynotiss").after(mapHere);
// });

// function myCallback() {
//     jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=annecy')
//     .then(function(res) {
//         x++;
//         $(".location").text("this is where the iss is: " + res.results[0].geometry.location.lat + " : " + res.results[0].geometry.location.lng);
//         var mapHere = "<img class = 'mapimage' src = https://maps.googleapis.com/maps/api/staticmap?center="+res.results[0].geometry.location.lat+","+res.results[0].geometry.location.lng+"&zoom=8&size=640x640&&markers=color:red%7Clabel:J%7C"+res.results[0].geometry.location.lat+","+res.results[0].geometry.location.lng+"&key=AIzaSyD1iWqFKtyklWjC2DCHB0si1UIkeDgdO0E>";
//         console.log(x, mapHere);
//         $("mapimage").attr("src", mapHere);
//     }
//     );
// }