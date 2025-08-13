const CACHE = 'dealdesk-crm-v3';
self.addEventListener('install', e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html'])))});
self.addEventListener('fetch', e=>{e.respondWith((async()=>{try{const r=await fetch(e.request);const c=await caches.open(CACHE);c.put(e.request,r.clone());return r}catch{const m=await caches.match(e.request);return m||caches.match('./')}})())});
