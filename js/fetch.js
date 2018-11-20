var Handlebars = require('handlebars/runtime');
var hbtemplate = require('js/test-template.js');

// You don't even seem to need the "var hbtemplate =" above,
// as precompiling puts your template into the Handlebars object.
var template = Handlebars.templates['test-template'];
// ...then you can use template(data) to generate the HTML string

//use precompiled template
var template = Handlebars.templates['templates/test-template.handlebars'];

//ajax call to get data
var jsonData =(function(){
  var json = null;
  $ajax({
    'async': false,
    'global': false,
    'type' : "GET",
    'url': "json/tutorials.json",
    'dataType': "json",
    'success': function (data) {
        json = data;
    }
  });

  //Handlebar helper to modify data or display conditionally.
  // Handlebars.registerHelper("shortcuts")
  //         tutorialHTML = template(resJSON);
  //
  //          $('#my-container').html(tutorialHTML);
  //
  // },
//apply data to template
var result = template(jsonData);

//replace div html with template data
$('#tutorialContent').html(result);

});
