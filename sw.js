var cacheName = 'wearDifferent';

var filesToCache = [
    './',
     './cart.html',
     './index.html',
     './test.html',
     './product_description.html?id=1',
     './product_description.html?id=2',
     './product_description.html?id=3',
     './product_description.html?id=4',

    './jquery-3.2.1/jquery.min.js',
    './bootstrap-3.3.7/dist/js/bootstrap.min.js',
    './js/app.js',
    './js/cart.js',
    './js/index.js',
    './js/product_description.js',

    './css/cart.css',
    './css/index.css',
    './css/product_description.css',
    './font-awesome-4.7.0/css/font-awesome.min.css',
    './bootstrap-3.3.7/dist/css/bootstrap.min.css',

    //'./fallback.json',
    './images/Levi\'s_logo.svg.png',
    './images/tshirt1.jpg',
    './images/tshirt2.jpg',
    './images/tshirt3.jpg',
    './images/tshirt4.jpg',
    './images/tshirt11.jpg',
    './images/tshirt21.jpg',
    './images/tshirt31.jpg',
    './images/tshirt41.jpg'
];




// Install Service Worker
self.addEventListener('install', function(event) {
    
        console.log('Service Worker: Installing....');
    
        event.waitUntil(
    
            // Open the Cache
            caches.open(cacheName).then(function(cache) {
                console.log('Service Worker: Caching App Shell at the moment......');
    
                // Add Files to the Cache
                return cache.addAll(filesToCache);
            })
        );
    });
    
    
    // Fired when the Service Worker starts up
    self.addEventListener('activate', function(event) {
    
        console.log('Service Worker: Activating....');
    
        event.waitUntil(
            caches.keys().then(function(cacheNames) {
                return Promise.all(cacheNames.map(function(key) {
                    if( key !== cacheName) {
                        console.log('Service Worker: Removing Old Cache', key);
                        return caches.delete(key);
                    }
                }));
            })
        );
        return self.clients.claim();
    });
    
self.addEventListener('fetch', event => {
    //console.log('fadsfafdas');

    const req = event.request;
    const url = new URL(req.url);

  if(url.origin == location.origin)
  {
      event.respondWith(cacheFirst(req));
      //console.log('inside if');
  }else{
  event.respondWith(networkFirst(req));
      //console.log('inside else');
  };
  });
   
  async function cacheFirst(req) {
      const cachedResponse = await caches.match(req);
      return cachedResponse || fetch(req); 
  }
  
  
  async function networkFirst(req){
  
      const cache = await caches.open('wearDifferent');
  
      try{
          const res = await fetch(req);
          cache.put(req, res.clone());
          //console.log('cache match');

          return res;
      }catch(error){
          const cachedResponse =  await cache.match(req);
         return cachedResponse || await caches.match('./fallback.json');
      }
  }
    
    // triggered everytime, when a push notification is received.
    self.addEventListener('push', function(event) {
    
      console.info('Event: Push');
    
      var title = 'My Block';
    
      var body = {
        'body': 'Click to see the latest News',
        'tag': 'news',
      };
    
      event.waitUntil(
        self.registration.showNotification(title, body)
      );
    });

    /*self.addEventListener('notificationclick', function(event) {
    
      var url = './index.html';
    
      event.notification.close(); //Close the notification
    
      // Open the app and navigate to latest.html after clicking the notification
      event.waitUntil(
        clients.openWindow(url)
      );
    
    });

    self.addEventListener('install', async event => {
        const cache = await caches.open('news-static');
        cache.addAll(staticAssets);
    });*/