function GetAllPosts() {
  return new Promise(function (resolve, reject) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
      if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
        resolve(xmlHttpRequest.responseText);
      } else if (
        xmlHttpRequest.readyState === 4 &&
        xmlHttpRequest.status !== 200
      ) {
        reject("Something went wrong - " + xmlHttpRequest.status);
      }
    };
    xmlHttpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xmlHttpRequest.send(); // place a async request !
  });
}
