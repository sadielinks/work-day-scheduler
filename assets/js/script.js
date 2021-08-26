
// trying to make the header have date + time
// idk why I'm so nervous to use JQuery lolz
// copied currentDate code direct from moment.js
function dailyCalendar() {
    $(document).ready(function () {
        var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

        // display the date in the header
        function currentDay() {
            var currentDay = $('#currentDay').text(currentDate);
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
            for (i = 6; i < 19; i++) {
                var timeBlock = $('<div>').addClass('row time-block"');
                var timeRow = $('<div>').addClass('col-md-1 hour d-flex justify-content-end pt-3');
                var eventText = $('<textarea>').addClass('event col-md-10');
                var saveBtn = $('<button>').addClass('saveBtn cold-md-1')


                timeBlock.append(timeRow, eventText, saveBtn);
                mainCalBody.append(timeBlock);


            } mainCalBody();
        }

    })
}


dailyCalendar();