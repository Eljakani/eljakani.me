import 'kleur/colors';
import { q as NOOP_MIDDLEWARE_HEADER, v as decodeKey } from './chunks/astro/server_CN2bugmN.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/eljakani/eljakani-astro/","cacheDir":"file:///home/eljakani/eljakani-astro/node_modules/.astro/","outDir":"file:///home/eljakani/eljakani-astro/dist/","srcDir":"file:///home/eljakani/eljakani-astro/src/","publicDir":"file:///home/eljakani/eljakani-astro/public/","buildClientDir":"file:///home/eljakani/eljakani-astro/dist/","buildServerDir":"file:///home/eljakani/eljakani-astro/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/hac.BHjix9Qz.css"},{"type":"inline","content":".gallery-item[data-astro-cid-eo3wme6m]{transition:transform .3s ease-in-out}.gallery-item[data-astro-cid-eo3wme6m]:hover{transform:scale(1.05)}#galleryModal[data-astro-cid-eo3wme6m]{transition:opacity .3s ease-in-out}#galleryModal[data-astro-cid-eo3wme6m].hidden{opacity:0;pointer-events:none}#modalImage[data-astro-cid-eo3wme6m]{transition:opacity .3s ease-in-out}.modal-btn[data-astro-cid-eo3wme6m]{opacity:.8;transition:all .3s ease-in-out}.modal-btn[data-astro-cid-eo3wme6m]:hover{opacity:1;transform:scale(1.1)}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/projects/hac","isIndex":false,"type":"page","pattern":"^\\/projects\\/hac\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"hac","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/hac.md","pathname":"/projects/hac","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/hac.BHjix9Qz.css"},{"type":"inline","content":".gallery-item[data-astro-cid-eo3wme6m]{transition:transform .3s ease-in-out}.gallery-item[data-astro-cid-eo3wme6m]:hover{transform:scale(1.05)}#galleryModal[data-astro-cid-eo3wme6m]{transition:opacity .3s ease-in-out}#galleryModal[data-astro-cid-eo3wme6m].hidden{opacity:0;pointer-events:none}#modalImage[data-astro-cid-eo3wme6m]{transition:opacity .3s ease-in-out}.modal-btn[data-astro-cid-eo3wme6m]{opacity:.8;transition:all .3s ease-in-out}.modal-btn[data-astro-cid-eo3wme6m]:hover{opacity:1;transform:scale(1.1)}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/projects/quizqube","isIndex":false,"type":"page","pattern":"^\\/projects\\/quizqube\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"quizqube","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/quizqube.md","pathname":"/projects/quizqube","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/hac.BHjix9Qz.css"},{"type":"inline","content":".gallery-item[data-astro-cid-eo3wme6m]{transition:transform .3s ease-in-out}.gallery-item[data-astro-cid-eo3wme6m]:hover{transform:scale(1.05)}#galleryModal[data-astro-cid-eo3wme6m]{transition:opacity .3s ease-in-out}#galleryModal[data-astro-cid-eo3wme6m].hidden{opacity:0;pointer-events:none}#modalImage[data-astro-cid-eo3wme6m]{transition:opacity .3s ease-in-out}.modal-btn[data-astro-cid-eo3wme6m]{opacity:.8;transition:all .3s ease-in-out}.modal-btn[data-astro-cid-eo3wme6m]:hover{opacity:1;transform:scale(1.1)}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/projects/siemtinel","isIndex":false,"type":"page","pattern":"^\\/projects\\/siemtinel\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"siemtinel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/siemtinel.md","pathname":"/projects/siemtinel","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/hac.BHjix9Qz.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.sticky-nav{position:sticky;top:0;z-index:50;transition:transform .3s ease-in-out;margin-top:0;padding-top:.7rem}.sticky-nav.hidden{transform:translateY(-100%)}.responsibilities-content[data-astro-cid-6wzdyzp6]{max-height:0;opacity:0;overflow:hidden;transition:max-height .5s ease-out,opacity .3s ease-out}.responsibilities-content[data-astro-cid-6wzdyzp6].expanded{max-height:1000px;opacity:1;transition:max-height .5s ease-in,opacity .3s ease-in}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/eljakani/eljakani-astro/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["/home/eljakani/eljakani-astro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/eljakani/eljakani-astro/src/components/Projects.astro",{"propagation":"in-tree","containsHead":false}],["/home/eljakani/eljakani-astro/src/layouts/ProjectLayout.astro",{"propagation":"in-tree","containsHead":false}],["/home/eljakani/eljakani-astro/src/pages/projects/hac.md",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/hac@_@md",{"propagation":"in-tree","containsHead":false}],["/home/eljakani/eljakani-astro/src/pages/projects/quizqube.md",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/quizqube@_@md",{"propagation":"in-tree","containsHead":false}],["/home/eljakani/eljakani-astro/src/pages/projects/siemtinel.md",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/siemtinel@_@md",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/projects/hac@_@md":"pages/projects/hac.astro.mjs","\u0000@astro-page:src/pages/projects/quizqube@_@md":"pages/projects/quizqube.astro.mjs","\u0000@astro-page:src/pages/projects/siemtinel@_@md":"pages/projects/siemtinel.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CJdMN5wb.mjs","/home/eljakani/eljakani-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_zBp-gLnA.mjs","/home/eljakani/eljakani-astro/src/components/Footer":"_astro/Footer.BosB_noJ.js","/home/eljakani/eljakani-astro/src/components/StickyNavigation":"_astro/StickyNavigation.L_u5HBwL.js","@astrojs/react/client.js":"_astro/client.aI1w898s.js","/home/eljakani/eljakani-astro/src/layouts/ProjectLayout.astro?astro&type=script&index=0&lang.ts":"_astro/ProjectLayout.astro_astro_type_script_index_0_lang.DhsWfHNx.js","/home/eljakani/eljakani-astro/src/components/Experiences.astro?astro&type=script&index=0&lang.ts":"_astro/Experiences.astro_astro_type_script_index_0_lang.B3PobHPh.js","/home/eljakani/eljakani-astro/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeToggle.astro_astro_type_script_index_0_lang.CKKfNPBR.js","/home/eljakani/eljakani-astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.Cainpjm5.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/eljakani/eljakani-astro/src/layouts/ProjectLayout.astro?astro&type=script&index=0&lang.ts","function h(){let n=0;const t=document.querySelectorAll(\".gallery-item\"),o=document.getElementById(\"galleryModal\"),r=document.getElementById(\"modalImage\"),f=document.getElementById(\"closeModal\"),l=document.getElementById(\"prevImage\"),i=document.getElementById(\"nextImage\");if(!o||!r||!f||!l||!i)return;function y(e){n=e,g(),o?.classList.remove(\"hidden\"),document.body.style.overflow=\"hidden\"}function m(){o?.classList.add(\"hidden\"),document.body.style.overflow=\"\"}function g(){const e=t[n].querySelector(\"img\");e instanceof HTMLImageElement&&r&&(r.src=e.src,r.alt=e.alt)}function I(){n=(n+1)%t.length,g()}function E(){n=(n-1+t.length)%t.length,g()}t.forEach((e,a)=>{e.addEventListener(\"click\",()=>y(a))}),f.addEventListener(\"click\",m),i.addEventListener(\"click\",I),l.addEventListener(\"click\",E),o.addEventListener(\"click\",e=>{e.target===o&&m()}),document.addEventListener(\"keydown\",e=>{o&&!o.classList.contains(\"hidden\")&&(e.key===\"ArrowRight\"&&I(),e.key===\"ArrowLeft\"&&E(),e.key===\"Escape\"&&m())});const L={root:null,rootMargin:\"0px\",threshold:.1},p=new IntersectionObserver((e,a)=>{e.forEach(d=>{if(d.isIntersecting){const c=d.target.querySelector(\"img\");c instanceof HTMLImageElement&&c.dataset.src&&(c.src=c.dataset.src,c.removeAttribute(\"data-src\")),a.unobserve(d.target)}})},L);t.forEach(e=>{p.observe(e)});function v(){const e=c=>{const u=t[c].querySelector(\"img\");if(u instanceof HTMLImageElement&&u.dataset.src){const s=document.createElement(\"link\");s.href=u.dataset.src,s.rel=\"preload\",s.as=\"image\",document.head.appendChild(s)}},a=(n+1)%t.length,d=(n-1+t.length)%t.length;e(a),e(d)}i.addEventListener(\"click\",v),l.addEventListener(\"click\",v)}h();document.addEventListener(\"astro:page-load\",h);"],["/home/eljakani/eljakani-astro/src/components/Experiences.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{document.querySelectorAll(\".responsibilities-toggle\").forEach(t=>{t.addEventListener(\"click\",()=>{const n=t.getAttribute(\"data-index\"),e=document.querySelector(`.responsibilities-content[data-index=\"${n}\"]`),s=t.querySelector(\"svg\");e&&s&&(e.classList.toggle(\"expanded\"),e.classList.toggle(\"hidden\"),s.style.transform=e.classList.contains(\"expanded\")?\"rotate(180deg)\":\"rotate(0deg)\")})})});"],["/home/eljakani/eljakani-astro/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts","function o(){const a=document.getElementById(\"theme-toggle\"),t=document.documentElement;function s(e){t.classList.remove(\"light\",\"dark\"),t.classList.add(e),localStorage.setItem(\"theme\",e)}a?.addEventListener(\"click\",()=>{const e=t.classList.contains(\"dark\")?\"light\":\"dark\";s(e)});const c=localStorage.getItem(\"theme\"),n=window.matchMedia(\"(prefers-color-scheme: dark)\").matches;s(c??(n?\"dark\":\"light\"))}o();document.addEventListener(\"astro:after-swap\",o);"]],"assets":["/_astro/eljakani.BT6_vL3f.jpg","/_astro/Blockhat-logo.CtSc4u6r.png","/_astro/Sekera-logo.CXDw_RAh.png","/_astro/logo-ensa.B3rShmlv.png","/_astro/club_gcdste_logo.gj1hWl9H.jpeg","/_astro/EMJE.D6tYNYhX.png","/_astro/hac.BHjix9Qz.css","/EMJE.png","/aisec.jpeg","/astrojs.png","/club_gcdste_logo.jpeg","/favicon.svg","/logo-ensa.png","/og-image.jpg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.Cainpjm5.js","/_astro/Footer.BosB_noJ.js","/_astro/StickyNavigation.L_u5HBwL.js","/_astro/client.aI1w898s.js","/_astro/createLucideIcon.tLA7djDE.js","/_astro/index.CbttJwvd.js","/projects/hac/hac_featured.png","/projects/quizqube/quizqube_featured.png","/projects/cogniguard/cogniguard_featured.png","/projects/siemtinel/001.jpeg","/projects/siemtinel/002.jpeg","/projects/siemtinel/003.jpeg","/projects/siemtinel/004.jpeg","/projects/siemtinel/005.jpeg","/projects/siemtinel/siemtinel_featured.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"RjougujtuRkANC0Q3jHXDugo/LMXGn15mVMo4yE3FmI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
