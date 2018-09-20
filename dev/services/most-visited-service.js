(function() {
	'use strict';

	angular.module('NewTab')
	.factory('MostVisitedService', MostVisitedService);

	function MostVisitedService($q) {
		return {
			getMostVisited: getMostVisited
		};

		function getMostVisited() {
			return $q(function(resolve) {
				chrome.topSites.get(function (data) {
					resolve(data);
				});
			});
		}
	}
})();