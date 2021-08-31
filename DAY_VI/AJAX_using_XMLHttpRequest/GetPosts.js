function GetAllPosts(callback) {
  // make AJAX request & log the posts
  //1. Create instance of XMLHttpRequest Object
  //2. Open a connection
  //3. Make the async request
  //4. Register handler with an event - onreadystatechange
  //5. when response is received then log it/use it.
  var xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = function () {
    // console.log("Ready State : " + xmlHttpRequest.readyState);
    if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
      //console.log("The Response : " + xmlHttpRequest.responseText);
      //  return xmlHttpRequest.responseText; // Won't work !

      callback(null, xmlHttpRequest.responseText);
    } else if (
      xmlHttpRequest.readyState === 4 &&
      xmlHttpRequest.status !== 200
    ) {
      callback("Something went wrong ! - " + xmlHttpRequest.status, null);
    }
  };
  xmlHttpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xmlHttpRequest.send(); // place a async request !
}
