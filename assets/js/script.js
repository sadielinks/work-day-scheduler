// Shows the date + time (currentDate code direct from moment.js), bless it
function dailyCalendar() {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
dailyCalendar();

// Updates the time (to the second) per moment.js and displays in the bootsrap jumbotron
function currentTime() {
    setInterval(function () {
        dailyCalendar();
    }, 1000)
}
currentTime()

// have the JQuery + HTML shake hands by connecting the class 'container'
function mainCalBody() {
    var calContainer = $('.container');
    // create a loop for the timeblocks with bootstrap
    for (i = 6; i < 18; i++) {
        // will also be dynamically created the DOM elements
        var timeBlock = $('<div>').addClass('row time-block');
        var timeRow = $('<div>').addClass('col-md-1 hour d-flex justify-content-end pt-3');
        var textArea = $('<textarea>').addClass('col-md-10 description');
        var saveBtn = $('<button>').addClass('saveBtn col-md-1');
        // save icon from font awesome, but have to add 'i' class to use fontawesome icon, thanks tutor!
        // basically need to use create: <i class="far fa-check-square"></i>
        var saveBtnCheck = $('<i>').addClass('far fa-check-square');
        // template literals <3 to create id's that we can attach the time digits to
        timeRow.text(`${i}:00`);
        timeBlock.attr('id', `hour-${i}`);
        // now need to append/add to the DOM 
        timeBlock.append(timeRow, textArea, saveBtn);
        calContainer.append(timeBlock);
        saveBtn.append(saveBtnCheck);
    }
    // callin the color coded block function within the main container function
    colorScheduleBlocks();
}
mainCalBody();

// Now to show the schedule blocks according to time of day
function colorScheduleBlocks() {
    // parseInt to make the moment argument into a string
    var momentHour = moment().hours();
    // connect to timeblock class (seen in css)
    $('.time-block').each(function () {
        // also using .split to help remove part of the id assignment in line 32, so that we only color code the time block 
        var thisHour = parseInt($(this).attr('id').split('-')[1]);
        if (thisHour < momentHour) {
            $(this).addClass('past');
        } else if (thisHour === momentHour) {
            $(this).removeClass('past')
            // removing past class as we progress throughout the hours of the day
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
            // removing past + present classes for the future color coded schedule hours 
            $(this).removeClass('present')
            $(this).removeClass('past')
        }
    })
}

// local storage components
// callin' on the DOM so the following functions (i.e. saving what is written & then keeping it in each textbox) will start once the document in loaded
$(document).ready(function () {
    // will 'set' what is written in each textbox to local storage when 'save' icon is clicked
    $('.saveBtn').on('click',function () {
        // need to go 'up' into 'parent'
        var saveThisTime = $(this).parent().attr('id');
        // need to set this to the 'sibling'
        var saveThisEvent = $(this).siblings('.description').val();
        // actually telling the local storage to save specifically these items when click function happens
        localStorage.setItem(saveThisTime, saveThisEvent);

    });

    // will 'get' what is written in each textbox from local storage and remain on the page until deleted/changed
    $('textarea').each(function () {
        // again, assigning id's that will relate to the local storage info
        var storageId = $(this).parent().attr('id');
        var getEvent = localStorage.getItem(storageId);
        // if statement since default input ends up 'null', so *if* there's a value, it should show
        if (getEvent !== null) {
            $(this).val(getEvent);
        }
    });
});
// you've reached the end! what a ride :) 