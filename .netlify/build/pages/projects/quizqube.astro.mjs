import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_CN2bugmN.mjs';
import 'kleur/colors';
import { $ as $$ProjectLayout } from '../../chunks/ProjectLayout_BnsGRAiO.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<h1 id=\"quizqube-ai-powered-quiz-platform\">QuizQube: AI-Powered Quiz Platform</h1>\n<h2 id=\"overview\">Overview</h2>\n<p>QuizQube is an innovative AI-powered quiz platform designed to help users learn and test their knowledge by generating quizzes from uploaded documents. This project was developed as a side project to explore the capabilities of Next.js and to dive deeper into interactions with Large Language Models (LLMs).</p>\n<h3 id=\"key-components\">Key Components</h3>\n<ol>\n<li><strong>Document Upload</strong>: Users can upload up to 3 PDF documents as the basis for quiz generation.</li>\n<li><strong>AI-Powered Quiz Generation</strong>: Utilizes LLMs to create relevant and challenging questions based on the uploaded content.</li>\n<li><strong>Customizable Quiz Settings</strong>: Users can adjust the number of questions, difficulty level, and quiz type to suit their learning needs.</li>\n<li><strong>Interactive Quiz Experience</strong>: Engaging interface for taking quizzes and reviewing results.</li>\n<li><strong>User Authentication</strong>: Personalized experiences with user accounts and saved settings.</li>\n<li><strong>Cloud Storage</strong>: AWS S3 integration for secure document storage and processing.</li>\n</ol>\n<h2 id=\"impact-and-future-directions\">Impact and Future Directions</h2>\n<p>QuizQube demonstrates the potential of AI in educational tools, offering a personalized and interactive learning experience. Future improvements could include support for more document types, advanced quiz generation algorithms, timed quizzes, leaderboards, and social sharing features.</p>\n<p>The project has provided valuable experience in building full-stack applications with Next.js, working with external APIs and cloud services, integrating AI models, and creating responsive user interfaces. It serves as a foundation for further exploration into AI-assisted learning platforms and personalized education tools.</p>";

				const frontmatter = {"layout":"../../layouts/ProjectLayout.astro","id":"quizqube","name":"QuizQube","description":"AI-powered quiz platform for learning and knowledge testing","icon":"lucide:brain-circuit","image":"/projects/quizqube/quizqube_featured.png","date":"2024","category":"Personal","client":"Side Project","team":[{"name":"El Jakani","link":"https://github.com/Eljakani"}],"tech":["Next.js","React","TypeScript","Tailwind CSS","Shadcn UI","Framer Motion","NextAuth.js","AWS S3","Lucide React"],"overview":"QuizQube is an AI-powered quiz platform that helps users learn and test their knowledge by generating quizzes from uploaded documents. This project was created as a side project to explore Next.js and interactions with Large Language Models (LLMs).","features":["Upload PDF documents (up to 3)","Generate quizzes based on uploaded content","Customize quiz settings (number of questions, difficulty, type of quiz)","Interactive quiz-taking experience","Results overview with correct answers","User authentication","Personalized settings"],"process":"The development of QuizQube followed an iterative process, starting with the implementation of document upload functionality and quiz generation. We then focused on creating an engaging user interface and integrating user authentication for personalized experiences.","challenges":[{"title":"Integrating AI for Quiz Generation","description":"Implementing an effective algorithm for generating relevant and diverse quiz questions from uploaded documents.","solution":"Utilized Large Language Models and fine-tuned the quiz generation process to ensure high-quality, context-appropriate questions."},{"title":"Handling Document Processing","description":"Efficiently processing and extracting information from uploaded PDF documents.","solution":"Implemented a robust document processing pipeline using AWS S3 for storage and server-side parsing for content extraction."}],"results":"QuizQube successfully demonstrates the potential of AI-powered learning tools, offering users a personalized and interactive way to test and expand their knowledge based on their own materials.","links":[{"text":"Project Repository","url":"https://github.com/Eljakani/QuizQube","icon":"lucide:github"},{"text":"Live Demo","url":"https://quizqube.eljakani.me/","icon":"lucide:external-link"}]};
				const file = "/home/eljakani/eljakani-astro/src/pages/projects/quizqube.md";
				const url = "/projects/quizqube";
				function rawContent() {
					return "   \n                                         \n              \n                \n                                                                          \n                            \n                                                 \n            \n                    \n                      \n     \n                       \n                                         \n                                                                                                                               \n                                                                                                                                                                                                                                                                    \n         \n                                    \n                                                \n                                                                             \n                                        \n                                           \n                         \n                           \n                                                                                                                                                                                                                                                                                     \n           \n                                               \n                                                                                                                                  \n                                                                                                                                                \n                                         \n                                                                                                 \n                                                                                                                                          \n                                                                                                                                                                                                            \n      \n                              \n                                               \n                         \n                     \n                                        \n                                \n   \n\n# QuizQube: AI-Powered Quiz Platform\n\n## Overview\n\nQuizQube is an innovative AI-powered quiz platform designed to help users learn and test their knowledge by generating quizzes from uploaded documents. This project was developed as a side project to explore the capabilities of Next.js and to dive deeper into interactions with Large Language Models (LLMs).\n\n### Key Components\n\n1. **Document Upload**: Users can upload up to 3 PDF documents as the basis for quiz generation.\n2. **AI-Powered Quiz Generation**: Utilizes LLMs to create relevant and challenging questions based on the uploaded content.\n3. **Customizable Quiz Settings**: Users can adjust the number of questions, difficulty level, and quiz type to suit their learning needs.\n4. **Interactive Quiz Experience**: Engaging interface for taking quizzes and reviewing results.\n5. **User Authentication**: Personalized experiences with user accounts and saved settings.\n6. **Cloud Storage**: AWS S3 integration for secure document storage and processing.\n\n## Impact and Future Directions\n\nQuizQube demonstrates the potential of AI in educational tools, offering a personalized and interactive learning experience. Future improvements could include support for more document types, advanced quiz generation algorithms, timed quizzes, leaderboards, and social sharing features.\n\nThe project has provided valuable experience in building full-stack applications with Next.js, working with external APIs and cloud services, integrating AI models, and creating responsive user interfaces. It serves as a foundation for further exploration into AI-assisted learning platforms and personalized education tools.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"quizqube-ai-powered-quiz-platform","text":"QuizQube: AI-Powered Quiz Platform"},{"depth":2,"slug":"overview","text":"Overview"},{"depth":3,"slug":"key-components","text":"Key Components"},{"depth":2,"slug":"impact-and-future-directions","text":"Impact and Future Directions"}];
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
