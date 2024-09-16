'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f3de21de06ababf77fcf792c0122435c",
"assets/AssetManifest.bin.json": "35a17cf6d8c80d538c9a15cdfec2179d",
"assets/AssetManifest.json": "a9ccec820f3526636a40320208e2b852",
"assets/assets/images/casaroes.jpg": "11a31bf53211466feb6f5afb0da922b6",
"assets/assets/images/espaco_serenata.jpg": "f80f2c74d3e4294290289d3e89156df5",
"assets/assets/images/igreja.jpg": "7dec87a99762251216f408a9bea44931",
"assets/assets/images/loading.svg": "7df4e41819dbf859866d24d3d83cafed",
"assets/assets/images/monumento.jpg": "9447d5c073afa37cc94c64cb86a7cc40",
"assets/assets/images/museu_coripos.jpg": "43de3edccc60defd877f81f368601ff7",
"assets/assets/images/orla.jpg": "dd9ac79ea565e6c9794a8a0d01cc5105",
"assets/assets/images/pedra_mansazeira.jpg": "2a72ff35266cd831c3abb31a4bda0c3d",
"assets/assets/images/sinal_casaroes.jpg": "0d4f12b92f01da55cab4ff6396d4fdbf",
"assets/assets/images/sinal_espaco_serenata.jpg": "85e9dfc9532df9034e6a391aa168c226",
"assets/assets/images/sinal_igreja.jpg": "cc8f5f575b19dc589ecea7708527ee7d",
"assets/assets/images/sinal_monumento.jpg": "e195768ab8a04c7bf22eddeda0b08b9e",
"assets/assets/images/sinal_museu.jpg": "a70af9e50519993098882dbdd33bb84b",
"assets/assets/images/sinal_orla.jpg": "3f5eea792b97d806c8349258998410e0",
"assets/assets/images/sinal_pedra_mansazeira.jpg": "dd45dc7c2aaf701db57f3830148d2221",
"assets/assets/images/sinal_santa_maria.jpg": "3e15b235aa30b5242c14c0b0edcee272",
"assets/assets/images/sinal_soletrado_casaroes.jpg": "04148320c7ba75d381268042b0b885b8",
"assets/assets/images/sinal_soletrado_espaco_serenata.jpg": "ef5415129b3f0eae7f940a299b4dae0e",
"assets/assets/images/sinal_soletrado_igreja.jpg": "61161ccdd55633711a01fc7d1ca55ea3",
"assets/assets/images/sinal_soletrado_monumento.jpg": "dae9ad760bea881db73ba30b7d062946",
"assets/assets/images/sinal_soletrado_museu.jpg": "37f0355667eb360c86819fc78a0f7a49",
"assets/assets/images/sinal_soletrado_orla.jpg": "28ad11a71a881e4fc2c33d322a940f13",
"assets/assets/images/sinal_soletrado_pedra_mansazeira.jpg": "e77da8af312f970239ac004b59b3cbb9",
"assets/assets/images/sinal_turismo.jpg": "bbb3b5005f3108d40c4caaf714bf9d49",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "26b21e97b8a36dd76f4ba53134ca7021",
"assets/NOTICES": "19c2712491057bcc856b6c51df100725",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d6f7577986594661caa2f7f98368daf4",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "73979dbdd2f548b7d50515321a83980b",
"icons/Icon-512.png": "c12dd20fb86e2807b574a6a746262a64",
"icons/Icon-maskable-192.png": "73979dbdd2f548b7d50515321a83980b",
"icons/Icon-maskable-512.png": "c12dd20fb86e2807b574a6a746262a64",
"index.html": "1e2fc2d43984233eba607312767fae87",
"/": "1e2fc2d43984233eba607312767fae87",
"main.dart.js": "6c836c052941c4cdda29a08f6e88ceb5",
"manifest.json": "4c2c49c678cedca142a7473cdf2295fe",
"version.json": "bc4d172508cc2cf1e4b46f17176d1def"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
