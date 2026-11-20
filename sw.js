/* MSD Offline Cache — local, self-contained game; no third-party requests. */
const CACHE='my-singing-dogs-v1-final';
const SHELL=['./','./index.html','./style.css','./game.js','./audio.js','./score.js','./manifest.webmanifest','./logo.webp','./icon-180.png','./icon-192.png','./icon-512.png','./bg-plant.webp','./bg-ice.webp'];
const DOGS=['wind','stone','tech','cold','windstone','windtech','stonetech','windcold','stonecold','planttriple','icetriple','plantmyth','icemyth'].map(k=>'./dog-'+k+'.webp');
const MOUTHS=DOGS.map(x=>'./mouth-'+x+'.webp');
const MUSIC=['wind','stone','tech','windstone','windtech','stonetech','planttriple','plantmyth'].map(k=>'./p-'+k+'.ogg').concat(['wind','stone','cold','windstone','windcold','stonecold','icetriple','icemyth'].map(k=>'./i-'+k+'.ogg'));
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(async cache=>{await cache.addAll([...SHELL,...DOGS,...MOUTHS]); // Music is cached opportunistically to avoid an install timeout on cellular.
 await Promise.allSettled(MUSIC.map(async p=>{let r=await fetch(p);if(r.ok)await cache.put(p,r)}));}).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(async keys=>{await Promise.all(keys.filter(k=>k!==CACHE&&k.startsWith('my-singing-dogs-')).map(k=>caches.delete(k)));await self.clients.claim()}));});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(caches.match(event.request).then(async cached=>{if(cached)return cached;try{let r=await fetch(event.request);if(r.ok){let c=await caches.open(CACHE);c.put(event.request,r.clone()).catch(()=>{})}return r;}catch(e){if(event.request.mode==='navigate')return(await caches.match('./index.html'))||Response.error();return Response.error();}}));});
