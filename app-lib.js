//***** Use this file to set up your buttons and include any custom functions for your app *****
// 
var development = 1;						// 1 this app is in development, 0 this app is in production
//var currentUserDefaultCaution = "0";		// **This is the global Throw caution to the wind flag for the current use

/*-----------------------------------------------------*/
/*-------------- Standard App Variables ---------------*/
/*-----------------------------------------------------*/

var appname = "dashboard";				// This app's name / folder name which must be unique
var apptitle = "Dashboard";				// This display title written to the HTML
var connect_link = "http://factory.snapback-apps.com/app/platform-dashboard/";     // The link to your App's Connect Page in the SnapBack Apps Factory 
var group_name ="App Helpers";				// The group or individual responsible for this app

/*-----------------------------------------------------*/
/*---------------------- Buttons ----------------------*/
/*-----------------------------------------------------*/

var btncount = 0;                            // This is the number of buttons on the App Home tab in main.html




	
/*-----------------------------------------------------*/
/*----------------- Custom Functions ------------------*/
/*-----------------------------------------------------*/	
//***** Use the below area for your common functions *****

// Hide Outline on Page Load
$(document).ready(function() {
	$(function() {
		$('#menu').addClass('offscreen');
		$('#menu').css({ left: "-12.5%" });
		$('#collapsed-menu').removeClass('offscreen');
		$('.menu-link').removeClass('active');
		$('#primary').css({ display: "block" });
		$('#primary').css({ left: "5%" });
		$('#primary').css({ transition: "left 300ms ease" });
		$('#primary').css({ width: "94.8%" });
	});
});