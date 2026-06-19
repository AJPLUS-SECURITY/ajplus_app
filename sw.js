/* ================================================================
   AJPLUS SECURITY — SERVICE WORKER
   Inaruhusu "Install" prompt na caching ndogo ya faili za msingi.
   Database (Firebase) bado inahitaji internet — hii si offline app
   kamili, ni PWA shell tu.
================================================================ */

const CACHE_NAME = 'ajplus-security-v1';
const PRECACHE_URLS = [
  './index.html',
  './style.css',
  './manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* Network-first strategy — tunapendelea data mpya kutoka mtandao,
   tunarudi kwenye cache tu kama mtandao haupo (offline fallback) */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
