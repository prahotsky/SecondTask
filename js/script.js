$(document).ready(function() {
    $.get( "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors", function( data ) {
        data.forEach(function(item) {
            console.log(item);
        });
    });
});

