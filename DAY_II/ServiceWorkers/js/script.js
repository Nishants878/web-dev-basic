if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("serviceworker.js").then(
      function (registration) {
        console.log(
          "Service Worker : Registration successful !",
          registration.scope
        );
      },
      function (err) {
        console.log("Service Worker : Registration failed", err);
      }
    );
  });
}
