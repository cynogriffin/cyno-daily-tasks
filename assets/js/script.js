// load any stored tasks on page refresh
var loadTasks = function() {
    $("textarea").each(function() {
        var id = $(this).attr("id");
        var value = localStorage.getItem(id);

        $(this).val(value);
    });
};

loadTasks();

// when a save button is clicked, save the tasks to local storage
$(".saveBtn").on("click", function() {

    $("textarea").each(function() {
        var id = $(this).attr("id");
        var value = $(this).val();
        localStorage.setItem(id, value);
    });
});

// set the current date at the top of the page
var setDate = function() {
    // use moment to retrieve and format the current day/date
    var currentDate = moment().format("dddd, MMMM Do");

    // add the day/date to the page
    $("#currentDay").text(currentDate);
}

setDate();

// audit the time blocks and change bg color according to current hour
var taskAudit = function() {
    // loop through each .hour div
    $(".hour").each(function() {
        // convert the hour text to 24hr format
        var taskHour = moment($(this).text(), ["ha"]).format("HH");

        // compare taskHour to current hour and change bg accordingly
        if (taskHour > moment().format("HH")) {
            $("#" + taskHour).addClass("future");
        } else if (taskHour === moment().format("HH")) {
            $("#" + taskHour).addClass("present");
        } else {
            $("#" + taskHour).addClass("past");
        }
    });
};

taskAudit();