//creates password reset window
var forgotScreen = function(){
	var resetScreen = Ti.UI.createWindow({
		title: "Reset Password",
		backgroundColor: "blue"
	}) ;
	
	var resetNavScreen = Ti.UI.iOS.createNavigationWindow({
		window: resetScreen
	}) ;
	
	cancelView.add(cancelLabel) ;
	resetView.add(resetLabel) ;
	resetScreen.add(descriptionLabel, username, email, resetView, cancelView) ;
	resetNavScreen.open() ;
	
	
	var resetPassword = function(){
		alert("Password has been reset") ;
		resetNavScreen.close() ;
	} ;
	
	resetView.addEventListener("click", resetPassword) ;
	
	var closeWindow = function(){
		resetNavScreen.close() ;
	} ;

	cancelView.addEventListener("click", closeWindow) ;


} ;

//forgot Password Screen
var forgotPassword = Ti.UI.createLabel({
	text: "Forgot Password?", 
	font: {fontFamily: "Arial", fontSize: 12, fontWeight: "underlined", fontStyle: "italic"}, 
	color: "Blue",
	textAlign: "center",
	bottom: 220,
}) ;

forgotPassword.addEventListener("click", forgotScreen) ;

homeView.add(forgotPassword) ;

//description label
var descriptionLabel = Ti.UI.createLabel({
	text: "To reset your password, please provide your username and email address associated with your account.",
	color: "white",
	top: 25,
	left: 20,
	right: 20,
	align: "center"
}) ;


//username 
var username = Ti.UI.createTextField({
	height: 35,
	top: descriptionLabel.top + 95,
	align: "center",
	width: 240,
	hintText: "username",
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderRadius: 7,
	borderColor: "black",
	borderWidth: 1
});

//email
var email = Ti.UI.createTextField({
	height: 35,
	top: username.top + username.height + 25,
	align: "center",
	width: 240,
	hintText: "email",
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderRadius: 7,
	borderColor: "black",
	borderWidth: 1
});


var resetView = Ti.UI.createView({
	backgroundColor: "green",
	height: 50,
	width: 100,
	borderColor: "black",
	borderRadius: 7,
	borderWidth: 1,
	bottom: 300,
	right: 50
}) ;

var resetLabel = Ti.UI.createLabel({
	text: "Reset",
	font: {fontFamily: "Arial", fontSize: 16, fontWeight: "bold"}
}) ;

var cancelView = Ti.UI.createView({
	backgroundColor: "white",
	height: 50,
	width: 100,
	borderColor: "black",
	borderRadius: 7,
	borderWidth: 1,
	bottom: 300,
	left: 50
}) ;

var cancelLabel = Ti.UI.createLabel({
	text: "Cancel",
	font: {fontFamily: "Arial", fontSize: 16}
}) ;

