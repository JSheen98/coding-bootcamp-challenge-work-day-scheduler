var dateDisplayEl = $('#currentDay')
var timeDisplayEl = $('#currentTime')
var rightNow = dayjs().format('H')

var workHours = [
  hour8El = $('#hour-8'),
  hour9El = $('#hour-9'),
  hour10El = $('#hour-10'),
  hour11El = $('#hour-11'),
  hour12El = $('#hour-12'),
  hour13El = $('#hour-13'),
  hour14El = $('#hour-14'),
  hour15El = $('#hour-15'),
  hour16El = $('#hour-16')
]

// (document).ready() function to ensure the page loads first before any jQuery starts functioning
$(function () {

  // Function that displays the date and time at the top of the page
  function displayDateAndTime() {
    var todaysDate = dayjs().format('📅 dddd, MMMM D')
    var currentTimeDisplay = dayjs().format('🕗 h:m a')
    timeDisplayEl.text(currentTimeDisplay)
    dateDisplayEl.text(todaysDate)
  }

  // Function that loops through the workHours array, and sets the color theme for the hour block depending on the added class (past, present, or future)
  function colorRows() {

    for (var i = 0; i < workHours.length; i++) {
      var blockHour = parseInt(
        $(workHours[i]).attr('id').split('-')[1]
      )
      if (blockHour < rightNow) {
        $(workHours[i]).addClass('past')
      } else if (blockHour == rightNow) {
        $(workHours[i]).removeClass('past')
        $(workHours[i]).addClass('present')
      } else {
        $(workHours[i]).removeClass('past')
        $(workHours[i]).removeClass('present')
        $(workHours[i]).addClass('future')
      }
    }
  }

  // Function to save input text to local storage
  function saveText() {
    
    
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  colorRows()
  displayDateAndTime();

});

