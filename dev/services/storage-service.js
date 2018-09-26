(function() {
	'use strict';

	angular.module('NewTab')
		.factory('StorageService', StorageService);

	function StorageService($q) {
		return {
			getAllData: getAllData
		};

		function getAllData() {
			return $q(function(resolve) {
				chrome.storage.sync.get(null, function (data) {
					console.log(data);
				});

				chrome.storage.local.get(null, function (data) {
					console.log(data);
				});
			});
		}
	}
})();