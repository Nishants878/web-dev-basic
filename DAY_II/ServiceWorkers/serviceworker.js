var cacheName = "v3";

var cacheAssets = ["Index.html", "About.html", "js/script.js"];

// Listen to Install event
self.addEventListener("install", function (e) {
  console.log("Server Worker : Installed !");
  // configure the cache !
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        console.log("Service Worker : Caching files !");
        cache.addAll(cacheAssets);
      })
      .then(function () {
        self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function (e) {
  console.log("Service Worker :  Activated !");
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cache) {
          if (cache !== cacheName) {
            console.log("Service Wroker : Deleting Old cache !");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Listen to the fetch event
self.addEventListener("fetch", function (e) {
  console.log("Service Worker : Fetching !");
  e.respondWith(
    fetch(e.request).catch(function () {
      return caches.match(e.request);
    })
  );
});
