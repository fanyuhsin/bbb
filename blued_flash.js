var url = $request.url;
let headers = $request.headers || {};
let ua = headers['User-Agent'] || headers['user-agent'] || '';
let host = (url.match(/^https?:\/\/([^/]+)/) || [, ''])[1];
console.log('[Blued] host=' + host);
console.log('[Blued] UA=' + ua);
console.log('[Blued] URL=' + url);
function notify(t, s, c, o) {
  let opts = {};
  if (o) opts['open-url'] = o;
  if (Object.keys(opts).length === 0) $notify(t, s, c);
  else $notify(t, s, c, opts);
}
const ALWAYS = true;
const APP_UA = ['Blued', 'okhttp', 'Dalvik', 'Android', 'iOS', 'iPhone', 'CFNetwork', 'Media'];
const isApp = APP_UA.some(k => ua.indexOf(k) !== -1);
if (ALWAYS || isApp) {
  notify('🐓 Blued 看图', '10分钟内有效，尽快点开', url, url);
}
$done();
