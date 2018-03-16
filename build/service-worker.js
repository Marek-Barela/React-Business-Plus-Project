"use strict";var precacheConfig=[["/index.html","abfd623c2fe6c81a6b640ba49a96c173"],["/static/css/main.a12c9caa.css","30b2a5ea455ac87fef8f7e0f2c12150c"],["/static/js/main.0183f9e8.js","3af7754cc5849d1e3fa88c664c8c1707"],["/static/media/FAQ-background.0120860c.png","0120860c7f61718f9c7e371c0df4d0df"],["/static/media/about-background.ff27c86c.png","ff27c86c60c45cf2d4b25f25d9bcf9a2"],["/static/media/about-image.868e8288.png","868e82886b7fb54fc8de86532dc12640"],["/static/media/article-photo.49d801e8.png","49d801e8a5f73eb3d62b41df8ed1cb18"],["/static/media/blog-background.9df6a489.png","9df6a48918c1ead58df3cd205776f100"],["/static/media/blog-image-one.4e404679.png","4e404679d8cb2bcc4474f580c91acf4b"],["/static/media/blog-image-three.65d4cfec.png","65d4cfecd4366a5d2f8778d2e262b304"],["/static/media/blog-image-two.1109c6c2.png","1109c6c250923314f69a089635f62f12"],["/static/media/client-three.5d9feb67.png","5d9feb67b03d49eea606d204130ba1aa"],["/static/media/client-two.ef3bfb5f.png","ef3bfb5fd7740359df5e82006f3f446e"],["/static/media/contact-background.96b593bf.png","96b593bfa9bdac5faaf989de53092b53"],["/static/media/contact-page-layer.0166d7cc.png","0166d7cc4c349e6e9201bc8d73158fe4"],["/static/media/home-background.66828d21.png","66828d2187dbaff86790aba13d592881"],["/static/media/news-background.6d3671b3.png","6d3671b35ff9c7e9eb28b7ff0f6c35ca"],["/static/media/news-image-one.27e4d90f.png","27e4d90fe7655732bf6fb42a0426971c"],["/static/media/news-image-three.072cdfc6.png","072cdfc61a13451a834c41936ca69bcb"],["/static/media/news-image-two.ebd2341e.png","ebd2341e3b8af6b01cc9dca3bf2d1020"],["/static/media/news-subimage-one.ffc49e5b.png","ffc49e5b9e1d9db46ac318d6eb79f049"],["/static/media/news-subimage-two.195f37d9.png","195f37d9ced929a74f8a471b28209445"],["/static/media/post-author.d08cb444.png","d08cb4445b33a4877bc5d9eed64c2f8e"],["/static/media/services-background.17565876.png","175658769b5d2f7035ba07dd59d8589b"],["/static/media/services-image-four.4c905304.png","4c90530405e4151d1e36fda98c78cffb"],["/static/media/services-image-one.31d0d7bd.png","31d0d7bd9e4f1d956f2a83a83ff36a02"],["/static/media/services-image-three.9b230aac.png","9b230aacba3badde3be0d4bebcd32786"],["/static/media/services-image-two.d8d18271.png","d8d18271d517435a2b06f0c1165164c3"],["/static/media/views-image-one.f9f92dec.png","f9f92dec4aa93606f98001947ab093d3"],["/static/media/views-image-two.ccb0be40.png","ccb0be403faeddfdaa843ed97c6efba5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});