(function() {
	'use strict';

	angular.module('NewTab')
		.directive('bookmarkTree', bookmarkTree);

	function bookmarkTree() {
		return {
			restrict: 'E',
			scope: {
				bookmarks: '=',
				hideTree: '='
			},
			template: bookmarkTemplate,
			link: bookmarkTreeLink
		};

		function bookmarkTemplate(element, attrs) {
			console.log(element, attrs);
			var bookmarks = attrs.bookmarks;
			var template = '<ul>' +
				'<li ng-repeat="item in bookmarks" ng-click="handleItemClicked($event)">' +
						'<img ng-src="{{getIcon(item)}}" width="18px">' +
						'{{(item.title === \'\') ? \'Bookmarks\' : item.title}}' +
						'<bookmark-tree ' +
							'ng-if="!!item.children"' +
							'class="hidden"' +
							'bookmarks="item.children">' +
						'</bookmark-tree>' +
				'</li>' +
			'</ul>';

			return template;
		}

		function bookmarkTreeLink(scope, elem, attrs) {
			console.log(scope, elem, attrs);

			scope.handleItemClicked = handleItemClicked;
			scope.getIcon = getIcon;

			Initialize();

			function Initialize() {
				scope.$watch('bookmarks', function (n, o) {
					console.log(n, o);
				});

			}

			function getIcon(item) {
				var icon = '/images/folder.png';
				if (!item.children) {
					icon = 'http://s2.googleusercontent.com/s2/favicons?domain_url=' + item.url;
				}
				return icon;
			}

			function handleItemClicked(evt) {
				evt.stopPropagation();
				console.log(angular.element(angular.element(evt.currentTarget).find('bookmark-tree')[0]));
				angular.element(angular.element(evt.currentTarget).find('bookmark-tree')[0]).toggleClass('hidden');
			}
		}
	}
})();