// Start of Declaring Global Variables
// End of Declaring Global Variables

// Start of Declaring Functions
// Load Schedule
var loadSchedule = function () {
    var dateLine = $("#currentDay");
    var currentDate = moment().format("dddd MMMM Do");
    $(dateLine).text(currentDate);
}
// Update Local Storage

// Update Color Indicator
var updateColorCode = function () {
    var currentTime = moment().hour();
    var targetID = "";

    // Go Through Each Time Block, 9am to 17pm
    for (var i = 9; i < 18; i++) {
        targetID = "#hour-" + i;

        // clear Class past, present, future
        if ($(targetID).is(".past")) {
            $(targetID).removeClass("past");
        }
        if ($(targetID).is(".present")) {
            $(targetID).removeClass("present");
        }
        if ($(targetID).is(".future")) {
            $(targetID).removeClass("future");
        }

        // update the Color code
        if (i < currentTime) {
            $(targetID).addClass("past");
        } else {
            if (i == currentTime) {
                $(targetID).addClass("present");
            } else {
                $(targetID).addClass("future");
            }
        }
    } 
}

// Button Handler

// End of Declaring Functions

// Launch
loadSchedule();
updateColorCode();