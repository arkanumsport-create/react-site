const CACHE_NAME = 'vitanex-pwa-v7';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon-192.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Never intercept video streams or Range requests (prevents 5-second mobile video buffering lock)
  if (
    event.request.headers.get('range') ||
    event.request.destination === 'video' ||
    /\.(mp4|mov|webm)(\?|$)/i.test(url.pathname)
  ) {
    return;
  }

  // Instant Stale-While-Revalidate: return cached app shell immediately, update cache in background
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const networkFetch = fetch(event.request)
          .then((networkResponse) => {
            if (
              networkResponse &&
              networkResponse.status === 200 &&
              networkResponse.type === 'basic'
            ) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || networkFetch;
      });
    })
  );
});
