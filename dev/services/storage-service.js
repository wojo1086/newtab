(function() {
	'use strict';

	angular.module('NewTab')
		.factory('StorageService', StorageService);

	function StorageService($q) {
		return {
			getAllData: getAllData,
			getBytesInUse: getBytesInUse
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

		function getBytesInUse() {
			return $q(function (resolve) {
				var bytes = {
					sync: 0,
					local: 0
				};

				chrome.storage.sync.getBytesInUse(function (data) {
					bytes.sync = data;

					chrome.storage.local.getBytesInUse(function (data) {
						bytes.local = data;
						resolve(bytes);
					});
				});
			});
		}
	}
})();