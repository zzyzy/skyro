$(document).ready(function () {
	$('#main-content-img-slider').ready(function () {
		var img = $('#main-content-img-slider-slider-img');
		var min_count = 1;
		var count = 1;
		var max_count = 5;
		var src_dir = 'img/';
		var src_file_prefix = 'slider-img-';
		var src_ext = '.jpg';
		var src = src_dir + src_file_prefix + count + src_ext;

		img.attr('src', src);

		$('#main-content-img-slider-control-slide-left').mouseup(function () {
			if (count > min_count) {
				count--;
				src = src_dir + src_file_prefix + count + src_ext;
				img.attr('src', src);
			}
		});

		$('#main-content-img-slider-control-slide-right').mouseup(function () {
			if (count < max_count) {
				count++;
				src = src_dir + src_file_prefix + count + src_ext;
				img.attr('src', src);
			}
		});
	});
});