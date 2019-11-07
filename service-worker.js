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
    "revision": "302d4c2dfe61360f16b9b328c9e2dfef"
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
    "url": "assets/js/11.df95fab9.js",
    "revision": "fb26a4b982dc9db660ea4f787a90bb31"
  },
  {
    "url": "assets/js/12.b78814e7.js",
    "revision": "47c29b7d281d282270642b1d434666aa"
  },
  {
    "url": "assets/js/13.96b807dc.js",
    "revision": "03895b9e3d3d3b571a86ea55fcc15bda"
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
    "url": "assets/js/16.cfe42217.js",
    "revision": "9565c5d3219ae91e4c3bc6c448d46817"
  },
  {
    "url": "assets/js/17.94119cb7.js",
    "revision": "9f5ea1d2a1e55bb5ab31e50afcb6caae"
  },
  {
    "url": "assets/js/18.ee9a2066.js",
    "revision": "193f32685c77d52970d56f9ab7f75d6d"
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
    "url": "assets/js/25.7652e840.js",
    "revision": "b2bbc1ebde387cc4055ed871146c831c"
  },
  {
    "url": "assets/js/26.956b11ee.js",
    "revision": "43e65ed3ae492589613da3ab6f05b87d"
  },
  {
    "url": "assets/js/27.2afcd4fb.js",
    "revision": "61c1f851a1c879549ba5eec17038c8f3"
  },
  {
    "url": "assets/js/28.86e2ed7e.js",
    "revision": "7c3f1607b722ea50f887a2b84189f072"
  },
  {
    "url": "assets/js/29.55d05c4b.js",
    "revision": "7c79a2c2236449d251b589a30f9502b1"
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
    "url": "assets/js/9.95938a6d.js",
    "revision": "33e6e8900a292ce3a251db03bc03f82d"
  },
  {
    "url": "assets/js/app.406327ed.js",
    "revision": "5a5de461c70fa3327c1547d5f6efbf5c"
  },
  {
    "url": "de/index.html",
    "revision": "e70e3fa20ebfbebfb4763e0670dea58f"
  },
  {
    "url": "en/addons/API.html",
    "revision": "7d4acb5d62b7f7283c8aa67eb3001a73"
  },
  {
    "url": "en/addons/index.html",
    "revision": "727e2f1ea6623e399ca57d3cbf5c716f"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "036da5a5743fe75d1a4fb83e276f82a3"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "ce5b5557b3708d3f311a015edcfd2f46"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "35bcd6fbae58d372139da65f34b18b0c"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "3f04c4963090832b93a286367426f236"
  },
  {
    "url": "en/effects/API.html",
    "revision": "cf93efadf9e7a4151d49b17730a640e5"
  },
  {
    "url": "en/effects/index.html",
    "revision": "51e14352d9fa0bbae64562826aa42351"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "5645cacf09cbdb5cf4748ae2f9004b99"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "adcb4753401d576ea737e971edff0231"
  },
  {
    "url": "en/json/Control.html",
    "revision": "6b2c60ea3c81f68c568b6f40ffba8ef9"
  },
  {
    "url": "en/json/index.html",
    "revision": "646a541b4456e7b3a6013cb5b5c0de53"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "8e7970b7fe85eb2ecec9df90fc74e50a"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "d990efbb5da53535773f6aba0558c7b0"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "eb1ebb0ea95222170ade7edea0a00874"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "83d74de3b603dc6bd8382d6cb04d4881"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "7539bfb001c8e64d37b3ad0e4a1b4dd7"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "182b36006c7b2f3f753821a27a0534c3"
  },
  {
    "url": "en/user/index.html",
    "revision": "4d6234fa7c4fd34afce10991536f4a2e"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "0156402869aae1b305d5085bf88d2de3"
  },
  {
    "url": "en/user/LedDevices.html",
    "revision": "7290392447e3391c709c0809c7ee610c"
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
    "revision": "36c44fd606eadc8db437744752bf3fac"
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
