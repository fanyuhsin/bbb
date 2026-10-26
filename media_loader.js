// Media CDN response hook
// Notify with direct link on matched CDN responses.
// Links are signed and time-limited; open promptly.

var url = $request.url;
let headers = $request.headers || {};
let ua = headers['User-Agent'] || headers['user-agent'] || '';
let host = (url.match(/^https?:\/\/([^/]+)/) || [, ''])[1];

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
  notify('📎 Media', 'Link expires soon, open promptly', url, url);
}

$done();
