const CACHE_NAME = 'ar-ball-move-v1';

const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',

    'https://aframe.io/releases/1.4.0/aframe.min.js',

    'https://cdn.rawgit.com/jeromeetienne/AR.js/3.3.2/aframe/build/aframe-ar.js'
];

// Install Service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

// Fetch Assets
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});

// Activate Service Worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
           return Promise.all(
            cacheNames.filter(cache => cache !== CACHE_NAME).map(cache => caches.delete(cache))
           );    
        })
    );
});