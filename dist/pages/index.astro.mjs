import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C3R3eYvt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Do3ncrsa.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Chalup\xE1k\u016Fv web" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1>Chalupákův web</h1> <p>Osobní web, blog a poznámky.</p> <p><a href="/blog">Přejít na blog →</a></p> </section> ` })}`;
}, "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/pages/index.astro", void 0);

const $$file = "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
