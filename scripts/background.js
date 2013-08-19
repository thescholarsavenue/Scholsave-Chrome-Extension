var timeoutID = window.setTimeout(fetch_home_feed, 10000);
var timeoutID = window.setTimeout(fetch_notice_feed, 10000);
var timeoutID = window.setTimeout(fetch_blog_feed, 10000);
var timeoutID = window.setTimeout(clear_data, 9000);

function fetch_home_feed() {
	var result = new XMLHttpRequest();
	result.open('GET', 'http://www.scholarsavenue.org/feed/', true);
	result.send();    
	result.onreadystatechange = function(data) {
		if (result.readyState == 4 && result.status == 200)
			localStorage.setItem('feed_home_call', result.responseText);
		else {
			localStorage.setItem('feed_home_call', null);
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
			localStorage.setItem('feed_notice_call', null);
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
			localStorage.setItem('feed_blog_call', null);
		}	
	}
	parse_blog();
}

function parse_home(){
	if(localStorage.getItem('feed_home_call')==null) {
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
		var i=1;
		var box = 'box';
		xml_doc.find("item").each(function(index, element) {
			box = box + i;
			i++;
			if(i>11)
				exit();
			var post= new Object();
			post.title = $(element).find("title").text();
			post.url = $(element).find("link").text();
			post.img=$(unescape($(element).find("encoded").text())).find("img").attr("src");
			if(post.img=="http://feeds.feedburner.com/~ff/TheScholarsAvenue?d=yIl2AUoC8zA" || post.img==undefined)
				post.img="images/nothumb.jpg";
			post.description = $(element).find("description").text();
			post.description=$.trim(post.description);
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
			appendToStorage('feed_home_data',item);
			box = 'box';
		});
	}
}

function parse_notice(){
	if(localStorage.getItem('feed_notice_call')==null) {
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
		var i=1;
		var box = 'box';
		xml_doc.find("item").each(function(index, element) {
			box = box + i;
			i++;
			if(i>11)
				exit();			
			var post= new Object();
			post.title = $(element).find("title").text();
			post.url = $(element).find("link").text();
			post.img=$(unescape($(element).find("encoded").text())).find("img").attr("src");
			if(post.img==undefined)
				post.img="images/nothumb.jpg";
			post.description = $(element).find("description").text();
			post.description=$.trim(post.description);
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
			appendToStorage('feed_notice_data',item);
			box = 'box';
		});
	}
}

function parse_blog(){
	if(localStorage.getItem('feed_blog_call')==null) {
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
		var i=1;
		var box = 'box';
		xml_doc.find("item").each(function(index, element) {
			box = box + i;
			i++;
			if(i>11)
				exit();
			var post= new Object();
			post.title = $(element).find("title").text();
			post.url = $(element).find("link").text();
			post.img=$(unescape($(element).find("encoded").text())).find("img").attr("src");
			if(post.img==undefined)
				post.img="images/nothumb.jpg";
			post.description = $(element).find("description").text();
			post.description=$.trim(post.description);
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
			appendToStorage('feed_blog_data',item);
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

function clear_data() {
	localStorage.removeItem('feed_home_data');
	localStorage.removeItem('feed_notice_data');
	localStorage.removeItem('feed_blog_data');
}