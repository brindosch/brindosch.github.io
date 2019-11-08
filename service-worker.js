/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5d6a97afbcabd91a94c74472baf044ac"
  },
  {
    "url": "app-logo-128x128.png",
    "revision": "223cd4a8a5e5a0ace3a1040196a8dc6e"
  },
  {
    "url": "assets/css/0.styles.78154612.css",
    "revision": "e07d4408ef4e4023276857a80f81815f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fa54549b.js",
    "revision": "15bc0551877373e8c73f23acc9121731"
  },
  {
    "url": "assets/js/11.e1a7fdcc.js",
    "revision": "c5fac711e7f4bb6ce4bb63d6b2e5ce4f"
  },
  {
    "url": "assets/js/12.21dcbc9e.js",
    "revision": "d2e5783a5ad8f54fdaf33ac9b5a66f63"
  },
  {
    "url": "assets/js/13.a2882662.js",
    "revision": "700727c28840b3e093056092643a7530"
  },
  {
    "url": "assets/js/14.4f5cf349.js",
    "revision": "fdf6a030ac36e5ed2369559ccbe531b8"
  },
  {
    "url": "assets/js/15.b4de88c6.js",
    "revision": "ea49f031c4f8fc04713c9e0ee056c6ac"
  },
  {
    "url": "assets/js/16.82e5261c.js",
    "revision": "9845a2a6697a320df254354d742b8ccc"
  },
  {
    "url": "assets/js/17.93f2a21e.js",
    "revision": "008f78bdd72cd6e6c4953b6535bb6a4f"
  },
  {
    "url": "assets/js/18.7150d550.js",
    "revision": "da2f53d0213c9ecebdd053b07d7701d4"
  },
  {
    "url": "assets/js/19.f4707eaf.js",
    "revision": "2cade1934b88dc5a6a560677f445508c"
  },
  {
    "url": "assets/js/2.cbc61fe1.js",
    "revision": "b71b515ee0a2663e0f9abd3aa400196b"
  },
  {
    "url": "assets/js/20.37151e68.js",
    "revision": "5e660c442e95fa1ab94fb61f2a9e3fa3"
  },
  {
    "url": "assets/js/21.4c07121d.js",
    "revision": "4c2f29d4bc4f5e4ec305956230a0612e"
  },
  {
    "url": "assets/js/22.8fab7ec1.js",
    "revision": "42a28d204bd66f99af34ec4ce643b4fe"
  },
  {
    "url": "assets/js/23.50585001.js",
    "revision": "3b8d4467b3d07fe8f8adb41e4350fa26"
  },
  {
    "url": "assets/js/24.d013b406.js",
    "revision": "3142763abb8482a56fcbe2e5cf91b15f"
  },
  {
    "url": "assets/js/25.09511437.js",
    "revision": "143a4ab75216581da39bd4cce99bebb5"
  },
  {
    "url": "assets/js/26.828077cb.js",
    "revision": "0ca001cbdef7cf1eaa96b42bcb2a708c"
  },
  {
    "url": "assets/js/27.ac8b7ddd.js",
    "revision": "07bb39d6b86b7cc79f4ad18ccda1c122"
  },
  {
    "url": "assets/js/28.601288d8.js",
    "revision": "7098a14ab9828178a61d964c7a0d2c6a"
  },
  {
    "url": "assets/js/29.39670b21.js",
    "revision": "0338074f72a25b6ca8ef55f7b6bc8080"
  },
  {
    "url": "assets/js/3.e4fecb5a.js",
    "revision": "4fb790819776933f19cbbdf01b5332d1"
  },
  {
    "url": "assets/js/30.ad9a1f47.js",
    "revision": "abc984d633cfc78517070ddf0fadf08d"
  },
  {
    "url": "assets/js/31.4d8437af.js",
    "revision": "fee4aa4e618b62cc8c0db06a287a2c31"
  },
  {
    "url": "assets/js/4.bf41bfe2.js",
    "revision": "3aaf16fcb74a4e0a886e3cf4e1cd7a50"
  },
  {
    "url": "assets/js/5.6aca94b1.js",
    "revision": "a4868774ef99817cc1a5a241af7732f7"
  },
  {
    "url": "assets/js/6.5f8ec7ed.js",
    "revision": "589668a8a832744921aff1495ad0b653"
  },
  {
    "url": "assets/js/7.2af63f2f.js",
    "revision": "6d0bb10b7e99c93872b2528b986594b5"
  },
  {
    "url": "assets/js/8.d8ff00f2.js",
    "revision": "024014394bc78a9fdcca7248124d85ce"
  },
  {
    "url": "assets/js/9.745acf86.js",
    "revision": "c14b881cffc1a7b59e3b801f5ff84225"
  },
  {
    "url": "assets/js/app.020c85c1.js",
    "revision": "d2127abe2be9e200c69f34cd7b3eb4d2"
  },
  {
    "url": "de/index.html",
    "revision": "cbf56909b4428aa81d8b2c983148292d"
  },
  {
    "url": "en/addons/API.html",
    "revision": "03d7dbad8c356885da61eaa37f380dd0"
  },
  {
    "url": "en/addons/index.html",
    "revision": "2f3a7e37e8134377378396dd265a62c2"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "df5ee48c64b638536a86bafdcccb59d6"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "32be581309888e3af23f0f1f3e19d2ec"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "2f4e084f0f997fb8790380bf0b1cfdea"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "c21752dbd56b9ad8636251d6fd849bab"
  },
  {
    "url": "en/effects/API.html",
    "revision": "2149e9434de2b7a62a74c0da82939a3c"
  },
  {
    "url": "en/effects/index.html",
    "revision": "824fc2ec4bbe488a97c679144a8254f6"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "5152810ab9c78248889cfc5482d995b6"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "29d88485040ccf203e0b425f290ac130"
  },
  {
    "url": "en/json/Control.html",
    "revision": "831971663a4669750b08fd9afbb99606"
  },
  {
    "url": "en/json/index.html",
    "revision": "fa027f001f7235e7f2441797f262d5a0"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "b278e19c92c0db07df0e7008b442b775"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "23abfa5730c73c649c8dca28e4127f47"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "8bcfab746da6142d47583b8c0cee8294"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "9239f18b9958a06c0b906ca7df1e4e2a"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "45a6acd6d02bcc16a40987d27cc6d718"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "0a19fdf4966c8114af20f2e69ad08020"
  },
  {
    "url": "en/user/index.html",
    "revision": "c093f02752585fb22efb32b505d1b0f7"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "229b01957c30c043eb9248ef7bd55549"
  },
  {
    "url": "en/user/LedDevices.html",
    "revision": "0452747a5af12734832e61b7bff66995"
  },
  {
    "url": "hyperion-logo.png",
    "revision": "7b45f0e37b11274a222268811f6e821b"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "74b5b2ffaf9257db399c8f2e860cafab"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "58f07ff4db81be38c735976f09b2cb73"
  },
  {
    "url": "icons/apple-icon-167x167.png",
    "revision": "57265b46ef36a13872c16fe79bf25894"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "befb8fdf9dde985426779dd1c39998b4"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "06b39531b7da75a75fc66c74913dd9d3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "bb7b2e188e3f9cbda993277795f5e7d3"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "6a883994eb7a2c6beee709c1ea68042f"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "223cd4a8a5e5a0ace3a1040196a8dc6e"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "d5025f4e62db0bc6288f7bcdf37c7032"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "2216bf05ecb6aec3c5df697cf554eef6"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "4b2100d52e3b6f1e32afb9c4a1c914d7"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "2a0c715424d89b5b8c9ba0b2c82193da"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "c7bac8225505430027ad7371aeedf433"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "5041ef69493e33535ee4e1971c5bc272"
  },
  {
    "url": "images/en/avahi-browse.jpg",
    "revision": "03de1d29359b589003aff4b041a1f63b"
  },
  {
    "url": "images/en/http_jsonrpc.jpg",
    "revision": "c237320d34cbed2496fc836681b1605a"
  },
  {
    "url": "images/en/owneff_1.jpg",
    "revision": "cc2b1b0957e3a176a5ce9e450db233cb"
  },
  {
    "url": "images/en/owneff_2.jpg",
    "revision": "030d5b1e039cec2a6859313b4bbac2fe"
  },
  {
    "url": "images/en/owneff_3.gif",
    "revision": "a056840376aba4c22b240df2112250bb"
  },
  {
    "url": "images/en/owneff_4.gif",
    "revision": "03d9004e8bb5bd3014d2d17df0dd2af2"
  },
  {
    "url": "images/en/user_bbmodes.jpg",
    "revision": "1fd1fc941b0e875d8befc702fc427129"
  },
  {
    "url": "images/en/user_config_access.jpg",
    "revision": "e84efcf8139e2d837f7d7354187f5794"
  },
  {
    "url": "images/en/user_config_dash.jpg",
    "revision": "caa761bb871f030e674b6e8122bf3449"
  },
  {
    "url": "images/en/user_config_lang.jpg",
    "revision": "10a4d6094151277680cf71634262d301"
  },
  {
    "url": "images/en/user_gammacurve.png",
    "revision": "7e64a468b663f15dfc523cb14ca93c48"
  },
  {
    "url": "images/en/user_hyperbian_ssh.jpg",
    "revision": "e2e40a64836bb8ce19fad290223172ba"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli1.jpg",
    "revision": "bd2b0056d9f4a4f450cc71a2613ca5f1"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli2.jpg",
    "revision": "5b08f56e71e8c7592e37f8cacaacd61a"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli3.jpg",
    "revision": "e2e40a64836bb8ce19fad290223172ba"
  },
  {
    "url": "images/en/user_ledlayout.jpg",
    "revision": "2815e5ab254a09a7c24af33d169c0e66"
  },
  {
    "url": "images/en/user_ledlayout1.jpg",
    "revision": "6da17c4ff33ca70b66709f4d924ae865"
  },
  {
    "url": "images/en/user_ledlayout2.jpg",
    "revision": "fa9d66601d016ac2ed520b93eff35bee"
  },
  {
    "url": "images/en/user_ledlayout3.jpg",
    "revision": "01d98f6f598d4ab018e58935bd0728c0"
  },
  {
    "url": "index.html",
    "revision": "1bb862ee38ef7439a44dd350f422fcd4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
