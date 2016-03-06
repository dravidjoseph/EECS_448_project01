#Group 1 Project 2 Presentation
Team Members: Dravid Joseph, Francinaldo de Almeida Pereira, Jinuk Park, Richard Aviles

##Overview

This project (hereafter referred to as the "extended clock") was an extension of Liia Butler, Josiah Gray, and Paul McElroy's clock project (hereafter referred to as the "existing codebase").  We were to ensure the following items were present in our clock:

1. All requirements from Project 1.
	* Able to set the time.
	* 12-hour or 24-hour display.
	* See the hour, minutes and seconds.
2. Stop Watch Mode
	* Start the stopwatch.
	* Stop the stopwatch and display the elapsed time at that moment.
	* Resume the stopwatch from that moment.
	* Reset the stopwatch to zero.
3. Calendar/Day of the Week
	* User must be able to select a month and time.
	* From that month and time, assuming 2016 is the year, display the day.
	* The day of the week should change at midnight.
4. Display Control
	* User can zoom in and out to some threshold.
	* User can turn off the display with the background processes running (or appear to be running).
	* User, after setting time, may enter any mode without losing progress in other modes.
		
##Description

Our extended clock consists of seven major parts:

1. index.html: Responsible for displaying the finished clock to the user.
2. clockstyle.css: Responsible for all clock styling and font
3. clock.js: responsible for all dynamic clock functionality.
4. stopwatch.js: Responsible for all dynamic stopwatch functionality.
5. timer.js: Responsible for all dynamic timer functionality.
6. zoom.js: Responsible for all zoom functionality in the extended clock.
7. on-off.js: Responsible for "turning off" the extended clock.

with a font library to make the clock string look nicer.  The first three items in the extended clock were from the existing codebase and heavily extended; while the last five items were created with inspiration from the existing codebase and other areas.

These parts fulfill all of the requirements given in the above spec list.  In addition, the user is able to select any year and the clock will display the correct date, complete with the day of the week.

Francinaldo acted as the primary programmer on this project.  He was largely responsible for designing the new interface and spent most of his time on items 1,2,3,6, and 7.  He also functioned as a valuable knowledge resource, as he had the most experience working with Javascript and the Bootstrap framework.  His interface organized the different clock modes into tabs, while displaying common functionality in a way that was accessible to all modes.  

Dravid was in charge of the Stopwatch functionality and all accompanying documentation.  Initially, he tried to use clock.js as a base for the stopwatch, but found that it caused the clock's advancement to accelerate.  As a result, he built a new module, using timing functionality he found online and fitting it into the extended clock interface.  Fortunately, the code was modular enough to accomodate the change easily.

Along with the documentation, Dravid organized the repo, removing unneeded assets from the existing codebase that no longer applied.

Jinuk was responsible for the Timer functionality.  Using the clock.js as a base for his implementation, he managed to create a fully-functioning timer tab.

Richard was responsible for date/time functionality, creating the initial architecture for displaying the correct day of the week.       

##Challenges

There were several challenges that appeared over the course of the project.

###Clock Image
The existing codebase displayed the time in HTML elements over a clock image.  Due to the difficulty of modifying the image, as well as the lack of extensibility that the image provided, the team decided to create our own display. Francinaldo was largely responsible for ensuring that the functionality from Project 1 was preserved while he created a new image.  Using the Boostrap framework, he was able to avoid much of the overhead that comes with designing an interface.

###Stopwatch
Dravid tried to use the existing clock.js, but could not get it to work as anticipated, since it also needed to display milliseconds.  After lots of online reading, he found a method of encapsulating the stopwatch as an object.  Along with some functions to format the time string, it became easier to link the stopwatch functionality to the clock.

###Timer
The timer had a substantial number of moving parts that Jinuk needed to take care of.  First, he imported clock.js file into his timer.js, changing variables as needed.  Soliciting feedback from other members of the team, he made improvements to the timer to make it more useful to the consumer.

###Language Familiarity 

With the exception of Francinaldo, none of the team members had any experience in web languages.  Francinaldo really got most of the project together, creating a project environment that made the less-experienced members much more able to contribute.  Thanks to his early intervention, the other team members were able to finish their functionality before the code freeze.

###Assigning Tasks

Since more tasks needed to be accomplished, it was easier to divide tasks by functionality rather than by class files, as described as above.  The team was active on Slack; whenever there were questions or extra functionality that needed to be added, a team member would go and add the functionality.  Even though there were nominal divisions of labor, team members took the initiative to fix problems that arose, assuming the fix was trivial enough.

  
##Future Functionality

Our primary concern was ensuring the clock met all of the requirements and did so in a manner that was relatively elegant and intuitive.  With that said, a lap timer for the stopwatch (as evidenced by the naming of some variables) was considered.  An audible alarm for the timer to alert the user was also considered.  Ultimately, the clock's required functionality proved to be enough of a challenge to consume the team's time.

##Retrospective

First, we probably should have started slightly earlier.  Due to scheduling constraints, Richard was unable to participate as much as he would have liked.  Also, we would have been able to extend the functionality if we had more time.  Overall, this project required much more sharing of tasks and resources, and required the team to communicate on a level that was not really required by the first project.  The team rose to the challenge and ultimately delivered an extended clock that both meets and exceeds the stated requirements.  We are clearly starting to gel as a team and it is easier to recognize the assets that each team member brings to the table.

#Sources

1.  Thanks to Liia, Josiah, and Paul for leaving us with an easily extendable codebase
2.  Bootstrap framework (for interface): getbootstrap.com
3.  Giulia Alfonsi, for her watchObject concept: github.com/electrig
4.  w3schools.com, for their event timing tutorials.