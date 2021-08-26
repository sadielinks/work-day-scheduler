// assigning global variabels
var calArea = document.querySelector('#calendar');

// trying to make the header have date + time
// idk why I'm so nervous to use JQuery lolz
// copied currentDate code direct from moment.js
function dailyCalendar() {
$(document).ready(function () {
    var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    function currentDay() {
        var currentDay = $("#currentDay").text(currentDate);
        return currentDay;
    }

})}



dailyCalendar();