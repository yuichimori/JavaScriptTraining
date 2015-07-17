$(function(){

	// ボタンはサービスです。
	// 自由に使ってください。

	var $x = $(window).width();
	var $y = $(window).height();

	// 本当はこれでcanvasタグを入れたいけどうまくいかないので、htmlに書いた。
	// $('#canvas').append('<canvas></canvas>');

	var $canvas = $('#canvas');

	$canvas.mousedown(function(){
		$canvas.mousemove(function(event){
			var cx = event.clientX;
			var cy = event.clientY;

			$canvas.drawEllipse({
			  fillStyle: '#36c',
			  x: cx,
			  y: cy,
			  width: 5,
			  height: 5
			});
		});
	});

	$canvas.mouseup(function(){

	});


	var $man = $('.man');
	$man.click(function(){
		$(this).slideUp('slow');	
	});

	$canvas.drawImage({
		source: './public/img/miniman.png',
		layer: true,
		name: 'cman',
		x: -50,
		y: 150,
		width: 40,
		height: 50
	});

	function walk(){
		$canvas.animateLayer('cman', {
			x: '+=1380'
		}, 5000, function(layer){
			$(this).animateLayer('cman', {
				x: '-=1380'
			}, 1000)
		});
	};

	setInterval(walk(), 7000);


});