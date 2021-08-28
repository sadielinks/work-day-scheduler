// copied currentDate code direct from moment.js

// Shows the date + time via moment.js, bless it
function dailyCalendar() {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
//callin it bb
dailyCalendar();

// Updates the time (to the second) per moment.js and displays in the bootsrap jumbotron
function currentTime() {
    setInterval(function () {
        dailyCalendar();
    }, 1000)
}
// callin it bb
currentTime()

// have the JQuery + HTML shake hands by connecting the class 'container'
function mainCalBody() {
    var calContainer = $('.container');
    // create a loop for the timeblocks with bootstrap
    for (i = 6; i < 20; i++) {
        var timeBlock = $('<div>').addClass('row time-block');
        var timeRow = $('<div>').addClass('col-md-1 hour d-flex justify-content-end pt-3');
        var textArea = $('<textarea>').addClass('col-md-10 description');
        var saveBtn = $('<button>').addClass('saveBtn col-md-1');
        // save icon from font awesome

        // template literals <3
        timeRow.text(`${i}:00`);
        timeBlock.attr('id', `hour-${i}`);

        timeBlock.append(timeRow, textArea, saveBtn);
        calContainer.append(timeBlock);

        // need to figure out how to have the times appear... hmmm
    }
    // callin the color coded block function within the main container
    colorScheduleBlocks();
}
// calling it bb
mainCalBody();

// Now to show the schedule blocks according to time of day
function colorScheduleBlocks() {
    // parseInt to make the moment argument into a string
    var momentHour = moment().hours();
    // connect to timeblock loop code from earlier
    $('.time-block').each(function () {
        // also using .split to help remove the id assignment in line 32, so that we only color code the time block 
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
// callin' on the DOM so the following functions (i.e. saving what is written in each textbox) will start once the document in loaded
$(document).ready(function () {
    // saving what is written in each textbox to local storage via creating an id
    $('.time-block').each(function () {
        var storageId = $(this).attr('id');
        var getEvent = localStorage.getItem(id);
        if (getEvent != null) {
            $(this).children('.event').val(getEvent);
        }
    })//;
})

