var home_old;
var notice_old;
var blog_old;
var timeout_1;
var timeout_2;
var timeout_3;


chrome.runtime.onInstalled.addListener(function() {
	fetch_home_feed();
	fetch_notice_feed();
	fetch_blog_feed();
	infinite_loop();
});

chrome.runtime.onStartup.addListener(function() {
	clear_data();
	timeout_1 = window.setTimeout(fetch_data, 100);
	infinite_loop();
});

function infinite_loop()
{
	timeout_2 = window.setInterval(clear_data, 59000);
	timeout_3 = window.setInterval(fetch_data, 60000);
}

function fetch_data() {
	fetch_home_feed();
	fetch_notice_feed();
	fetch_blog_feed();
	check_data();
}

function clear_data() {
	home_old = localStorage.getItem('feed_home_data');
	notice_old = localStorage.getItem('feed_notice_data');
	blog_old = localStorage.getItem('feed_blog_data');
	localStorage.removeItem('feed_home_data');
	localStorage.removeItem('feed_notice_data');
	localStorage.removeItem('feed_blog_data');
}

function check_data() {
	var home_temp = localStorage.getItem('feed_home_data');
	var notice_temp = localStorage.getItem('feed_notice_data');
	var blog_temp = localStorage.getItem('feed_blog_data');
	if((home_temp != home_old || notice_temp != notice_old || blog_temp != blog_old) && home_temp != 'null' && notice_temp != 'null' && blog_temp != 'null') {
		chrome.browserAction.setIcon({path:'../images/tsa16px-unread.png'});
	}
}

function fetch_home_feed() {
	var result = new XMLHttpRequest();
	result.open('GET', 'http://www.scholarsavenue.org/feed/', true);
	result.send();
	result.onreadystatechange = function(data) {
		if (result.readyState == 4 && result.status == 200)
			localStorage.setItem('feed_home_call', result.responseText);
		else {
			localStorage.setItem('feed_home_call', 'null');
		}
	}
	parse_home();
}

function fetch_notice_feed() {
	var result = new XMLHttpRequest();
	result.open('GET', 'http://noticeboard.scholarsavenue.org/feed/', true);
	result.send();
	result.onreadystatechange = function(data) {
		if (result.readyState == 4 && result.status == 200)
			localStorage.setItem('feed_notice_call', result.responseText);
		else {
			localStorage.setItem('feed_notice_call', 'null');
		}	
	}
	parse_notice();
}

function fetch_blog_feed() {
	var result = new XMLHttpRequest();
	result.open('GET', 'http://blog.scholarsavenue.org/feed/', true);
	result.send(); 
	result.onreadystatechange = function(data) {
		if (result.readyState == 4 && result.status == 200)
			localStorage.setItem('feed_blog_call', result.responseText);
		else {
			localStorage.setItem('feed_blog_call', 'null');
		}	
	}
	parse_blog();
}

function parse_home(){
	if(localStorage.getItem('feed_home_call') == 'null') {
		var item = '';
		item += '<div class="error">\
				<p>Oops!</p>\
				<p>There seems to be a problem with your internet connection.</p>\
				<p>Please try again later.</p>\
				</div>';
		localStorage.setItem('feed_home_data', item);
	}
	else {
		var xml_doc = $($.parseXML(localStorage.getItem('feed_home_call')));
		var i = 1;
		var box = 'box';
		xml_doc.find("item").each(function(index, element) {
			box = box + i;
			i++;
			if(i > 11)
				exit();
			var post= new Object();
			post.title = $(element).find("title").text();
			post.url = $(element).find("link").text();
			post.img = $(unescape($(element).find("encoded").text())).find("img").attr("src");
			if(post.img == "http://feeds.feedburner.com/~ff/TheScholarsAvenue?d=yIl2AUoC8zA" || post.img == undefined)
				post.img = "images/nothumb.jpg";
			post.description = $(element).find("description").text();
			post.description = $.trim(post.description);
			post.description = post.description.substr(0, 120);
			var item = '';
			item += '<label><div class="' + box + '">';
			item += '<div class="thumb">\
			<img src="' + post.img + '" height="75px" width="75px"></img></div>';
			item += '<div class="item">\
			<h4>' + post.title + '</h4>\
			<p class="description">' + post.description + '...</p>\
			<p hidden class="link">' + post.url + '</p>\
			</div></div></label>';
			appendToStorage('feed_home_data', item);
			box = 'box';
		});
	}
}

function parse_notice(){
	if(localStorage.getItem('feed_notice_call') == 'null') {
		var item = '';
		item += '<div class="error">\
				<p>Oops!</p>\
				<p>There seems to be a problem with your internet connection.</p>\
				<p>Please try again later.</p>\
				</div>';
		localStorage.setItem('feed_notice_data', item);
	}
	else {
		var xml_doc = $($.parseXML(localStorage.getItem('feed_notice_call')));
		var i = 1;
		var box = 'box';
		xml_doc.find("item").each(function(index, element) {
			box = box + i;
			i++;
			if(i > 11)
				exit();			
			var post= new Object();
			post.title = $(element).find("title").text();
			post.url = $(element).find("link").text();
			post.img = $(unescape($(element).find("encoded").text())).find("img").attr("src");
			if(post.img == undefined)
				post.img = "images/nothumb.jpg";
			post.description = $(element).find("description").text();
			post.description = $.trim(post.description);
			post.description = post.description.substr(0, 120);
			var item = '';
			item += '<label><div class="' + box + '">';
			item += '<div class="thumb">\
			<img src="' + post.img + '" height="75px" width="75px"></img></div>';
			item += '<div class="item">\
			<h4>' + post.title + '</h4>\
			<p class="description">' + post.description + '...</p>\
			<p hidden class="link">' + post.url + '</p>\
			</div></div></label>';
			appendToStorage('feed_notice_data', item);
			box = 'box';
		});
	}
}

function parse_blog(){
	if(localStorage.getItem('feed_blog_call') == 'null') {
		var item = '';
		item += '<div class="error">\
				<p>Oops!</p>\
				<p>There seems to be a problem with your internet connection.</p>\
				<p>Please try again later.</p>\
				</div>';
		localStorage.setItem('feed_blog_data', item);
	}
	else {
		var xml_doc = $($.parseXML(localStorage.getItem('feed_blog_call')));
		var i = 1;
		var box = 'box';
		xml_doc.find("item").each(function(index, element) {
			box = box + i;
			i++;
			if(i > 11)
				exit();
			var post= new Object();
			post.title = $(element).find("title").text();
			post.url = $(element).find("link").text();
			post.img = $(unescape($(element).find("encoded").text())).find("img").attr("src");
			if(post.img == undefined)
				post.img = "images/nothumb.jpg";
			post.description = $(element).find("description").text();
			post.description = $.trim(post.description);
			post.description = post.description.substr(0, 120);
			var item = '';
			item += '<label><div class="' + box + '">';
			item += '<div class="thumb">\
			<img src="' + post.img + '" height="75px" width="75px"></img></div>';
			item += '<div class="item">\
			<h4>' + post.title + '</h4>\
			<p class="description">' + post.description + '...</p>\
			<p hidden class="link">' + post.url + '</p>\
			</div></div></label>';
			appendToStorage('feed_blog_data', item);
			box = 'box';
	});
	}
}

function appendToStorage(name, data) {
    var old = localStorage.getItem(name);
    if(old === null) 
		old = '';
    localStorage.setItem(name, old + data);
}