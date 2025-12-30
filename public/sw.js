const CACHE_NAME = "hounder-v2";
const urlsToCache = [
  "/",
  "/_next/static/css/app/layout.css",
  "/_next/static/chunks/webpack.js",
  "/_next/static/chunks/main-app.js",
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first, network fallback for images
  IMAGES: "cache-first",
  // Network first, cache fallback for API calls
  API: "network-first",
  // Stale while revalidate for static assets
  STATIC: "stale-while-revalidate",
};

// Install service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    }),
  );
  // Skip waiting to activate immediately
  self.skipWaiting();
});

// Activate service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
  // Take control of all pages immediately
  self.clients.claim();
});

// Cache-first strategy
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return new Response("Network error", { status: 408 });
  }
}

// Network-first strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || new Response("Network error", { status: 408 });
  }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);

  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.status === 200) {
      const cache = caches.open(CACHE_NAME);
      cache.then((c) => c.put(request, networkResponse.clone()));
    }
    return networkResponse;
  });

  return cachedResponse || fetchPromise;
}

// Fetch event - serve from cache when possible with network fallback
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Cache images from Unsplash with cache-first strategy
  if (url.hostname === "images.unsplash.com") {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Cache API calls with network-first strategy
  if (url.pathname.includes("/api/")) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Cache static assets with stale-while-revalidate strategy
  if (
    request.destination === "image" ||
    request.destination === "font" ||
    url.pathname.includes("_next/static")
  ) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  // Default: network-first for HTML pages
  if (request.destination === "document") {
    event.respondWith(networkFirst(request));
    return;
  }

  // Fallback for other requests
  event.respondWith(networkFirst(request));
});
