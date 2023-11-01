
function doSomethingAsync(callback) {
  setTimeout(function () {
    console.log("Task completed!");
    callback();
    console.log("Callback function executed! Again..");
  }, 1000);
}

function onCompletion() {
  console.log("Callback function executed!");
}

doSomethingAsync(onCompletion);