(function() {
	'use strict';

	angular.module('NewTab')
		.directive('bookmarkTree', bookmarkTree);

	function bookmarkTree() {
		return {
			restrict: 'E',
			scope: {
				bookmarks: '=',
				display: '='
			},
			template: bookmarkTemplate,
			link: bookmarkTreeLink
		};

		function bookmarkTemplate(element, attrs) {
			console.log(element, attrs);
			var bookmarks = attrs.bookmarks;
			var template = '<ul ng-class="{hidden: display}">' +
				'<li ng-repeat="item in bookmarks" ng-click="handleItemClicked($event)">' +
						'{{(item.title === \'\') ? \'Bookmarks\' : item.title}}' +
						'<bookmark-tree ' +
							'ng-if="!!item.children"' +
							'display="false"' +
							'bookmarks="item.children">' +
						'</bookmark-tree>' +
				'</li>' +
			'</ul>';

			return template;
		}

		function bookmarkTreeLink(scope, elem, attrs) {
			console.log(scope, elem, attrs);

			scope.handleItemClicked = handleItemClicked;

			Initialize();

			function Initialize() {
				scope.$watch('bookmarks', function (n, o) {
					console.log(n, o);
				});

			}

			function handleItemClicked(evt) {
				evt.stopPropagation();
				console.log(angular.element(angular.element(evt.currentTarget).find('ul')[0]));
				angular.element(angular.element(evt.currentTarget).find('ul')[0]).toggleClass('hidden');
			}
		}
	}
})();