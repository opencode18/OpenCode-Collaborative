/*!
 * scrollProgress plugin
 * jQuery plugin for creating a progress bar that shows
 * how far down the page you are as you scroll
 * Author: @sschoepke
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

	var pluginName = 'scrollProgress',
		defaults = {
			barSelector: '',			// Optional selector for progress bar
			customCss: false,			// Override all default styles with custom CSS
			barColor: '#9e9e9e',		// Color of progress bar
			thickness: 4,				// Thickness of progress bar
			progressColor: '#42a5f5',	// Color of progress percentage
			offset: 'middle',			// Where progress is calculated within viewport (middle, top, bottom, int)
			minHeight: 0,				// Min-height of element for progress bar to be added
			fadeInOut: true				// Fade in or out depending on whether progress is being calculated
		};

	function Plugin( element, options ) {
		this.element = element;
		this.options = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {

		init: function() {
			this.configProgressBar(this.element, this.options);
		},

		configProgressBar: function(el, options) {

			var progressBar = '';

			// if no barSelector set, look for nav[style="position:fixed"] and append progress bar to it
			if (!options.barSelector) {
				$('nav').filter(function() {
					return $(this).css('position') == 'fixed';
				}).append('<div class="progress-bar"><div class="progress-amt"></div></div>');
				progressBar = $('.progress-bar');
			} else {
				progressBar = $(options.barSelector);
				$(progressBar).append('<div class="progress-amt"></div>');
			}

			var $w = $(window),
				progressAmt = progressBar.children('.progress-amt');

			// if customCss == false, set some styles
			if (!options.customCss) {
				$(progressBar).css({
					'display' : 'block',
					'position' : 'absolute',
					'height' : options.thickness + 'px',
					'width' : '100%',
					'margin' : '-' + options.thickness + 'px 0 0 0',
					'background-color' : options.barColor,
					'z-index' : 1000
				});

				$(progressAmt).css({
					'position' : 'absolute',
					'top' : 0,
					'left' : 0,
					'bottom' : 0,
					'background-color' : options.progressColor,
					'transition' : 'width .3s linear'
				});
			}

			// if fadeInOut == true, hide bar by default
			if (options.fadeInOut) {
				var active = false;
				$(progressBar).css({
					'opacity' : 0,
					'transition' : 'opacity .25s ease'
				});
			}

			// on scroll, determine whether to show bar and calculate progress
			$w.scroll(function() {

				var winHt = $w.height(),
					winScroll = $w.scrollTop(),
					elementY = $(el).offset().top,
					elementHt = $(el).outerHeight(true);

				// get offset for measuring progress within the viewport
				if (options.offset == 'middle') {
					viewOffset = winHt/2;
				} else if (options.offset == 'bottom') {
					viewOffset = winHt;
				} else if (options.offset == 'top') {
					viewOffset = 0;
				} else if ($.isNumeric(options.offset)) {
					viewOffset = options.offset;
				}

				var viewportY = winScroll + viewOffset;

				// make sure element meets min-height requirement
				if (elementHt >= options.minHeight) {

					// optionally hide bar, don't measure progress until element reaches offset point
					if (viewportY <= elementY) {
						active = false;
						$(progressAmt).css('width', '0%');

					} else {

						// hide bar when element is no longer in view
						if (winScroll >= (elementY + elementHt)) { 
							active = false;
							$(progressAmt).css('width', '100%');

						// show bar and calculate progress when in range
						} else { 
							active = true;
							$(progressAmt).css('width', Math.min( Math.max(((viewportY - elementY) / elementHt) * 100, 0), 100) + '%');
						}
					}
				}

				// toggle opacity of bar if fadeInOut == true 
				if (options.fadeInOut) {
					if (active) {
						$(progressBar).css('opacity', 1);
					} else {
						$(progressBar).css('opacity', 0);
					}
				}

			});
		}
	};

	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName,
				new Plugin( this, options ));
			}
		});
	};

})( jQuery, window, document );
