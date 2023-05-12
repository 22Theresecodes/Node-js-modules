//The async_hooks module provides a way to track asynchronous operations and their contexts.

const async_hooks = require('async_hooks');

// Create a new resource
const myResource = {};

// Initialize a new AsyncHook instance
const asyncHook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId) {
    console.log(`Init: asyncId-${asyncId}, type-${type}, triggerAsyncId-${triggerAsyncId}`);
  },
  before(asyncId) {
    console.log(`Before: asyncId-${asyncId}`);
  },
  after(asyncId) {
    console.log(`After: asyncId-${asyncId}`);
  },
  destroy(asyncId) {
    console.log(`Destroy: asyncId-${asyncId}`);
  }
});

// Enable the AsyncHook instance
asyncHook.enable();

// Perform asynchronous operations
setTimeout(() => {
  myResource.someProperty = 'someValue';
  console.log('Asynchronous operation completed');
}, 2000);
