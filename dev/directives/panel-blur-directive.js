(function () {
	'use strict';

	angular.module('NewTab')
	.directive('panelBlur', panelBlur);

	function panelBlur(PanelBlurService, $window) {
		var bodyBgSize;

		PanelBlurService.bodyBgLoad().then(function () {
			bodyBgSize = PanelBlurService.getBodyBgImageSizes();
		});

		$window.addEventListener('resize', function () {
			bodyBgSize = PanelBlurService.getBodyBgImageSizes();
		});

		return {
			restrict: 'A',
			link: function ($scope, elem) {
				PanelBlurService.bodyBgLoad().then(function () {
					setTimeout(recalculatePanelStyle);
				});
				$window.addEventListener('resize', recalculatePanelStyle);

				$scope.$on('$destroy', function () {
					$window.removeEventListener('resize', recalculatePanelStyle);
				});

				function recalculatePanelStyle() {
					if (!bodyBgSize) {
						return;
					}
					elem.css({
						backgroundSize: Math.round(bodyBgSize.width) + 'px ' + Math.round(bodyBgSize.height) + 'px',
						backgroundPosition: Math.floor(bodyBgSize.positionX) + 'px ' + Math.floor(bodyBgSize.positionY) + 'px'
					});
				}

			}
		};
	}
})();