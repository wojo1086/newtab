(function() {
	'use strict';

	angular.module('NewTab')
		.component('mostVisitedLink', {
			templateUrl: 'partials/most-visited-link.html',
			controller: MostVisitedLinkController,
			bindings: {
				site: '='
			}
		});

	function MostVisitedLinkController() {
		var ctrl = this;

		ctrl.goToSite = goToSite;

		function goToSite(site) {
			window.open(site);
		}
	}
})();