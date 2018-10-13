(function() {
	'use strict';

	angular.module('NewTab')
		.directive('pieChart', pieChart);

	function pieChart() {
		return {
			restrict: 'E',
			scope: {
				labels: '=',
				data: '='
			},
			templateUrl: 'partials/pie-chart.html',
			link: pieChartLink
		};

		function pieChartLink(scope, element, attrs) {
			console.log(scope, element, attrs);
		}
	}
})();