var createAccount = function(){
	var createAccountWindow = Ti.UI.createWindow({
		backgroundColor: "gray",
		title: "Create a New Account"
	}) ;
	
	var createNavAccountWindow = Ti.UI.iOS.createNavigationWindow({
		window: createAccountWindow
	}) ;
	
	cancelButtonView.add(cancelButtonLabel) ;
	saveButtonView.add(saveButtonLabel) ;
	createAccountWindow.add(required, firstName, lastName, email, username, password, confirmPassword, saveButtonView, cancelButtonView) ;
	createNavAccountWindow.open(createAccountWindow) ;
	
	
	var closeWindow = function(){
	createNavAccountWindow.close() ;
} ;

//close createAccount Window
cancelButtonView.addEventListener("click", closeWindow) ;

	var saveAccount = function(){
		createNavAccountWindow.close() ;
		alert("Account has been created! Please Login") ;
	} ;
	
saveButtonView.addEventListener("click", saveAccount) ;	


} ;

var createAccountLabel = Ti.UI.createLabel({
	text: "New to Password Protector? Create an Account Now",
	font: {fontFamily: "Arial", fontWeight: "bold", fontSize: 14, fontStyle: "underlined"},
	color: "blue",
	bottom: 30
}) ;

createAccountLabel.addEventListener("click", createAccount) ;

homeView.add(createAccountLabel) ;


//All fields Required Label
var required = Ti.UI.createLabel({
	text: "All Fields Required",
	color: "red",
	top: 15,
	left: 45,
	font: {fontFamily: "Arial", fontSize: 16, fontWeight: "bold", fontStyle: "italic"}, 
}) ;

// First Name
var firstName = Ti.UI.createTextField({
	height: 35,
	top: required.top + 30,
	align: "center",
	width: 240,
	hintText: "First Name",
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderRadius: 7,
	borderColor: "black",
	borderWidth: 2
});

// Last Name
var lastName = Ti.UI.createTextField({
	height: 35,
	top: firstName.top + firstName.height + 20,
	align: "center",
	width: 240,
	hintText: "Last Name",
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderRadius: 7,
	borderColor: "black",
	borderWidth: 2
});

//enter email
var email = Ti.UI.createTextField({
	height: 35,
	top: lastName.top + lastName.height + 20,
	align: "center",
	width: 240,
	hintText: "e-mail address",
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderRadius: 7,
	borderColor: "black",
	borderWidth: 2
});

//create username
var username = Ti.UI.createTextField({
	height: 35,
	top: email.top + email.height + 20,
	align: "center",
	width: 240,
	hintText: "username",
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderRadius: 7,
	borderColor: "black",
	borderWidth: 2
});

//create password
var password = Ti.UI.createTextField({
	height: 35,
	passwordMask: true,
	top: username.top + username.height + 20,
	align: "center",
	width: 240,
	hintText: "password",
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderRadius: 7,
	borderColor: "black",
	borderWidth: 2
});

//confirm Password
var confirmPassword = Ti.UI.createTextField({
	passwordMask: true,
	height: 35,
	top: password.top + password.height + 20,
	align: "center",
	width: 240,
	hintText: "confirm password",
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderRadius: 7,
	borderColor: "black",
	borderWidth: 2
});

//save button
var saveButtonView = Ti.UI.createView({
	backgroundColor: "Blue", 
	height: 50,
	width: 100,
	bottom: 100,
	right: 70,
	borderRadius: 3,
	borderColor: "black"
}) ;

var saveButtonLabel = Ti.UI.createLabel({
	text: "Save",
	color: "white"
}) ;

var cancelButtonView = Ti.UI.createView({
	backgroundColor: "white", 
	height: 50,
	width: 100,
	bottom: 100,
	left: 70,
	borderRadius: 3,
	borderColor: "black"
}) ;

var cancelButtonLabel = Ti.UI.createLabel({
	text: "Cancel",
	color: "black"
}) ;