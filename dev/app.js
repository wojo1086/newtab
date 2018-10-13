(function() {
	angular.module('NewTab', [
		'ngMaterial',
		'ngMessages',
		'ui.router',
		'chart.js'
	])
	.config(['$compileProvider', function ($compileProvider) {
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|local|data|chrome-extension):/);
		$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|chrome-extension):/);
	}]);
})();