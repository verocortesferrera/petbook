$(document).ready(function() {
	$('#myModal').modal('show');

	$('#home').click(function(){
console.log('hola');
		$('#inicio').show();
		$('#perfil').hide();
		$('#message').hide();
	})

	$('#user').click(function(){
		$('#inicio').hide();
		$('#perfil').show();
		$('#message').hide();
	})

	$('#mensaje').click(function(){
		$('#inicio').hide();
		$('#perfil').hide();
		$('#message').show();
	})
});