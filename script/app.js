/* Write your code here! */
var $announcement = $(".announcement");

$announcement.append('<input type = "button" class = "closebutton" value = "X"><input type="button" class = "showButton" value = "show announcement">');

$(".closebutton").on("click", function(e){
   $(this).parent().addClass("hide");
});

$(".showButton").on("click", function(e){
    $(this).parent().removeClass("hide");
})