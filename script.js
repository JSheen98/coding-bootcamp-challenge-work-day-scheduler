var rootEl = $("#root");
var dateDisplayEl = $("#currentDay");
var timeDisplayEl = $("#currentTime");
var rightNow = dayjs().format("H");
var userInput = $(".description");

// Array for work hours (these are my normal work hours 8-4)
var workHours = [
  (hour8El = $("#hour-8")),
  (hour9El = $("#hour-9")),
  (hour10El = $("#hour-10")),
  (hour11El = $("#hour-11")),
  (hour12El = $("#hour-12")),
  (hour13El = $("#hour-13")),
  (hour14El = $("#hour-14")),
  (hour15El = $("#hour-15")),
  (hour16El = $("#hour-16")),
];

// (document).ready() function to ensure the page loads first before any jQuery starts functioning
$(function () {

  // Function that displays the date at the top of the page
  function displayDate() {
    var todaysDate = dayjs().format("📅 dddd, MMMM D");
    dateDisplayEl.text(todaysDate);
  }

  // Function that loops through the workHours array, and sets the color theme for the hour block depending on the added class (past, present, or future)
  function colorRows() {
    for (var i = 0; i < workHours.length; i++) {
      var blockHour = parseInt($(workHours[i]).attr("id").split("-")[1]);
      if (blockHour < rightNow) {
        $(workHours[i]).addClass("past");
      } else if (blockHour == rightNow) {
        $(workHours[i]).removeClass("past");
        $(workHours[i]).addClass("present");
      } else {
        $(workHours[i]).removeClass("past");
        $(workHours[i]).removeClass("present");
        $(workHours[i]).addClass("future");
      }
    }
  }

  // Function to save input text to local storage
  $(".saveBtn").on ("click", function (event) {
    event.preventDefault()
    localStorage.setItem(
      this.parentElement.id,
      this.previousElementSibling.value
    );
  });

  // Function that loads in saved local storage items
  function textAreaFill() {
    for (var i = 0; i < userInput.length; i++) {
      userInput[i].value = (localStorage.getItem(userInput[i].parentElement.id))
    }
     
  }

  textAreaFill();
  colorRows();
  displayDate();
});
