chrome.tabs.onUpdated.addListener(function(tabId, delta, data) {
	console.log(tabId, delta, data);
	var tabHostName = '';
	var a = document.createElement("a");
	a.href = data.url;
	tabHostName = a.hostname;

	chrome.topSites.get(function (urls) {
		//console.log(urls);

		//var topSiteLink = document.createElement("a");
		//for (var i=0, k = urls.length; i < k; i++) {
		//	topSiteLink.href = urls[i].url;
		//	if (topSiteLink.hostname === tabHostName) {
		//		chrome.tabs.captureVisibleTab({format: 'png'}, function (img) {
		//			//console.log(img);
		//			var url = img.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
		//			var key = tabHostName.replace(/\./g, '');
		//			chrome.storage.local.set({key: LZString.compress(url)}, function() {
		//				console.log('data set', key);
		//				chrome.storage.local.get(key, function (result) {
		//					console.log(result.key);
		//				});
		//			});
		//
		//
		//		});
		//		break;
		//	}
		//}
	});
});