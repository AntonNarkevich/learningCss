(function gallery($) {
	'use strict';

	function toggleGallery() {
		var $switch = $(this);
		var $gallery = $switch.closest('.gallery-toggle');

		$gallery.toggleClass('is-gallery-toggle-collapsed');
	}

	function bindEvents() {
		var $switches = $('.gallery-toggle-switch');
		$switches.on('click', toggleGallery);
	}

	$(bindEvents);
}(jQuery));