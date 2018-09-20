(function() {
	'use strict';

	angular.module('NewTab')
	.controller('DashboardController', DashboardController);

	function DashboardController(MostVisitedService) {
		var vm = this;

		MostVisitedService.getMostVisited().then(function(data) {
			vm.topSites = data;
		});
	}
})();