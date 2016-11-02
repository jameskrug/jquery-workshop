
$('#signup-form').on('submit', function(event) {
    // event.preventDefault();
    var username = $("#user").val();
    var password = $("#password").val();
    var password2 = $("#password2").val();
    if (password.length < 10){
        event.preventDefault();
        alert("password too short")
    }
    if (password != password2){
        event.preventDefault();
        alert("passwords don't match");
    }
    console.log(event);
    console.log(username.length,password.length,password2.length);
});