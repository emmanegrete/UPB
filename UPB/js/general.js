$(document).ready(function(){
	$('.slide').ulslide({
      width: 250,
      height: 'auto',
	    statusbar: true,
	    effect: {
		    type: 'fade', // slide or fade
		    distance: 0
	    },
      duration: 1000,
	  easing: 'easeOutBounce',
	  autoslide: 3500
    });
    $('.slideHistoria').ulslide({
      width: 460,
      height: 'auto',
	    statusbar: true,
	    effect: {
		    type: 'fade', // slide or fade
		    distance: 0
	    },
      nextButton: '#slide_next',
      prevButton: '#slide_prev',
      duration: 500,
	  easing: 'easeOutBounce'
    });
});