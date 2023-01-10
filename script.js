var dateDisplayEl = $('#currentDay')
var rightNow = dayjs().format('H') 
var timeBlockEl = $('.hour-9')
var hour8El = $('#hour-8')
var hour12El = $('#hour-12')
var hour16El = $('#hour-16')

hour8El = dayjs().hour(8).format('H')
hour12El = dayjs().hour(12).format('H')
hour16El = dayjs().hour(16).format('H')

function colorRows() {
  if (rightNow < hour8El) {
    $(hour8El).addClass(past)
  } else if (rightNow > hour8El) {
    $(hour8El).addClass(present)
  } else {
    $(hour8El).addClass(future)
  }
}



// var workHours = [
//   hour8 = dayjs().hour(8).format('H'),
//   hour9 = dayjs().hour(9).format('H'),
//   hour10 = dayjs().hour(10).format('H'),
//   hour11 = dayjs().hour(11).format('H'),
//   hour12 = dayjs().hour(12).format('H'),
//   hour13 = dayjs().hour(13).format('H'),
//   hour14 = dayjs().hour(14).format('H'),
//   hour15 = dayjs().hour(15).format('H'),
//   hour16 = dayjs().hour(16).format('H')
// ]

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function displayDateAndTime(){
  var todaysDate = dayjs().format('dddd, MMMM D | h:m a')
  dateDisplayEl.text(todaysDate)
}

function colorRows() {
  if (rightNow < hour8El) {
    $(hour8El).addClass(past)
  } else if (rightNow > hour8El) {
    $(hour8El).addClass(present)
  } else {
    $(hour8El).addClass(future)
  }
}

console.log(rightNow > hour8El)
console.log(rightNow < hour8El)
console.log(rightNow == hour8El)

$(function () {


  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});

colorRows()
displayDateAndTime();