(function() {
	'use strict';

	angular.module('NewTab')
	.config(function($stateProvider,
	                 $urlMatcherFactoryProvider,
	                 $urlRouterProvider) {

		$urlMatcherFactoryProvider.strictMode(false);
		$urlRouterProvider.otherwise('/');


		$stateProvider.state('/', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'DashboardController',
			controllerAs: 'vm',
			resolve: {
				bookmarks: function(BookmarksService) {
					return BookmarksService.getAllBookmarks();
				}
			}
		});
	});
})();