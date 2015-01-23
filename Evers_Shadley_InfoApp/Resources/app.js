// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//Home Window
var homeWindow = Ti.UI.createWindow({
	title: "Video Game Reviews",
	backgroundColor: "Blue"
}) ;

//Nav Window for Direction through app
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: homeWindow
}) ;








var file = require("gamedata") ;



navWindow.open() ;
