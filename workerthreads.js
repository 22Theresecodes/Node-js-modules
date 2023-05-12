//The worker_threads module enables running JavaScript code in separate threads, allowing parallel execution.
const { Worker } = require('worker_threads');

const worker = new Worker(`
  const { parentPort } = require('worker_threads');

  parentPort.on('message', (message) => {
    console.log('Received message:', message);
    parentPort.postMessage('Hello from worker thread!');
  });
`);

worker.on('message', (message) => {
  console.log('Received message from worker:', message);
  worker.terminate();
});

worker.postMessage('Hello from main thread!');
