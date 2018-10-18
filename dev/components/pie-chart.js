(function() {
	'use strict';

	angular.module('NewTab')
		.component('pieChart', {
			templateUrl: 'partials/pie-chart.html',
			transclude: true,
			bindings: {
				data: '=',
				labels: '=',
				width: '=',
				height: '='
			}
		});
})();