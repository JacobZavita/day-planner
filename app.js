var now = moment()

// Display current date and time at the top of the page
document.getElementById('currentDay').append(now)

const assignmentDate = new Date('May 22, 2021 11:30:00')

console.log(moment())

console.log(assignmentDate)


let timeNow = moment().format('ddd, MMM Do YYY')
let hourNow = moment().format('h')
let hourNow24 = parseInt(moment().format('HH'))
let hourNowInt = parseInt(hourNow)
let Timer

const hour9 = $('#hour-9').text()
const hour10 = $('#hour-10').text()
const hour11 = $('#hour-11').text()
const hour12 = $('#hour-12').text()
const hour13 = $('#hour-13').text()
const hour14 = $('#hour-14').text()
const hour15 = $('#hour-15').text()
const hour16 = $('#hour-16').text()
const hour17 = $('#hour-17').text()

const hour9Int = parseInt(hour9)
const hour10Int = parseInt(hour10)
const hour11Int = parseInt(hour11)
const hour12Int = parseInt(hour12)
const hour13Int = parseInt(hour13)
const hour14Int = parseInt(hour14)
const hour15Int = parseInt(hour15)
const hour16Int = parseInt(hour16)
const hour17Int = parseInt(hour17)


// let time = 

// if (moment.isBefore()) {
//   console.log('before')
// }

// if (moment.isAfter()) {
//   console.log('after')
// }

// if moment isBefore add class to make grey
// if moment isAfter add class to make green

// assign the time to an array and index it. That would be 9-17

colorCoding()

function colorCoding() {

  TIMER = setInterval(colorCoding, 1000)

  if (hourNow24 >= 9 && hourNow24 <= 17) {
    let hourInInt = parseInt($('#time' +i).text())
    if (hourInInt < 9) {
      hourInInt = hourInInt + 12
    }
    if (hourInInt == hourNow24) {
      $('#text' + i).css('backgrounf-color', '#FB8F78')
    }
    if (hourInInt < hourNow24) {
      $('#text' + i).css('background-color', 'lightgray');
    }
    else {
      $('#text' + i).css('background-color', 'lightgreen');
    }
  }

}
