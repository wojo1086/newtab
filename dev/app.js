(function() {
	angular.module('NewTab', [
		'ngMaterial',
		'ngMessages'
	])
	.config(['$compileProvider', function ($compileProvider) {
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|local|data|chrome-extension):/);
		$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|chrome-extension):/);
	}]);
})();