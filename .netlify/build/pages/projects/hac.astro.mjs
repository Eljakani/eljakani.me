import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_CN2bugmN.mjs';
import 'kleur/colors';
import { $ as $$ProjectLayout } from '../../chunks/ProjectLayout_BnsGRAiO.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<h1 id=\"hac-hardening-as-code\">HaC: Hardening as Code</h1>\n<h2 id=\"overview\">Overview</h2>\n<p>HaC (Hardening as Code) is a Linux hardening script designed to enhance the security of Linux systems by implementing recommendations from the ANSSI (Agence nationale de la sécurité des systèmes d’information) V2 guidelines. The project follows a modular structure, making it easy to implement, customize, and maintain security measures across various Linux environments.</p>\n<h3 id=\"key-components\">Key Components</h3>\n<ol>\n<li><strong>Modular Structure</strong>: Each security recommendation is implemented as a separate module, allowing for easy addition, removal, or modification of security measures.</li>\n<li><strong>Central Configuration</strong>: A central configuration file (modules.sh) maps each module to its score and path, facilitating dynamic module loading.</li>\n<li><strong>Main Script</strong>: The run.sh script orchestrates the execution of module functions, handles scoring, and generates reports.</li>\n<li><strong>Reporting</strong>: Generates detailed reports on the hardening status of the server, stored in the reports/ directory.</li>\n</ol>\n<h2 id=\"impact-and-future-directions\">Impact and Future Directions</h2>\n<p>HaC represents a significant step forward in automating and standardizing Linux system hardening. By implementing ANSSI guidelines, it helps organizations improve their security posture and maintain compliance with recognized security standards.</p>\n<p>Future development could focus on:</p>\n<ol>\n<li>Expanding the module library to cover additional security guidelines and best practices.</li>\n<li>Developing a user interface for easier configuration and report visualization.</li>\n<li>Implementing integration with configuration management tools for large-scale deployments.</li>\n<li>Adding support for automatic updates to address evolving security threats and guidelines.</li>\n</ol>\n<p>HaC aims to make robust security practices more accessible and manageable for system administrators and security professionals, contributing to improved overall cybersecurity in Linux environments.</p>";

				const frontmatter = {"layout":"../../layouts/ProjectLayout.astro","id":"hac","name":"HaC (Hardening as Code)","description":"Linux hardening script based on ANSSI V2 guidelines","icon":"lucide:shield-check","image":"/projects/hac/hac_featured.png","date":"2023","category":"Security","client":"Personal Project","tech":["Bash","Linux","ANSSI Guidelines","Shell Scripting"],"overview":"HaC (Hardening as Code) is a comprehensive Linux hardening script designed to enhance system security by implementing recommendations from the ANSSI (Agence nationale de la sécurité des systèmes d'information) V2 guidelines. It follows a modular approach, making it easy to implement, customize, and maintain security measures across Linux systems.","features":["Modular structure for easy customization and maintenance","Implementation of ANSSI V2 security guidelines","Automated hardening process for Linux systems","Scoring system to evaluate security compliance","Report generation for hardening status"],"process":"The HaC project was developed using a modular approach. Each security recommendation from the ANSSI guidelines was implemented as a separate module, allowing for easy addition, removal, or modification of security measures. The project structure was designed to support scalability and maintainability.","challenges":[{"title":"Balancing Security and Usability","description":"Implementing strict security measures without compromising system functionality and user experience.","solution":"Careful consideration of each hardening measure, with options to customize the level of security based on specific needs."},{"title":"Ensuring Compatibility Across Different Linux Distributions","description":"Creating a script that works across various Linux distributions with different default configurations.","solution":"Developed a flexible approach that checks for system-specific configurations before applying changes, ensuring compatibility."}],"results":"HaC provides a streamlined method for hardening Linux systems according to ANSSI guidelines. It offers an efficient way to improve system security, generate compliance reports, and maintain a consistent security posture across multiple systems.","links":[{"text":"Project Repository","url":"https://github.com/Eljakani/HaC","icon":"lucide:github"},{"text":"ANSSI Guidelines","url":"https://cyber.gouv.fr/sites/default/files/document/fr_np_linux_configuration-v2.0.pdf","icon":"lucide:book-lock"}]};
				const file = "/home/eljakani/eljakani-astro/src/pages/projects/hac.md";
				const url = "/projects/hac";
				function rawContent() {
					return "   \n                                         \n         \n                               \n                                                                  \n                           \n                                       \n            \n                    \n                          \n                                                              \n                                                                                                                                                                                                                                                                                                                                                                        \n         \n                                                              \n                                                    \n                                                   \n                                                    \n                                            \n                                                                                                                                                                                                                                                                                                                         \n           \n                                             \n                                                                                                                       \n                                                                                                                                         \n                                                                        \n                                                                                                                         \n                                                                                                                                             \n                                                                                                                                                                                                                                                               \n      \n                              \n                                          \n                         \n                            \n                                                                                                \n                            \n   \n\n# HaC: Hardening as Code\n\n## Overview\n\nHaC (Hardening as Code) is a Linux hardening script designed to enhance the security of Linux systems by implementing recommendations from the ANSSI (Agence nationale de la sécurité des systèmes d'information) V2 guidelines. The project follows a modular structure, making it easy to implement, customize, and maintain security measures across various Linux environments.\n\n### Key Components\n\n1. **Modular Structure**: Each security recommendation is implemented as a separate module, allowing for easy addition, removal, or modification of security measures.\n2. **Central Configuration**: A central configuration file (modules.sh) maps each module to its score and path, facilitating dynamic module loading.\n3. **Main Script**: The run.sh script orchestrates the execution of module functions, handles scoring, and generates reports.\n4. **Reporting**: Generates detailed reports on the hardening status of the server, stored in the reports/ directory.\n\n## Impact and Future Directions\n\nHaC represents a significant step forward in automating and standardizing Linux system hardening. By implementing ANSSI guidelines, it helps organizations improve their security posture and maintain compliance with recognized security standards.\n\nFuture development could focus on:\n\n1. Expanding the module library to cover additional security guidelines and best practices.\n2. Developing a user interface for easier configuration and report visualization.\n3. Implementing integration with configuration management tools for large-scale deployments.\n4. Adding support for automatic updates to address evolving security threats and guidelines.\n\nHaC aims to make robust security practices more accessible and manageable for system administrators and security professionals, contributing to improved overall cybersecurity in Linux environments.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hac-hardening-as-code","text":"HaC: Hardening as Code"},{"depth":2,"slug":"overview","text":"Overview"},{"depth":3,"slug":"key-components","text":"Key Components"},{"depth":2,"slug":"impact-and-future-directions","text":"Impact and Future Directions"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$ProjectLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
