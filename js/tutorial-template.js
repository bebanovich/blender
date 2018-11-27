(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tutorial-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"inhead\">\n  <h2>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h2>\n</div>\n  <div class=\"viddiv\">\n    <div class=\"youtube\" data-id=\""
    + alias2(alias1((depth0 != null ? depth0.vid_id : depth0), depth0))
    + "\" onclick=\"videoPlay(this)\">\n    <div class=\"video-youtube-lazy\"><img alt=\"youtube image\" src=\"https://i.ytimg.com/vi/"
    + alias2(alias1((depth0 != null ? depth0.vid_id : depth0), depth0))
    + "/hqdefault.jpg\">\n      <!--<iframe src=\"http://www.youtube.com/embed/"
    + alias2(alias1((depth0 != null ? depth0.vid_id : depth0), depth0))
    + "?autoplay=1&autohide=1\" frameborder=\"0\" allowfullscreen=\"1\"></iframe>-->\n    </div>\n    </div>\n  </div>\n        <div class=\"info\">\n            <div class=\"lower\">\n                <label onclick=\"on()\"><img src=\"images/icons/point.png\" width=\"12px\" height=\"12px\" vertical-align=\"center\"></img>&nbsp;&nbsp;&nbsp;Tutorial Topics</label>\n            </div>\n          </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tutorials : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();