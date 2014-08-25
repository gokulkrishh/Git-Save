/*=-------------------------------------------------
	1. Authorize with github account
	2. Get the current tab's url and give a title
	3. Enter a repo url to give pull request
 --------------------------------------------------=*/

 var console = chrome.extension.getBackgroundPage().console;

function getUrl(tabs) {
	chrome.tabs.query({
		active : true,
		lastFocusedWindow : true
	}, function (Alltabs) {
		var url = tabs.url;
		alert(url);
	});
}

//add event listener to app icon
chrome.browserAction.onClicked.addListener(getUrl);