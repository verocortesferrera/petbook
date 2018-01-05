$(document).ready(function() {
	/*modal*/
	$('#myModal').modal('show');

	$('#boton2').click(function(){
		$('#registro').hide();
		$('#inicio').show();
		$('#myModal').modal('toggle');
	});


		$('#boton3').click(function(){
		$('#registro').hide();
		$('#inicio').show();
		$('#myModal').modal('toggle');
	});

/*pestañas*/
	$('#home').click(function(){
console.log('hola');
		$('#inicio').show();
		$('#perfil').hide();
		$('#message').hide();
	});

	$('#user').click(function(){
		$('#inicio').hide();
		$('#perfil').show();
		$('#message').hide();
	});

	$('#mensaje').click(function(){
		$('#inicio').hide();
		$('#perfil').hide();
		$('#message').show();
	});

/*posteo home*/
	$(function(){
		$('#post').on('click', function(){
			var valor = $('#texto').val();
				if(valor !==''){
					var elem = $('<p class="tipoPost"></p>').text(valor + " ");
					$(elem).append('<button class ="rem btn-xs btn-warning">x</button>');
					$('#boxPost').append(elem);
					$('#texto').val('');
					$('.rem').on('click', function(){
						$(this).parent().remove();
					});
				};
		});
	});

	/*posteo imagen*/
	$("#up").click(function() {
		var image = new Image();
		var src = 'http://r.ddmcdn.com/s_f/o_1/cx_0/cy_0/cw_300/ch_300/w_300/APL/uploads/2014/10/kitten-cuteness300.jpg'; //Esta es la variable que contiene la url de una imagen ejemplo, luego puedes poner la que quieras
		image.src = src;
		var fotoup = $('<div></div>');
		$('#imageUp').append(fotoup)
		$(fotoup).append(image);
		$(fotoup).append(" " + '<button class ="rem btn-xs btn-warning">x</button>');
			$('.rem').on('click', function(){
				$(this).parent().remove();
			});
	});

	/*chat*/
	$('#send').click(function(){
		var chat = $('#comment').val();
		var hora = new Date();
		var dame_hora = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();
			if( chat !== '');
			var element = $('<p class="tipoPost"></p>').text('Yo: '+ chat + " "+ dame_hora);
			$('#chat').append(element);
			$('#comment').val('');
	})
});