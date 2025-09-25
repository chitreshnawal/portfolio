import React from "react";

export default function App() {
  const contact = {
    email1: "cnawal07@gmail.com",
    email2: "anawal21@iitk.ac.in", 
    phone: "+91-9977-860-867",
    linkedin: "https://www.linkedin.com/in/chitresh-nawal-0811a922b/",
    github: "https://github.com/chitreshnawal",
  };

  const projects = [
    {
      title: "C Shell",
      desc: "A custom Linux-style shell in C supporting piping, redirection, background processes, and common built-ins.",
      link: "https://github.com/chitreshnawal/C-Shell",
      tags: ["C", "Systems", "OS"],
    },
    {
      title: "Jetpack Joyride (Terminal)",
      desc: "Terminal-based ASCII game built using Python and OOP principles.",
      link: "https://github.com/chitreshnawal/JetpackJoyRide",
      tags: ["Python", "OOP", "Games"],
    },
    {
      title: "Amazon Clone",
      desc: "A Django-based e-commerce clone demonstrating full-stack skills and template-driven UI.",
      link: "https://github.com/chitreshnawal",
      tags: ["Django", "Full-stack"],
    },
  ];

  const skills = [
    "C", "C++", "Python", "HTML", "JavaScript", "SQL", "NumPy", "Pandas", "Scikit-learn",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100 font-sans">
      <header className="max-w-5xl mx-auto px-6 py-12 flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">Chitresh Nawal</h1>
          <p className="text-slate-300 mt-1">Department of Physics • IIT Kanpur</p>
        </div>
        <nav className="space-x-3 hidden md:flex">
          <a href="#about" className="text-slate-300 hover:text-white">About</a>
          <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
          <a href="#skills" className="text-slate-300 hover:text-white">Skills</a>
          <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <section className="bg-slate-900/40 backdrop-blur rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <p className="uppercase text-sm text-amber-400 font-semibold">Hello — I'm</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">Chitresh Nawal</h2>
            <p className="mt-4 text-slate-300 leading-relaxed max-w-2xl">
              I'm a physics graduate from IIT Kanpur with a deep enthusiasm for software and mathematics. I enjoy translating
              mathematical ideas into efficient code and building robust systems — especially algorithmic problems and
              scalable backends. I'm seeking roles where I can apply algorithmic thinking and engineering to solve
              challenging problems.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={contact.github} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-slate-900 font-medium shadow-md hover:scale-[1.02] transition-transform" target="_blank" rel="noreferrer">GitHub</a>
              <a href={contact.linkedin} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800 transition" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`mailto:${contact.email1}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800 transition">Email</a>
            </div>
          </div>

          <div className="w-72 h-96 rounded-xl bg-gradient-to-tr from-amber-400/20 to-slate-700/20 p-1">
            <div className="w-full h-full rounded-lg bg-gradient-to-b from-slate-700 to-slate-800 flex items-center justify-center text-amber-300 font-semibold">
              <img src="public/photo.jpg" alt="Profile" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </section>

        <section id="about" className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-slate-900/40 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">About me</h3>
            <p className="text-slate-300 mt-3 leading-relaxed">
              I graduated with a B.S. from IIT Kanpur's Department of Physics (class of 2025). My background in physics
              taught me to approach problems analytically and to build reliable solutions from first principles. I love
              algorithms and competitive programming, and I enjoy building full-stack projects that bridge theory and
              application.
            </p>

            <h4 className="mt-6 font-semibold">Academic highlights</h4>
            <ul className="mt-2 space-y-2 text-slate-300">
              <li>ISI Kolkata — B.Stat. Scholar, AIR 41 (2021)</li>
              <li>JEE Advanced 2021 — AIR 3637</li>
              <li>Codeforces — max rating 1480 (solved problems in 1000–1900 range)</li>
            </ul>
          </div>

          <aside className="bg-slate-900/30 rounded-2xl p-6 flex flex-col gap-3">
            <h4 className="font-semibold">Education</h4>
            <div className="text-slate-300">
              <div className="text-sm">B.S., Indian Institute of Technology Kanpur</div>
              <div className="text-xs text-slate-400 mt-1">2021 — 2025 • CPI: 7.2/10</div>
            </div>

            <div className="mt-4">
              <h5 className="font-semibold text-sm">Work Experience</h5>
              <p className="text-slate-300 text-sm mt-2">Research Intern — Indian School of Business, Hyderabad (May '23 — Aug '23). Data mining and analysis on job creation impact for Amazon HQ; cleaned and analyzed large-scale scraped data; applied clustering & ML techniques to refine results.</p>
            </div>
          </aside>
        </section>

        <section id="projects" className="mt-10">
          <h3 className="text-xl font-semibold">Selected projects</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <article key={index} className="bg-slate-900/40 rounded-xl p-4 mb-4">
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-slate-300 text-sm mt-2">{project.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex gap-2 text-xs text-slate-400">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 rounded-md border border-slate-700">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-amber-400 text-sm font-medium">View</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-10">
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 rounded-full bg-slate-800/40 text-slate-200 text-sm mr-2 mb-2 inline-block">{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-10 bg-slate-900/30 rounded-2xl p-6 flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Get in touch</h3>
            <p className="text-slate-300 mt-2">Feel free to reach out for collaborations, internships, or algorithm-focused roles.</p>

            <div className="mt-4 space-y-1 text-slate-300 text-sm">
              <div>Email: <a className="text-amber-300" href={`mailto:${contact.email1}`}>{contact.email1}</a></div>
              <div>Alternate Email: <a className="text-amber-300" href={`mailto:${contact.email2}`}>{contact.email2}</a></div>
              <div>Phone: {contact.phone}</div>
            </div>
          </div>

          <div className="ml-auto">
            <a href={contact.github} className="block mb-2 underline text-amber-300" target="_blank" rel="noreferrer">GitHub</a>
            <a href={contact.linkedin} className="block underline text-amber-300" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  );
}