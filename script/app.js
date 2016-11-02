/* Write your code here! */

$(".kittylist").children("li").children("img").on("click", function(e){
    var catSays = $(this).attr("alt");
    var catUrl = $(this).attr("src")
    // console.log("clicked this cat", catSays, catUrl);
    $(".overlay").children("img").attr("src",catUrl);
    $(".overlay").children(".image-caption").text(catSays);
    // console.log("overlay",$(".overlay").attr("src"));
    $(".overlay").addClass("displayoverlay");
});

$(".overlay").on("click",function(e){
    $(".overlay").removeClass("displayoverlay");
});