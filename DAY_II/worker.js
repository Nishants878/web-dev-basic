// 1. No access to window/document object
//2. No access to global variables
//3. Can access XMLHttpRequest -> AJAX request | fetch API
// 4. No access to localStorage | session Storage, but access to Indexed DB
onmessage = function (msgFromMainThread) {
  console.log(msgFromMainThread.data);
  //   console.log(this); // DedicatedWorkerGlobalScope

  var largeArray = [];
  for (let i = 0; i < 7000; i++) {
    largeArray[i] = [];
    for (let j = 0; j < 5000; j++) {
      largeArray[i][j] = Math.random();
    }
  }
  postMessage(largeArray[500][500]);
  // largeArray = null; -> to freeup the memory !
};
