chrome.tabs.onUpdated.addListener(function(data) {
	console.log(data);
	chrome.topSites.get(function (url) {
		console.log(url);
	});
});

window.alert('tim');