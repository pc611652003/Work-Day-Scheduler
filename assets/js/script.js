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

// Button Handler

// End of Declaring Functions

// Launch
loadSchedule();