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
Handlebars.registerHelper('thumbIt', function(youtube-player, image) {
  youtube-player[ i ].appendChild( image );
}( i ) );

Handlebars.registerHelper('frameIt', function(iframe) {

  var iframe = document.createElement( "iframe" );

      iframe.setAttribute( "frameborder", "0" );
      iframe.setAttribute( "allowfullscreen", "" );
      iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

      this.innerHTML = "";
      this.appendChild( iframe );
} );
Handlebars.registerHelper('linkListen', function(youtube-player, source, image) {

	var youtube-player = document.querySelectorAll( ".youtube-player" );

	for (var i = 0; i < youtube-player.length; i++) {

		var source = "https://img.youtube.com/vi/"+ youtube-player[i].dataset.embed +"/sddefault.jpg";

		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube-player[ i ].appendChild( image );
				}( i ) );

				youtube-player[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );
	};

} )();
