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

				chrome.storage.sync.getBytesInUse(function(data) {
					console.log('Sync Bytes: ', data);
				});

				chrome.storage.sync.get(null, function (data) {
					console.log(data);
				});

				chrome.storage.local.getBytesInUse(function(data) {
					console.log('Local Bytes: ', data);
				});

				chrome.storage.local.get(null, function (data) {
					console.log(data);
				});
			});
		}
	}
})();