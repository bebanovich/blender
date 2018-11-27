
var TUTORIAL_METHOD ={

        handlerData:function(resJSON){
            var template = Handlebars.templates['material-template'],
            // var template = Handlebars.template['tutorial-template'], // your template minus the .js

                // context = resJSON.all(),

                tutorialHTML = template(resJSON);

           $('#tutorialContent').html(tutorialHTML);

  },
    loadTutorialData : function(){

        $.ajax({
            url:"json/tutorials.json",
            method:'get',
            success:this.handlerData

        })
    }
};

$(document).ready(function(){

    TUTORIAL_METHOD.loadTutorialData();
});
