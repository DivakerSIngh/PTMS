	
$(function($) {	
	//var getWindowWidth = $(window).width();

    $(window).on("load", function() {
        $(".full-height-scrollbar").mCustomScrollbar({
			theme:'minimal'
		});	
		$(".full-height-scrollbar-messege").mCustomScrollbar({
			theme:'minimal-dark'
		});
		$(".full-height-chat, .mfull-height-Md").mCustomScrollbar({
			theme:'minimal-dark'
		});
		$(".full-height-newchat").mCustomScrollbar({
			theme:'minimal-dark'
		});
		$(".mfull-height").mCustomScrollbar();
						
    });
	
  
	//----- left-menu-----
	
	function resetMenu(){
		$('#nav-toggle').removeClass('active');
		$('#sideNav').removeClass('sidenav-sm');
		$(".wrapnav-sm").removeClass("in");
	}
	 $('#nav-toggle').click(function(){
		if($('#sideNav').hasClass('sidenav-sm')){
			resetMenu();
		}else{
			resetChat();
			$('#nav-toggle').addClass('active');
			$('#sideNav').addClass('sidenav-sm');
			$(".wrapnav-sm").addClass("in");
		}
	});
	
	$('body').on('click','.wrapnav-sm.in',function(){
		resetMenu();
	});
	
	//----- right-menu-----
	
	function resetChat(){
		$('#sideNav-Right').removeClass('sideright-sm');
		$(".wrapchat-sm").removeClass("in");		
	}
	$("#comment .hide-in").click(function(){
		if($('#sideNav-Right').hasClass('sideright-sm')){
			resetChat();
		}else{
			$('#sideNav-Right').addClass('sideright-sm');
			$(".wrapchat-sm").addClass("in");
			resetMenu();
		}		
	});
	$('body').on('click','.wrapchat-sm.in',function(){
		resetChat();
	});
	
	//----- form-- open box---

	var code = $('.dash-search input[type=search]');
	$('#search-clickid').click(function(e) {
		e.stopPropagation();
		if($(code).hasClass('in')){
			$(code).removeClass('in');
			$('.dash-search').removeClass('in');
		}else{
			$(code).addClass('in');
			$('.dash-search').addClass('in');
		}
	});
	
	//prevent item to hide on tab
	$('.dash-search input[type=search]').click(function(e){
		e.stopPropagation();
				
	});
	//on dom click
	$(document).click(function(){
		resetTopnav();
		$('.dash-search input[type=search]').removeClass('in');
		$('.dash-search').removeClass('in');		
	});	
	
	//top nav-bar click
	function resetTopnav(){
		$('.headernav-toggle').removeClass('active');
		$('.nav-tab').removeClass('in');
		$('.headernav-toggle').slideUp();		
	}
	
	$('.nav-tab').click(function(e){
		e.stopPropagation();
		if($(this).hasClass('in')){
			resetTopnav();			
		}else{
			resetTopnav();			
			$(this).find('.headernav_fortabs').slideDown();
			$(this).find('.headernav_fortabs').addClass('active');
			$(this).addClass('in');			
		}
	});	
	$('.headernav_fortabs').click(function(e){
		e.stopPropagation();		
	});
	$('.nav-tab').click(function(e){
		$('.dash-search input[type=search]').removeClass('in');		
	});
	
		
	
			
});

