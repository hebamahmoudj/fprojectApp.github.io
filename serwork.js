/* 
 Created list of files to cache
*/
cacheName ="resturant app";

var Files = [
'/img/1.jpg',
'/img/2.jpg',
'/img/3.jpg',
'/img/4.jpg',
'/img/5.jpg',
'/img/6.jpg',
'/img/7.jpg',
'/img/8.jpg',
'/img/9.jpg',
'/img/10.jpg',
'/index.html',
'/js/dbhelper.js',
'/js/main.js',
'/js/restaurant_info.js',
'/restaurant.html',
'/css/styles.css',
'/data/restaurants.json',
'/',
]
/* 
 Install function 
*/
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(cacheName).then(function(cache) {
     return cache.addAll(Files);
   })
 );
});
/*
 Fetch function 
*/
self.addEventListener('fetch',function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
    );
});
