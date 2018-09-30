(function() {
	'use strict';

	angular.module('NewTab')
		.directive('bookmarkTree', bookmarkTree);

	function bookmarkTree() {
		return {
			restrict: 'E',
			scope: {
				bookmarks: '='
			},
			template: bookmarkTemplate,
			link: bookmarkTreeLink
		};

		function bookmarkTemplate(a, b) {
			console.log(a, b);
		}

		function bookmarkTreeLink(scope, elem, attrs) {
			console.log(scope, elem, attrs);

			scope.$watch('bookmarks', function(n, o) {
				console.log(n, o);
			});
		}
	}
})();