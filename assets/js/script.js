// Start of Declaring Global Variables
var tasks = ["", "", "", "", "", "", "", "", ""];
// End of Declaring Global Variables

// Start of Declaring Functions
// Load Schedule
var loadSchedule = function () {
    // Load Current Day
    var dateLine = $("#currentDay");
    var currentDate = moment().format("dddd MMMM Do");
    $(dateLine).text(currentDate);

    var timeSlotID = "";
    for (var i = 9; i < 18; i++) {
        timeSlotID = "#timeslot-" + i;
        $(timeSlotID).text(moment().hour(i).format("hA"));
    }

    // Load All Task for Each Time Block from Local Storage
    loadLocalStorage();
}

// Load Local Storage
var loadLocalStorage = function () {
    var loadedtasks = JSON.parse(localStorage.getItem("tasks"));

    if (loadedtasks) {
        tasks = loadedtasks;
    }

    var taskInfoID = "";
    // Update each Task Box
    for (var i = 9; i < 18; i++) {
        taskInfoID = "#hour-" + i;
        $(taskInfoID).text(tasks[i-9]);
    }

    // Update Color Code
    updateColorCode();
}

// Update Local Storage
var updateLocalStorage = function (ID) {
    var taskInfoID = "#hour-" + ID;
    var taskInfo = $(taskInfoID).val().trim(); 
    var index = parseInt(ID) - 9;
    tasks[index] = taskInfo;
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update Color Indicator
var updateColorCode = function () {
    // Get Current Time, in Hour
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
$("button").click(function() {
    var targetID = $(this).attr("id");
    targetID = targetID.replace("button-", "");
    updateLocalStorage(targetID);
})

// End of Declaring Functions

// Launch
loadSchedule();
