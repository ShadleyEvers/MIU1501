//main Window
var mainWindow = Ti.UI.createWindow({
	title: "Password Protector",
	backgroundColor: "Blue"
}) ;

var homeView = Ti.UI.createView({
	backgroundColor: "White"
}) ;


var title = Ti.UI.createLabel({
	text: "Password Protector", 
	top: 105,
	textAlign: "Center",
	font: {fontFamily: "Arial", fontSize: 36, fontWeight: "Bold"},
	color: "Blue"
}) ;

var logo = Ti.UI.createImageView({
	image: "safe.jpg",
	top: 0,
	height: 250,
	width: 400,
	alignCenter: true
}) ;

var logoBorder = Ti.UI.createView({
	borderRadius: 7,
	borderWidth: 3,
	borderColor: "Blue",
	height: 250,
	width: 400,
	top: 20
}) ;

var use = require("loginScreen") ;
var use2 = require("forgotPassword") ;


logoBorder.add(logo, title) ;
homeView.add(logoBorder) ;
mainWindow.add(homeView) ;
mainWindow.open() ; 

