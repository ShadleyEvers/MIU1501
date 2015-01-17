//Data about Me
var basicInfo = [
		{question: "What is your Name?", answer: "Shadley Evers"},
		{question: "What is your chat Username?", answer: "shadley.evers@fullsail.edu"} ,
		{question: "In which time zone do you reside?", answer: "Eastern Time Zone, I live in Miami"},
		{question: "Why are you in the MD Program?", answer: "I have always wanted to create and publish my own apps in the App Store"},
		{question: "Comfortability with Javacript?", answer: "I am fairly comfortable, I could use a little extra practice"},
		{question: "Comfortability with Titanium?", answer: "I love using Titanium, it seems to be very easy"},
	 ] ;

var extraInfo = [
		{question: "What kind of work do you do?", answer: "I work for Apple at one of the retail stores"},
		{question: "What is your favorite movie?", answer: "I would have to say Avatar"},
		{question: "Do you have any pets?", answer: "I wish, I really want to get a puppy!"},
		{question: "What is your favorite color?", answer: "I would have to say I don't have one favorite, but I like black and silver together and then an accent color such as bright yellow, green, orange or red"},
		{question: "What are your hobbies?", answer: "Currently I do yoga a couple times a week, workout at the gym a couple times a week, and play video games the rest of the time, unless I'm spending it with my girlfriend"},
		{question: "What is your favorite sport?", answer: "My favorite sport to play was soccer, my favorite sport to watch is football"}
] ;

//function to open the answers
var myAnswers = function(dataSource){
	var descriptionWindow = Ti.UI.createWindow({
		title: dataSource.title,
		backgroundColor: "White"
	}) ;
	
	var backgroundImage = Ti.UI.createView({
		backgroundImage: "Me&Jasmine.jpg",
		height: "100%",
		width: "100%"
	}) ;

	var aboutMeView = Ti.UI.createView({
		backgroundColor: "gray",
		height: 150,
		width: 350,
		borderRadius: 7,
		borderWidth: 2,
		borderColor: "Blue",
		bottom: 10
	}) ;
	
	var aboutMeLabel = Ti.UI.createLabel({
		text: dataSource.about,
		font: {fontSize: 20, fontFamily: "ArialMT"},
		textAlign: "center",
		right: 10,
		left: 10
	}) ;


aboutMeView.add(aboutMeLabel) ;	
descriptionWindow.add(backgroundImage, aboutMeView) ;
navWindow.openWindow(descriptionWindow) ;

} ;

//Styling Preference
if(Ti.Platform.name === "iPhone OS"){
	aboutMeTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED ;
} ;

//Headers and Footers for sections
var basicSection = Ti.UI.createTableViewSection({
	headerTitle: "Basic Information",
	footerTitle: "Information about me Requested in the Assignment"
}) ;

var extraSection = Ti.UI.createTableViewSection({
	headerTitle: "Extra Information",
	footerTitle: "Information about me I provide for the Assignment"
}) ;

var assignmentSections = [basicSection, extraSection] ;

aboutMeTable.setData(assignmentSections) ;

aboutMeTable.addEventListener("click", function(clickChoice){
	myAnswers(clickChoice.source) ;
}) ;

//For loops to display Questions
for(var i = 0, j= basicInfo.length; i < j ; i++){
	var basicRow = Ti.UI.createTableViewRow({
		title: basicInfo[i].question,
		about: basicInfo[i].answer,
		hasChild: true
	}) ;
	
	if(Ti.Platform.name === "iPhone OS"){
		basicRow.hasChild = false ;
		basicRow.hasDetail = true ;
	}
	
	basicSection.add(basicRow) ;
	//healerRow.addEventListener("click", powerDescription) ;
	
}

for(var i = 0, j= extraInfo.length; i < j ; i++){
	var extraRow = Ti.UI.createTableViewRow({
		title: extraInfo[i].question,
		about: extraInfo[i].answer,
		hasChild: true
	}) ;
	
	if(Ti.Platform.name === "iPhone OS"){
		extraRow.hasChild = false ;
		extraRow.hasDetail = true ;
	}
	
	extraSection.add(extraRow) ;
	//healerRow.addEventListener("click", powerDescription) ;
	
}

