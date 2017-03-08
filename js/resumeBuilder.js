const bio = {
  "name": "Robert Crocker",
  "role": "Data Visualization Specialist",
  "contacts": {
    "mobile": "(901)634-8275",
    "email": "rcrocker13@gmail.com",
    "github": "rcrocker13",
    "linkedin": "https://www.linkedin.com/in/robertcrocker/",
    "location": "San Francisco",
  },
  "welcomeMessage": "Hire me to help you find the story your data has to tell.",
  "skills": ["Data Visualization", "Tableau", "SQL", "JavaScript", "D3"],
  "biopic": "https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-1/p320x320/11269521_10152829623126674_3664060389952555245_n.jpg?oh=590b8d7abbbabed0ba05997bbfc0f6a9&oe=5915AEE7",
  "display": () => {

    const formattedName = HTMLheaderName
      .replace("%data%", bio.name);
    const formattedRole = HTMLheaderRole
      .replace("%data%", bio.role);
    const formattedMobile = HTMLmobile
      .replace("%data%", bio.contacts.mobile);
    const formattedEmail = HTMLemail
      .replace("%data%", bio.contacts.email);
    const formattedLinkedin = HTMLlinkedin
      .replace("%data%", bio.contacts.linkedin);
    const formattedGithub = HTMLgithub
      .replace("%data%", bio.contacts.github);
    const formatteLocation = HTMLlocation
      .replace("%data%", bio.contacts.location);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    // Append contact information
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedLinkedin);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formatteLocation);

  	$("#footerContacts").append(formattedMobile);
  	$("#footerContacts").append(formattedEmail);
  	$("#footerContacts").append(formattedLinkedin);
  	$("#footerContacts").append(formattedGithub);

    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
  	$("#header").append(bioPic);

  	var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  	$("#header").append(welcome);

  	// append formatted skills to the page
  	$("#header").append(HTMLskillsStart);

    for(skill in bio.skills) {
      const formattedSkills = HTMLskills
        .replace("%data%", bio.skills[skill]);
      $("#header").append(formattedSkills);
    }

  }
};

const work = {
  "jobs": [{
    "employer": "Slalom",
    "title": "Consultant",
    "dates": "January 2015 to Present",
    "location": "San Francisco, CA",
    "description": "High-level responsibilities include everything from regression testing new Tableau Servers, to building brand new dashboard embedded in client application to creating supportive technical documentation supporting my solutions - Hands-on work includes conducting user research, data mining and architecture assessment as well as final build of the dashboard or individual chart to drives the insight home - Teach both Tableau and D3 internally to Slalom consultants to keep us on top our game - Founding member of the Berkeley Tableau User Group and presenter at first and second meetings to 100+ attendees"
  },{
    "employer": "Georgia-Pacific",
    "title": "Business Intelligence Programmer",
    "dates": "April 2014 to December 2014",
    "location": "Atlanta, GA",
    "description": "Played a key role in initiating the first investment Tableau Server at Georgia-Pacific (GP) by demonstrating improved flexibility, richness of dashboard offerings and reduced development time - Wrote stored procedures and triggers to automate the piping of data from our SQL Server backend to the live dashboards I created to inform our Building Products sales representatives - Partnered with internal clients through shadowing and departments partnerships outside of information technology (IT), resulting in new business for IT, enhancements and opportunity to demonstrate new innovation - Co-founded Georgia-Pacific Tableau User Group where I presented and attracted presenters at a monthly cadence"
  },{
    "employer": "Georgia-Pacific",
    "title": "Supply Chain Optimization Analyst",
    "dates": "November 2011 to March 2014",
    "location": "Atlanta, GA",
    "description": "Improved the accuracy of GP’s network models 5 by identifying misallocated resource capacity caused by the Extract Transform Load process feeding data into our Linear modeler - Spearheaded Dixie® trailer load utilization project, resulting in significant annual savings - Developed code in MS Access, transforming GP’s supply chain network model output into a format Tableau could use to visualize GP’s network as an actual network graph plotted over the United States - Hosted Excel training classes to 10 students to improve their productivity of and overall professional fulfillment"
  },{
    "employer": "Georgia-Pacific",
    "title": "Master Data Management Intern",
    "dates": "June 2011 to November 2011",
    "location": "Atlanta, GA",
    "description": "Created scripts, score cards and work flow diagrams to streamline user acceptance testing - Restructured purchase order information in MDM’s Share Point site reducing managerial overhead by > 50%"
  }],
  "display": () => {

    for(job in work.jobs) {

      $("#workExperience").append(HTMLworkStart);

      const formattedEmployer = HTMLworkEmployer
      .replace("%data%", work.jobs[job].employer);
      const formattedTitle = HTMLworkTitle
      .replace("%data%", work.jobs[job].title);
      const formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
      const formattedDates = HTMLworkDates
        .replace("%data%", work.jobs[job].dates);
      const formattedLocation = HTMLworkLocation
        .replace("%data%", work.jobs[job].location);
      const formattedDescription = HTMLworkDescription
        .replace("%data%", work.jobs[job].description);

      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);

    }
  }
};

const projects = {
  "projects": [{
    "title": "D3 Bay Area",
    "dates": "August 2015 - Present",
    "description": "As a co-organizer of the Bay Area d3 User Group, I reach out to developers with ideas to share and find forums willing to host our community for an exciting evening of knowledge sharing. If you are in the Bay Area and interested in learning more about D3 you should join our community. We meet at least once a month. The community has developers whose skills span from just getting started on their D3 journey to authoring books on the subject. Everyone is welcome!",
    "image": "../images/proj-d3-bayarea.png"
  }, {
    "title": "Sound Score",
    "dates": "February 2015",
    "description": "SoundScore empowers prospective renters and current tenants to explore sound levels of neighborhoods across San Francisco. We collect millions of noise measurements from a network of environmental sensors in order to quantify and visualize the impact of sound on urban quality of life. The project was a submission for the 2015 Sense Your City Data Art Challenge and was selected for exhibition by the grand jury.",
    "image": "../images/proj-sound-score.png"
  }, {
    "title": "Atlanta Budget Explorer",
    "dates": "January 2014",
    "description": "After winning the 2nd annual Atlanta Govathon, my team was sponsored to build a website increasing transparency of government spending. My role on the team centered around creating the data pipeline as well as interactive visualizations. The backend is a relational database transforming the government budge and expense data into a format to be easily visualized and interpreted by the citizens of Atlanta.",
    "image": "../images/proj-atlanta-budget-explorer.png"
  }],
  "display": () => {

    for(project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      const formattedTitle = HTMLprojectTitle
        .replace("%data%", projects.projects[project].title);
      const formattedDates = HTMLprojectDates
        .replace("%data%", projects.projects[project].dates);
      const formattedDescription = HTMLprojectDescription
        .replace("%data%", projects.projects[project].description);
      const formattedImage = HTMLprojectImage
        .replace("%data%", projects.projects[project].image);

      $(".project-entry:last").append(formattedTitle);
      $(".project-entry:last").append(formattedDates);
      $(".project-entry:last").append(formattedDescription);
      $(".project-entry:last").append(formattedImage);
    }
  }
}

const education = {
  "schools" : [{
    "name": "The University of Tennessee Knoxville",
    "degree": "Bachelors of Science",
    "location": "Knoxville, TN",
    "major": "Logistics",
    "dates": "2011"
  }],
  "onlineCourses": [{
    "title": "Front End Nanodegree",
    "school": "Udactiy",
    "dates": "January 2016 - Present",
    "url": "udacity.com"
  },{
    "title": "Data Visualization with D3",
    "school": "Metis",
    "dates": "February - March 2015",
    "url": "https://www.thisismetis.com/data-visualization-with-d3js"
  },{
    "title": "Intermediate D3",
    "school": "Knight Center",
    "dates": "December 2015",
    "url": "journalismcourses.org"
  },{
    "title": "Data Analysis with R",
    "school": "Udactiy",
    "dates": "April 2014",
    "url": "udacity.com"
  },{
    "title": "Statistics",
    "school": "Udactiy",
    "dates": "January 2014",
    "url": "udacity.com"
  },{
    "title": "Operations Management",
    "school": "Coursera",
    "dates": "December 2013",
    "url": "coursera.com"
  }],
  "displayUniversity": () => {

    $("#education").append(HTMLschoolStart);

    for(school in education.schools) {

      const formattedName = HTMLschoolName
        .replace("%data%", education.schools[school].name);
      const formattedDates = HTMLschoolDates
        .replace("%data%", education.schools[school].dates);
  		const formattedDegree = HTMLschoolDegree
        .replace("%data%", education.schools[school].degree)
      const formattedLocation = HTMLschoolLocation
        .replace("%data%", education.schools[school].location);
      const formattedMajor = HTMLschoolMajor
        .replace("%data%", education.schools[school].major);

      $(".education-entry:last").append(formattedName);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedDegree);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajor);

    }
  },
  "displayOnlineCourses": () => {

    $(".education-entry:last").append(HTMLonlineClasses);

    for(course in education.onlineCourses) {

      const formattedOnlineTitle = HTMLonlineTitle
        .replace("%data%", education.onlineCourses[course].title);
      const formattedOnlineSchool = HTMLonlineSchool
        .replace("%data%", education.onlineCourses[course].school);
      const formattedOnlineDates = HTMLonlineDates
        .replace("%data%", education.onlineCourses[course].dates);
      const formattedOnlineUrl = HTMLonlineURL
        .replace("%data%", education.onlineCourses[course].url);

      $(".education-entry:last").append(formattedOnlineTitle);
      $(".education-entry:last").append(formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineUrl);

    }
  }
};

bio.display();
work.display();
projects.display();
education.displayUniversity();
education.displayOnlineCourses();
$("#mapDiv").append(googleMap);
