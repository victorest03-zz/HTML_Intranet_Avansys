$(document).ready(function() {
	var c=0;
	$('#nav-bar').click(function() {
		if(c==0){
			$('#menu-bar').removeClass('desc').addClass('act');
			$('#container').removeClass('col-md-12').addClass('col-md-9');
			$('#container').css("left","25%")
			c=1;
		}else{
			$('#menu-bar').removeClass('act').addClass('desc');
			$('#container').removeClass('col-md-9').addClass('col-md-12')
			$('#container').css("left","0")
			c=0;
		}
		
	})

	function check_text(input,text) {
		if (input.validity.patternMismatch){
			input.setCustomValidity(text);
		}
		else {
			input.setCustomValidity("");
		}
	}

})