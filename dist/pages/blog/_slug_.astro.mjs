import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, d as renderComponent } from '../../chunks/astro/server_C3R3eYvt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Do3ncrsa.mjs';
import 'clsx';
/* empty css                                     */
import { g as getCollection } from '../../chunks/_astro_content_t9k6iJ3q.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("http://localhost:4321");
const $$PostHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostHeader;
  const { title, date, tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="post-header" data-astro-cid-yl355ysp> <a href="/blog" class="back" data-astro-cid-yl355ysp>← Zpět na blog</a> <h1 data-astro-cid-yl355ysp>${title}</h1> <p class="meta" data-astro-cid-yl355ysp>
Publikováno: ${new Date(date).toLocaleDateString("cs-CZ")} ${tags && tags.length ? ` \xB7 ${tags.join(", ")}` : ""} </p> </header> `;
}, "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/components/PostHeader.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { images = [] } = Astro2.props;
  if (!images.length) return null;
  return renderTemplate`${maybeRenderHead()}<section class="gallery" data-astro-cid-ihllb3az> <h2 data-astro-cid-ihllb3az>Galerie</h2> <div class="grid" data-astro-cid-ihllb3az> ${images.map((img) => renderTemplate`<figure data-astro-cid-ihllb3az> <img${addAttribute(`/img/${img}`, "src")} loading="lazy"${addAttribute(img, "alt")} data-astro-cid-ihllb3az> </figure>`)} </div> </section> `;
}, "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/components/Gallery.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { data, body } = post;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${data.title} \xB7 Chalup\xE1k\u016Fv web`, "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostHeader", $$PostHeader, { "title": data.title, "date": data.date, "tags": data.tags, "data-astro-cid-4sn4zg3r": true })} ${data.image && renderTemplate`${maybeRenderHead()}<img${addAttribute(`/img/${data.image}`, "src")}${addAttribute(data.title, "alt")} class="hero" loading="lazy" onerror="this.src='/img/placeholder.jpg';" data-astro-cid-4sn4zg3r>`}<article class="content" data-astro-cid-4sn4zg3r> ${body} </article> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": data.gallery, "data-astro-cid-4sn4zg3r": true })} ` })} `;
}, "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
