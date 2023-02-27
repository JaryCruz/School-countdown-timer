const daysElement = document.querySelector('[data-days]')
const hoursElement = document.querySelector('[data-hours]')
const minutesElement = document.querySelector('[data-minutes]')
const secondsElement = document.querySelector('[data-seconds]')

const finalDate = new Date('May 26, 2023 00:00:00').getTime()

const timer = () => {
  const now = new Date().getTime()
  let diff = finalDate - now
  // Showing An Alert When Counter Time Finishes
  if (diff < 0) {
    alert('School Is Ending')
  }

  // Calculate Time Left
  let days = Math.floor(diff / (1000*60*60*24))
  let hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60))
  let minutes = Math.floor(diff % (1000*60*60) / (1000*60))
  let seconds = Math.floor(diff % (1000*60) / 1000)
  
  // Add Zeros If Less Than 10
  days <= 9 ? days = `0${days}` : days
  hours <= 9 ? hours = `0${hours}` : hours
  minutes <= 9 ? minutes = `0${minutes}` : minutes
  seconds <= 9 ? seconds = `0${seconds}` : seconds

  daysElement.innerText = days
  hoursElement.innerText = hours
  minutesElement.innerText = minutes
  secondsElement.innerText = seconds
}

timer()

setInterval(timer, 1000)