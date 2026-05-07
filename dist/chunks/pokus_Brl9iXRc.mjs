import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_C3R3eYvt.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"nadpis-h1\">Nadpis H1</h1>\n<p>==Text článku==</p>\n<ul>\n<li>První položka\n<ul>\n<li>Vnořená položka</li>\n</ul>\n</li>\n</ul>\n<p><a href=\"https://example.com\">Odkaz na něco</a></p>";

				const frontmatter = {"title":"Pokus","date":"2026-05-06T00:00:00.000Z","excerpt":"Pokus další","image":"BrannyDen2025.png","gallery":["BrannyDen2024.jpg","BrannyDen2025.png"],"tags":["včely","blog"]};
				const file = "C:/Users/localadmin/OneDrive/www/ChalupakuvWeb/chalupakuv-web/src/content/posts/pokus.md";
				const url = undefined;
				function rawContent() {
					return "\n# Nadpis H1\n\n==Text článku==\n\n- První položka\n  - Vnořená položka\n\n[Odkaz na něco](https://example.com)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"nadpis-h1","text":"Nadpis H1"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
