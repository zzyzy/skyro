$(document).ready(function () {
	$('#banner-splash-slider-img1').ready(function () {
		$('#banner-splash-slider-img2').ready(function () {
			var img1 = $('#banner-splash-slider-img-1');
			var img2 = $('#banner-splash-slider-img-2');
			var control_slide_left = $('#banner-splash-control-slide-left');
			var control_slide_right = $('#banner-splash-control-slide-right');

			var min_count = 1;
			var max_count = 5;
			var count = Math.floor((Math.random() * max_count) + min_count);
			
			var src_dir = 'img/';
			var src_file_prefix = 'slider-img-';
			var src_ext = '.jpg';
			var src = src_dir + src_file_prefix + count + src_ext;

			img1.attr('src', src);
			img1.animate({opacity:'1'});
			img2.animate({opacity:'1'});

			control_slide_left.mouseup(function () {
				if (img1.is(':visible')) {
					count--;
					if (count < min_count) {
						count = max_count;
					}
					src = src_dir + src_file_prefix + count + src_ext;
					img2.attr('src', src);

					img1.fadeOut();
					img2.fadeIn();
				}
				else {
					count--;
					if (count < min_count) {
						count = max_count;
					}
					src = src_dir + src_file_prefix + count + src_ext;
					img1.attr('src', src);

					img1.fadeIn();
					img2.fadeOut();
				}
			});

			control_slide_right.mouseup(function () {
				if (img1.is(':visible')) {
					count++;
					if (count > max_count) {
						count = min_count;
					}
					src = src_dir + src_file_prefix + count + src_ext;
					img2.attr('src', src);

					img1.fadeOut();
					img2.fadeIn();
				}
				else {
					count++;
					if (count > max_count) {
						count = min_count;
					}
					src = src_dir + src_file_prefix + count + src_ext;
					img1.attr('src', src);

					img1.fadeIn();
					img2.fadeOut();
				}
			});

			var slideTimer = setInterval(function () {control_slide_right.mouseup()}, 10000);
		});
	});
});