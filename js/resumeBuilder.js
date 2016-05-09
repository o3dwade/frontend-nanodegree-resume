var bio = {
	"name": "John Doe",
	"role":"Web Developer",
	"contacts": {
		"mobile":"650-555-5555",
		"email":"john@example.com",
		"github":"johndoe",
		"twitter":"@johndoe",
		"location":"San Francisco",
		"blog":"johndoe.co"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc. ",
	"skills": [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [
	{
		"name":"Nova Southeastern University",
		"city":"Fort Lauderdale, FL",
		"degree":"Masters",
		"majors":["CS"],
		"dates": 2013,
		"url":"http://example.com"
	},
	{
		"name":"Eckerd College",
		"city":"Saint Petersburg, FL",
		"degree": "BA",
		"majors":["CS"],
		"dates":2003,
		"url": "http://example.com"
	}
	],
	"onlineCourses" : [
		{
			"title": "JavaScript Crash Course",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://udacity.com/course/ud804"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title":"Delivery Boy",
			"dates":"January 3-Future",
			"description": "Who moved my cheese cheesy feet cauliflower cheese."
		},
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"dates": "1998 - December 31, 1999",
			"description": "Who mved my cheese."
		}
	]
}

var projects = {
	"projects": [
	{
		"title": "Sample Project 1",
		"dates": "2014",
		"description": "Who moved my cheese.",
		"images": [
			"http://png.clipart.me/graphics/thumbs/202/silhouette-of-a-man-with-a-laptop-in-flat-design-e-learning-concept-vector-illustration_202868839.jpg", 
			"http://cache3.asset-cache.net/xc/155734962.jpg?v=2&c=IWSAsset&k=2&d=gmAOPDz9iTieMMFVJb7LccDLF8tl_up_2n_NUaS18HSUj5YKqcwEPeiPbk-gdmSH0"
		]
	},
	{
		"title": "Sample Project 2",
		"dates": "2014",
		"description": "Who moved my cheese 2.",
		"images": []
	}
    ]
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedblog = HTMLblog.replace("%data%",bio.contacts.blog);
$("#topContacts").append(formattedblog);



$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedMsg);
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}


projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if(projects.projects[project].images.length>0){	
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();
displayWork();

$(document).click(function(loc) {
	// your code goes 
	var x=loc.pageX;
	var y =loc.pageY;

	logClicks(x,y);
});

function displayWork(){
	for(job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDesc);
	}
}
