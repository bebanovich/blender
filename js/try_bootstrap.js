// pass data and how many per row
Handlebars.registerHelper('grid', function(data,perRow) {

  var wrapper = "";

	// need index
	if(index == 0 || index % perRow == 0) {
		wrapper += '<div class="row">';
	}

	if((index + 1) % perRow == 0 || (index + 1) == data.length) {
		wrapper += '</div>';
	}

	return wrapper;

});

var source = $("#handlebars-template").html();
var template = Handlebars.compile(source);

var data = {
  "employees" : [
    {
      "name":"Fred Flintstone",
      "title":"Frontend Developer",
      "skills" : "html,css,javascript"
    },
    {
      "name":"Sally Struthers",
      "title":"Frontend Developer",
      "skills" : "html,css,javascript"
    },
    {
      "name":"Ben Wilson",
      "title":"Frontend Developer",
      "skills" : "html,css,javascript"
    },
    {
      "name":"Julie Milson",
      "title":"Frontend Developer",
      "skills" : "html,css,javascript"
    },
    {
      "name":"Mike Barton",
      "title":"Frontend Developer",
      "skills" : "html,css,javascript"
    }
  ]
}

$("#placeholder").html(template(data));
