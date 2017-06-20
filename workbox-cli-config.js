module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{png,ico,html,js}"
  ],
  "swSrc": "src/sw.js",
  "swDest": "dist/sw.js",
  "globIgnores": [
    "../workbox-cli-config.js"
  ],
  "maximumFileSizeToCacheInBytes": 3 * 1024 * 1024,
  "runtimeCaching": [{
    "urlPattern": /^http:\/\/jsonplaceholder\.typicode\.com\//,
    "handler": "networkFirst"
  }]
};
