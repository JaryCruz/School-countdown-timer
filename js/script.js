const daysElement = document.querySelector("[data-days]")
const hoursElement = document.querySelector("[data-hours]")
const minutesElement = document.querySelector("[data-minutes]")
const secondsElement = document.querySelector("[data-seconds]")

const finalDate = new Date("May 23, 2024 00:00:00").getTime()

const timer = () => {
  const now = Date.now()
  let waitingTime = finalDate - now

  // Show An Alert When Counter Time Finishes
  if (waitingTime < 0) {
    alert("High School has ended")
  }

  // Calculate Time Left
  let days = Math.floor(waitingTime / (1000 * 60 * 60 * 24))
  let hours = Math.floor(
    (waitingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  let minutes = Math.floor((waitingTime % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((waitingTime % (1000 * 60)) / 1000)

  // Add Zeros If Less Than 10
  days <= 9 ? (days = `0${days}`) : days
  hours <= 9 ? (hours = `0${hours}`) : hours
  minutes <= 9 ? (minutes = `0${minutes}`) : minutes
  seconds <= 9 ? (seconds = `0${seconds}`) : seconds

  daysElement.innerText = days
  hoursElement.innerText = hours
  minutesElement.innerText = minutes
  secondsElement.innerText = seconds
}

timer()

setInterval(timer, 1000)
