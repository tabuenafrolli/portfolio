$(document).ready(function(){

  if ( document.documentElement.clientWidth > 640 ) {
    // radio sound
    var radio = $("#radio");

    $("#radio-audio").mouseover(function(){
      radio.get(0).play();
    })

    $("#radio-audio").mouseout(function(){
      radio.get(0).pause();
    })

    // TV sound
    var tv = $("#tv");

    $("#tv-audio").mouseover(function(){
      tv.get(0).play();
    })

    $("#tv-audio").mouseout(function(){
      tv.get(0).pause();
    })

    // Newspaper sound
      var newspaper = $("#newspaper");

    $("#newspaper-audio").mouseover(function(){
      newspaper.get(0).play();
    })

    $("#newspaper-audio").mouseout(function(){
      newspaper.get(0).pause();
    })
}

});