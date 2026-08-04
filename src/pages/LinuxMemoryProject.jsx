import { Link } from "react-router";
import "../App.css";

function LinuxMemoryProject() {
  return (
    <div className="projectPage">
      <header className="projectPageHeader">
        <Link className="logo" to="/" aria-label="Return to homepage">
          JC<span>.</span>
        </Link>

        <Link className="backLink" to="/">
          ← Back to portfolio
        </Link>
      </header>

      <main className="caseStudy">
        <section className="caseStudyHero">
          <p className="sectionNumber">Project 01 / Systems Security</p>

          <h1>Linux Memory Layout Analysis</h1>

          <p className="caseStudyIntroduction">
            An investigation of how a compiled C program is organized in
            memory, including the text, read-only data, initialized data,
            uninitialized data, heap, and stack regions.
          </p>

          <div className="caseStudyTags">
            <span>Linux</span>
            <span>C</span>
            <span>GCC</span>
            <span>GDB</span>
            <span>readelf</span>
            <span>nm</span>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">01 / Objective</p>
            <h2>Project objective</h2>
          </div>

          <div>
            <p>
              The purpose of this project was to examine where different
              program objects are stored while a compiled C application is
              running.
            </p>

            <p>
              I analyzed functions, global variables, static variables,
              constants, string literals, dynamically allocated memory, local
              variables, and function pointers.
            </p>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">02 / Environment</p>
            <h2>Tools and environment</h2>
          </div>

          <div className="caseStudyList">
            <article>
              <h3>Operating system</h3>
              <p>Ubuntu Linux running inside a virtual machine.</p>
            </article>

            <article>
              <h3>Development tools</h3>
              <p>C, GCC, Make, GDB, nm, readelf, size, and objdump.</p>
            </article>

            <article>
              <h3>Security concepts</h3>
              <p>
                Process memory, stack frames, executable sections, permissions,
                and least privilege.
              </p>
            </article>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">03 / Analysis</p>
            <h2>Memory regions examined</h2>
          </div>

          <div className="memoryGrid">
            <article>
              <span>.text</span>
              <h3>Executable instructions</h3>
              <p>
                Functions such as helper were stored in the executable text
                region.
              </p>
            </article>

            <article>
              <span>.rodata</span>
              <h3>Read-only data</h3>
              <p>
                Constants and string literals were stored in read-only memory.
              </p>
            </article>

            <article>
              <span>.data</span>
              <h3>Initialized data</h3>
              <p>
                Initialized global and static variables were stored in the data
                section.
              </p>
            </article>

            <article>
              <span>.bss</span>
              <h3>Uninitialized data</h3>
              <p>
                Zero-initialized global and static variables appeared in the
                BSS section.
              </p>
            </article>

            <article>
              <span>heap</span>
              <h3>Dynamic memory</h3>
              <p>
                Memory created with malloc was allocated in the process heap.
              </p>
            </article>

            <article>
              <span>stack</span>
              <h3>Local execution data</h3>
              <p>
                Local variables, function arguments, and stack-frame data were
                stored on the stack.
              </p>
            </article>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">04 / Findings</p>
            <h2>Important findings</h2>
          </div>

          <div>
            <ul className="findingsList">
              <li>
                Different types of program data are separated into memory
                regions with different purposes and permissions.
              </li>

              <li>
                Executable code and read-only constants should not normally be
                writable.
              </li>

              <li>
                Stack addresses and heap addresses can change between program
                executions.
              </li>

              <li>
                Debugging tools can connect source-level variables to their
                runtime addresses and machine-level representation.
              </li>

              <li>
                Understanding memory organization helps explain vulnerabilities
                such as buffer overflows and unintended memory modification.
              </li>
            </ul>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">05 / Lessons</p>
            <h2>What I learned</h2>
          </div>

          <div>
            <p>
              This project strengthened my understanding of how source code is
              transformed into an executable and how Linux organizes that
              executable while it runs.
            </p>

            <p>
              It also gave me practical experience using command-line analysis
              tools to compare source code, symbols, executable sections,
              disassembly, and live process memory.
            </p>
          </div>
        </section>

        <section className="caseStudyFooter">
          <p>Next project</p>
          <h2>Windows Memory Forensics</h2>
          <span>Case study coming soon</span>

          <Link className="primaryButton" to="/">
            Return to homepage
          </Link>
        </section>
      </main>
    </div>
  );
}

export default LinuxMemoryProject;