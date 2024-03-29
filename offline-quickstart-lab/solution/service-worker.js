(function() {
  'use strict';

  // TODO 2.1 - Cache static assets on install
  var CACHE_NAME = 'static-cache';

  var urlsToCache = [
    '.',
    'index.html',
    'styles/main.css'
  ];
  
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
    );
  });
  
  // TODO 2.2 - Fetch from the cache
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
      .then(function(response) {
        return response || fetchAndCache(event.request);
      })
    );
  });
  
  function fetchAndCache(url) {
    return fetch(url)
    .then(function(response) {
      // Check if we received a valid response
      if (!response.ok) {
        throw Error(response.statusText);
      }
      // ignore non-http such as chrome extensions
      if (!(url.url.indexOf('http') === 0)) return response;
      return caches.open(CACHE_NAME)
      .then(function(cache) {
        cache.put(url, response.clone());
        return response;
      });
    })
    .catch(function(error) {
      console.log('Request failed:', error);
      // You could return a custom offline 404 page here
    });
  }
  

})();
