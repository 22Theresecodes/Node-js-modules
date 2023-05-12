// events: Allows you to create and emit custom events.
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {
  console.log('Event emitted');
});
myEmitter.emit('event');  // Output: Event emitted
 