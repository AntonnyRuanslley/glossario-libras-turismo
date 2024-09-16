'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f44e91e7f6af0c7c12a181f15eb9c3d8",
".git/config": "9a06e2da8878ec41d58c246f1da50f6e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "59450e2f549ef815e6b9c8c47cbeca1e",
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
".git/index": "a030ba64fd22c7eba12119baf0f9795a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "79c9f8f43da306baecd998d3e44dfef5",
".git/logs/refs/heads/main": "79c9f8f43da306baecd998d3e44dfef5",
".git/logs/refs/remotes/origin/HEAD": "a70656943385a9e36b95568b03e54606",
".git/logs/refs/remotes/origin/main": "49923f8c58e4136eaf94a9a1bf8fe227",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/03/d988557aad54a8872774c862f6db2f8d4a4e31": "c396810d7580730aa16a26f2cb9b7094",
".git/objects/03/e6e2ed515eb31c9f9e38a904c9999f992235cf": "854a9630bb9e4719ad1e1ebacb28d8fa",
".git/objects/0c/a481b1e77602a1fe148ba488ac1afe63f50778": "bd5859fd126d6e2812184e3eb269907c",
".git/objects/0e/b093f8d2c8e0e8e63c09b7a91836df77fb6336": "af91d3d0985170f0d2a8277e5736b6d4",
".git/objects/0f/61fade767b666c4612ff353142b572edd2ddb5": "3dc6e96d9b803a66818e6eefe6d2b705",
".git/objects/16/c8c33a8e0eddeaac997d759d1ec06c86171bf2": "4c3114f4455663251be9770e30f6ff85",
".git/objects/22/5e8e42c9f7edc2bf6cc6bde38433028cf44e15": "66429a7377cb8e6d62c256f63ba89911",
".git/objects/27/9746c778c166a564b3f77e43594ddd7c24554e": "12bad1ea6a3b563149206a0b603b0f38",
".git/objects/42/73ce83c9224e827f178da2c1636330ee0695bf": "ee0825c5156f424d7c9e5045822039d4",
".git/objects/42/fd91d37e94edf651656a95e6f0a2880ba6b8a2": "6fc99b3fd20c0a135552637127706869",
".git/objects/43/3efda8abd9b4a4215f59a83b34eda313d83af9": "8582648386be847391fce1f55275372a",
".git/objects/46/583211ac8470f5d3a253327934d4e2d628ea28": "f15daebfe12080b3f0eda760abe6df41",
".git/objects/4e/f8d549640c64603d8d2c3716fd3824b7028188": "de41c2aa5181c33c9ca2698b69da5102",
".git/objects/54/988a15e9eca921ceba3d693b0a08f3b9f461a0": "a1dfe6ed546654b4d2a4c371ec66ac55",
".git/objects/5a/ff94282f3507ea7ca238481c27089e36b0d20c": "8d7624bc9405df141aa169bcfd603d30",
".git/objects/5e/732abad1874260b34b583ab9449bf2f96c2759": "1b094484dd0c0566882fec6bdf447501",
".git/objects/65/7d1eb425b1048bba3c8c9fd7514b8a37fca8e4": "edb1f75f144af020823297f92ba3b522",
".git/objects/70/f1cb553ea2cc77bc9f6f57c1bf1bd4b9162e28": "d76b390199eb677a70b2f85489f192c4",
".git/objects/81/6ae3b8732055569171b7990451b03be77261b7": "7e99682f08fa2c286192ae9da61b30b6",
".git/objects/82/d0ca9fe7fc39c853ddff0eeadbbdede2a075b0": "4c33fea834800d7e57832ab4be47afdd",
".git/objects/88/ca3ce636c289ffcd748402f6cea5638825e994": "11f3ea1b6aee713358c5bdc277978eb4",
".git/objects/8d/f868f5d5579047a705358dbff8d479c2f6d811": "e18cd38add0b2a775a40f589102a68ea",
".git/objects/99/20fc9dbef0eb4a801e2260f435b810bf999914": "b1d3844fe09971d58136d56187b3cc51",
".git/objects/9e/654c1b101403dd59ece997bc131fd84b9a87c7": "5c3586dabbd808914fa9c35f7ef71009",
".git/objects/a2/69003aeb30e020c85d2473f68f18792adf6cc0": "873bd3cc661d96748b60fadf637e6060",
".git/objects/a7/6974e6bbb45e0280116c4879ce9ae08e4d1c7b": "efa9444fa42c1f93500f17d5aedcabea",
".git/objects/a8/c77d7bad2485cb3fec02455cab831fb5fc2814": "1c61760f290568e7e2dcb6c74d1a5e16",
".git/objects/b4/2f1c7e037351c1e12f41f1df72771b5c1e4dd8": "3317272a370da615123954c082c5ec81",
".git/objects/bc/c39d8bb49f83c20a18fb15acfbbb424e1b46bd": "f5d9535aedf46e11badbbe4164395d25",
".git/objects/c2/8e1f63f4744b87b8a8d0492af5bef7f4600ccf": "d00a62e30c29d15c507a7c4969d2f1bb",
".git/objects/c9/d0be12972077d42d64cd550e06f1b93d56d476": "16346b82fd43b54385c17c3a21bf1572",
".git/objects/ce/748e9a27598efe8b66bac3bfe71f60eff7148a": "bc21eaacc6d59cfae7e15ab49280e225",
".git/objects/d3/9a70864d0982708e4a90d246d8dedcfb84ac6b": "e53b32bf417e10299afec965459585b1",
".git/objects/ea/6597e428b0f3cdd536def0f9a48b83adca6693": "e02f8621457bbcf0745ae075ba0054b7",
".git/objects/fa/e8fe9907f13105125bc64d94519a9eb0722b22": "d653d040666d32a449b09f0c8acc0af2",
".git/objects/fd/676582bf97296326eb9ebdb490eea58d600898": "1c9508c2eb02a5a23c09378e606641e9",
".git/objects/ff/90d7aa34d6c5ae142022c2a556e524948f96e4": "e4044cadfbb61300e527e445eba51aed",
".git/objects/pack/pack-f3d4b1cff60230cffe310a008112456926a25885.idx": "0e1f0f36bcc2aeb0f323a6d104789c91",
".git/objects/pack/pack-f3d4b1cff60230cffe310a008112456926a25885.pack": "7fa9bb699cb4667c3131d1122a12d52b",
".git/ORIG_HEAD": "28391f259b14659de3bcd9523b6be928",
".git/packed-refs": "562c8df426880f989b9fe0f5268c20cf",
".git/refs/heads/main": "28391f259b14659de3bcd9523b6be928",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "28391f259b14659de3bcd9523b6be928",
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
"index.html": "dce1d64ae1c8f75c23111ae6c98b4f6a",
"/": "dce1d64ae1c8f75c23111ae6c98b4f6a",
"LICENSE": "324d9cdfde9e1f9941f99dee1d1b0981",
"main.dart.js": "eb5f67755e4eba232a51b381980d020c",
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
