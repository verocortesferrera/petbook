$(document).ready(function() {
	$('#myModal').modal('show');

	$('#boton2').click(function(){
		$('#registro').hide();
		$('#inicio').show();
	})

/*pestañas*/
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

	$(function(){
		$('#post').on('click', function(){
			console.log('hola');
			var valo = $('#texto').val();
				if(valo !==''){
					var elem = $('<p></p>').text(valo);
					$(elem).append('<button class ="rem btn-xs">x</button>');
					$('#boxPost').append(elem);
					$('#texto').val('');
					$('.rem').on('click', function(){
						$(this).parent().remove();
					});
				};
		});
	});
});