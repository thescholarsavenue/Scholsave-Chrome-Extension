var i=1;

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
	$('#tabs-1').append(localStorage.getItem('feed_home_data'));
	openlink_home();
}

function display_notice(){
	$('#tabs-2').empty();
	$('#tabs-2').append(localStorage.getItem('feed_notice_data'));
	openlink_notice();
}

function display_blog(){
	$('#tabs-3').empty();
	$('#tabs-3').append(localStorage.getItem('feed_blog_data'));
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