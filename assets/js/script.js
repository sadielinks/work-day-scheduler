// assigning global variabels
var calArea = document.querySelector('#calendar');

// trying to make the header have date + time
// idk why I'm so nervous to use JQuery lolz
// copied currentDate code direct from moment.js
function dailyCalendar() {
$(document).ready(function () {
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    // display the date in the header
    function currentDay() {
        var currentDay = $("#currentDay").text(currentDate);
        return currentDay;
    }

    // hoping to update the time as user on page...?...!
    function currentTime() {
        setInterval(function () {
            currentDate();
        }, 1000)
    }

    currentDay()

// now we are going to start *trying* to display the calendar
var displayRow;
var displayColumn;

// create a loop for the timeblocks
    

})}



dailyCalendar();