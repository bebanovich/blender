var TUTORIAL_METHOD ={

        handlerData:function(resJSON){
          var templateSource   = $("#tutorial-template").html(),

                template = Handlebars.compile(templateSource),

                tutorialHTML = template(resJSON);

           $('#my-container').html(tutorialHTML);

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
var myName;
var myTemplate = $('#myTempId').html();
var compiled = Handlebars.compile(myTemplate);

$('#buttonId').click(function(){
  myName = $('#nameId').val();
  $('#containerId').html(compiled({name:myName}));
});
