(function() {
	'use strict';

	angular.module('NewTab')
		.factory('BookmarksService', BookmarksService);

	function BookmarksService($q) {
		return {
			getAllBookmarks: getAllBookmarks
		};

		function getAllBookmarks() {
			return $q(function(resolve) {
				chrome.bookmarks.getTree(function(data) {
					console.log(data);
					resolve(data);
				});
			});
		}
	}
})();