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
    "revision": "672ac2f5c1b71779611d7ec7e3c089fc"
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
    "url": "assets/js/10.869aaba8.js",
    "revision": "34744e282039eceaba09b705cf0ec952"
  },
  {
    "url": "assets/js/11.00c6bc1d.js",
    "revision": "268fb351e6f4e975f9fef53fc82d7249"
  },
  {
    "url": "assets/js/12.21dcbc9e.js",
    "revision": "d2e5783a5ad8f54fdaf33ac9b5a66f63"
  },
  {
    "url": "assets/js/13.fcc70fa9.js",
    "revision": "7e471527fca005a8470c961ad48d0bd7"
  },
  {
    "url": "assets/js/14.9447d778.js",
    "revision": "bdcbcc527e898b95686ce7fa2967c806"
  },
  {
    "url": "assets/js/15.b4de88c6.js",
    "revision": "ea49f031c4f8fc04713c9e0ee056c6ac"
  },
  {
    "url": "assets/js/16.96d525d3.js",
    "revision": "7bacad7c6589e640d5ac83f073596fd8"
  },
  {
    "url": "assets/js/17.94119cb7.js",
    "revision": "9f5ea1d2a1e55bb5ab31e50afcb6caae"
  },
  {
    "url": "assets/js/18.7150d550.js",
    "revision": "da2f53d0213c9ecebdd053b07d7701d4"
  },
  {
    "url": "assets/js/19.6d921753.js",
    "revision": "df9dee7ed87f168b9588f31ffbe5ebe4"
  },
  {
    "url": "assets/js/2.cbc61fe1.js",
    "revision": "b71b515ee0a2663e0f9abd3aa400196b"
  },
  {
    "url": "assets/js/20.8046043e.js",
    "revision": "86606c06cd40b452a55248a20ef6b7ed"
  },
  {
    "url": "assets/js/21.ff28f4d3.js",
    "revision": "7d32c079d4ebcc9e646a02be12d4a9b9"
  },
  {
    "url": "assets/js/22.a2d44b1d.js",
    "revision": "228a1f93d99f6dd0b3859118f4498c78"
  },
  {
    "url": "assets/js/23.67245b25.js",
    "revision": "c04cbcb2e08250cab4bcfd7c5f11812b"
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
    "url": "assets/js/26.32ba66c4.js",
    "revision": "6e00ebfd65ad23ac25432d1621ecdc87"
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
    "url": "assets/js/29.682c7ff3.js",
    "revision": "7b6ae1e75ad8cc6ec10bc38efee24d50"
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
    "url": "assets/js/8.7b3b5208.js",
    "revision": "e1529c6e4c5562ab69b4f161bc65db99"
  },
  {
    "url": "assets/js/9.9ddc4d28.js",
    "revision": "8750cf79bee4824a68e7e406c1c31860"
  },
  {
    "url": "assets/js/app.d514b615.js",
    "revision": "7673d0c0b608467ccbb31025494c8c7e"
  },
  {
    "url": "de/index.html",
    "revision": "673732993667a5b54ef16a4689b39e8f"
  },
  {
    "url": "en/addons/API.html",
    "revision": "8af21f64641e912511178f25e70b3ce6"
  },
  {
    "url": "en/addons/index.html",
    "revision": "af1e2d15472063a972e7198c5f78bf49"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "980b23fcaf034bbb50878d83a8e724a6"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "55388a8519edee90931045674dfbfb34"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "08650357d5b87f7de710c5832134ba1d"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "751023c18d15e0eca98ae4164ef59f7f"
  },
  {
    "url": "en/effects/API.html",
    "revision": "3b10439ffdcdd16d3d5d06db74d8f3d9"
  },
  {
    "url": "en/effects/index.html",
    "revision": "b7bbc316cf24b1c8a012741b988fceef"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "0babc20771489d45105eba23d7406bb2"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "a317773e0486281dc212fb249ff5ae64"
  },
  {
    "url": "en/json/Control.html",
    "revision": "9a9c4d03efc08877aecc94df5e9cad45"
  },
  {
    "url": "en/json/index.html",
    "revision": "16390b8c152f29862338d794b0c1a11d"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "c57a803346628478913e2084743b0fd1"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "cec947399c6f42e26cb88e8e6152ed49"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "8f42563d4dc226dd28e9507d5ff63483"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "6cefedfcee72c260d069609adf700ad8"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "dd155cf00f0c3701f08a7ec6f6145bc4"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "6fd070cbf25c40cc8251dcf35b628b9d"
  },
  {
    "url": "en/user/index.html",
    "revision": "faa69d7f7c7d53303887af4f67547731"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "4c95aca15e3b8ff16529abf40cb7048a"
  },
  {
    "url": "en/user/LedDevices.html",
    "revision": "9e4abee1f79ceaf514c3137107bf0343"
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
    "revision": "c9190ec2f8e8f6b5c1c4207aa3f35d11"
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
