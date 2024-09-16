'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d677fcf9f29706ac398f71134121b0e6",
".git/config": "9a06e2da8878ec41d58c246f1da50f6e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "630183da66bc75e61531f4087e7670ed",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f82e6a9e44f7530914f0804559aa544c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6c38928e0e5427d0ef36d01da28870d2",
".git/logs/refs/heads/main": "6c38928e0e5427d0ef36d01da28870d2",
".git/logs/refs/remotes/origin/HEAD": "a70656943385a9e36b95568b03e54606",
".git/logs/refs/remotes/origin/main": "67e4b394e5e59444919ac6d771b597c9",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/03/d988557aad54a8872774c862f6db2f8d4a4e31": "c396810d7580730aa16a26f2cb9b7094",
".git/objects/0c/a481b1e77602a1fe148ba488ac1afe63f50778": "bd5859fd126d6e2812184e3eb269907c",
".git/objects/22/5e8e42c9f7edc2bf6cc6bde38433028cf44e15": "66429a7377cb8e6d62c256f63ba89911",
".git/objects/5a/ff94282f3507ea7ca238481c27089e36b0d20c": "8d7624bc9405df141aa169bcfd603d30",
".git/objects/88/ca3ce636c289ffcd748402f6cea5638825e994": "11f3ea1b6aee713358c5bdc277978eb4",
".git/objects/c9/d0be12972077d42d64cd550e06f1b93d56d476": "16346b82fd43b54385c17c3a21bf1572",
".git/objects/ce/748e9a27598efe8b66bac3bfe71f60eff7148a": "bc21eaacc6d59cfae7e15ab49280e225",
".git/objects/d3/9a70864d0982708e4a90d246d8dedcfb84ac6b": "e53b32bf417e10299afec965459585b1",
".git/objects/fd/676582bf97296326eb9ebdb490eea58d600898": "1c9508c2eb02a5a23c09378e606641e9",
".git/objects/pack/pack-f3d4b1cff60230cffe310a008112456926a25885.idx": "0e1f0f36bcc2aeb0f323a6d104789c91",
".git/objects/pack/pack-f3d4b1cff60230cffe310a008112456926a25885.pack": "7fa9bb699cb4667c3131d1122a12d52b",
".git/ORIG_HEAD": "dc7f66e2ed5f2512a5d11bef9f3f5bd4",
".git/packed-refs": "562c8df426880f989b9fe0f5268c20cf",
".git/refs/heads/main": "dc7f66e2ed5f2512a5d11bef9f3f5bd4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "dc7f66e2ed5f2512a5d11bef9f3f5bd4",
"assets/AssetManifest.bin": "f3de21de06ababf77fcf792c0122435c",
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
"index.html": "a06e996a19caa63dd63d63bbbddd947b",
"/": "a06e996a19caa63dd63d63bbbddd947b",
"LICENSE": "324d9cdfde9e1f9941f99dee1d1b0981",
"main.dart.js": "6c836c052941c4cdda29a08f6e88ceb5",
"manifest.json": "571252040b02de97feee166b497228b5",
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
