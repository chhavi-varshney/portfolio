import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2,
  Braces, Database, Server, Layers3, Terminal, ExternalLink, FileDown,
  MapPin, GraduationCap, BriefcaseBusiness, Trophy, Sparkles
} from "lucide-react";

const links = {
  linkedin: "https://www.linkedin.com/in/chhavivarshney/",
  github: "https://github.com/chhavi-varshney",
  leetcode: "https://leetcode.com/u/chhavi_varshney/",
  email: "mailto:varshneychhavi1616@gmail.com"
};

const skills = [
  { icon: Code2, title: "Languages", items: ["C++", "JavaScript", "Python", "SQL"] },
  { icon: Layers3, title: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
  { icon: Database, title: "Databases", items: ["MongoDB", "MySQL", "Mongoose"] },
  { icon: Braces, title: "Core CS", items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"] },
  { icon: Terminal, title: "Tools & Concepts", items: ["Git", "GitHub", "Postman", "npm", "Vite", "RBAC", "API Integration"] }
];

const projects = [
  {
    number: "01",
    name: "DevOpsHub",
    type: "Developer Collaboration Platform",
    description: "A full-stack platform for organizations, projects, tasks, issues, and sprints, with secure access control and real-time team updates.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com/chhavi-varshney/DevOpsHub",
    demo: "https://dev-ops-hub-seven.vercel.app/",
    visual: "devops"
  },
  {
    number: "02",
    name: "InterviewAI",
    type: "AI Interview Preparation",
    description: "An AI-powered interview preparation platform that reviews resumes and job descriptions, generates tailored questions, and identifies skill gaps.",
    tech: ["React.js", "Node.js", "MongoDB", "Gemini API", "Zod"],
    github: "https://github.com/chhavi-varshney/Interview-AI",
    demo: "https://interview-ai-frontend-nc4u.onrender.com/",
    visual: "interview"
  },
  {
    number: "03",
    name: "StayEase",
    type: "Property Booking Platform",
    description: "A property listing and booking application with user accounts, favorites, booking management, image uploads, and server-side validation.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Tailwind CSS"],
    github: "https://github.com/chhavi-varshney/Airbnb",
    demo: "https://collectors-hub-ebon.vercel.app/",
    visual: "stayease"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Chhavi home"><span className="brand-mark">C.</span><span>CHHAVI VARSHNEY</span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href={links.email} onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
            <img className="profile-photo" src="/profile.jpeg" alt="Chhavi Varshney" />
            <div className="availability"><span className="status-dot" /> OPEN TO FULL-TIME OPPORTUNITIES · 2027</div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Chhavi<br /><span>Varshney.</span></h1>
            <h2 className="hero-role">Software Engineer <span className="role-divider">/</span> Backend Developer</h2>
            <p className="hero-description">I build reliable web applications, thoughtful APIs, and useful products. I enjoy turning complex problems into clean, maintainable software.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="/resume.pdf" download="Chhavi_Varshney_Resume.pdf"><FileDown size={17} /> Download Resume</a>
            </div>
            <div className="social-row">
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /> GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /> LinkedIn</a>
              <a href={links.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 size={18} /> LeetCode</a>
            </div>
          </motion.div>

          <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>developer.js</small></div>
              <div className="code-body">
                <p><span className="line-no">01</span> <span className="syntax-purple">const</span> <span className="syntax-blue">developer</span> = {'{'}</p>
                <p><span className="line-no">02</span> &nbsp; name: <span className="syntax-green">"Chhavi"</span>,</p>
                <p><span className="line-no">03</span> &nbsp; focus: <span className="syntax-green">"Backend"</span>,</p>
                <p><span className="line-no">04</span> &nbsp; stack: [</p>
                <p><span className="line-no">05</span> &nbsp;&nbsp; <span className="syntax-green">"Node.js"</span>, <span className="syntax-green">"React"</span>,</p>
                <p><span className="line-no">06</span> &nbsp;&nbsp; <span className="syntax-green">"MongoDB"</span></p>
                <p><span className="line-no">07</span> &nbsp; ],</p>
                <p><span className="line-no">08</span> &nbsp; building: <span className="syntax-orange">true</span></p>
                <p><span className="line-no">09</span> {'}'};</p>
                <p className="code-comment"><span className="line-no">10</span> // always learning, always shipping ✦</p>
              </div>
            </div>
            <div className="floating-chip chip-top"><span className="chip-icon"><Server size={15} /></span> Backend development</div>
            <div className="floating-chip chip-bottom"><span className="chip-icon green"><Trophy size={15} /></span> 350+ DSA problems</div>
            <div className="hero-sparkle"><Sparkles size={24} /></div>
          </motion.div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <SectionHeading eyebrow="01 / ABOUT ME" title={<>Building with purpose.<br /><span className="muted-title">Learning every day.</span></>} />
          <div className="about-grid">
            <motion.div className="about-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <p>I'm a Computer Science and Engineering student at <strong>IMS Engineering College, Ghaziabad</strong>, graduating in 2027. My primary interest is backend development—designing APIs, working with databases, and building secure, dependable applications.</p>
              <p>I have hands-on experience building full-stack projects and contributed to an air-quality analytics dashboard during my IT internship. I enjoy solving DSA problems and learning how to make software more useful, maintainable, and scalable.</p>
              <a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">More about me on LinkedIn <ArrowUpRight size={16} /></a>
            </motion.div>
            <div className="stats-grid">
              <div className="stat-card"><span className="stat-number">350<span>+</span></span><span className="stat-label">DSA problems solved</span></div>
              <div className="stat-card"><span className="stat-number">9<span>+</span></span><span className="stat-label">Full-stack apps built*</span></div>
              <div className="stat-card"><span className="stat-number">8.6</span><span className="stat-label">Current CGPA</span></div>
              <div className="stat-card"><span className="stat-number">2027</span><span className="stat-label">Graduation year</span></div>
            </div>
          </div>
          <p className="small-note">*As stated in my resume.</p>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <SectionHeading eyebrow="02 / TOOLKIT" title={<>Tools I work with<span className="accent-dot">.</span></>} description="A practical toolkit for building full-stack applications, with a strong focus on backend systems." />
          <div className="skills-grid">
            {skills.map((group, i) => {
              const Icon = group.icon;
              return <motion.article className="skill-card" key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ delay: i * 0.06 }}>
                <div className="skill-icon"><Icon size={20} /></div><h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </motion.article>;
            })}
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <SectionHeading eyebrow="03 / SELECTED WORK" title={<>Projects in focus<span className="accent-dot">.</span></>} description="A few projects that reflect my interest in backend systems, full-stack development, and practical problem-solving." />
          <div className="projects-list">
            {projects.map((project, i) => (
              <motion.article className="project-card" key={project.name} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} transition={{ delay: i * 0.08 }}>
                <div className={`project-visual ${project.visual}`}>
                  <div className="visual-top"><span>{project.number} / PROJECT</span><span className="visual-status"><span /> BUILT WITH CARE</span></div>
                  {project.visual === "devops" && <div className="mini-dashboard"><div className="mini-sidebar"><i /><i /><i /><i /></div><div className="mini-content"><div className="mini-title" /><div className="mini-metrics"><i /><i /><i /></div><div className="mini-chart"><b /><b /><b /><b /><b /><b /><b /></div><div className="mini-lines"><i /><i /><i /></div></div></div>}
                  {project.visual === "interview" && <div className="ai-visual"><div className="ai-orb"><Sparkles size={31} /></div><div className="ai-pill">Resume analysis</div><div className="ai-pill">Skill matching</div><div className="ai-pill">Interview prep</div></div>}
                  {project.visual === "stayease" && <div className="stay-visual"><div className="stay-house"><div className="roof" /><div className="house-body"><i /><i /><b /></div></div><div className="stay-label"><span>STAYEASE</span><small>Find your next stay</small></div></div>}
                </div>
                <div className="project-content">
                  <div className="project-heading"><div><p className="project-type">{project.type}</p><h3>{project.name}</h3></div><span className="project-index">{project.number}</span></div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub Repository <ArrowUpRight size={15} /></a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live Demo <ArrowUpRight size={15} /></a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="experience section-wrap section-block" id="experience">
          <SectionHeading eyebrow="04 / EXPERIENCE & EDUCATION" title={<>Where I've learned<span className="accent-dot">.</span></>} />
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"><BriefcaseBusiness size={18} /></div>
              <div className="timeline-main">
                <div className="timeline-meta"><span>JUNE 2026 — JULY 2026</span><span className="timeline-badge">INTERNSHIP</span></div>
                <h3>IT Intern</h3><h4>Advind Healthcare India Pvt. Ltd. <span>· Noida</span></h4>
                <ul><li>Developed 8+ interactive dashboard widgets for an air-quality analytics platform.</li><li>Contributed to dashboard development and delivered assigned requirements within project timelines.</li></ul>
                <div className="project-tags"><span>React.js</span><span>Dashboard UI</span><span>API Integration</span></div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"><GraduationCap size={19} /></div>
              <div className="timeline-main">
                <div className="timeline-meta"><span>2023 — 2027</span><span className="timeline-badge">UNDERGRADUATE</span></div>
                <h3>B.Tech, Computer Science & Engineering</h3><h4>IMS Engineering College <span>· Ghaziabad, India</span></h4>
                <div className="education-score"><span>CGPA</span><strong>8.6 / 10</strong></div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"><Trophy size={18} /></div>
              <div className="timeline-main">
                <div className="timeline-meta"><span>CODING & PROBLEM SOLVING</span></div>
                <h3>350+ DSA problems solved</h3><h4>LeetCode</h4>
                <p className="timeline-description">Consistent practice in data structures, algorithms, and problem-solving.</p>
                <a className="text-link" href={links.leetcode} target="_blank" rel="noreferrer">View LeetCode profile <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="contact-panel">
            <div className="contact-glow" />
            <p className="eyebrow">05 / GET IN TOUCH</p>
            <h2>Have a role or project<br /><span>in mind?</span></h2>
            <p className="contact-description">I'm looking for opportunities to contribute, learn, and grow as a software engineer. Let's connect.</p>
            <a className="button button-primary" href={links.email}><Mail size={17} /> Email me <ArrowUpRight size={17} /></a>
            <div className="contact-details">
              <span><MapPin size={15} /> Ghaziabad, India</span>
              <a href={links.email}><Mail size={15} /> varshneychhavi1616@gmail.com</a>
            </div>
            <div className="contact-socials">
              <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
              <a href={links.github} target="_blank" rel="noreferrer"><Github size={18} /></a>
              <a href={links.leetcode} target="_blank" rel="noreferrer"><Code2 size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">C.</span><span>CHHAVI VARSHNEY</span></a>
        <p>Designed & built with care <span className="accent-dot">✦</span> © {new Date().getFullYear()} Chhavi Varshney</p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
