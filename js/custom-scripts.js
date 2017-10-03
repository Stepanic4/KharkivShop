
/////////////////////////////////////////////// Плавный скрол по сайту ///////////////////////////////

$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});


///////////////////////////////////////////////////   BURGER  /////////////////////////////////////////
    

	$('.burger').click(function() {
		$('.navbar-collapse').toggleClass('active');
	});

///////////////////////////////////////////////  NO COPY  ////////////////////////////////////////////

    // document.ondragstart = noselect;
    // document.onselectstart = noselect;
    // document.oncontextmenu = noselect;
    // function noselect() {return false;} 
