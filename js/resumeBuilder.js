var bio = {
    "name": "Hayden Jon Colson",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my resume!",
    "biopic": "images/me.jpg",
    "contacts": {
        "mobile": "1(845) 674-3868",
        "email": "colsoncode@gmail.com",
        "github": "haydenjoncolson",
        "twitter": "bighbig",
        "location": "Oakland, CA"
    },
    "skills": ["HTML", "CSS", "JavaScript","Python"],
    "display": function() {
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      $("#header").append(formattedName);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      $("#header").append(formattedRole);
      var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
      $("#header").append(formattedPicture);
      var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
      $("#header").append(formattedWelcome);
      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      $("#topContacts, #footerContacts").append(formattedMobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      $("#topContacts, #footerContacts").append(formattedEmail);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      $("#topContacts, #footerContacts").append(formattedGithub);
      var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      $("#topContacts, #footerContacts").append(formattedTwitter);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      $("#topContacts, #footerContacts").append(formattedLocation);
      $("#header").append(HTMLskillsStart);
      var skill = bio.skills.length;
      for (var i = 0; i < skill; i++) {
        var formattedSkill = HTMLskills.replace("%data%" , bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
};
bio.display();

var work = {
  "jobs": [
    {
      "employer": "Urban Plates",
      "title": "Line Cook & Server",
      "location": "Playa Vista, California",
      "dates": "October, 2015 - Present",
      "description": "Prepare and serve food."
    },
    {
      "employer": "Piattini",
      "title": "Server",
      "location": "Cornwall on Hudson, New York",
      "dates": "Summer of 2015",
      "description": "Ensure an exceptional dining experience. "
    },
    {
    "employer": "SUNY Orange",
    "title": "Maintainance Mechanic",
    "location": "Newburgh, New York",
    "dates": "Summer of 2015",
    "description": "Landscaping, Cleaning, and Transporting"
    }
  ],
  "display": function() {
    $("#workExperience").append(HTMLworkStart);
    var job = work.jobs.length;
    for (var i = 0; i < job; i++) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      $(".work-entry:last").append(formattedLocation);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};
work.display();

var education = {
  "schools": [
    {
      "name" : "Santa Monica College",
      "location" : "Santa Monica, California",
      "degree" : "A.S.",
      "dates" : "Fall 2015 - Fall 2016",
      "major" : "Computer Science",
      "url": "smc.edu"
    },
    {
      "name" : "Laney College",
      "location" : "Oakland, California",
      "degree" : "A.S.",
      "dates" : "Spring 2017",
      "major" : "Business Administration",
      "url": "laney.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro to Programming Nanodegree",
      "school": "Udacity",
      "dates": "2016",
      "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }
  ],
  "display": function() {
    var school = education.schools.length;
    for (var i = 0; i < school; i++) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolname = HTMLschoolName.replace("%data%", education.schools[i].name);
      $(".education-entry:last").append(formattedSchoolname);
      var formattedSchooldegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      $(".education-entry:last").append(formattedSchooldegree);
      var formattedSchooldates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      $(".education-entry:last").append(formattedSchooldates);
      var formattedSchoollocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      $(".education-entry:last").append(formattedSchoollocation);
      var formattedSchoolmajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
      $(".education-entry:last").append(formattedSchoolmajor);
    }
    $("#education").append(HTMLonlineClasses);
      var course = education.onlineCourses.length;
      for (var i = 0; i < course; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        $(".education-entry:last").append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineUrl);
      }
  }
};
education.display();

var projects = {
  "projects": [
    {
      "title": "Resume",
      "dates": "August 2016",
      "description": "Built by Udacity",
      "images": ["http://www.therawlife.co/wp-content/uploads/2014/10/Hire_me_sign.jpg"]
    }
  ],
  "display": function() {
    var project_array = projects.projects;
    var project_length = projects.projects.length;
    for (var i = 0; i < project_length ; i++) {
      $("#projects").append(HTMLprojectStart);
      formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      $(".project-entry:last").append(formattedProjectTitle);
      formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      $(".project-entry:last").append(formattedProjectDates);
      formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry:last").append(formattedProjectDescription);
    if (projects.projects[i].images.length > 0) {
        for (var j = 0; j < projects.projects[i].images.length; j++) {
          formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
          $(".project-entry:last").append(formattedProjectImages);
          }
        }
      }
    }
};
projects.display();



$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#mapDiv").append(googleMap);
