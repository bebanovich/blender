// 
// var TUTORIAL_METHOD ={
//
//         handlerData:function(resJSON){
//
//             var templateSource   = $("#tutorial-template").html();
//
//             var template = Handlebars.templates['tutorial-template'];
//            //      template = Handlebars.compile(templateSource),
//            //
//            //
//            //      tutorialHTML = template(resJSON);
//            //
//            // $('#my-container').html(tutorialHTML);
//
//   },
//     loadTutorialData : function(){
//
//         $.ajax({
//             url:"json/tutorials.json",
//             method:'get',
//             success:this.handlerData
//
//         })
//     }
// };
//
// $(document).ready(function(){
//
//     TUTORIAL_METHOD.loadTutorialData();
// });

(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['tutorial-template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<h2>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h2>\n  <div class=\"tube\"><div class=\"youtube-player\" data-id=\""
    + alias2(alias1((depth0 != null ? depth0.vid_id : depth0), depth0))
    + "\"></div></div>\n        <div class=\"info\">\n         <input type=\"checkbox\" id=\"op\"></input>\n            <div class=\"lower\">\n                <label for=\"op\">Topics Covered</label>\n            </div>\n            <div class=\"sublay sublay-hugeinc\">\n              <label for=\"op\"></label>\n                <nav>\n                  <ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.tutorials : depth0)) != null ? stack1.shortcuts : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                  </ul>\n                </nav>\n            </div>\n         </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.shortcutMenuPartial,depth0,{"name":"shortcutMenuPartial","data":data,"indent":"                        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tutorials : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();

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
