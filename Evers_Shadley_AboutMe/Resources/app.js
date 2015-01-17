Titanium.UI.setBackgroundColor("gray") ;

//Main Window with background Color
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "gray",
	title: "About Me"
}) ;


//Nav Window so user can Navigate
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
}) ;

//table to display info
var aboutMeTable = Ti.UI.createTableView({
	}) ;

//code to get 2nd file
var getFile = require("json") ;




//Opens windows and Adds info to Windows
mainWindow.add(aboutMeTable) ;
navWindow.open() ;

