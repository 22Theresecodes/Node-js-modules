// The timers module provides functions for scheduling and executing code at specified intervals.

//Scheduling a function to run after a delay
const timeout = setTimeout(() => {
    console.log('Delayed function');
  }, 2000);
  
  clearTimeout(timeout); // Cancel the timeout
  