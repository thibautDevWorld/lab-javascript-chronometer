class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if(callback) {
      callback();
    }
    else {
      
      this.intervalId = setInterval(() => {
        // console.log(this.currentTime)
        this.currentTime++
      }, 1000)
    }

  }

  getMinutes() {
    let currentMinutes = Math.floor(this.currentTime /60)
    console.log(currentMinutes)
    return this.currentTime
  }

  getSeconds() {
    let currentSeconds = this.currentTime % 60
    return currentSeconds;
  }

  computeTwoDigitNumber(value) {
    return ('0' + num).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minStr = computeTwoDigitNumber(getMinutes);
    let secStr = computeTwoDigitNumber(getSeconds)
    return minStr +':' +secStr;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
