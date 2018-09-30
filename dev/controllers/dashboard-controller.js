(function() {
	'use strict';

	angular.module('NewTab')
	.controller('DashboardController', DashboardController);

	function DashboardController(bookmarks,
	                             DownloadsService,
	                             MostVisitedService,
	                             StorageService) {
		var vm = this;

		MostVisitedService.getMostVisited().then(function(data) {
			vm.topSites = data;
		});

		DownloadsService.getAllDownloads().then(function(data) {
			vm.downloads = data.reverse();
		});

		//BookmarksService.getAllBookmarks().then(function(data) {
			vm.bookmarks = bookmarks;
		//});

		StorageService.getAllData();
	}
})();