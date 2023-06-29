'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "43dbda0215983ffea261ef510f477018",
".git/config": "361b8ab0e47ecbe0484e644002d940b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "97f109e141c89c7d4fd38d2dd8cd7be3",
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
".git/index": "14a9b8bf5acc8584686987a9b3e479d4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33f499ca84b7377ce143d95ddd66fa27",
".git/logs/refs/heads/main": "a4cba7109b9383d0c82c96dc0faec01a",
".git/logs/refs/remotes/origin/main": "40b1fcf5dd380ab8a7a8e45fa330d9c8",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/08/d3b25d9af275ac2512b5841503321224347a30": "4662d7b7e2d8c27a2c05762efd1a2ae5",
".git/objects/09/ceb9c7fb442e7cba7013977d8461b461413953": "40d678eecebbe201389daad92dbd91a6",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/11/ced7ed193960afc74d5be4924d6ce50db3053c": "26a9c1746c76b5186ab5bd818a196b1c",
".git/objects/18/7a989f6c6d3a9a198c7f614ea88b8b9fbf62bf": "3bc26c627933af3271cbb92a65ce08d1",
".git/objects/18/ac2b69acbfacc12a26b7f22e67cf030984fda6": "098362a3c5fef99f31fcaebf2b54aef9",
".git/objects/1a/9bb45374bb160bd7ebfe3a01e1413718a311a8": "994732927b18511621057081d717f67f",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/25/d0850ac5277f4ecc67f8c1a07a62aef55517cc": "683a33ef1a1373712c7aa029bb99af6f",
".git/objects/29/c4aef918ee43b362435113198c1b4e3212a13b": "038c10165c8a88d86c94884dcaf26de8",
".git/objects/33/3021cc48aeb39c9ec9809c6592cdd5ece720d2": "d03e27656cfa51a17af18a70b4f147cc",
".git/objects/35/104c5c1c4f18f1f8c53ae25fb5c64ba4f66b3b": "df9d2441aa7892b2f18aab11a3b525f0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/40/62db0b2cc0e570b9b9a24a988108b69b069f90": "c6a551371b5efde0f3d1fdee4769752c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/6b6302535a1525b9423cc896ca1217c3565765": "d28953b79bf182f54d5d9ba7f8ae854d",
".git/objects/45/9e872f56867c17c7cc1b4a3e6e32b6a39e9c97": "e50e5e75af233e086d3455e208e29469",
".git/objects/46/ec1181702c058f391ce53ddfe0fb0b14c21cd8": "f944b60c47ac43dccf9524480cbefa5c",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/54/d2f9f11d6ffd2629bf52b8a1c4f585376968ad": "135480f3c04a003194cd22d8ff0e92d6",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/69/dd2a5b75c441a685c38673c1a3dae945ad2d43": "307a0c4374f820b3ed0d22899071352b",
".git/objects/6d/72c7f8a9261e8038ca3aa3c9a28c5ea10ad820": "d7998e8cebad09419396c12f55e23b2a",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/c4883821aef11f29199b29b8a35bee9a857883": "8730e982141607e956c54a0198479948",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/95baf786915a5c9a91072041c3264d2323d543": "2e2893345181c60b634838dabf1b6e95",
".git/objects/81/6374523f728efc691b9758611db617a49e606b": "c38e2382843c1ebbe142aaf42d3205e1",
".git/objects/87/55e481e5265014198c2f82b33e9688f17a4dcc": "0c4c9674f003b121e5f422f9fe6cb9c4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/475bd01b1c38962b44fce32e946c1472ac451b": "80ccaeb7e0cb5010af74d6b16384de0a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/94/f29fda98af3ee2d47823c415cacb6a0741f4ad": "d5963436161015e37a002850ce455bfa",
".git/objects/99/fc12f81bf73109d40730f7bf614a92176076e6": "0c04c9629bf8f2f8f769d739e973d31e",
".git/objects/9a/70087f4acc8fa25f54cc2606caeae800e1cbf7": "6cfa13483f31c82e1aee2b35e5b2ae89",
".git/objects/9b/e84952a35a99ae01d64616780f2cace4c6bbc9": "226f2de9ecb6be57c7bee5417074f3c8",
".git/objects/9c/143e8c2db1d2a562ae54839d422b36a139a91b": "6d3d7efc14307a5a4acda15d54565b62",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ee3d6edee8c23eb09bd89d428ecd4d5faebb1a": "11900b806f601339da37965eaca6cc0d",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/cb38c4875176523485903bb53dcd62a0a47b00": "c2e4ba101cec18e48d291243e3936a19",
".git/objects/ae/f51f517049fa1a91939d9d00dea1d055331512": "e997bf767990ca63f646ae3bfcccc8bd",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/850d49e98dc777b222576c05c4a05b82c6eaba": "a0687d3565c797df5f59cbb3e8df888f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b0363de1e3233655114e3be4077e060e03dd39": "79c89b122a77e8cd0eefebd588957bd5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/2b6075679fbd8e31b938e505a9ee504066e20f": "480c04b4c0b15a198cbb4cbc768fda0b",
".git/objects/c6/802d590b2b9de8c059708a839f013e24062e09": "0bf2cf8287b9ada5f1311f0a057317d8",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/cb/72405399c27058f2b6fc1f141da9203534dec4": "f719787217a88cb2c9b5d2a57dbc25b1",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/85510874af238852c0c9fec81b9c5b0f870fce": "ae2fde46017d827b97ba52ebae2b75b9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/c48f6ece14cd51f1cdd89806404e3b4e343202": "f87b9d6c8d60f545d4f30b0038b326e0",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/119e826bd0c3ca31730d9d4b909561cb436af6": "4dad528c277309c833aa887a34ee56b8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b26c4c2508af700607d8b47ccc1f4b6036e1f4": "62fea896ac5910a2ef76800c660992c3",
".git/objects/ed/bd25ab3e99797479196f7c77a949fd0f5cb863": "ccd530d290f478e04f458de684a416cb",
".git/objects/ef/9c0191ad0077b957e9df7f275fdf6858d12ec0": "69eb27daefb1a1ab6e05698766114995",
".git/objects/f2/3acc3c60bc7b768433f835e4b7f49f3464a88d": "6d8722197da6ec0fb966ccfc114316a8",
".git/objects/fc/583509df3a77f4b14d704e915d7a725d147c38": "73fea7522c78b1b906995c3043980264",
".git/objects/fe/8db33805792f7c5e0796f8f0082a6260068396": "233bf272e4127b83d8c92f592788dd8c",
".git/ORIG_HEAD": "cb30768463c789b8a274bb00ccb9fd50",
".git/refs/heads/main": "2543df42d272a7e891d302fdc423b46b",
".git/refs/remotes/origin/main": "2543df42d272a7e891d302fdc423b46b",
"assets/AssetManifest.bin": "0d9660078be55a959712a09d2e28eb2f",
"assets/AssetManifest.json": "e8d66dca4c8616d1b44d19170b8eb22f",
"assets/AssetManifest.smcbin": "009735ff8f8a7971202e75d5e1d90fb5",
"assets/assets/images/404.png": "9297e0ec225fd07ddc3d53441a44f415",
"assets/assets/images/core.png": "3d00ddeb42f436a40c18e30f77884d3f",
"assets/assets/images/girl-milk-glass.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/leostar_logo.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/orange-juice.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/plant-based.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/soup-chick.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "8952c6ee288d09162df81b727c452cac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "dd74f11e425603c7adb66100f161b2a5",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
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
"index.html": "fea39d20b37f9e1dacc5751314720008",
"/": "fea39d20b37f9e1dacc5751314720008",
"main.dart.js": "3f7dd90bf0df6de52d1b0d0826e00ba7",
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
