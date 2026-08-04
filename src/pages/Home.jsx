import { Link } from "react-router";
import "../App.css";


const skills = [
  {
    category: "Security",
    items: [
      "Incident Response",
      "Digital Forensics",
      "Risk Assessment",
      "Least Privilege",
      "Defense in Depth",
      "SIEM Concepts",
    ],
  },
  {
    category: "Systems",
    items: [
      "Linux",
      "Windows",
      "Windows Server",
      "VMware",
      "VirtualBox",
      "SSH",
    ],
  },
  {
    category: "Tools",
    items: [
      "Wireshark",
      "Volatility",
      "Autopsy",
      "NetWitness",
      "GDB",
      "Git",
    ],
  },
  {
    category: "Development",
    items: [
      "C",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Linux Memory Analysis",
    description:
      "Analyzed application memory regions, stack frames, and least-privilege behavior using C, GCC, GDB, nm, and readelf.",
    tags: ["Linux", "C", "GDB"],
    path: "/projects/linux-memory", 
  },
  {
    number: "02",
    title: "Windows Memory Forensics",
    description:
      "Used Volatility to investigate running processes, network connections, privileges, and suspicious artifacts inside a Windows memory image.",
    tags: ["Volatility", "Forensics", "Windows"],
    path: null,
  },
  {
    number: "03",
    title: "Network Traffic Analysis",
    description:
      "Examined packet captures and network sessions to identify protocols, endpoints, unusual communication, and possible indicators of compromise.",
    tags: ["Wireshark", "PCAP", "Networking"],
    path: null,
  },
  {
    number: "04",
    title: "Critical Infrastructure Security",
    description:
      "Designed defense-in-depth recommendations for power-grid environments using segmentation, SIEM, incident response, NIST, and NERC CIP principles.",
    tags: ["SCADA", "NIST", "Risk"],
    path: null,
  },
];

function Home() {
  return (
    <div className="site">
      <header className="header">
        <nav className="navbar" aria-label="Main navigation">
          <a className="logo" href="#home" aria-label="Jeremy Colbert homepage">
            JC<span>.</span>
          </a>

          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certification">Security+</a>
          </div>

          <a className="navButton" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="heroContent">
            <div className="availability">
              <span className="statusDot"></span>
              Building toward cybersecurity opportunities
            </div>

            <p className="eyebrow">Cybersecurity Portfolio</p>

            <h1>
              Jeremy
              <span> Colbert</span>
            </h1>

            <h2>Cybersecurity and IT Professional</h2>

            <p className="heroText">
              Army veteran and experienced IT professional developing practical
              expertise in security operations, digital forensics, networking,
              Linux, and secure software development.
            </p>

            <div className="heroButtons">
              <a className="primaryButton" href="#projects">
                Explore My Work
                <span aria-hidden="true">→</span>
              </a>

              <a
                className="secondaryButton"
                href="https://github.com/jeme4123"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>

            <div className="quickStats">
              <div>
                <strong>10+</strong>
                <span>Years in IT</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Featured projects</span>
              </div>

              <div>
                <strong>Security+</strong>
                <span>Currently studying</span>
              </div>
            </div>
          </div>

          <div className="terminalWrapper" aria-label="Cybersecurity terminal">
            <div className="terminalGlow"></div>

            <div className="terminal">
              <div className="terminalHeader">
                <div className="terminalDots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>jeremy@cyber-portfolio:~</p>
              </div>

              <div className="terminalBody">
                <p>
                  <span className="prompt">$</span> whoami
                </p>
                <p className="output">Jeremy Colbert</p>

                <p>
                  <span className="prompt">$</span> cat career.txt
                </p>
                <p className="output">
                  Army veteran
                  <br />
                  IT professional
                  <br />
                  Cybersecurity student
                </p>

                <p>
                  <span className="prompt">$</span> ls skills/
                </p>
                <p className="output blue">
                  linux networking forensics c react git
                </p>

                <p>
                  <span className="prompt">$</span> certification --status
                </p>
                <p className="output success">
                  CompTIA Security+ preparation in progress
                </p>

                <p className="cursorLine">
                  <span className="prompt">$</span>
                  <span className="cursor"></span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section aboutSection" id="about">
          <div className="sectionHeading">
            <p className="sectionNumber">01 / About</p>
            <h2>Technology experience with a security focus.</h2>
          </div>

          <div className="aboutContent">
            <p className="largeText">
              I am combining years of professional IT experience with practical
              cybersecurity training to build a career protecting systems,
              networks, data, and critical operations.
            </p>

            <div className="aboutDetails">
              <p>
                My experience includes technical support, operating systems,
                networking, virtualization, troubleshooting, system
                administration, and security-focused coursework.
              </p>

              <p>
                I am currently preparing for the CompTIA Security+
                certification while building projects that demonstrate my
                ability to investigate technical problems, document findings,
                and recommend security improvements.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="sectionHeading">
            <p className="sectionNumber">02 / Skills</p>
            <h2>Tools and knowledge I use.</h2>
          </div>

          <div className="skillsGrid">
            {skills.map((skill) => (
              <article className="skillCard" key={skill.category}>
                <div className="skillCardHeader">
                  <span className="skillIcon">{skill.category.charAt(0)}</span>
                  <h3>{skill.category}</h3>
                </div>

                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="sectionHeading projectHeading">
            <div>
              <p className="sectionNumber">03 / Projects</p>
              <h2>Selected technical work.</h2>
            </div>

            <a
              className="textLink"
              href="https://github.com/jeme4123"
              target="_blank"
              rel="noreferrer"
            >
              Browse GitHub →
            </a>
          </div>

          <div className="projectsGrid">
            {projects.map((project) => (
              <article className="projectCard" key={project.title}>
                <div className="projectTop">
                  <span className="projectNumber">{project.number}</span>
                  <span className="folderIcon">⌁</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="projectTags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.path ? (
                  <Link className="projectLink" to={project.path}>
                    View case study →
                  </Link>
                ) : (
                  <span className="comingSoon">Case study coming soon</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section certificationSection" id="certification">
          <div className="certificationCard">
            <div>
              <p className="sectionNumber">04 / Certification</p>
              <h2>CompTIA Security+</h2>

              <p>
                I am strengthening my understanding of threats, security
                architecture, identity management, risk, governance, incident
                response, and security operations.
              </p>
            </div>

            <div className="progressArea">
              <div className="progressHeader">
                <span>Study progress</span>
                <span>In progress</span>
              </div>

              <div className="progressTrack">
                <div className="progressFill"></div>
              </div>

              <p>
                This section will be updated as I complete study domains, labs,
                practice exams, and the certification.
              </p>
            </div>
          </div>
        </section>

        <section className="section contactSection" id="contact">
          <p className="sectionNumber">05 / Contact</p>

          <h2>Let’s build something secure.</h2>

          <p>
            I am interested in cybersecurity, information security, security
            operations, digital forensics, systems administration, and IT
            opportunities.
          </p>

          <div className="contactButtons">
            <a className="primaryButton" href="mailto:jeme41@gmail.com">
              Send an Email
              <span aria-hidden="true">→</span>
            </a>

            <a
              className="secondaryButton"
              href="https://github.com/jeme4123"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Designed and built by Jeremy Colbert.</p>
        <p>React · Vite · GitHub</p>
      </footer>
    </div>
  );
}

export default Home;