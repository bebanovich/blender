(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['shortcutMenuPartial'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li><a href=\"#\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.tutorials : depth0)) != null ? stack1.shortcuts : stack1), depth0))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.tutorials : depth0)) != null ? stack1.shortcuts : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();