(function() {
	'use strict';

	angular.module('NewTab')
		.factory('DownloadsService', DownloadsService);

	function DownloadsService($q) {
		return {
			getAllDownloads: getAllDownloads
		};

		function getAllDownloads() {
			return $q(function(resolve) {
				chrome.downloads.search({}, function(data) {
					console.log(data);
					resolve(data);
				});
			});
		}
	}
})();