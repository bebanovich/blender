(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['material-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col s8 l6\">\n    <div class=\"card\">\n    <div class=\"card-image\">\n      <img alt=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " image\" src= \"http://img.youtube.com/vi/"
    + alias2(alias1((depth0 != null ? depth0.vid_id : depth0), depth0))
    + "/mqdefault.jpg\">\n        <a href=\"#\" class=\"halfway-fab btn-floating green\"><i class=\"material-icons\">playlist_add</i></a>\n      </div>\n    <div class=\"card-content\">\n      <span class=\"card-title\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\n      <p>"
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\n    </div>\n    <div class=\"card-action\">\n      <a href=\"#\">View Details</a>\n      <a href=\"#"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\" class=\"btn orange modal-trigger\">Cheat List</a>\n    </div>\n  </div>\n</div>\n    <div class=\"modal\" id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\n      "
    + alias2(((helper = (helper = helpers.shortcuts || (depth0 != null ? depth0.shortcuts : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"shortcuts","hash":{},"data":data}) : helper)))
    + "\n    </div>\n  </div>\n</div>\n\n</div>\n\n\n        \n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tutorials : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();