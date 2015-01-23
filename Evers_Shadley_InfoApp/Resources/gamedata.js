//JSON Data
var data = [
			{
			title: "Mario Kart 8", platform: "Nintendo Wii U", releaseDate: "May 30, 2014", developer: "Nintendo", genre: "racing, children", rating: "9.1/10", summary: "Mario Kart 8 introduces new racing circuit designs and antigravity karts that will have players driving upside down. Players will also enjoy a variety of series-favorite features, including the return of 12-player online competitive play, hang- gliders, underwater racing and motorbikes.",
			image: "MarioKart8.jpg"  
			},
			{
			title: "Destiny", platform: "Playstation 3, PS4, Xbox 360, Xbox One", releaseDate: "September 9, 2014", developer: "Bungi Software", genre: "Sci-fi", rating: "6.2/10",
			summary: "In Destiny (from the creators of Halo) you are a Guardian of the last city on Earth. You are able to wield incredible power. Explore the ancient ruins of our solar system,from the vast dunes of Mars to the lush jungles of Venus. Defeat Earth’s enemies. Reclaim all that we have lost. Become legend.Embark on an epic action adventure with rich cinematic storytelling where you unravel the mysteries of our universe and reclaim what we lost at the fall of our Golden Age. The next evolution of the first-person action genre that promises to" +
			"provide an unprecedented combination of storytelling, cooperative, competitive, and public gameplay, and personal activities that are all woven into an expansive, persistent online world. Venture out alone or join up with friends. The choice is yours. Personalize and upgrade every aspect of how you look and fight with a nearly limitless combination of armor, weapons, and visual customizations. Take your upgraded character into every mode, including campaign, cooperative, social, public, and competitive multiplayer.",	image: "Destiny.png"
			},
			{
			title: "Middle Earth: Shadow of Mordor", platform: "PC, Playstation 3, PS4, Xbox 360, Xbox One", releaseDate: "September 30, 2014", developer: "Monolith Productions", genre: "Fantasy", rating: "8.1/10", summary: "Fight your way through Mordor and reveal the truth of the spirit that compels you, discover the origins of the Rings of Power, build your legend and ultimately confront the evil of Sauron in this new story of Middle-earth.", image: "MiddleEarth.jpg"
			},
			{
			title: "Super Smash Bros", platform: "Wii U, Nintendo 3Ds", releaseDate: "November 21, 2014", developer: "Bandai Namco Games", genre: "3D Fighting", rating: "9.0/10", summary: "Duke it out with your favorite Nintendo characters in Super Smash Bros. for the Nintendo Wii U.", image: "SuperSmashBros.jpg"
			},
			{
			title: "Dragon Age: Inquisition", platform: "PC, Playstation 3, PS4, Xbox 360, Xbox One", releaseDate: "November 18, 2014", developer: "BioWare", genre: "General, First Person", rating: "5.8/10", 
			summary: "Select and lead a group of characters into harrowing battles against a myriad of enemies – from earth-shattering High Dragons to demonic forces from the otherworld of the Fade. Go toe-to-toe in visceral, heroic combat as your acolytes engage at your side, or switch to tactical view to coordinate lethal offensives using the combined might of your party. Observe the tangible, visible results of your journey through a living world – build structures," +
			"customize outposts, and change the landscape itself as environments are re-honed in the wake of your Inquisition. Helm a party chosen from nine unique, fully-realized characters – each of whom react to your actions and choices differently, crafting complex relationships both with you and with each other. Create your own character from multiple races, customize their appearance, and amalgamate their powers and abilities as the game progresses. Enhanced customization options allow you to pick everything from the color of your follower’s boots to the features of your Inquisition stronghold. Become a change agent in a time of uncertainty and upheaval. Shape the course of your empires, bring war or peace to factions in conflict, and drive the ultimate fate of the Inquisition. Will you bring an end to the cataclysmic anarchy gripping the Dragon Age?",
			image: "DragonAge.jpg"
			},
			{
			title: "Grand Theft Auto V", platform: "PC, Playstation 3, PS4, Xbox 360, Xbox One", releaseDate: "November 18th, 2014", developer: "Rockstar North", genre: "Action Adventure", rating: "8.2/10", 
			summary: "The sprawling sun-soaked metropolis of Los Santos is chock full of self-help coaches, starlets and C-List celebrities, once on top of the media world, now struggling to stay relevant in time of economic malaise and lowest-common-denominator reality TV. Amidst this madness, three unique criminals plan their own chances of survival and success: Franklin, a street-level hustler in search of opportunities for serious money; Michael, an ex-con whose retirement is a less rosy than he hoped it would be; and Trevor, a violent dude driven by the chance for a quick high and the next big score. Nearly out of options, the crew risks it all in a series of daring and dangerous heists that could set them up for life - one way or the other.", image: "gtav.jpg"
			},
			{
			title: "Call of Duty: Advanced Warfare", platform: "PC, Playstation 3, PS4, Xbox 360, Xbox One", releaseDate: "November 3, 2014", developer: "Sledgehammer Games", genre: "Modern Warfare", rating: "5.7/10", 
			summary: "Call of Duty: Advanced Warfare predicts the powerful battlegrounds of the future, where both technology and tactics have taken steps to usher in a new era of combat for the franchise. Kevin Spacey is Jonathan Irons -- one of the most notorious men in the world -- shaping this chilling vision of the future of war. The game unfolds in a plausible future in which technological, telesis and today's military practices have converged with real world consequences. In this image of the future, Private Military Corporations have become the dominant armed forces for many countries who must outsource their military needs, redrawing borders and rewriting international law. Irons, the founder and president of the world's largest PMC, Atlas Corporation, is at the vortex of these tectonic plates. Suit up for combat in exoskeletons that advance every facet of a soldier's battle readiness, enabling combatants to deploy with an advanced lethality and eliminating the need for specialization. Players tout enhanced player movement and verticality through boost jumps and grappling, covert cloaking abilities, and biomechanics that provide keen strength, awareness, endurance, and speed. With the advent of the exoskeleton and newly advanced armor and weaponry, every soldier commands tactical freedom in any terrain unlike ever before.",
			image: "AdvancedWarfare"
			},
			{
			title: "DC Universe Online", platform: "PC, Playstation 3, PS4", releaseDate: "November 13, 2013", developer: "WBIE", genre: "Fantasy", rating: "6.7/10", summary: "In DC Universe Online, players will be thrust headlong into an action-packed online world based on the heroes, villains and landmarks of the DC Universe. In the game, players step into the role of the next legendary superhero or villain and are given the choice to save or conquer the universe online. Along the way, players will be fighting alongside or against iconic DC characters as well as other players for the fate of the DC Universe.", image: "dcUniverseOnline.jpg"
			}
] ;

//titles of games
var titles = ["Call of Duty: Advanced Warfare", "DC Universe Online", "Destiny", "Dragon's Age: Inquisition", "Grand Theft Auto V", "Mario Kart 8", "Middle Earth: Shadow of Mordor", "Super Smash Bros"] ;

//images for rows
var images = ["AdvancedWarfare.jpg", "dcUniverseOnline.jpg", "Destiny.png", "DragonAge.jpg", "gtav.jpg", "MarioKart8.jpg", "MiddleEarth.jpg", "SuperSmashBros.jpg"] ;

//search bar
var searchBar = Ti.UI.createSearchBar({
	barColor: "gray",
	showCancel: false,
	height: 43,
	top: 60
	
}) ;

//adds scrolling capabilities 
var scrollView = Ti.UI.createScrollView({
	contentWidth: 350,
	contentHeight: 900, 
	showVerticalScrollIndicator: true,
	showHorizontalScrollIndicator: false,
	height: "100%",
	width: "100%",
	top: searchBar.top + 40
}) ;

//description window for JSON object
var openDescriptionWindow = function(){
	var descriptionWindow = Ti.UI.createWindow({
		}) ;
		
	var largeImage = Ti.UI.createImageView({
		image: "AdvancedWarfare.jpg",
		height: 300,
		width: 200, 
		top: 40,
		align: "center"
	}) ;
	
	console.log(openDescriptionWindow); 
	descriptionWindow.add(largeImage) ; 
	navWindow.open(descriptionWindow) ;
	
		
} ;

 
var tableData = [] ;
// for loop to create rows with descriptions and images
for (var i = 0; i < data.length ; i++){
	var gameRows = Ti.UI.createTableViewRow({
		backgroundColor: "White", 
		height: 100
	}) ;
	
	var image = Ti.UI.createImageView({
		image: images[i],
		left: 0,
		top: 0,
		width: 100,
		height: 100
	}) ;
	
	var gameTitle = Ti.UI.createLabel({
		text: titles[i],
		font:{fontFamily:"Arial", fontSize:20},
		textAlign: "right",
		right: 15,
		top: 0,
		width: 250,
		height: 50
	}) ;
	
	
	gameRows.addEventListener("click", openDescriptionWindow) ; 
	gameRows.add(gameTitle, image) ;
	
	tableData.push(gameRows) ; 
	
}
	
var gamesTable = Ti.UI.createTableView({
 	data: tableData,
 	search: true
 }) ;
	
 
scrollView.add(gamesTable) ; 
navWindow.add(searchBar, scrollView) ; 
