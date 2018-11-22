
var $requestUrlExample = "json/tutorials.json";
// var $requestUrlTwo = "json/topics.json";
// var $requestUrlThree = "json/producers.json";

var MULTIPLE_METHOD={
  handlerData:function(resJSON){
    // var gotIt = console.log(resJSON);
    // var template = Handlebars.template['tutorial-template'], // your template minus the .js

        // context = resJSON.all(),
    console.log(resJSON);$("#tutorialContent");

        // $('#tutorialContent').html(gotIt);

},
loadTutorialData : function(){
  $.ajax({
      url:($requestUrlExample),
      method:'get',
      dataType: ('json'),
      success:this.handlerData

    })
  }
};
$(document).ready(function(){

    MULTIPLE_METHOD.loadTutorialData();
});
