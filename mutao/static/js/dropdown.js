(function($){
	'use strict'
	function dropdown(el, options) {
		var $el = $(el),
			$layer = $el.find('.dropdown-layer'),
			activeClass = $el.data('active') + '-active';

		$layer.showHide(options);

		$el.hover(function() {
			$el.addClass(activeClass);
			$layer.showHide('show');
		}, function() {
			$el.removeClass(activeClass);
			$layer.showHide('hide');
		})
	}

	var defaults = {
		css3: false,
		js: false,
		animation: 'fade'
	}

	$.fn.extend({
		dropdown: function(option) {
			return this.each(function() {
				var options = $.extend({}, defaults, option);
				dropdown(this, options);
			})
		}
	})

})(jQuery)
