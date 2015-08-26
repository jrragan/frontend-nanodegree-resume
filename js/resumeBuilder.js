/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var formattedName = HTMLheaderName.replace("%data%", "James Rodney Ragan");
// var formattedRole = HTMLheaderRole.replace("%data%", "Network Programmer");

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

var bio = {
  "name" : "James Rodney Ragan",
  "role" : "Network Programmer",
  "contacts" : {
    "mobile" : "678-296-8816",
    "email" : "yellowjacket0694@hotmail.com",
    "github" : "jrragan",
    "location" : "Atlanta, GA"
  },
  "welcomeMessage" : "Greetings and Salutations",
  "skills" : ["CCIE 4410 - R/S and Security", "Python", "Cisco routers - ISR and ASR", "Cisco Swtiches - Catalyst and Nexus", "Data Center - VDC, vPC, FabricPath, OTV, ITD", "Routing Protocols - OSPF, BGP, PfR, PIM", "Multicast", "iWAN", "IPsec", "DMVPN", "CBAC", "LAN - Spanning Tree, Multicast, WCCP", "LAN Security - DHCP Snooping, Dynamic ARP Inspection, MAB, IEEE 802.1x", "QoS - LAN, WAN, MQC", "IP SLA", "HTML", "CSS", "Javascript", "Bootstrap", "jQuery"],
  "biopic" : "images/IMG_0455.JPG"
};
bio.display = function() {
  $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

  if (bio.skills.length) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
  }

  $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

}

var education = {
    "schools": [
      {
          "name" : "Georgia Institute of Technology",
          "location" : "Atlanta, GA",
          "degree" : "M.S.",
          "majors" : ["Electrical Engineering", "Math"],
          "dates" : 1994,
          "url" : "http://www.gatech.edu/"
      },
      {
          "name" : "Emory University",
          "location" : "Atlanta, GA",
          "degree" : "B.S.",
          "majors" : ["Applied Physics"],
          "dates" : 1988,
          "url" : "http://www.emory.edu/home/index.html"
      }
    ],
    "onlineCourses": [
        {
            "title" : "Intro to HTML & CSS",
            "school" : "Udacity",
            "date" : 2015,
            "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title" : "How to use Git & Github",
            "school" : "Udacity",
            "date" : 2015,
            "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title" : "Responsive Images",
            "school" : "Udacity",
            "date" : 2015,
            "url" : "https://www.udacity.com/course/responsive-images--ud882"
        },
        {
            "title" : "Responsive Web Design Fundumentals",
            "school" : "Udacity",
            "date" : 2015,
            "url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
        },
        {
            "title" : "Javascript Basics",
            "school" : "Udacity",
            "date" : 2015,
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
          "title" : "Intro to Data Science in Python",
          "school" : "Thinkful",
          "date" : 2015,
          "url" : "https://www.thinkful.com/courses/learn-data-science-online/"
        },
        {
          "title" : "Learn to Program: The Fundamentals",
          "school": "Coursera",
          "date": 2013,
          "url": "https://www.coursera.org/course/programming1"
        },
        {
          "title" : "An Introduction to Interactive Programming in Python",
          "school" : "Coursera",
          "date" : 2013,
          "url" : "https://www.coursera.org/course/interactivepython1"
        },
        {
          "title" : "Principles of Computing",
          "school" : "Coursera",
          "date" : 2014,
          "url" : "https://www.coursera.org/course/principlescomputing1"
        },
        {
          "title" : "Computer Networks",
          "school" : "Coursera",
          "date" : 2014,
          "url" : "https://www.coursera.org/course/comnetworks"
        }, 
        {
          "title" : "Software Defined Networking",
          "school" : "Coursera",
          "date" : 2014,
          "url" : "https://www.coursera.org/course/sdn1"
         },
        {
          "title" : "Introduction to Computer Science and Programming, MITx - 6.00.1x",
          "school" : "edX",
          "date" : 2013,
          "url" : "https://courses.edx.org/courses/MITx/6.00.1x/3T2013/info"
         },
        {
          "title" : "Introduction to Statistics: Probability",
          "school" : "edX",
          "date" : 2014,
          "url" : "https://courses.edx.org/courses/BerkeleyX/Stat_2.2x/1T2014/info"
        }
    ]
};
education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    formattedSchool = formattedSchool.replace("#", education.schools[school].url);
    $(".education-entry:last").append(formattedSchool);
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
    //for (major in education.schools[school].majors) {
    //  $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors.join(", ")));
    //}
  }

  $("#education").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);
    formattedCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    formattedCourse = formattedCourse.replace("#", education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedCourse + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].date));
    $(".education-entry:last").append('<br>');
    //$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
  }
}

var work = {
  "jobs": [
    {
    "employer" : "Cisco Systems",
    "title" : "Solutions Architect",
    "location" : "Atlanta, GA",
    "dates" : "2000-present",
    "description" : "Create vertical/segment specific solutions for customers. Correlate business issues around technology and processes to create an architectural solution specific to a given customer or segment. Articulate this vision to Executives. Work across broad team of engineers and ensures a systems approach to the integrity of the customer solution which includes multiple technologies across the network and application layers. Develop and incubate new service strategies and articulate them within a technical and business framework. Influence support processes including Best Practice Documentation. Act as the technical specialist for the most complex architectures through identifying and prioritizing the architecturally significant requirements, determining the style of the system architecture (i.e., the major system patterns), and identifying the major functions of the system including the system data, hardware, and software components. Assist in the integration of the solution into an existing infrastructure, which would drive systems integration and implementation approaches.  Include the identification and integration of Third Party products and services into a cohesive solution design. Responsible for providing thought leadership through writing technical white papers, and mentoring of peers and managers on the network and architectural challenges. Responsible for providing consulting to top customers, Cisco sales, Product Management and Delivery teams in the development of multifaceted application and network design.",
    "projects" : ["Currently assigned to The Home Depot", "QoS design for new campus", "LAN/VSS design recommendations for new campus", "iWAN Design", "Performed modeling and analysis of background traffic on LTE DMVPN tunnel to help customer reduce LTE charges", "Identified need for customer VM team to automate network configuration and management tasks, wrote Python software to accomplish this", "Redesigned store routing infrastructure for MetroE project", "Designed FabricPath integration for customer network", "DMVPN Design for WAN backup over Internet", "Wrote script to identify rogue routers and switches in stores", "Redesigned store networks including BGP routing, QoS, and IOS firewall as part of voice project", "Identified major DHCP bug affecting stores and provided TAC and BU means to reproduct the bug", "Developed Python software and processes for the resulting store upgrades"]
    }
  ]
};
work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    $(".work-entry:last").append('<div class="row projects">');
    $(".projects:last").append('<h3 class="col-md-12">Recent Projects</h3>');
    $(".projects:last").append('<div class="col-md-11 col-md-offset-1 projects">');
    $(".projects:last").append('<ul class="projects" style="list-style-type:disc">');
    for (project in work.jobs[job].projects) {
      $(".projects:last").append('<li>' + work.jobs[job].projects[project] + '</li>');
    }
    $(".projects:last").append('</div');
    $(".work-entry:last").append('</div');
    $(".work-entry:last").append('</ul>');
  }
}

var projects = {
  "Projects": [
    {
    "title" : "Portfolio Website",
    "dates" : "2015",
    "description" : "Using bootstrap, html5 & css, built a responsive website displaying images, descriptions and links to each of the portfolio projects completed throughout Front-End Web Developer Nanodegree.",
    "images" : [ "images/logo.svg", "images/p1.png", "images/20120827_161708.jpg", "images/IMG_0496.JPG", "images/IMG_1067.JPG", "images/IMG_2190.JPG", "images/IMG_3767.JPG"]
    }
  ]
};
projects.display = function() {
  for (project in projects.Projects) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.Projects[project].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.Projects[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.Projects[project].description));
    $(".project-entry:last").append('<div class="row image-row">')
    for (image in projects.Projects[project].images) {
      $(".image-row:last").append('<div class="image-column col-md-3">')
      $(".image-column:last").append(HTMLprojectImage.replace("%data%", projects.Projects[project].images[image]));
      $(".image-column:last").append('</div')
    }
    $(".project-entry:last").append('</div>')
  }
}


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

/*function inName(name) {
  var finalName = name;
  finalName = finalName.split(" ");
  finalName[finalName.length - 1] = finalName[finalName.length - 1].toUpperCase();
  return finalName.join(" ");
}*/

//$("#main").append(internationalizeButton);
