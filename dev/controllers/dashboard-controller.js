(function() {
	'use strict';

	angular.module('NewTab')
	.controller('DashboardController', DashboardController);

	function DashboardController(bookmarks,
	                             DownloadsService,
	                             MostVisitedService,
	                             StorageService) {
		var vm = this;

		vm.labels = ["Local", "Sync"];

		MostVisitedService.getMostVisited().then(function(data) {
			vm.topSites = data;
		});

		DownloadsService.getAllDownloads().then(function(data) {
			vm.downloads = data.reverse();
		});

		//BookmarksService.getAllBookmarks().then(function(data) {
			vm.bookmarks = bookmarks;
		//});

		StorageService.getBytesInUse().then(function(data) {
			vm.data = [data.local, 8];
			//vm.data = [data.local, data.sync];
			console.log(data);
		});
	}
})();