import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute, g as createTransitionScope, b as createAstro, f as renderTransition } from '../chunks/astro/server_CN2bugmN.mjs';
import 'kleur/colors';
import { B as Button, b as Badge, c as cn, a as $$Icon, $ as $$Layout } from '../chunks/badge_sWgLQTQV.mjs';
import { Sun, Moon, Github, Linkedin, PencilRuler, GraduationCap, BriefcaseBusiness, Binary, Sprout, Award, Twitter, Mail, Phone } from 'lucide-react';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_DTHAFFH3.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
/* empty css                                 */
import { motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Button", Button, { "variant": "ghost", "size": "icon", "id": "theme-toggle", "className": "relative" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Sun", Sun, { "className": "h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" })} ${renderComponent($$result2, "Moon", Moon, { "className": "absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" })} ${maybeRenderHead()}<span class="sr-only">Toggle theme</span> ` })} ${renderScript($$result, "/home/eljakani/eljakani-astro/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eljakani/eljakani-astro/src/components/ThemeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="py-4 flex justify-between items-center"${addAttribute(createTransitionScope($$result, "l7r54iwe"), "data-astro-transition-persist")}> <nav class="hidden md:flex items-center space-x-4"> <a href="https://blog.eljakani.me" target="_blank" rel="noopener dofollow" class="rounded-full p-2 text-muted-foreground hover:text-primary bg-primary/10 hover:bg-primary/20 transition-colors px-3">
Blog
</a> </nav> <h1 class="text-2xl font-bold font-alt">Eljakani<span class="text-point">.</span></h1> <div class="flex items-center space-x-4"> <a href="https://github.com/Eljakani" class="text-muted-foreground hover:text-primary" target="_blank" rel="noopener dofollow" aria-label="Github"> ${renderComponent($$result, "Github", Github, { "className": "w-6 h-6" })} </a> <a href="https://linkedin.com/in/eljakaniyassine" class="text-muted-foreground hover:text-primary" target="_blank" rel="noopener dofollow" aria-label="Linkedin"> ${renderComponent($$result, "Linkedin", Linkedin, { "className": "w-6 h-6" })} </a> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> </header>`;
}, "/home/eljakani/eljakani-astro/src/components/Header.astro", "self");

const eljakani = new Proxy({"src":"/_astro/eljakani.BT6_vL3f.jpg","width":700,"height":700,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/eljakani/eljakani-astro/src/imgs/eljakani.jpg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const alert = {
    "title": "Seeking an end-of-studies internship"
  };
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row items-center justify-start gap-4 mt-4 md:mt-8"> ${renderComponent($$result, "Image", $$Image, { "src": eljakani, "alt": "El Jakani Yassine", "class": "rounded-2xl w-32 h-32", "loading": "eager" })} <div class="flex flex-col items-center md:items-start justify-center ml-4"> <h1 class="font-alt text-start text-xl md:text-3xl font-light text-balance">Hi, <span class="font-bold">I'm Yassine El Jakani<span class="text-point">.</span></span> 👋</h1> <h2 class="font-alt text-start text-lg md:text-3xl font-light text-balance">I <span class="text-point font-bold">&lt;dev/&gt;</span> things, And I <span class="text-point font-bold">Secure</span> them.</h2> <div class="items-center gap-2 flex-col md:flex-row mt-4 hidden md:flex"> ${renderComponent($$result, "Badge", Badge, { "variant": "outline" }, { "default": ($$result2) => renderTemplate` <span class="font-alt text-xs font-light antialiased leading-2 md:leading-tight">${alert.title}</span> ` })} </div> </div> </div> <div class="my-4"> <p class="font-alt text-md md:text-xl font-light antialiased leading-2 md:leading-relaxed text-left text-balance">
Cybersecurity engineering student and DevSecOps enthusiast. Passionate about securing digital environments and automating security processes. Experienced in web development, penetration testing, and blockchain technologies.
</p> </div>`;
}, "/home/eljakani/eljakani-astro/src/components/Hero.astro", void 0);

const StickyNavigation = ({ navItems }) => {
  const [activeSection, setActiveSection] = useState("skills");
  const [isSticky, setIsSticky] = useState(false);
  const prevScrollY = useRef(0);
  const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const element = document.getElementById(item.id.toLowerCase());
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [navItems]);
  return /* @__PURE__ */ jsx(
    "nav",
    {
      ref: navRef,
      className: `sticky-nav ${isSticky ? "sticky-nav--sticky" : ""}`,
      children: /* @__PURE__ */ jsxs("div", { className: "bg-muted rounded-full container mx-auto flex justify-between items-center p-1 md:p-2 px-1.5 md:px-3 border", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-between gap-1 md:gap-2", children: navItems.map((item) => /* @__PURE__ */ jsxs(
          Button,
          {
            "aria-label": item.label,
            variant: activeSection === item.id.toLowerCase() ? "default" : "ghost",
            size: "sm",
            className: "rounded-full flex items-center gap-1 md:gap-2",
            onClick: () => {
              const element = document.getElementById(item.id.toLowerCase());
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            },
            children: [
              item.icon === "PencilRuler" && /* @__PURE__ */ jsx(PencilRuler, { size: 24 }),
              item.icon === "GraduationCap" && /* @__PURE__ */ jsx(GraduationCap, { size: 24 }),
              item.icon === "BriefcaseBusiness" && /* @__PURE__ */ jsx(BriefcaseBusiness, { size: 24 }),
              item.icon === "Binary" && /* @__PURE__ */ jsx(Binary, { size: 24 }),
              item.icon === "Sprout" && /* @__PURE__ */ jsx(Sprout, { size: 24 }),
              item.icon === "Award" && /* @__PURE__ */ jsx(Award, { size: 24 }),
              /* @__PURE__ */ jsx("span", { className: "text-sm hidden md:block", children: item.label })
            ]
          },
          item.id
        )) }),
        /* @__PURE__ */ jsx("div", { className: "text-end p-1 font-alt hidden md:block", children: /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold", children: [
          "Eljakani",
          /* @__PURE__ */ jsx("span", { className: "text-point", children: "." })
        ] }) })
      ] })
    }
  );
};

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { id: "skills", label: "Skills", icon: "PencilRuler" },
    { id: "education", label: "Education", icon: "GraduationCap" },
    { id: "experience", label: "Experience", icon: "BriefcaseBusiness" },
    { id: "projects", label: "Projects", icon: "Binary" },
    //{ id: 'certifications', label: 'Certifications', icon: "Award" },
    { id: "volunteering", label: "Volunteering", icon: "Sprout" }
  ];
  return renderTemplate`${renderComponent($$result, "StickyNavigation", StickyNavigation, { "client:load": true, "navItems": navItems, "client:component-hydration": "load", "client:component-path": "/home/eljakani/eljakani-astro/src/components/StickyNavigation", "client:component-export": "default", "data-astro-cid-pux6a34n": true })} `;
}, "/home/eljakani/eljakani-astro/src/components/Navigation.astro", void 0);

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const $$Astro = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skills;
  const skills = [
    {
      category: "DevSecOps",
      icon: "clarity:ci-cd-line",
      items: [
        { name: "CI/CD Pipelines", icon: "lucide:infinity" },
        { name: "Kubernetes", icon: "mdi:kubernetes" },
        { name: "Docker", icon: "simple-icons:docker" },
        //{ name: 'Ansible', icon: "mdi:ansible" },
        //{ name: 'SonarQube', icon: "simple-icons:sonarqube" },
        { name: "Elastic Stack", icon: "simple-icons:elastic" },
        //{ name: 'Jenkins', icon: "simple-icons:jenkins" },
        { name: "Git", icon: "mdi:git" }
      ]
    },
    {
      category: "Security",
      icon: "lucide:shield-check",
      items: [
        { name: "Penetration Testing", icon: "lucide:terminal" },
        { name: "Top 10 OWASP", icon: "simple-icons:owasp" },
        { name: "Security Operations", icon: "lucide:shield-check" },
        { name: "Cryptography", icon: "lucide:hash" }
        //{ name: 'Digital Forensics', icon: "lucide:folder-lock" },
        //{ name: 'Incident Response', icon: "lucide:octagon-alert" }
      ]
    },
    {
      category: "Web Development",
      icon: "lucide:earth-lock",
      items: [
        { name: "Laravel", icon: "mdi:laravel" },
        { name: "Livewire", icon: "simple-icons:livewire" },
        { name: "PHP", icon: "mdi:language-php" },
        { name: "NextJS", icon: "ri:nextjs-fill" },
        { name: "NodeJS", icon: "mdi:nodejs" },
        { name: "REST APIs", icon: "mdi:api" },
        { name: "Astro", icon: "simple-icons:astro" },
        { name: "ReactJS", icon: "mdi:react" },
        { name: "Tailwind CSS", icon: "mdi:tailwind" }
      ]
    },
    {
      category: "System Administration",
      icon: "lucide:server-cog",
      items: [
        { name: "Linux", icon: "mdi:linux" },
        { name: "Windows Server", icon: "mdi:microsoft-windows" },
        { name: "Open Stack", icon: "simple-icons:openstack" },
        { name: "Active Directory", icon: "mdi:administrator-network" },
        { name: "VMware ESXi", icon: "simple-icons:vmware" }
      ]
    },
    {
      category: "Blockchain",
      icon: "lucide:bitcoin",
      items: [
        { name: "Solidity", icon: "simple-icons:solidity" },
        { name: "Web3.js", icon: "simple-icons:web3dotjs" },
        { name: "Smart Contracts", icon: "simple-icons:smart" }
      ]
    },
    {
      category: "Programming",
      icon: "lucide:code",
      items: [
        { name: "Python", icon: "simple-icons:python" },
        { name: "Java", icon: "mdi:language-java" },
        { name: "C++", icon: "mdi:language-cpp" },
        { name: "Bash Scripting", icon: "mdi:bash" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="py-16"> <h3 class="text-4xl font-bold mb-10 text-foreground">Skills</h3> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 grid-rows-auto "> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Card", Card, { "className": `bg-background rounded-3xl shadow-lg border p-2 md:p-4 grow w-full` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", CardHeader, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", CardTitle, { "className": "flex items-center text-xl md:text-2xl font-semibold" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Icon", $$Icon, { "name": skill.icon.toLowerCase(), "class": "text-point w-10 h-10 mr-3" })} ${skill.category}` })} ` })} ${renderComponent($$result2, "CardContent", CardContent, { "className": "flex gap-2 flex-wrap" }, { "default": ($$result3) => renderTemplate`${skill.items.map((item) => renderTemplate`<div class="flex items-center gap-2"> <span${addAttribute(item.name, "area-label")} class="rounded-full px-4 py-2 tiny md:text-sm font-alt flex items-center gap-2 text-primary bg-background transition duration-300 ease-in-out cursor-pointer border border-primary hover:bg-primary hover:text-background"> ${renderComponent($$result3, "Icon", $$Icon, { "name": item.icon.toLowerCase(), "class": "w-6 h-6" })}${item.name} </span> </div>`)}` })} ` })}`)} </div> </section>`;
}, "/home/eljakani/eljakani-astro/src/components/Skills.astro", void 0);

const ensaLogo = new Proxy({"src":"/_astro/logo-ensa.B3rShmlv.png","width":885,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/eljakani/eljakani-astro/src/imgs/logo-ensa.png";
							}
							
							return target[name];
						}
					});

const $$Education = createComponent(($$result, $$props, $$slots) => {
  const educationData = [
    {
      school: "Marrakech National School of Applied Sciences - Cady Ayad University",
      schoolUrl: "https://www.ensa.ac.ma/",
      logo: ensaLogo,
      location: "Marrakech, Morocco",
      period: "2019 - Ongoing",
      degree: "Engineering degree - Cyber Defense Engineering and Embedded Telecommunications Systems"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="education" class="py-16"> <h3 class="text-4xl font-bold mb-10 text-foreground">Education</h3> <div class="space-y-8"> ${educationData.map((edu) => renderTemplate`${renderComponent($$result, "Card", Card, { "className": "bg-background rounded-3xl shadow-lg border overflow-hidden transition-all duration-300 hover:shadow-xl " }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col md:flex-row p-2"> <a class="bg-muted p-6 flex items-center justify-center md:w-1/3 rounded-2xl"${addAttribute(edu.schoolUrl, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Visit ${edu.school} website`, "aria-label")}> ${renderComponent($$result2, "Image", $$Image, { "src": edu.logo, "alt": `${edu.school} logo`, "width": 500, "height": 500, "class": "w-48 h-auto" })} </a> ${renderComponent($$result2, "CardContent", CardContent, { "className": "p-4 md:w-2/3" }, { "default": ($$result3) => renderTemplate` <h4 class="text-center md:text-start text-xl font-semibold text-foreground/90 mb-2 font-alt">${edu.school}</h4> <div class="grid grid-cols-2 grid-rows-2 text-sm mt-1 gap-2"> <div class="col-span-1 py-1 px-2 md:py-2 md:px-3 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 border rounded-xl"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:calendar", "class": "w-10 h-10 text-primary p-2 rounded-full bg-primary/10" })} <span class="text-center md:text-start text-xs md:text-sm">${edu.period}</span> </div> <div class="col-span-1 py-1 px-2 md:py-2 md:px-3 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 border rounded-xl"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:map-pin", "class": "w-10 h-10 text-primary p-2 rounded-full bg-primary/10" })} <span class="text-center md:text-start text-xs md:text-sm">${edu.location}</span> </div> <div class="col-span-2 p-2 md:p-3 border rounded-xl flex flex-col md:flex-row items-center gap-2"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:graduation-cap", "class": "w-10 h-10 text-primary p-2 rounded-full bg-primary/10" })} <span class="text-xs text-center md:text-start md:text-sm">${edu.degree}</span> </div> </div> ` })} </div> ` })}`)} </div> </section>`;
}, "/home/eljakani/eljakani-astro/src/components/Education.astro", void 0);

const blockHatLogo = new Proxy({"src":"/_astro/Blockhat-logo.CtSc4u6r.png","width":200,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/eljakani/eljakani-astro/src/imgs/Blockhat-logo.png";
							}
							
							return target[name];
						}
					});

const sekeraLogo = new Proxy({"src":"/_astro/Sekera-logo.CXDw_RAh.png","width":200,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/eljakani/eljakani-astro/src/imgs/Sekera-logo.png";
							}
							
							return target[name];
						}
					});

const $$Experiences = createComponent(($$result, $$props, $$slots) => {
  const experiencesData = [
    {
      company: "BlockHat",
      url: "https://blockhat.io/",
      position: "Web/Web3 Developer",
      type: "Full-time",
      logo: blockHatLogo,
      location: "Casablanca, Morocco",
      period: "Mar 2023 - Present",
      responsibilities: [
        { text: "Developed and maintained web and blockchain applications using Web3 technologies", icon: "lucide:code-2" },
        { text: "Collaborated with cross-functional teams to integrate blockchain solutions into web platforms", icon: "lucide:users" }
      ]
    },
    {
      company: "SEKERA",
      url: "https://sekera-group.com/",
      position: "Cyber Security Engineer",
      type: "Internship",
      logo: sekeraLogo,
      location: "Casablanca, Morocco",
      period: "Jun 2023 - Aug 2023",
      responsibilities: [
        { text: "Conducted Infrastructure penetration tests, identifying and documenting vulnerabilities", icon: "lucide:shield" },
        { text: "Engineered Docker containers to simulate diverse web security scenarios, enhancing testing effectiveness", icon: "lucide:box" },
        { text: "Developed custom scripts to automate vulnerability scanning processes", icon: "lucide:file-code-2" }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="py-16" data-astro-cid-6wzdyzp6> <h3 class="text-4xl font-bold mb-10 text-foreground" data-astro-cid-6wzdyzp6>Experience</h3> <div class="space-y-6" data-astro-cid-6wzdyzp6> ${experiencesData.map((exp, index) => renderTemplate`${renderComponent($$result, "Card", Card, { "className": "bg-gradient-to-br from-background to-muted/30 rounded-2xl shadow-lg border overflow-hidden transition-all duration-300 hover:shadow-xl", "data-astro-cid-6wzdyzp6": true }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col sm:flex-row items-center sm:items-stretch" data-astro-cid-6wzdyzp6> ${renderComponent($$result2, "CardHeader", CardHeader, { "className": "flex-shrink-0 w-full sm:w-auto sm:flex-grow-0 p-6 flex items-center justify-start sm:justify-center ", "data-astro-cid-6wzdyzp6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "src": exp.logo, "alt": `${exp.company} logo`, "width": 64, "height": 64, "class": "w-16 h-16 rounded-xl object-contain bg-white p-2 shadow-sm", "data-astro-cid-6wzdyzp6": true })} ` })} ${renderComponent($$result2, "CardContent", CardContent, { "className": "flex-grow p-6 flex flex-col sm:flex-row sm:items-center justify-between w-full", "data-astro-cid-6wzdyzp6": true }, { "default": ($$result3) => renderTemplate` <div data-astro-cid-6wzdyzp6> <h4 class="text-xl font-semibold text-foreground font-alt" data-astro-cid-6wzdyzp6> <a${addAttribute(exp.url, "href")} target="_blank" rel="noopener noreferrer" class="hover:underline hover:text-primary transition-colors" data-astro-cid-6wzdyzp6> ${exp.company} </a> </h4> <p class="text-lg text-foreground/80 font-alt" data-astro-cid-6wzdyzp6>${exp.position} - <span class="text-primary/80" data-astro-cid-6wzdyzp6>${exp.type}</span></p> <div class="flex flex-wrap gap-4 mt-2" data-astro-cid-6wzdyzp6> <div class="flex items-center text-sm text-foreground/60" data-astro-cid-6wzdyzp6> ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:map-pin", "class": "w-4 h-4 mr-2 text-primary/70", "data-astro-cid-6wzdyzp6": true })} ${exp.location} </div> <div class="flex items-center text-sm text-foreground/60" data-astro-cid-6wzdyzp6> ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:calendar", "class": "w-4 h-4 mr-2 text-primary/70", "data-astro-cid-6wzdyzp6": true })} ${exp.period} </div> </div> </div> <button class="responsibilities-toggle mt-4 sm:mt-0 text-primary hover:text-primary/80 transition-colors self-end bg-primary/10 hover:bg-primary/20 rounded-full p-2"${addAttribute(index, "data-index")} aria-label="Toggle responsibilities" data-astro-cid-6wzdyzp6> ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:chevron-down", "class": "w-6 h-6 transition-transform duration-300 ease-in-out", "data-astro-cid-6wzdyzp6": true })} </button> ` })} </div> <div class="responsibilities-content hidden"${addAttribute(index, "data-index")} data-astro-cid-6wzdyzp6> ${renderComponent($$result2, "CardContent", CardContent, { "className": "bg-gradient-to-br from-muted/20 to-muted/10 p-6 border-t", "data-astro-cid-6wzdyzp6": true }, { "default": ($$result3) => renderTemplate` <h5 class="text-lg font-semibold text-foreground mb-4" data-astro-cid-6wzdyzp6>Key Responsibilities:</h5> <div class="grid gap-4" data-astro-cid-6wzdyzp6> ${exp.responsibilities.map((task) => renderTemplate`<div class="flex items-center p-4 bg-background/50 rounded-xl transition-all duration-300 hover:bg-primary/5 group" data-astro-cid-6wzdyzp6> <div class="bg-primary/10 p-2 rounded-full mr-4 group-hover:bg-primary/20" data-astro-cid-6wzdyzp6> ${renderComponent($$result3, "Icon", $$Icon, { "name": task.icon, "class": "w-5 h-5 text-primary", "data-astro-cid-6wzdyzp6": true })} </div> <p class="text-sm text-foreground/80 flex-1" data-astro-cid-6wzdyzp6>${task.text}</p> </div>`)} </div> ` })} </div> ` })}`)} </div> </section>  ${renderScript($$result, "/home/eljakani/eljakani-astro/src/components/Experiences.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/eljakani/eljakani-astro/src/components/Experiences.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      id: "siemtinel",
      name: "SIEMTINEL",
      description: "Cloud-based SIEM with ELK Stack and Suricata",
      extendedDescription: "A cloud-based SIEM system using the ELK Stack for real-time threat detection and analysis, with Suricata for network monitoring and Kafka for scalable log transport.",
      year: "2024",
      icon: "lucide:shield",
      category: "Security",
      image: "/projects/siemtinel/siemtinel_featured.png",
      tech: ["ELK stack", "Suricata", "Kafka", "Docker", "AWS"]
    },
    {
      id: "hac",
      name: "HaC (Hardening as Code)",
      description: "Linux hardening script based on ANSSI V2 guidelines",
      extendedDescription: "A modular Linux hardening script designed to enhance system security by implementing recommendations from the ANSSI V2 guidelines.",
      year: "2023",
      icon: "lucide:shield-check",
      category: "Security",
      image: "/projects/hac/hac_featured.png",
      tech: ["Bash", "Linux", "ANSSI Guidelines"]
    },
    {
      id: "quizqube",
      name: "QuizQube",
      description: "AI-powered quiz platform for learning and knowledge testing",
      extendedDescription: "An AI-powered quiz platform that helps users learn and test their knowledge by generating quizzes from uploaded documents.",
      year: "2024",
      icon: "lucide:brain-circuit",
      category: "Personal",
      image: "/projects/quizqube/quizqube_featured.png",
      tech: ["Next.js", "Shadcn UI", "Framer Motion", "NextAuth.js", "AWS S3", "LLMs"]
    }
    // more projects are yet to come ...
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="py-16 min-h-screen"> <h2 class="text-3xl font-bold mb-8 text-foreground">Projects</h2> <div class="grid gap-8"> ${projects.map((project) => renderTemplate`<a${addAttribute(`/projects/${project.id}`, "href")} class="group"> <div class="border border-border rounded-3xl p-6 transition-all duration-300 hover:bg-muted/50 overflow-hidden"> <div class="flex flex-col md:flex-row gap-6"> <div class="md:w-1/3"> ${renderComponent($$result, "Image", $$Image, { "src": project.image, "alt": `${project.name} project`, "width": 100, "height": 100, "class": "w-full h-48 object-cover rounded-2xl", "data-astro-transition-scope": renderTransition($$result, "5ae5nacf", "fade", `project-${project.id}`) })} </div> <div class="md:w-2/3"> <div class="flex items-center justify-between mb-4"> <div class="flex items-center"> <div class="bg-primary/10 p-2 rounded-full mr-4"${addAttribute(renderTransition($$result, "sztzzmkv", "", `project-icon-${project.id}`), "data-astro-transition-scope")}> ${renderComponent($$result, "Icon", $$Icon, { "name": project.icon, "class": "w-6 h-6 text-primary" })} </div> <h3 class="text-2xl font-semibold text-foreground"${addAttribute(renderTransition($$result, "a46v4hhh", "", `project-name-${project.id}`), "data-astro-transition-scope")}>${project.name}</h3> </div> <span class="text-sm text-muted-foreground">${project.year}</span> </div> <p class="text-muted-foreground mb-4"${addAttribute(renderTransition($$result, "jqjcfskq", "", `project-desc-${project.id}`), "data-astro-transition-scope")}>${project.extendedDescription}</p> <div class="flex flex-wrap gap-2 mb-4"> ${project.tech.map((tech) => renderTemplate`<span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">${tech}</span>`)} </div> <div class="flex justify-between items-center"> <span class="text-sm text-primary">${project.category}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:arrow-right", "class": "w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" })} </div> </div> </div> </div> </a>`)} </div> </section>`;
}, "/home/eljakani/eljakani-astro/src/components/Projects.astro", "self");

const RearrangedCompactFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const socialLinks = [
    { Icon: Github, link: "https://github.com/Eljakani", label: "GitHub" },
    { Icon: Linkedin, link: "https://linkedin.com/in/eljakaniyassine", label: "LinkedIn" },
    { Icon: Twitter, link: "https://x.com/eljakaniyassin", label: "Twitter" }
  ];
  return /* @__PURE__ */ jsxs("footer", { className: "bg-background border py-6 px-3 border-b-0 rounded-t-2xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center md:items-start", children: [
          /* @__PURE__ */ jsxs("a", { href: "/", children: [
            " ",
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold font-alt mb-2", children: [
              "Eljakani",
              /* @__PURE__ */ jsx("span", { className: "text-point", children: "." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-center md:text-start text-muted-foreground", children: "Bridging the gap between <dev/> and security." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center md:items-end", children: [
          /* @__PURE__ */ jsx("div", { className: "flex space-x-4 mb-2", children: socialLinks.map(({ Icon, link, label }) => /* @__PURE__ */ jsx(
            motion.a,
            {
              href: link,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-muted-foreground hover:text-primary transition-colors duration-300",
              whileHover: { scale: 1.2 },
              whileTap: { scale: 0.9 },
              "aria-label": label,
              children: /* @__PURE__ */ jsx(Icon, { size: 20 })
            },
            label
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground space-y-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center md:justify-end", children: [
              /* @__PURE__ */ jsx(Mail, { size: 14, className: "mr-1" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:eljakaniyassin@gmail.com", children: "eljakaniyassin@gmail.com" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center md:justify-end", children: [
              /* @__PURE__ */ jsx(Phone, { size: 14, className: "mr-1" }),
              /* @__PURE__ */ jsx("a", { href: "tel:+212672486817", children: "+212 6 72 48 68 17" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center text-xs text-muted-foreground mt-4 font-alt", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Yassine El Jakani. All rights reserved."
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      motion.button,
      {
        className: "fixed bottom-4 right-4 bg-primary text-primary-foreground rounded-full p-2 shadow-lg",
        "aria-label": "Back to top",
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        initial: { opacity: 0, y: 100 },
        animate: { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 },
        transition: { duration: 0.3 },
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.9 },
        children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polyline", { points: "18 15 12 9 6 15" }) })
      }
    )
  ] });
};

const GCDSTE = new Proxy({"src":"/_astro/club_gcdste_logo.gj1hWl9H.jpeg","width":100,"height":100,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/eljakani/eljakani-astro/public/club_gcdste_logo.jpeg";
							}
							
							return target[name];
						}
					});

const EMJE = new Proxy({"src":"/_astro/EMJE.D6tYNYhX.png","width":700,"height":700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/eljakani/eljakani-astro/public/EMJE.png";
							}
							
							return target[name];
						}
					});

const $$Volunteering = createComponent(($$result, $$props, $$slots) => {
  function calculateDuration(startDate, endDate) {
    const end = endDate || /* @__PURE__ */ new Date();
    const diffTime = Math.abs(end.getTime() - startDate.getTime());
    const diffYears = Math.floor(diffTime / (1e3 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor(diffTime % (1e3 * 60 * 60 * 24 * 365) / (1e3 * 60 * 60 * 24 * 30));
    let duration = "";
    if (diffYears > 0) {
      duration += `${diffYears} yr${diffYears > 1 ? "s" : ""} `;
    }
    if (diffMonths > 0) {
      duration += `${diffMonths} mo${diffMonths > 1 ? "s" : ""}`;
    }
    return duration.trim();
  }
  const volunteerExperiences = [
    {
      role: "Vice President",
      organization: "Club GCDSTE Secure Tech ENSA Marrakech",
      startDate: new Date(2023, 8),
      description: [
        "Facilitated collaboration between club teams, boosting productivity.",
        "Organized AiSec 2024, an international AI and Cybersecurity summit.",
        "Developed the official website for AiSec 2024, an international AI and Cybersecurity summit."
      ],
      image: GCDSTE
    },
    {
      role: "Competition Cell Member",
      organization: "Club GCDSTE Secure Tech ENSA Marrakech",
      startDate: new Date(2022, 8),
      endDate: new Date(2023, 8),
      description: [
        "Organized the second edition of CyberWeek, a week-long cybersecurity event.",
        "Organized a national Capture The Flag (CTF) cybersecurity competition.",
        "Created Web-Related Challenges for the CTF competition."
      ],
      image: GCDSTE
    },
    {
      role: "I.T Manager",
      organization: "Club EMJE (ENSA Marrakech Junior Enterprise)",
      startDate: new Date(2021, 8),
      endDate: new Date(2022, 8),
      description: [
        "Ensuring the proper functioning of the cell and the good progress of the projects",
        "Carrying out various development projects and designing we sites"
      ],
      image: EMJE
    }
    // More experiences...
  ];
  return renderTemplate`${maybeRenderHead()}<section id="volunteering" class="py-16"> <h3 class="text-4xl font-bold mb-10 text-foreground">Volunteering</h3> <div class="space-y-6"> ${volunteerExperiences.map((experience) => renderTemplate`${renderComponent($$result, "Card", Card, { "className": "bg-gradient-to-br from-background to-muted/30 rounded-2xl shadow-lg border overflow-hidden transition-all duration-300 hover:shadow-xl" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", CardHeader, { "className": "p-4 sm:p-6" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"> ${experience.image && renderTemplate`${renderComponent($$result3, "Image", $$Image, { "src": experience.image, "alt": `${experience.organization} image`, "class": "w-16 h-16 sm:w-24 sm:h-24 rounded-xl object-cover mt-4 sm:mt-0 ml-auto hidden sm:block" })}`} <div class="flex-grow"> ${renderComponent($$result3, "CardTitle", CardTitle, { "className": "text-lg sm:text-xl font-semibold text-foreground font-alt" }, { "default": ($$result4) => renderTemplate`${experience.role}` })} <p class="text-base sm:text-lg text-primary/80 font-alt">${experience.organization}</p> <div class="flex items-center text-xs sm:text-sm text-foreground/60 mt-2"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:calendar", "class": "w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary/70" })} ${`${experience.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })} - ${experience.endDate ? experience.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Present"} \xB7 ${calculateDuration(experience.startDate, experience.endDate)}`} </div> </div> </div> ` })} ${renderComponent($$result2, "CardContent", CardContent, { "className": "p-4 sm:p-6 pt-0" }, { "default": ($$result3) => renderTemplate` <ul class="list-disc list-outside ml-4 space-y-2 text-sm sm:text-base"> ${experience.description.map((item) => renderTemplate`<li class="text-foreground/80">${item}</li>`)} </ul> ` })} ` })}`)} </div> </section>`;
}, "/home/eljakani/eljakani-astro/src/components/Volunteering.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Yassine El Jakani - Cyber Security Engineer" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4"> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Education", $$Education, {})} ${renderComponent($$result2, "Experiences", $$Experiences, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Volunteering", $$Volunteering, {})} ${renderComponent($$result2, "Footer", RearrangedCompactFooter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/eljakani/eljakani-astro/src/components/Footer", "client:component-export": "default" })} </div> ` })}`;
}, "/home/eljakani/eljakani-astro/src/pages/index.astro", void 0);

const $$file = "/home/eljakani/eljakani-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
