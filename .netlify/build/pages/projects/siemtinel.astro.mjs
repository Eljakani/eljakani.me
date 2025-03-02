import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_CN2bugmN.mjs';
import 'kleur/colors';
import { $ as $$ProjectLayout } from '../../chunks/ProjectLayout_BnsGRAiO.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<h1 id=\"siemtinel-cloud-based-siem-with-elk-stack-and-suricata\">SIEMTINEL: Cloud-based SIEM with ELK Stack and Suricata</h1>\n<h2 id=\"overview\">Overview</h2>\n<p>SIEMTINEL is designed to address modern cybersecurity challenges by integrating the ELK stack (Elasticsearch, Logstash, and Kibana) with Suricata for network intrusion detection. With the use of Kafka and Filebeat for log transportation and Docker for containerization, it provides a scalable and efficient solution for real-time threat monitoring and incident response.</p>\n<h3 id=\"key-components\">Key Components</h3>\n<ol>\n<li><strong>Log Ingestion and Transport</strong>: Uses Filebeat and Kafka for high-volume log collection and transport from various sources to the central SIEM infrastructure.</li>\n<li><strong>Threat Detection</strong>: Suricata monitors network traffic for malicious activities and generates security alerts.</li>\n<li><strong>Data Processing and Analysis</strong>: Logstash processes the logs, while Elasticsearch indexes and stores the data for fast searching and analysis.</li>\n<li><strong>Visualization and Reporting</strong>: Kibana enables security teams to visualize real-time data and generate insightful reports.</li>\n<li><strong>Automated Response</strong>: Integrated with security tools to support automated incident responses.</li>\n</ol>\n<h2 id=\"impact-and-future-directions\">Impact and Future Directions</h2>\n<p>theres a lot of text here</p>";

				const frontmatter = {"layout":"../../layouts/ProjectLayout.astro","id":"siemtinel","name":"SIEMTINEL","description":"Cloud-based SIEM with ELK Stack and Suricata","icon":"lucide:shield","image":"/projects/siemtinel/siemtinel_featured.png","date":"2024","category":"Security","client":"School Project","team":[{"name":"Moad El Motassadeq","link":"https://github.com/moadza"},{"name":"Saaida Hnais","link":"https://github.com/saaida1"}],"tech":["Elasticsearch","Logstash","Kibana","Suricata","Kafka","Filebeat","Docker","AWS"],"overview":"SIEMTINEL is a comprehensive Security Information and Event Management (SIEM) system that integrates the ELK Stack with Suricata for network intrusion detection, Kafka for scalable log transport, and Filebeat for log shipping. Deployed in the cloud, SIEMTINEL offers real-time threat detection, analysis, and incident response.","features":["Real-time log ingestion, processing, and threat detection","Suricata-powered network threat monitoring","Kafka-based distributed log transport","Customizable Kibana dashboards for visual insights","Scalable cloud infrastructure for high-volume log analysis"],"process":"The SIEMTINEL project followed an agile development methodology, beginning with setting up the ELK stack and Suricata for intrusion detection. We integrated Kafka and Filebeat to enhance log transportation and applied containerization through Docker to streamline deployment and scalability.","challenges":[{"title":"Handling High-Volume Log Data","description":"The system had to process millions of logs per second without compromising real-time threat detection.","solution":"We deployed Kafka for distributed log transport and leveraged Elasticsearch's scalability for efficient log storage and querying."},{"title":"Reducing False Positives","description":"Initial alert rules generated an overwhelming number of false positives, affecting the system's reliability.","solution":"Enhanced the alerting rules to reduce noise and improve detection accuracy."}],"results":"SIEMTINEL is operational across multiple environments, processing over a billion log events daily. We have successfully reached almost 70% of our objectives, significantly enhancing threat detection and response capabilities.","links":[{"text":"Project Repository","url":"https://github.com/Eljakani/SIEMTINEL","icon":"lucide:github"}],"images":["/projects/siemtinel/001.jpeg","/projects/siemtinel/002.jpeg","/projects/siemtinel/003.jpeg","/projects/siemtinel/004.jpeg","/projects/siemtinel/005.jpeg"]};
				const file = "/home/eljakani/eljakani-astro/src/pages/projects/siemtinel.md";
				const url = "/projects/siemtinel";
				function rawContent() {
					return "   \n                                         \n               \n                 \n                                                           \n                     \n                                                   \n            \n                    \n                        \n     \n                                \n                                       \n                          \n                                        \n                                                                                               \n                                                                                                                                                                                                                                                                                                                                                   \n         \n                                                               \n                                                \n                                           \n                                                        \n                                                                \n                                                                                                                                                                                                                                                                                                              \n           \n                                          \n                                                                                                                         \n                                                                                                                                                 \n                                     \n                                                                                                                               \n                                                                                           \n                                                                                                                                                                                                                                            \n      \n                              \n                                                \n                         \n       \n                                  \n                                  \n                                  \n                                  \n                                  \n   \n\n# SIEMTINEL: Cloud-based SIEM with ELK Stack and Suricata\n\n## Overview\n\nSIEMTINEL is designed to address modern cybersecurity challenges by integrating the ELK stack (Elasticsearch, Logstash, and Kibana) with Suricata for network intrusion detection. With the use of Kafka and Filebeat for log transportation and Docker for containerization, it provides a scalable and efficient solution for real-time threat monitoring and incident response.\n\n### Key Components\n\n1. **Log Ingestion and Transport**: Uses Filebeat and Kafka for high-volume log collection and transport from various sources to the central SIEM infrastructure.\n2. **Threat Detection**: Suricata monitors network traffic for malicious activities and generates security alerts.\n3. **Data Processing and Analysis**: Logstash processes the logs, while Elasticsearch indexes and stores the data for fast searching and analysis.\n4. **Visualization and Reporting**: Kibana enables security teams to visualize real-time data and generate insightful reports.\n5. **Automated Response**: Integrated with security tools to support automated incident responses.\n\n## Impact and Future Directions\n\ntheres a lot of text here";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"siemtinel-cloud-based-siem-with-elk-stack-and-suricata","text":"SIEMTINEL: Cloud-based SIEM with ELK Stack and Suricata"},{"depth":2,"slug":"overview","text":"Overview"},{"depth":3,"slug":"key-components","text":"Key Components"},{"depth":2,"slug":"impact-and-future-directions","text":"Impact and Future Directions"}];
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
