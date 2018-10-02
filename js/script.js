$(document).ready(function() {
    $.get( "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors", function( data ) {
        data.forEach(function(item) {
            showItems(item);
        });
    });
});

function showItems(item) {

    let $avatar = $("<div></div>").addClass("avatar");
    let $login = $("<p></p>").html(item.login);
    let $contributions = $("<p></p>").html("Contributions: " + item.contributions);
    let $caption = $("<div></div>")
        .addClass("caption")
        .append($login)
        .append($contributions);
    let $contactCard = $("<div></div>")
        .addClass("main-item")
        .append($avatar)
        .append($caption);
    $avatar.css("background", "url(" + item.avatar_url + ") no-repeat").css("background-size", "contain");
    $(".main-item-wrapper").append($contactCard);
}


