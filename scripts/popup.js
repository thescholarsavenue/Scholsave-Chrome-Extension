var i=1;
var j=1;

$(document).ready(function() {
	$(function() {
		$("#tabs").tabs({
			create: function( event, ui ) {
				if($(ui.tab).text()=="Homepage") {
					display_home();
				}
				else if($(ui.tab).text()=="Noticeboard") {
					display_notice();
				}
				else if($(ui.tab).text()=="Blog") {
					display_blog();
				}	
			}
		});
		
		$("#tabs").tabs({
			activate: function( event, ui ) {
				if($(ui.newTab).text()=="Homepage") {
					display_home();
				}
				else if($(ui.newTab).text()=="Noticeboard") {
					display_notice();
				}
				else if($(ui.newTab).text()=="Blog") {
					display_blog();
				}		
			}
		});	
	});
});

function display_home(){
	$('#tabs-1').empty();
	chrome.extension.sendRequest({'action' : 'fetch_home_feed', 'url' : 'http://feeds.feedburner.com/TheScholarsAvenue/'}, function(response){});
	if(localStorage.getItem('feed_home_call')==null) {
		var item = '';
		item += '<div class="error">\
				<p>Oops!</p>\
				<p>There seems to be a problem with your internet connection.</p>\
				<p>Please try again later.</p>\
				</div>';
		$('#tabs-1').append(item);
	}
	else {
		var xml_doc = $($.parseXML(localStorage.getItem('feed_home_call')));
		xml_doc.find("item").each(function(index, element) {
			var post= new Object();
			post.title = $(element).find("title").text();
			post.url = $(element).find("link").text();
			post.img=$(unescape($(element).find("encoded").text())).find("img").attr("src");
			if(post.img=="http://feeds.feedburner.com/~ff/TheScholarsAvenue?d=yIl2AUoC8zA")
				post.img="images/nothumb.jpg";
			if(post.img==undefined)
				post.img="images/nothumb.jpg";
			post.description = $(element).find("description").text();
			post.description=$.trim(post.description);
			post.description = post.description.substr(0, 120);
			var item = '';
			item += '<label><div class="box">';
			item += '<div class="thumb">\
			<img src="' + post.img + '" height="75px" width="75px"></img></div>';
			item += '<div class="item">\
			<h4>' + post.title + '</h4>\
			<p class="description">' + post.description + '...</p>\
			</div></div></label>';
			$('#tabs-1').append(item);
			openlink(post.url);
		});
	}
}

function display_notice(){
	$('#tabs-2').empty();
	chrome.extension.sendRequest({'action' : 'fetch_notice_feed', 'url' : 'http://noticeboard.scholarsavenue.org/feed/'}, function(response){});
	if(localStorage.getItem('feed_notice_call')==null) {
		var item = '';
		item += '<div class="error">\
				<p>Oops!</p>\
				<p>There seems to be a problem with your internet connection.</p>\
				<p>Please try again later.</p>\
				</div>';
		$('#tabs-2').append(item);
	}
	else {
		var xml_doc = $($.parseXML(localStorage.getItem('feed_notice_call')));
		xml_doc.find("item").each(function(index, element) {
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
			item += '<label><div class="box">';
			item += '<div class="thumb">\
			<img src="' + post.img + '" height="75px" width="75px"></img></div>';
			item += '<div class="item">\
			<h4>' + post.title + '</h4>\
			<p class="description">' + post.description + '...</p>\
			</div></div></label>';
			$('#tabs-2').append(item);
			openlink(post.url);
		});
	}
}

function display_blog(){
	$('#tabs-3').empty();
	chrome.extension.sendRequest({'action' : 'fetch_blog_feed', 'url' : 'http://blog.scholarsavenue.org/feed/'}, function(response){});
	if(localStorage.getItem('feed_blog_call')==null) {
		var item = '';
		item += '<div class="error">\
				<p>Oops!</p>\
				<p>There seems to be a problem with your internet connection.</p>\
				<p>Please try again later.</p>\
				</div>';
		$('#tabs-3').append(item);
	}
	else {
		var xml_doc = $($.parseXML(localStorage.getItem('feed_blog_call')));
		xml_doc.find("item").each(function(index, element) {
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
			item += '<label><div class="box">';
			item += '<div class="thumb">\
			<img src="' + post.img + '" height="75px" width="75px"></img></div>';
			item += '<div class="item">\
			<h4>' + post.title + '</h4>\
			<p class="description">' + post.description + '...</p>\
			</div></div></label>';
			$('#tabs-3').append(item);
			openlink(post.url);
	});
	}
}

function openlink(thelink){
		$('.box').click(function(){
			chrome.tabs.create({url: thelink, active: false});	
			i++;
			if(i!=1){
				i=1;
				exit();
			}
	});
}