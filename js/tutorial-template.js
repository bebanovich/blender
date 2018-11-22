(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tutorial-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<h2>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h2>\n  <div class=\"tube\"><div class=\"youtube\" data-id=\""
    + alias2(alias1((depth0 != null ? depth0.vid_id : depth0), depth0))
    + "\" onclick=\"videoPlay(this)\">\n    <div class=\"video-youtube-lazy\"><img alt=\"youtube image\" src=\"https://i.ytimg.com/vi/"
    + alias2(alias1((depth0 != null ? depth0.vid_id : depth0), depth0))
    + "/hqdefault.jpg\">\n      <!--<iframe src=\"http://www.youtube.com/embed/"
    + alias2(alias1((depth0 != null ? depth0.vid_id : depth0), depth0))
    + "?autoplay=1&autohide=1\" frameborder=\"0\" allowfullscreen=\"1\"></iframe>-->\n\n    </div>\n    </div>\n  </div>\n        <div class=\"info\">\n         <input type=\"checkbox\" id=\"op\"></input>\n            <div class=\"lower\">\n                <label for=\"op\"><img src=\"images/icons/point.png\" width=\"12px\" height=\"12px\" vertical-align=\"center\"></img>&nbsp;&nbsp;&nbsp;Tutorial Topics</label>\n            </div>\n            <div class=\"sublay sublay-hugeinc\">\n              <label for=\"op\"></label>\n                <nav>\n                  <ul>\n                        "
    + alias2(((helper = (helper = helpers.shortcuts || (depth0 != null ? depth0.shortcuts : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"shortcuts","hash":{},"data":data}) : helper)))
    + "\n                  </ul>\n                </nav>\n            </div>\n          </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tutorials : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();