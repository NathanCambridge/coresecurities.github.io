'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6cbe9d3dffc9c03c09c56cd355ea79fc",
".git/config": "0e6eedebf3976ad6a81dc4df84f6df46",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d6b832640d97293c8af5269f789194ac",
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
".git/index": "c5742cada8eaf11ed2417ea629786e1c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "077d5816eee8e794b30f51ce6f8e2930",
".git/logs/refs/heads/core": "66ae014722c23116daaa1c94832306a5",
".git/logs/refs/heads/main": "f0b0d9f0e2973a3504a1e5bf5a86c248",
".git/logs/refs/heads/master": "05cac4992fb5625bb2294a13bef08ad2",
".git/logs/refs/remotes/origin/core": "dc36d2f55942a93b79d348ce8f877da4",
".git/logs/refs/remotes/origin/main": "64e77d83925c23796039c29632093420",
".git/logs/refs/remotes/origin/master": "3bd5d4ef964b3fd3c5f5091b508518a1",
".git/objects/01/f06483e10befa70cc1ed79eb24da4e86990456": "2ba5a5dd8f78f8aaac3dde4e6f19e89a",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/8163dca505ddf1b3f130cc36b4350f4f8f2c7b": "bd1da6281dfab0fa2853cba745d06e92",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/4d05878ab6e15090969c0fd07b09d668ec3d85": "3756ec07dcba67f73bb47aafb2a08804",
".git/objects/1c/292d6b64f135d66557c8e6187fd0cde6dbcef6": "b429b99307f0893d41453c8bb4137ad4",
".git/objects/1d/b4c4cb08c70fd270556aec6e01f60cd4873051": "434cf9e2476b120c0b95c4d6ec62cf0e",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/26/84acfc1f9011c95174b39711210e28b1c27ea6": "63b14dfce9aa39ed8f3c462a3717a5dd",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/0739a435bd6d74bc8fe13aab5b8c522cab3b0b": "81d183c77eaea3770a15de62d14d5763",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/bfe62ac101de92a6634ffe6ce67bb725e5b6e5": "a3cb9dfca66319fdc630ea9da787bb8b",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/adba66783c9402eb3298b12e56d44a3dcdcfe0": "58602ae5c24522d4cc6efe3a1429a31e",
".git/objects/45/9e872f56867c17c7cc1b4a3e6e32b6a39e9c97": "e50e5e75af233e086d3455e208e29469",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/0dcc1a9373c5aeef72e1f50d1c17104c2bfecd": "46528220a7866de65b69a1cfaae33cd1",
".git/objects/53/4f339abff03eacc13ad6ac29815dc333aaa38c": "2f8d4e802c7cbbb6069cf14b483fa7ce",
".git/objects/56/05f543d550ef1040b8b2d1500240e3aff708c6": "6dab9f43c6c82dfd62a8f26bbd8140b1",
".git/objects/58/4fe2c76f5ed0c8f91a7ffd7bac858aa882eeaa": "a0a5f98ffc46e2244f4b3184281ea07f",
".git/objects/5f/f8a719ac1f6d6203d6e23804b0083e5f9e3ada": "ffa891594e8f1280af46eef0dc500254",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/ee888dc4ee38f6bf9df47b68d9c326d79d9f8f": "1e1b4289b091b4145394dc9824399abb",
".git/objects/65/1d55e143e73b75cc154aeca27c4a2950b942f1": "362cf59f8eb083e624962649e66c6acf",
".git/objects/6f/8fead5600be53bf6a317dd0401844d544defc5": "1b0f3998c49b02ad857e1d3b97802e33",
".git/objects/6f/ac15fa01aae5596410c9140870ab454cb0c43e": "b430d0b7ac8b416d1ec1c7a3de14cb05",
".git/objects/72/02083d87eb2b117cd018b3ec840fc09215b018": "cc485a268ee42d4d96682a8990716b92",
".git/objects/75/edcbca6d57838e4880951fdb08b8c54a08267c": "321523449dc75659f2286a93fd9b4d4f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f7f7f4ae863afebac069c2e88900a6ed71ad6e": "aef14fcffc6e5d6aaaf9d25d8d349cbe",
".git/objects/7e/49ca0bbc3513a94e61c65bd7ceb984e4eaa536": "c8f5a9de7530c6314139ef13b0f9f0f5",
".git/objects/81/6374523f728efc691b9758611db617a49e606b": "c38e2382843c1ebbe142aaf42d3205e1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/94/26963206108deed6d8dd69eb0b0db04ce8de4d": "b13df1390dfaf1a0b0ceab3e66c703d5",
".git/objects/9f/51de64a3f2b77f7b3d97a01d8dc22a1ddcdc19": "f16465c3ac33c637a41a6ab716d8f604",
".git/objects/a0/fb6751de3e3dba687f61020f7ebb0fc073bd0d": "4700f5d3daed9fb7f28d73e8999b1201",
".git/objects/a7/09991e1dc6b429f1de2a7b41245311e8056308": "32531acd8ab2332db45904f4bf877e58",
".git/objects/b1/bce3557d4a815075caca58df439b517930427c": "893c617358c2472282397170216de67e",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/3374ef9e8761ac0ebd1c99575bfce5af137e15": "ec6aaf77f86de4a4818dc8fa01757636",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e0a18b813e09b30301655203d0dbdf3ab75038": "b313b5456cdf1dd897ff350f148292de",
".git/objects/bf/4053db0615a1daf7fefc251aa4c9a4c5551d63": "6c894d21da51f9253cae0a7a08b9eae2",
".git/objects/c0/30f4244f6b796d0b4daab936a8adfc3e849edc": "a25c19b59e0ec29ba5dfd13678acd399",
".git/objects/c2/2b6075679fbd8e31b938e505a9ee504066e20f": "480c04b4c0b15a198cbb4cbc768fda0b",
".git/objects/c7/39a0b53dece946b350e1e3716499a9fee3f8dd": "8acd6cb4f7d93413d8e0c2756469260a",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ca/db00ffe3b0f5408e1df8e302e954f7ff5bf500": "431f2d9cf24aabc9c13e69c6bc9f6aea",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/92036e07b3f9775360e3f51ce01e4dd17e6a8e": "167279e5d3c479f8340f453518176f14",
".git/objects/ce/4649ae35f479e4acb45ec1ec39d7dc364df4bb": "29a97dd5fd7d0f9342e351a2c9a82f90",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/85510874af238852c0c9fec81b9c5b0f870fce": "ae2fde46017d827b97ba52ebae2b75b9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/d3e437210fe0b8cbeb487baceb256739c850ee": "3b11f7b80246969cb787928cfe383e65",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/e1/c24872681abe1bacf8cb645c65510279d1ae61": "93fe45344500fa909ad6db2b664e665e",
".git/objects/e2/b678fcef47da8ed74d57be7e96fedf3f7d4462": "38c341f6526f4a5455e0c38115729c24",
".git/objects/e2/e40fb874ab8c9e6d3e4f08c828c541fd2d6f27": "d69f300097fbee5eebdfcdd08eacc4e0",
".git/objects/e8/f46be8f1d90dc1aeeb0fdf0bb9fdffb4255f5d": "d7f85931f9db40534b3ae0ab023b39a6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/fdcd0c968569557573fcb04345fcd1a2047e84": "627cdadcacdeeca31748fee9aa066bb1",
".git/objects/fb/64f7d4c43fc0eb07f3fdf66d5f09def569ea38": "e84ab1a90e7331b484ac33e8fefbbe15",
".git/objects/pack/pack-bc61f8794df526cc0c430527661c3b8a4ce0821d.idx": "25cb28e5559305b8f9fddc2c6f214f9d",
".git/objects/pack/pack-bc61f8794df526cc0c430527661c3b8a4ce0821d.pack": "e460a03a8649b2d27030fc8758333b1f",
".git/ORIG_HEAD": "12aeb83d53e7e90c19aa38c89e96e348",
".git/refs/heads/core": "c5905c346c140ff58d01ba26ed3c5495",
".git/refs/heads/main": "2d50d48bb0f64d1b8a383172d6357a7c",
".git/refs/heads/master": "23a41d2b96e930d47dff062aeb051565",
".git/refs/remotes/origin/core": "c5905c346c140ff58d01ba26ed3c5495",
".git/refs/remotes/origin/main": "2d50d48bb0f64d1b8a383172d6357a7c",
".git/refs/remotes/origin/master": "167c2c471019332978aa475cb768cf03",
"assets/AssetManifest.bin": "13c094ada49459158e9256431208a205",
"assets/AssetManifest.json": "4dc0bc152f0190cd9c8e9a5290b72ef8",
"assets/assets/images/404.png": "9297e0ec225fd07ddc3d53441a44f415",
"assets/assets/images/core.png": "3d00ddeb42f436a40c18e30f77884d3f",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "56dec4b915b8e0f3830b1d3a8880c1b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "dd74f11e425603c7adb66100f161b2a5",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "05e4f761eb3235d7229e272d2ad276be",
"/": "05e4f761eb3235d7229e272d2ad276be",
"main.dart.js": "97038370407ce7a0180ea8d5ae2acf80",
"manifest.json": "b2142f742ea7771c0f1edd3656c868a1",
"version.json": "141044154ad54d0de12ab570c8aa9b6c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
