import serviceWorkerUri from './serviceWorkerUri';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('werewolf').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/launcher-icon-1x.png',
      '/launcher-icon-2x.png',
      '/launcher-icon-4x.png',
      serviceWorkerUri,
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0',
    ])),
  );
});

self.addEventListener('fetch', (event) => {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)),
  );
});
