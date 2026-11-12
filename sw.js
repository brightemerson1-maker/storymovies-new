/* STORY MOVIES v9.0 50 MB PRO - Service Worker - Developer Bright Emerson */
const CACHE_NAME = 'story-movies-v9-50mb-pro';
const APP_VERSION = '9.0 50MB PRO';
const APP_SIZE_MB = 50;
const SUPPORT_WHATSAPP = '256774150925';
const SUPPORT_CALL = '256745991463';
const SUPPORT_EMAIL = 'brightemerson1@gmail.com';
const CORE_FILES = ['/','/index.html','/manifest.json','/sw.js'];
self.addEventListener('install', e => { console.log('[STORY MOVIES v9.0 50MB] Installing 50 MB App'); e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE_FILES)).catch(()=>{}).then(()=>self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => { if(k!==CACHE_NAME) return caches.delete(k); }))).then(()=>self.clients.claim())); });
self.addEventListener('fetch', e => { if(e.request.url.includes('drive.google.com')||e.request.url.includes('wa.me')) return; e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { if(e.request.method==='GET'&&res.status===200){ const clone=res.clone(); caches.open(CACHE_NAME).then(c=>c.put(e.request, clone)); } return res; }).catch(()=>caches.match('/index.html')))); });
self.addEventListener('message', e => { if(e.data==='skipWaiting') self.skipWaiting(); });
self.addEventListener('push', e => { self.registration.showNotification('STORY MOVIES 50 MB', {body: e.data?e.data.text():'New Video on STORY MOVIES 50 MB!', icon:'https://picsum.photos/192/192?21'}); });
/* END 50 MB PRO - Support WhatsApp 256774150925 Call 256745991463 Email brightemerson1@gmail.com - Plans Day 1000 Week 5000 Month 15000 3Months 30000 VIP Year 50000 Lifetime 150000 */