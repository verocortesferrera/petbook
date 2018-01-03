$(document).ready(function() {
	$('#myModal').modal('show');

	$('#boton2').click(function(){
		console.log('hola');
		$('#registro').hide();
		$('#inicio').show();
	})

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