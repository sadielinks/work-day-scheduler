// trying to make the header have date + time
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

// now we are going to start *trying* to display the calendar
// var timeRow;
// var timeColumn;
// var calHours = [
//     '6 am',
//     '7 am',
//     '8 am',
//     '9 am',
//     '10 am',
//     '11 am',
//     '12 pm',
//     '1 pm',
//     '2 pm',
//     '3 pm',
//     '4 pm',
//     '5 pm',
//     '6 pm'
// ]


// have the JQuery + HTML shake hands by connecting the class 'container'

function mainCalBody() {
    var calContainer = $('.container');
    // create a loop for the timeblocks with bootstrap
    for (i = 6; i < 20; i++) {
        var timeBlock = $('<div>').addClass('row time-block"');
        var timeRow = $('<div>').addClass('col-md-1 hour d-flex justify-content-end pt-3');
        var textArea = $('<textarea>').addClass('event col-md-10');
        var saveBtn = $('<button>').addClass('saveBtn cold-md-1');

        timeBlock.attr("id", i);
        timeBlock.append(timeRow, textArea, saveBtn);
        calContainer.append(timeBlock);

        // need to figure out how to have the times appear... hmmm
    }
}
// calling it bb
mainCalBody();

// Now to show the schedule blocks according to time of day
function colorScheduleBlocks() {
    // parseInt to make the moment argument into a string
    var hour = parseInt(moment().format('HH'));
    // connect to timeblock loop code from earlier
    $('.time-block').each(function () {
        // BCS LA suggested using .this but I'm not able to see the blocks... heh
        var thisHour = parseInt($(this).attr("id"));
    if (thisHour < hour) {
      $(this).addClass("past");
    } else if (thisHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
    })
}
// callin it baby
colorScheduleBlocks();



// local storage components 