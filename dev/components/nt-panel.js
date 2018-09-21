(function() {
	'use strict';

	angular.module('NewTab')
	.component('ntPanel', {
		templateUrl: 'partials/nt-panel.html',
		transclude: true,
		bindings: {
			header: '='
		}
	});
})();