'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c2cb34f4a286838c624be74708592813",
".git/config": "be1f0350ad36158de632e380fee9a73a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dcd933453f3521446599bfe690644bad",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a4819caff1a548603cf9e054274779a8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "55a5e2aaa3989d29a17c28f7dfc1d388",
".git/logs/refs/heads/main": "9e181c46a65bff1622fa96ff09edcc93",
".git/logs/refs/heads/master": "d7656915cba599cbc0badee9e97bed5d",
".git/logs/refs/remotes/origin/core": "0fc38191eedb4c031d112e2ba89f8522",
".git/logs/refs/remotes/origin/main": "48da93f783e630f2d3ff64c85491b047",
".git/logs/refs/remotes/origin/master": "281529adad94e9d7a8ac36f68c1007ce",
".git/objects/03/6b5ad9f97e742c22023b66277f25205b2f3947": "d1556a876d210683d0727c1d5a8fe72f",
".git/objects/04/83d3b292f9d42cede710092819cd199a95befb": "866f90b5486de58ad59838922832cf37",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/1e6fc3531edc6de81fc9ff468aee6d569ae4c0": "0122b2e1fd78b40fb1568dfb8dbbfe7f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/d6125f783375e14c1f8b47672aacabe72b1516": "a364d48daed36e012cef242d5275408f",
".git/objects/08/3351c4c3e1cced6643af7b7a0eeddfa19a26bb": "4baeb9201721a6b1fff4c88cc74da2ae",
".git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "49839927a43edcd11ca47af741efc4b3",
".git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "5aee247656317adac0bfd1d5a5b1a99f",
".git/objects/10/6d08c8c946a58368875d19dbe8ac8c25fa290a": "114eeaaea9b9a58519f496b2ae989ddf",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/54108254489dd280232e184cbf6bac2fa4727e": "a056f1cd53dafe33979905c8765c01a6",
".git/objects/18/8a14537606988540d105422db548a4c6cd9d0e": "5065aa13398ffa64ac6b9dad4806352d",
".git/objects/1f/7156ec93e7ec0a41ec377b3a5396fca0053909": "3d9f037daf195fefbf5a5925de452467",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/2ad9449f239d50d38c613d65dd13c1ff57655a": "a9d2edd449bcb057fcf3a6d42d1673ea",
".git/objects/2c/9cc265ad7d3221201a9c371f50824de22f6fbc": "84b47b378f377dc6d084756908fe2608",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/5838ea24da546e6be31770032fdde376770faa": "699beeb0b184428a1be6993aaedccd12",
".git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "b753a9daa68ff81d3db607bf86e65ad3",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/971fb51b5dc31dbbfd4904f33c06e543cd0f95": "904cac2bcab9a4f582bfb71f029b8a79",
".git/objects/45/9e872f56867c17c7cc1b4a3e6e32b6a39e9c97": "e50e5e75af233e086d3455e208e29469",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/52/0dcc1a9373c5aeef72e1f50d1c17104c2bfecd": "46528220a7866de65b69a1cfaae33cd1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/924677e1792f2cf5df241a0bdbf9378e038db1": "888b34f93717d633ce1c292da4fccf53",
".git/objects/58/fa23edc4965ac512b4093d2e33c71778258c4c": "5503cc90eee106b4984040c8fb9ae3ea",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/64/5c1e9d413e63958d19c9ddd54b4412accb19a4": "eb069edb0418ca93c8fb0fbbbdb89c98",
".git/objects/66/8df3fc4c4d4bb2e302551c159b1fc408857294": "fad72fb424703618ad806b80f4b088e7",
".git/objects/66/ac03db6de09fa129620b036a214d275ebca9bc": "9eff868fc5501eaae2c69e299976d87c",
".git/objects/69/2ff72c45a25ad129526a16b8b627e5c842ece1": "f7b7484cc894c5912daa1adec34f617b",
".git/objects/6a/4a8c6bf2ef41cd3c6f39795ead4504e629e28a": "94e8ffd590a01abc479f3044c9272dcd",
".git/objects/6b/6364df4917067faad9d64db5a0384646664c75": "e95d2a7f8cb20176525983fc4ff7e8d8",
".git/objects/6d/2a4142332c32553914f942156934972b2b4441": "9eff8543878cd90be86e60b44a1d1b6f",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/81/6374523f728efc691b9758611db617a49e606b": "c38e2382843c1ebbe142aaf42d3205e1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/40e18561259e8360ee601b1d59f0814af867f6": "5f8dd898027cf5887e3899542aaba9ba",
".git/objects/89/e0ecfcd153632ebe4de368aa6368938e55306f": "bd8c3e6e3bd2000a90f91e8cf533e347",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/4120511441f88ef6554f7fd3d4b88a7cab871a": "f8e2207cd11517b0ee3e3b8b660ba9fe",
".git/objects/8e/1add1d681ca4e4db235badf39f232527c4a3b8": "15a1b04b38829b1221028aab495453f6",
".git/objects/8f/59aebdf5d382e825a38ef3c2366c153fc685c3": "11e82cdffce750e2d3736a3acf9aea6f",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/22200102733ce0d2217b615e9d0bff5bc98513": "e0ec1c29e221a675386cd8ed22ece2dc",
".git/objects/98/0778358b7c4bffb9f91e6e7380853189866a61": "81a968af37ea47d643295c7211d3f3be",
".git/objects/9e/9e988a2e422015e130de78445b5aaeca447a2c": "0c0fd17e2317296372a3b6d36e9a7c94",
".git/objects/a0/8d75669c3193b94fc4ff38cd26c65f26d85a67": "b15fe4407f4747cba39fe91efa1af11c",
".git/objects/ae/98a84920c87df5c673d9be517a508917d1ee2e": "ef1a3475e66a953aecd705e83ef1ddb5",
".git/objects/ae/face2f58bafd33489aa1d54b648487e99dec51": "b44cdf97b4940822607e1a9fc99b4bf7",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/8dd5b20a970a845cb7f4c400201ef204b26878": "fb7da251b2f89e8d766cf44bf162cd28",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5e0bfa3c1ccc6f9102b4cc0cc54f61c392f497": "51c6d997ce0e76694a877ce4f9f796f1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/58aa3742437b92636cee3750761e0fbbff31f6": "74ab59721d65dbd39d8b1395ad0c3555",
".git/objects/bb/8d163486779fe4daaecefff5a0712764cd9925": "ac38df8acc94e6e9d176d920a65f8c68",
".git/objects/c2/2b6075679fbd8e31b938e505a9ee504066e20f": "480c04b4c0b15a198cbb4cbc768fda0b",
".git/objects/c2/acd15a3573d3b6eb731d7624cad43103e2ba6e": "773224200908f5eeecc632ef461a64c0",
".git/objects/c4/e3fa3fc7798e7225ad9a57186f09e9dde8bd85": "c7097fcafe84ba3e657c50e2db63c3b9",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/6f4d81947c74fd6cb147650743e3b59a7f6db2": "d09153240740f5364b8a6961981a5636",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/8d857b40f5bf68118b7433776d4c710ecca923": "b511b4749d3b734b2b9502e0bf94beed",
".git/objects/cb/b1a759b1571ece03b6e31847ffa77396b372cd": "40e45dc0585e43ac4226e1c1b852a5bf",
".git/objects/d0/fec5bdca370a4b9fa08947cd1bbbb492743d44": "7f52e77bc1fcbb041b90d43849243d89",
".git/objects/d3/3defbca2a69e6d3b5e929f31d6714d840d54fe": "5bcff803d969c3787f6fe4da332ab249",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/1a2c8e1b7ea7c62f6a69e61b935febeb59d053": "1a642cb95c525cfd02e4a6994a64bca6",
".git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "b96c46ed4195adad3b35a2d13f3b26e1",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/de/4d060de52f50916a55c280182827ad5034dae7": "dbb2fe799a6f43299430e9d38a217d31",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/9b7817715e1cb5d7571e335db0f7aa96f0604d": "0d651d9fc11cfb8f5720e691d679b744",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/49ff654d9f12b0bc74e1248a6b2322116d997a": "04302b823d57009bfcd18f5a896fc8cf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ba099a8e4e5cc9095c409388e4b0573eb1d2d3": "2e78cbc9c70c5cff9e27dbefe5e3fd35",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fd/029e95af650b41d2fc07543dd40ad9d34e3e75": "144f8aa6abd093b7fd0a69e3c6de3df3",
".git/objects/pack/pack-5b9e6af4fdbce535c653a3df535a23ebbc5f3d3d.idx": "da4fd824facab3add79508426a96b729",
".git/objects/pack/pack-5b9e6af4fdbce535c653a3df535a23ebbc5f3d3d.pack": "aadeedfc82f024f5f69235eb799cdd0f",
".git/objects/pack/pack-5b9e6af4fdbce535c653a3df535a23ebbc5f3d3d.rev": "a0505f96c317f9671b78ff750e09ec07",
".git/ORIG_HEAD": "73c89408af670d8f365ae1bac29cb4af",
".git/refs/heads/main": "96aeff5f2b1294d67eb2a554561ebccd",
".git/refs/heads/master": "61bc38e866e323ef464fcb854a04829c",
".git/refs/remotes/origin/core": "c5905c346c140ff58d01ba26ed3c5495",
".git/refs/remotes/origin/main": "96aeff5f2b1294d67eb2a554561ebccd",
".git/refs/remotes/origin/master": "696fa13dcc3af1797118280dbd3fc88d",
"assets/AssetManifest.bin": "04dfec34d17d33a0ad0c349dc32dc1e8",
"assets/AssetManifest.bin.json": "21bbddaa9b16f9a27d276879302d0371",
"assets/AssetManifest.json": "68ff847f470dce65c28224eabb5dbe44",
"assets/assets/images/404.png": "9297e0ec225fd07ddc3d53441a44f415",
"assets/assets/images/core.png": "3d00ddeb42f436a40c18e30f77884d3f",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "d73004922e940631cd8abf067a1ed861",
"assets/NOTICES": "fe42742de5d3e4b0da5f9ad6afa3338f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/wakelock_plus/assets/no_sleep.js": "9c3aa3cd0b217305aa860decab3d9f42",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "84f55162bf8eb88850c83f3c8ac4a496",
"/": "84f55162bf8eb88850c83f3c8ac4a496",
"main.dart.js": "3f2d9dda3411dc869ff08bcfddc5f202",
"manifest.json": "b2142f742ea7771c0f1edd3656c868a1",
"version.json": "141044154ad54d0de12ab570c8aa9b6c"};
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
