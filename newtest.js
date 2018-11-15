//Retrieve the template data from the HTML .
var template = $('#handlebars-demo').html();

$.getJSON( "tutorials.json", function( data ) {
        // Get data about our products from products.json.

        // Call a function that will turn that data into HTML.
        generateAllTutorialsHTML(data);

        // Manually trigger a hashchange to start the app.
        $(window).trigger('hashchange');
    });
    
     $(window).on('hashchange', function(){
        // On every hash change the render function is called with the new hash.
        // This is how the navigation of our app happens.
        render(decodeURI(window.location.hash));
    });

var context = { "name" : "Ritesh Kumar", "occupation" : "developer" };

//Compile the template data into a function
var templateScript = Handlebars.compile(template);

var html = templateScript(context);
//html = 'My name is Ritesh Kumar . I am a developer.'

$(document.body).append(html);
