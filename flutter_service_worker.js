'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9ca419b3f876837a230c984b2cc853c8",
".git/config": "3e2bca43478070883eb67015d74a3e5e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2fbeb673d6015173fdf3e89fbf4fe3d6",
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
".git/index": "abe32936b2052d37e12c7384cff4f5bc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "46cdbae10deb1a1d11b2b20debbd8ea2",
".git/logs/refs/heads/main": "46cdbae10deb1a1d11b2b20debbd8ea2",
".git/logs/refs/remotes/origin/main": "4852f87b7a7c5c1e5e0f4a10793844b2",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/05/c13898cca3d2759b6e16899c65614437d3f8a3": "cda821ad2035608bc49d5b422eca3216",
".git/objects/08/89f5dc86dc90e6a20dd881fa8e5f41a40936eb": "c47553a299234e4b8d251dbd4603108d",
".git/objects/0a/8919554ef1095c0308ba7faa4ea6273dd4afbe": "adfc5dbaa851efb0dece501841d1470e",
".git/objects/14/597163c15cb9860a10a586634a7479d7003be8": "bf10af16c444e5a0865effee553df90d",
".git/objects/18/deef629f464d95f8e8e898b576e0de0aa27afb": "b7a6635abf66795636c92a536cb588fe",
".git/objects/19/dc1516c9e64f8dbb357d99513ad07f96e10332": "da026ce6e88c5a10f03f8b54870c2015",
".git/objects/21/09c70e510f5a534156eb98ce18c7764fd69a3f": "98fc893256e13d5e6b9cc44bd21d4858",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2c/13d5aa4d8a644b855f17d1190db450898f519f": "f7e3af5bb9b63847a7d2cb9609b69025",
".git/objects/32/c793054a99abe3a406ad9f90488850914cd611": "00798a2d387f759401f442ff0fcde69f",
".git/objects/35/1ac41ebb9adea3cddc5b1da60e5c1eae0de166": "674e13fb1b18ecfcbb9e7a510d3e7c35",
".git/objects/36/3061295b7f034331d976dc0eeff96082529627": "d6eb56492533e58c1fede19d1800e8c5",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/45/4f01f4f9e91da117304bb598469ff75ef651e6": "85bdaf1fd3edc0bb1bca8cd209ff5da9",
".git/objects/47/52058113bcaba46c0c48a738d21948943a4fb3": "ed6744e5187076846dde54b88681b2af",
".git/objects/49/ba4985a1b6cff428bef62d25674cd8c5d83d58": "b6a28d9e0e1cf60237014ce58202996e",
".git/objects/4e/2b3c06fa8df81e00842776640638a94a1db27d": "ef5a94878448fc70b73d2ec46895f8c7",
".git/objects/50/e4e3a6658d8bdb9ba3b4a5491b5e946e34f437": "941d50b519a44152de03b82136cdcf23",
".git/objects/56/50f0fda983172b3a918aa9796ed780b8617e02": "0320218bf8e3357218a976398fe68b11",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/8fba61620c866452863a737118fea5490a09c5": "d4a299a564608d585063dd333bc580c4",
".git/objects/65/1d99d8c3194c70e28afb77e1cbe6b9ff29f5a8": "a0a40598690afab709bc8989e76ead74",
".git/objects/65/69bb46fde95a116e5d58b0c0b61d02bb86ea1a": "676ce094ba39fcda8b9c265381bdc412",
".git/objects/69/301fa13814383df33befe9100ddc473db8ceec": "5d3eafc27e59653e077d4213808da63a",
".git/objects/69/c17ebddc271ea24ad788fa7c0117366ddfe7dd": "faeb8d0d8381914bf8505d86f06238c6",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/86175c7300416060dbac13de8e5332259dc4af": "45106d19b05deef34578345bd10ece15",
".git/objects/71/909c8a5245d8edcfeeda08208ce8cfb531d19a": "a5b2c8b74dcbf6b11f9f1342346ba203",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/77/7ca271ad735a14531656a45c62b6130a418a45": "640bc2a319c643310f21878eab8397c1",
".git/objects/7e/eb6a834f7826824ec896a2af57c1e6eea20227": "1c02589f2aa38417ff174c4d1b3fec3a",
".git/objects/86/8b6c35b68a41c7703264c4cc9563d8b55c4917": "f5fbfd22db3dc0930deabd055170b686",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/87/19bc77f04e8218f568441e85cec3a6913e866e": "4508f880b52cb7e9fa18bfe1d80b12c0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/bbb0ffea4f1adb7dffab48749eb431eec9f2da": "e29e2b3bbe70ddea17f156bbf09ccbb8",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8f/e1bf45674d7e908585a4f611f348ef50b69d4a": "a92c5c93eb6d312c83ca21254e7cf936",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/d7a4e8b0df40270d4f171968e3dcf3a67e20fe": "68c0eac3d6295e47d715a49ff00abbfe",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a4/cb1f3657bac643b8e3ca0574730298c20500e2": "9d3872c23a76fd13a0f6b896e024803d",
".git/objects/a5/fc99e2509b8f8acca79bbe1d5b7de8c0290402": "db8090202dfbce282db2cda1ea8b311b",
".git/objects/a8/cf9cd4e67943ee4013a11c8aae963349b2df38": "d5bd2958a84361356dca962883da4a1a",
".git/objects/aa/b0378e17fad5a74552f89dff9572f6b47786c5": "f8bd42557212b38835e5fed0f1446ed9",
".git/objects/ab/d4fee2aff2f8a5114e2720e0ac1d12a93f0de5": "d4e1905df6190cd40b20388d0e6176c3",
".git/objects/ae/c720b3f289565f73e21e209c6c31d7b5e2d0f4": "fd8fce73e2035b2131578a22134586aa",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/8233942697796a42ba503a9b3191870a592550": "d194c1f13c22b85c47f08c74685f2734",
".git/objects/b6/3a72472b9656917eea135db33b3833009912ef": "f2efad2231d69b562d45b73299b4e791",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c9a4e5df04aa88aede00a8183516833cdabce5": "f86be374c297bf1e92864fa46947851b",
".git/objects/b8/466b7f3a6e0d5b6fe6f359ab727a73653c4c2d": "ccda6cea7ed324193d6012c3bf7dfea7",
".git/objects/b8/c386cc700ce3249cab3df7d8aedff260a2b468": "2de5e93c55a7b7bff12bdaab4535702e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/0257f195fb1dd6e42b1ff604443f9b9fa7971c": "cd2f1b2d91dbaacda2e50f216a906568",
".git/objects/c2/a8fc4ddcee1c9928c0954ec1cf45a5936d61df": "725709d86db58e1ff47172b48b7ef6b6",
".git/objects/c3/7c4f6fe72e9310adba2da83a3d4e6e7bb0464c": "373ae75567511a434f969d6b8e6fb70d",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cf/9d30a0eb5d591cb84c8a29895be9ee0e112a32": "8cba4504dd28a61fb5ced57729598216",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/3a08c77e92d91f0e8f06720afb20d1693e2129": "ee645c129ebdd942d9c2f06795fa496b",
".git/objects/fa/2d591515777cac2ce754457ab416b62dfd182e": "b012c9c20ca4f11a47db9413954cbe51",
".git/ORIG_HEAD": "255d3ee8aaf99f7c54c8544f8b9753f7",
".git/refs/heads/main": "255d3ee8aaf99f7c54c8544f8b9753f7",
".git/refs/remotes/origin/main": "255d3ee8aaf99f7c54c8544f8b9753f7",
"assets/AssetManifest.bin": "66b21607493910df17169041b5c0eb01",
"assets/AssetManifest.bin.json": "0ec6c02566afa721c73a7d18051fff64",
"assets/AssetManifest.json": "bba8be3aab58b7ad14acf89d199386af",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "6590ec40485e17a27f9d92ff39aeaee8",
"assets/NOTICES": "45740ad9e83f3ed3c01ce7ea1b98ca86",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "0a5c4ebd7b24b6b6f263b3daa7374b97",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "05713220bea4054b0e76e0d9bbb00db7",
"/": "05713220bea4054b0e76e0d9bbb00db7",
"main.dart.js": "7acaa58cd08e00ab27a4252422658775",
"manifest.json": "916960a2acb53092c55b00313122de3b",
"version.json": "ae4c83ad432f7717552e491d738cda4e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
