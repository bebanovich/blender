var TUTORIAL_METHOD ={
    handlerData:function(resJSON){
    var templateSource   = $("#tutorial-template").html(),

                template = Handlebars.compile(templateSource),

                tutorialHTML = template(resJSON);

           $('#my-container').html(tutorialHTML);

              function() {

  	var youtube = document.querySelectorAll( ".youtube" );

  	for (var i = 0; i < youtube.length; i++) {

  		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";

  		var image = new Image();
  				image.src = source;
  				image.addEventListener( "load", function() {
  					youtube[ i ].appendChild( image );
  				}( i ) );

  				youtube[i].addEventListener( "click", function() {

  					var iframe = document.createElement( "iframe" );

  							iframe.setAttribute( "frameborder", "0" );
  							iframe.setAttribute( "allowfullscreen", "" );
  							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

  							this.innerHTML = "";
  							this.appendChild( iframe );
  				} );
  	};

  } )();


    loadTutorialData : function(){

        $.ajax({
            url:"json/tutorials.json",
            method:'get',
            success:this.handlerData

        })
    }
};



Handlebars.registerHelper('thumbIt', function(youtube, image) {
  youtube[ i ].appendChild(image);
}( i ) );

Handlebars.registerHelper('frameIt', function(iframe) {

  var iframe = document.createElement( "iframe" );

      iframe.setAttribute( "frameborder", "0" );
      iframe.setAttribute( "allowfullscreen", "" );
      iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

      this.innerHTML = "";
      this.appendChild( iframe );
} );



    TUTORIAL_METHOD.loadTutorialData();
});

// template starts here
<h2>{{this.name}}</h2>
  <div class="tube">

    <div class="youtube" data-embed="AqcjdkPMPJA">

<!-- (2) the "play" button -->
<div class="play-button"></div>
    {{tubify}}<div class="youtube"><div data-embed="{{this.vid_id}}">{{/tubify}}
      // <img src="https://i.ytimg.com/vi/{{this.vid_id}}/hqdefault.jpg">
      //     <div class="play"></div></div>
  </div>
    <div class="info">
     < <input type="checkbox" id="op"></input>
        <div class="lower">
            <label for="op">click the text</label>
        </div>
        <div class="sublay sublay-hugeinc">
          <label for="op"></label>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Clients</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
        </div>
     </div>
    </div>
