  // var template = Handlebars.templates['tutorial-template'];
  // ajax call to get data
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
//use precompiled template
