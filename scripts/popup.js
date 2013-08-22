var item = '';
item += '<div class="error">\
		<p>Oops!</p>\
		<p>There seems to be a problem with your internet connection.</p>\
		<p>Please try again later.</p>\
		</div>';
				
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
	if(localStorage.getItem('unread_data') == 'home') {
		chrome.browserAction.setIcon({path:'../images/tsa16px.png'});
		localStorage.setItem('unread_data', '');
	}
	else if(localStorage.getItem('unread_data') == 'home, notice')
		localStorage.setItem('unread_data', 'notice');
	else if(localStorage.getItem('unread_data') == 'home, blog')
		localStorage.setItem('unread_data', 'blog');
	else if(localStorage.getItem('unread_data') == 'home, notice, blog')
		localStorage.setItem('unread_data', 'notice, blog');
	$('#tabs-1').empty();
	if(localStorage.getItem('feed_home_data') != '')
		$('#tabs-1').append(localStorage.getItem('feed_home_data'));
	else
		$('#tabs-1').append(item);
	openlink_home();
}

function display_notice(){
	if(localStorage.getItem('unread_data') == 'notice') {
		chrome.browserAction.setIcon({path:'../images/tsa16px.png'});
		localStorage.setItem('unread_data', '');
	}
	else if(localStorage.getItem('unread_data') == 'home, notice')
		localStorage.setItem('unread_data', 'home');
	else if(localStorage.getItem('unread_data') == 'notice, blog')
		localStorage.setItem('unread_data', 'blog');
	else if(localStorage.getItem('unread_data') == 'home, notice, blog')
		localStorage.setItem('unread_data', 'home, blog');
	$('#tabs-2').empty();
	if(localStorage.getItem('feed_notice_data') != '')
		$('#tabs-2').append(localStorage.getItem('feed_notice_data'));
	else
		$('#tabs-2').append(item);
	openlink_notice();
}

function display_blog(){
	if(localStorage.getItem('unread_data') == 'blog') {
		chrome.browserAction.setIcon({path:'../images/tsa16px.png'});
		localStorage.setItem('unread_data', '');
	}
	else if(localStorage.getItem('unread_data') == 'home, blog')
		localStorage.setItem('unread_data', 'home');
	else if(localStorage.getItem('unread_data') == 'notice, blog')
		localStorage.setItem('unread_data', 'notice');
	else if(localStorage.getItem('unread_data') == 'home, notice, blog')
		localStorage.setItem('unread_data', 'home, notice');
	$('#tabs-3').empty();
	if(localStorage.getItem('feed_blog_data') != '')
		$('#tabs-3').append(localStorage.getItem('feed_blog_data'));
	else
		$('#tabs-3').append(item);
	openlink_blog();
}

function openlink_home(){
	var thelink;
	$('.box1').click(function(){
		$('#tabs-1').find(".link").each(function(index, element) {
			if(index==0)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box2').click(function(){
		$('#tabs-1').find(".link").each(function(index, element) {
			if(index==1)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box3').click(function(){
		$('#tabs-1').find(".link").each(function(index, element) {
			if(index==2)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box4').click(function(){
		$('#tabs-1').find(".link").each(function(index, element) {
			if(index==3)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box5').click(function(){
		$('#tabs-1').find(".link").each(function(index, element) {
			if(index==4)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box6').click(function(){
		$('#tabs-1').find(".link").each(function(index, element) {
			if(index==5)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box7').click(function(){
		$('#tabs-1').find(".link").each(function(index, element) {
			if(index==6)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box8').click(function(){
		$('#tabs-1').find(".link").each(function(index, element) {
			if(index==7)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box9').click(function(){
		$('#tabs-1').find(".link").each(function(index, element) {
			if(index==8)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box10').click(function(){
		$('#tabs-1').find(".link").each(function(index, element) {
			if(index==9)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
}

function openlink_notice(){
	var thelink;
	$('.box1').click(function(){
		$('#tabs-2').find(".link").each(function(index, element) {
			if(index==0)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box2').click(function(){
		$('#tabs-2').find(".link").each(function(index, element) {
			if(index==1)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box3').click(function(){
		$('#tabs-2').find(".link").each(function(index, element) {
			if(index==2)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box4').click(function(){
		$('#tabs-2').find(".link").each(function(index, element) {
			if(index==3)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box5').click(function(){
		$('#tabs-2').find(".link").each(function(index, element) {
			if(index==4)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box6').click(function(){
		$('#tabs-2').find(".link").each(function(index, element) {
			if(index==5)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box7').click(function(){
		$('#tabs-2').find(".link").each(function(index, element) {
			if(index==6)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box8').click(function(){
		$('#tabs-2').find(".link").each(function(index, element) {
			if(index==7)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box9').click(function(){
		$('#tabs-2').find(".link").each(function(index, element) {
			if(index==8)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box10').click(function(){
		$('#tabs-2').find(".link").each(function(index, element) {
			if(index==9)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
}

function openlink_blog(){
	var thelink;
	$('.box1').click(function(){
		$('#tabs-3').find(".link").each(function(index, element) {
			if(index==0)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box2').click(function(){
		$('#tabs-3').find(".link").each(function(index, element) {
			if(index==1)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box3').click(function(){
		$('#tabs-3').find(".link").each(function(index, element) {
			if(index==2)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box4').click(function(){
		$('#tabs-3').find(".link").each(function(index, element) {
			if(index==3)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box5').click(function(){
		$('#tabs-3').find(".link").each(function(index, element) {
			if(index==4)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box6').click(function(){
		$('#tabs-3').find(".link").each(function(index, element) {
			if(index==5)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box7').click(function(){
		$('#tabs-3').find(".link").each(function(index, element) {
			if(index==6)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box8').click(function(){
		$('#tabs-3').find(".link").each(function(index, element) {
			if(index==7)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box9').click(function(){
		$('#tabs-3').find(".link").each(function(index, element) {
			if(index==8)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
	$('.box10').click(function(){
		$('#tabs-3').find(".link").each(function(index, element) {
			if(index==9)
				thelink=$(element).text();
		});
		chrome.tabs.create({url: thelink, active: false});
	});
}