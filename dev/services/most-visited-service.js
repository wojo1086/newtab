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
					data.forEach(function(url) {
						url.favicon = 'http://s2.googleusercontent.com/s2/favicons?domain_url=' + url.url;
					});
					console.log(data);
					resolve(data);
				});
			});
		}
	}
})();