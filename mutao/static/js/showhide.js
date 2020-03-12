(function($){
	'use strict'

	var transition = window.mt.transition;

	function init($el, hiddenCallback) {

		// 判断当前元素状态并设置状态初始值
		if ($el.is(':hidden')) {
			$el.data('status', 'hidden');
			if (typeof hiddenCallback === 'function') hiddenCallback();
		} else {
			$el.data('status', 'shown');
		}
	}

	function show($el, callback) {
		if($el.data('status') === 'show') return;
		if($el.data('status') === 'shown') return;

		// 触发 show 事件，
		$el.data('status', 'show').trigger('show');

		callback();
	}

	function hide($el, callback) {
		if($el.data('status') === 'hide') return;
		if($el.data('status') === 'hidden') return;

		$el.data('status','hide').trigger('hide');

		callback();
	}

	var silent = {
		init: init,
		show: function($el) {

			show($el, function() {
				$el.show();
				$el.data('status','shown').trigger('shown');
			})

		},
		hide: function($el) {

			hide($el, function() {
				$el.hide();
				$el.data('status','hidden').trigger('hidden');
			})

		}
	};

	var css3 = {
		fade: {
			init: function($el) {
				css3._init($el, 'fadeOut');
			},
			show: function($el) {
				css3._show($el, 'fadeOut');
			},
			hide: function($el) {
				css3._hide($el, 'fadeOut');
			}
		},
		slideUpDown: {
			init: function($el) {
				$el.height($el.height());
				css3._init($el, 'slideUpDownCollapse');
			},
			show: function($el) {
				css3._show($el, 'slideUpDownCollapse');
			},
			hide: function($el) {
				css3._hide($el, 'slideUpDownCollapse');
			}
		},
		slideLeftRight: {
			init: function($el) {
				$el.width($el.width());
				css3._init($el, 'slideLeftRightCollapse');
			},
			show: function($el) {
				css3._show($el, 'slideLeftRightCollapse');
			},
			hide: function($el) {
				css3._hide($el, 'slideLeftRightCollapse');
			}
		},
		fadeSlideUpDown: {
			init: function($el) {
				$el.height($el.height());
				css3._init($el, 'fadeOut slideUpDownCollapse');
			},
			show: function($el) {
				css3._show($el, 'fadeOut slideUpDownCollapse');
			},
			hide: function($el) {
				css3._hide($el, 'fadeOut slideUpDownCollapse');
			}
		},
		fadeSlideLeftRight: {
			init: function($el) {
				$el.width($el.width());
				css3._init($el, 'fadeOut slideLeftRightCollapse');
			},
			show: function($el) {
				css3._show($el, 'fadeOut slideLeftRightCollapse');
			},
			hide: function($el) {
				css3._hide($el, 'fadeOut slideLeftRightCollapse');
			}
		}
	};

	css3._init = function($el, className) {
		// 添加过渡
		$el.addClass("transition");
		init($el, function() {
			$el.addClass(className);
		})
	};

	css3._show = function($el, className) {
		show($el, function() {

			// 动画过渡完成后执行，清除上一次执行
			$el.off(transition.end).one(transition.end, function() {

				// 更新状态值，触发 shown 事件
				$el.data('status', 'shown').trigger('shown');

			});

			$el.show();
			setTimeout(function() {
				$el.removeClass(className);
			}, 20)

		})
	};

	css3._hide = function($el, className) {
		hide($el, function() {
			$el.off(transition.end).one(transition.end, function() {
				$el.hide().data('status', 'hidden').trigger('hidden');
			});

			$el.addClass(className);
		})
	}

	var js = {
		fade: {
			init: function($el) {
				js._init($el);
			},
			show: function($el) {
				js._show($el, 'fadeIn');
			},
			hide: function($el) {
				js._hide($el, 'fadeOut');
			}
		},
		slideUpDown: {
			init: function($el) {
				js._init($el);
			},
			show: function($el) {
				js._show($el, 'slideDown');
			},
			hide: function($el) {
				js._hide($el, 'slideUp');
			}
		},
		slideLeftRight: {
			init: function($el) {
				js._customInit($el, {
					'width': 0,
					'padding-left': 0,
					'padding-right': 0
				})
			},
			show: function($el) {
				js._customShow($el);
			},
			hide: function($el) {
				js._customHide($el, {
					'width': 0,
					'padding-left': 0,
					'padding-right': 0
				})
			}
		},
		fadeSlideUpDown: {
			init: function($el) {
				js._customInit($el, {
					'opacity': 0,
					'height': 0,
					'padding-top': 0,
					'padding-bottom': 0
				})
			},
			show: function($el) {
				js._customShow($el);
			},
			hide: function($el) {
				js._customHide($el, {
					'opacity': 0,
					'height': 0,
					'padding-top': 0,
					'padding-bottom': 0
				})
			}
		},
		fadeSlideLeftRight: {
			init: function($el) {
				js._customInit($el, {
					'opacity': 0,
					'width': 0,
					'padding-left': 0,
					'padding-right': 0
				})
			},
			show: function($el) {
				js._customShow($el);
			},
			hide: function($el) {
				js._customHide($el, {
					'opacity': 0,
					'width': 0,
					'padding-left': 0,
					'padding-right': 0
				})
			}
		}
	};

	js._init = function($el, hiddenCallback) {
		$el.removeClass("transition");
		init($el, hiddenCallback);
	};

	js._customInit = function($el, options) {
		var styles = {};

		for(var p in options) styles[p] = $el.css(p);

		$el.data('styles', styles);

		js._init($el, function() {
			$el.css(options);
		});
	}

	js._show = function($el, mode) {
		show($el, function() {
			$el.stop()[mode](function() {
				$el.data('status', 'shown').trigger('shown');
			})
		})
	};

	js._customShow = function($el) {
		show($el, function() {
			$el.show();
			$el.stop().animate($el.data('styles'), function() {
				$el.data('status', 'shown').trigger('shown');
			});
		})
	};

	js._hide = function($el, mode) {
		hide($el, function() {
			$el.stop()[mode](function() {
				$el.data('status', 'hidden').trigger('hidden');
			})
		})
	}

	js._customHide = function($el, options) {

		hide($el, function() {
			$el.show();
			$el.animate(options, function() {
				$el.hide();
				$el.data('status', 'hide').trigger('hidden');
			});

		})
	}

	var defaults = {
		css3: false,
		js: false,
		animation: 'fade'
	};

	function showHide($el, options) {
		var mode  = null;

		if (options.css3 && transition.isSupport) { // css3 transition，如果浏览器支持
			mode = css3[options.animation] || css3[defaults.animation];
		} else if (options.js) { // js transition，如果浏览器支持
			mode = js[options.animation] || css3[defaults.animation];
		} else { // no transition
			mode = silent;
		}

		mode.init($el);
		return {
			show: $.proxy(mode.show, this, $el),
			hide: $.proxy(mode.hide, this, $el)
		};
	}

	// window.mt = window.mt || {};
	// window.mt.showHide = showHide;

	$.fn.extend({
		showHide: function(option) {
			return this.each(function() {
				var $this = $(this),
					options = $.extend({}, defaults, typeof option === 'object' && option),
					mode = $this.data('showHide');

				if (!mode) {
					$this.data('showHide', mode = showHide($this, options));
				}

				if (typeof mode[option] === 'function') {
					mode[option]();
				}
			})
		}
	})

})(jQuery)
