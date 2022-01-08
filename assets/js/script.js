var setDate = function() {
    var currentDate = moment().format("dddd, MMMM Do");

    $("#currentDay").text(currentDate);
}

setDate();

var taskAudit = function() {
    var taskHour = $(".hour").text();

    var hour = moment(taskHour, ["ha"]).format("HH");

    if (hour > moment().hour()) {
        $("textarea").addClass("bg-success")
    };
};

taskAudit();