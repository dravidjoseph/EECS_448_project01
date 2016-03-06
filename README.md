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
5. Timer.js: Responsible for all dynamic timer functionality.
6. zoom.js: Responsible for all zoom functionality in the extended clock.
7. on-off.js: Responsible for "turning off" the extended clock.

with a font library to make the clock string look nicer.  The first three items in the extended clock were from the existing codebase and heavily extended; while the last five items were created with inspiration from the existing codebase and other areas.

These parts fulfill all of the requirements given in the above spec list.  In addition, the user is able to select any year and the clock will display the correct date, complete with the day of the week.

Francinaldo acted as the primary programmer on this project.  He was largely responsible for designing the new interface and spent most of his time on items 1,2,3,6, and 7.  He also functioned as a valuable knowledge resource, as he had the most experience working with Javascript and the Bootstrap framework.  

Dravid was in charge of the Stopwatch functionality and all accompanying documentation.  Initially, he tried to use clock.js as a base for the stopwatch, but found that it caused the clock's advancement to accelerate.  As a result, he built a new module, using timing functionality he found online and fitting it into the extended clock interface    

##Challenges

There were several challenges that appeared over the course of the project.

###Clock Image
The existing codebase displayed the time in HTML elements over a clock image.  Due to the difficulty of modifying the image, as well as the lack of extensibility that the image provided, the team decided to create our own display. Francinaldo was largely responsible for ensuring that the functionality from Project 1 was preserved while he created a new image.  Using the Boostrap framework, he was able to avoid much of the overhead that comes with designing an interface.

###Stopwatch
Dravid tried to use the existing  

##Future Functionality

##Retrospective