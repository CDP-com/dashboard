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

// Read in Notifications from XML
function loadNotifications(){
	var fso, f, f1, fc, s;
	
	// Get the "Notifications" folder where each individual xml file will exist
	fso = new ActiveXObject("Scripting.FileSystemObject");
	f = fso.GetFolder("C:\\ProgramData\\CDP\\SnapBack\\Notifications");
	fc = new Enumerator(f.files);
	var myCount=0;
	var myArray = [];

	s = "";

	for (; !fc.atEnd(); fc.moveNext()){
		// Set array with notifcation path and the date notification was created
		myArray[myCount]={name:fc.item(),value:fc.item().DateCreated};;
		myCount++;
	}
	
	// Condition if no notifications exist
	if (myCount == 0){
		var div = document.getElementById('critical-notifications');
		div.innerHTML = "<div class='notifications-none'>You have not notifications.</div>";
	}

	// Sort items based upon their Date Created
	myArray.sort(function(a,b){
		if ((a.value) > (b.value) ) { return -1; }
		if ((a.value) < (b.value) ) { return 1; }
		return 0;
	});

	// Parse each XML file
	for (i=0; i<myCount; i++){
		
		// Get individual XML file
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		var xmlFile = myArray[i].name;
		xmlDoc.async="false";
		xmlDoc.load(''+xmlFile+'');

		// Load Data
		var AppName = xmlDoc.getElementsByTagName('AppName')[0].firstChild.nodeValue;
		var PackageName = xmlDoc.getElementsByTagName('PackageName')[0].firstChild.nodeValue;
		var Status = xmlDoc.getElementsByTagName('Status')[0].firstChild.nodeValue;
		var Notice = xmlDoc.getElementsByTagName('Notice')[0].firstChild.nodeValue;
		
		// Display Data
		if (Status == "Critical") {
			notiftxt = "<div class='notification critical'>";
			notiftxt += "<h3>";
			notiftxt += AppName;
			notiftxt += "<span class='notification-date'>";
			notiftxt += myArray[i].value;
			notiftxt += "</span><span class='notification-status'>";
			notiftxt += Status;
			notiftxt += "</span></h3>";
			notiftxt += "<div class='notification-text'>";
			notiftxt += Notice;
			notiftxt += "</div><div class='notification-link'><a href='../";
			notiftxt += PackageName;
			notiftxt += "/main.html' title='Go to this App now'>Go To App Now</a></div>";
			notiftxt += "</div>"
			notiftxt += "";
			var div = document.getElementById('critical-notifications');
			div.innerHTML = div.innerHTML + notiftxt;
		}
		else {
			notiftxt = "<div class='notification'>";
			notiftxt += "<h3>";
			notiftxt += AppName;
			notiftxt += "<span class='notification-date'>";
			notiftxt += myArray[i].value;
			notiftxt += "</span><span class='notification-status'>";
			notiftxt += Status;
			notiftxt += "</span></h3>";
			notiftxt += "<div class='notification-text'>";
			notiftxt += Notice;
			notiftxt += "</div><div class='notification-link'><a href='../";
			notiftxt += PackageName;
			notiftxt += "/main.html' title='Go to this App now'>Go To App Now</a></div>";
			notiftxt += "</div>"
			notiftxt += "";
			var div = document.getElementById('noncritical-notifications');
			div.innerHTML = div.innerHTML + notiftxt;
		}
	}	
}
