$(function() {
			var primaryNavigation = $("nav.header");
			var interiorHeadingImage = $('.interior-heading');
			var goTransparent = function(){
			primaryNavigation.addClass('isTransparent');
			primaryNavigation.animate({'backgroundColor': 'rgba(31, 52, 61, 0.0)'}, 'slow');
			};
			var goColored = function(){
			primaryNavigation.removeClass('isTransparent');
			primaryNavigation.animate({'backgroundColor': 'rgba(31, 52, 61, 0.80)'}, 'slow');
			};
			var doTransitionCheck = function(isFirstLoad) {
			var scroll = $(window).scrollTop();
			if (scroll <= interiorHeadingImage.height() - 40){
				if (isFirstLoad){
				goTransparent();
				} else if (!primaryNavigation.hasClass('isTransparent')){
				goTransparent();
				}
				} else if (scroll > interiorHeadingImage.height() - 40){
				if (isFirstLoad){
				goColored();
				} else if (primaryNavigation.hasClass('isTransparent')){
				goColored();
				}
				}
				};
				doTransitionCheck(true);
				$(window).scroll(function() {
				doTransitionCheck(false);
				});
				});