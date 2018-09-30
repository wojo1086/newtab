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

		function bookmarkTemplate(element, attrs) {
			console.log(element, attrs);
			var bookmarks = attrs.bookmarks;
			var template = '<ul>';

			goDeeper(bookmarks);

			function goDeeper(bk) {
				for (var i = 0, k = bk.length; i < k; i++) {
					template += '<li>' + bk[i].title + '</li>';
					if (bk[i].hasOwnProperty('children')) {
						goDeeper(bk[i].children);
					}
				}
			}

			template += '</ul>';

			return template;
		}

		function bookmarkTreeLink(scope, elem, attrs) {
			console.log(scope, elem, attrs);

			scope.$watch('bookmarks', function(n, o) {
				console.log(n, o);
			});
		}
	}
})();