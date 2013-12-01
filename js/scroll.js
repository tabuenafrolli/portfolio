$(document).ready(function(){

  function scrollToAnchor(anchor){
    var aTag = $("a[name='"+ anchor +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  $("a[href='#webdev']").click(function() {
    scrollToAnchor('webdev');
  });

  $("a[href='#journo']").click(function() {
    scrollToAnchor('journo');
  });

  $("a[href='#about']").click(function() {
    scrollToAnchor('about');
  });

  $("a[href='#']").click(function() {
    scrollToAnchor('#');
  });

});