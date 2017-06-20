importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/assets/Home.png",
    "revision": "23bb430d05b1db136b59ada8321d3f8e"
  },
  {
    "url": "/favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "/index.html",
    "revision": "862b32023d79bf05ee0a2f1197b2c5dd"
  },
  {
    "url": "/inline.bundle.js",
    "revision": "0d1f0b8087ef09663727952ba6da7e3a"
  },
  {
    "url": "/main.bundle.js",
    "revision": "9e15f73984638eeaee1c1db74db67abd"
  },
  {
    "url": "/polyfills.bundle.js",
    "revision": "e6d40bc4b9ae15336138cf1a2e4c7b29"
  },
  {
    "url": "/styles.bundle.js",
    "revision": "69ac5c61691fc1f824fcf5592feac9f6"
  },
  {
    "url": "/vendor.bundle.js",
    "revision": "a6818f87ff3c6253e2e558526cb17560"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/^http:\/\/jsonplaceholder\.typicode\.com\//, workboxSW.strategies.networkFirst());
