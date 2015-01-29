//Login
var signInLabel = Ti.UI.createLabel({
	text: "Sign In",
	font: {fontFamily: "Arial", fontSize: 12}, 
	color: "Blue",
	left: 30,
	top: logoBorder.top + logoBorder.height + 25
}) ;

//username entry
var username = Ti.UI.createTextField({
	text: "student",
	height: 35,
	top: signInLabel.top + 25,
	left: 30,
	width: 300,
	hintText: "Username",
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "blue",
	borderRadius: 7
});

var password = Ti.UI.createTextField({
	text: "Test1234",
	passwordMask: true,
	height: 35,
	top: username.top + username.height + 25,
	left: 30,
	width: 300,
	hintText: "Password",
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "blue",
	borderRadius: 7
}) ;

var loginButton = Ti.UI.createView({
	top: password.top + password.height + 60,
	height: 50,
	width: 150,
	backgroundColor: "blue",
	border: true,
	borderRadius: 7,
	borderWidth: 3,
	borderColor: "black", 
}) ;

var loginLabel = Ti.UI.createLabel({
	text: "Login", 
	color: "White"
}) ;

var validation = function(){
	
	var welcomeWindow = Ti.UI.createWindow({
		title: "Welcome",
		backgroundColor: "yellow"	
	}) ;
	
	var welcomeNavWindow = Ti.UI.iOS.createNavigationWindow({
		window: welcomeWindow
	}) ;
	
	var closeButtonView = Ti.UI.createView({
		bottom: 30,
		left: 30,
		height: 50,
		width: 150,
		backgroundColor: "blue",
		borderRadius: 7,
		borderWidth: 2,
		borderColor: "black"
	}) ;
	
	var closeButtonLabel = Ti.UI.createLabel({
		text: "Logout", 
		color: "White"
	}) ;
	
	var savedPasswordView = Ti.UI.createView({
		top: 50,
		align: "center", 
		height: 50,
		width: 275,
		backgroundColor: "white", 
		borderRadius: 7,
		borderWidth: 2,
		borderColor: "black"
	}) ;
	
	var savedPasswordLabel = Ti.UI.createLabel({
		text: "View Saved Passwords",
		color: "black"
	}) ;
	
	var addPassword = Ti.UI.createView({
		top: savedPasswordView.top + savedPasswordView.height + 25,
		align: "center", 
		height: 50,
		width: 275,
		backgroundColor: "white", 
		borderRadius: 7,
		borderWidth: 2,
		borderColor: "black"
	}) ;
	
	var addPasswordLabel = Ti.UI.createLabel({
		text: "Add New Password", 
		color: "black"
	}) ;
	
	var eraseSavedPasswords = Ti.UI.createView({
		top: addPassword.top + addPassword.height + 25,
		align: "center", 
		height: 50,
		width: 275,
		backgroundColor: "white", 
		borderRadius: 7,
		borderWidth: 2,
		borderColor: "black"
	}) ;
	
	var eraseSavedPasswordsLabel = Ti.UI.createLabel({
		text: "Erase all Saved Passwords", 
		color: "black"
	}) ;
	
	
	var exitApp = function(){
		welcomeNavWindow.close() ;
	} ;
	
	closeButtonView.addEventListener("click", exitApp) ;
	eraseSavedPasswords.add(eraseSavedPasswordsLabel) ;
	addPassword.add(addPasswordLabel) ;
	savedPasswordView.add(savedPasswordLabel) ; 
	closeButtonView.add(closeButtonLabel) ;
	welcomeWindow.add(closeButtonView, savedPasswordView, addPassword, eraseSavedPasswords) ;
	welcomeNavWindow.open() ;
	
	var userCheck;
	var passwordCheck;
	if(username.text == "student" && password.text == "Test1234" ) {
		userCheck === true ;
		alert("Login Successful") ;
	}
	else{
		alert("username or password is incorrect") ;
	}
	
} ;

loginButton.addEventListener("click", validation) ;

var use = require("createAccount") ;

loginButton.add(loginLabel) ;
homeView.add(signInLabel, username, password, loginButton) ;
