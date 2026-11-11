const CACHE_NAME = 'vitanex-pwa-v8';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon-192.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // Never intercept video streams, Range requests, or sw.js itself
  if (
    event.request.headers.get('range') ||
    event.request.destination === 'video' ||
    /\.(mp4|mov|webm|sw\.js)(\?|$)/i.test(url.pathname)
  ) {
    return;
  }

  // For HTML navigation: do NOT block iOS WebKit with CacheStorage lookup;
  // let native browser HTTP stack stream index.html immediately, fallback to cache only if offline.
  if (event.request.mode === 'navigate') {
    return;
  }

  // Pure Cache-First for immutable hashed JS/CSS/icons (zero redundant background fetches)
  if (/\/assets\/.*\.(js|css|png|jpg|svg|webp)$/i.test(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
  }
});
