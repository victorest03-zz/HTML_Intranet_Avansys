$(document).ready(function() {
	$('#btn-olvidar').click(function(){
		$('#frmOlvido').removeClass( "hidden-act" );
		$('#frmLogin').addClass( "hidden-act" );
	})

	$('#btn-sesion').click(function(){
		$('#frmOlvido').addClass( "hidden-act" );
		$('#frmLogin').removeClass( "hidden-act" );
	})
})