// CDN Media Loader（Loon 版 · 纯通知链接，不自动保存）
// 拦截聊天图片响应，弹通知 + 点击跳浏览器看，自己决定是否保存
// 注意：闪照/大图直链在 Safari 会被 302 到回源域后 404，属服务端限制，本脚本无法绕过

let h = $response.headers;
let ct = (h['Content-Type'] || h['content-type'] || '').toLowerCase();
if (ct.indexOf('image/') !== 0) {
  // 非图片（如 302/404 响应体），直接放行
  $done({});
  return;
}

let url = $request.url;

$notify('📎 Media', '点击在浏览器打开 · 约10分钟内有效', url, { 'open-url': url });

$done({});
