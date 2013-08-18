chrome.extension.onRequest.addListener(function(request, sender, callback){
	if (request.action == 'fetch_home_feed')
		fetch_home_feed(request.url);
	if (request.action == 'fetch_notice_feed')
		fetch_notice_feed(request.url);
	if (request.action == 'fetch_blog_feed')
		fetch_fb_feed(request.url);
});


function fetch_home_feed(url) {
	var result = new XMLHttpRequest();
	result.open('GET', url, true);
	result.send();    
	result.onreadystatechange = function(data) {
		if (result.readyState == 4 && result.status == 200)
			localStorage.setItem('feed_home_call', result.responseText);
	}
}

function fetch_notice_feed(url) {
	var result = new XMLHttpRequest();
	result.open('GET', url, true);
	result.send();    
	result.onreadystatechange = function(data) {
		if (result.readyState == 4 && result.status == 200)
			localStorage.setItem('feed_notice_call', result.responseText);
	}
}

function fetch_fb_feed(url) {
	var result = new XMLHttpRequest();
	result.open('GET', url, true);
	result.send();    
	result.onreadystatechange = function(data) {
		if (result.readyState == 4 && result.status == 200)
			localStorage.setItem('feed_blog_call', result.responseText);
	}
}