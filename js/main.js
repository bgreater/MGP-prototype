/*global jQuery */
/*jshint multistr:true browser:true */


$(document).ready(function() {
	$('.video-container').fitVids();
  $('#navbarsearch-button').click(function(e){
    e.preventDefault();
    if ($(window).width() < 985){
      $('#navbarsearch-button').css('background-color','#79a736');
    };
    $('.main-nav-search #input-wrap').css('opacity','100');
    $('#navbarsearch-input').focus();
    if ($(window).width() < 500){
      $('#navbarsearch-input').animate({
          opacity: 100
      }, 10, function(){
         $('#navbarsearch-input').css({width:'250px'});
       });
    } else {
      $('#navbarsearch-input').animate({
          opacity: 100
      }, 200, function(){
         $('#navbarsearch-input').css({width:'150px'});
       });
    };
  });
  $(document).click(function() {
      if($(this.activeElement).is(':focus') != true){
        console.log($(this).is(':focus'));
        $('.main-nav-search #input-wrap').css('opacity','0');
        $('#navbarsearch-input').css({width:'0px','opacity':'0'});
        $('#navbarsearch-button').css('background-color','transparent');
      };
  });
});


