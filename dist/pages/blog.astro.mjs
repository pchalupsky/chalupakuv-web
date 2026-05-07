import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_C3R3eYvt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Do3ncrsa.mjs';
import 'clsx';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_t9k6iJ3q.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { post } = Astro2.props;
  const { data, slug } = post;
  return renderTemplate`${maybeRenderHead()}<article class="card" data-astro-cid-e3grugc2> <a${addAttribute(`/blog/${slug}/`, "href")} class="card-link" data-astro-cid-e3grugc2> <h2 data-astro-cid-e3grugc2>${data.title}</h2> <p class="excerpt" data-astro-cid-e3grugc2>${data.excerpt}</p> <p class="meta" data-astro-cid-e3grugc2> ${new Date(data.date).toLocaleDateString("cs-CZ")} ${data.tags && data.tags.length ? ` \xB7 ${data.tags.join(", ")}` : ""} </p> </a> </article> `;
}, "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/components/BlogCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog \xB7 Chalup\xE1k\u016Fv web", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-5tznm7mj>Blog</h1> <div class="list" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": post, "data-astro-cid-5tznm7mj": true })}`)} </div> ` })} `;
}, "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
