import { a as createComponent, m as maybeRenderHead, r as renderTemplate, d as renderComponent, c as createAstro, h as renderHead, i as renderSlot } from './astro/server_C3R3eYvt.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" class="theme-toggle" data-astro-cid-x3pjskd3>
Přepnout režim
</button>  `;
}, "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/components/ThemeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-3ef6ksr2> <div class="inner" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2>Chalupákův web</a> <nav data-astro-cid-3ef6ksr2> <a href="/blog" data-astro-cid-3ef6ksr2>Blog</a> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/components/ThemeToggle.astro", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true })} </nav> </div> </header> `;
}, "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="inner" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>© ${(/* @__PURE__ */ new Date()).getFullYear()} Chalupákův web</p> </div> </footer> `;
}, "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/components/Footer.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Chalup\xE1k\u016Fv web" } = Astro2.props;
  return renderTemplate`<html lang="cs" data-theme="dark" data-astro-cid-dmqsi53g> <head><meta charset="utf-8"><title>${title}</title><meta name="viewport" content="width=device-width, initial-scale=1">${renderHead()}</head> <body data-astro-cid-dmqsi53g> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-dmqsi53g": true })} <main class="page" data-astro-cid-dmqsi53g> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-dmqsi53g": true })} </body></html>`;
}, "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/components/Layout.astro", void 0);

export { $$Layout as $ };
