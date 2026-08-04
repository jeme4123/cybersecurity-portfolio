import { Link } from "react-router";
import "../App.css";

const commands = [
  {
    name: "Process listing",
    command:
      'volatility.exe -f "C:\\Memory Forensics Evidence\\ALICE-PC-Win7.raw" --profile=Win7SP1x64 pslist',
    purpose:
      "Displayed active processes captured inside the Windows memory image.",
  },
  {
    name: "Process tree",
    command:
      'volatility.exe -f "C:\\Memory Forensics Evidence\\ALICE-PC-Win7.raw" --profile=Win7SP1x64 pstree',
    purpose:
      "Displayed parent-child relationships between processes to help identify unusual process execution.",
  },
  {
    name: "Network scan",
    command:
      'volatility.exe -f "C:\\Memory Forensics Evidence\\ALICE-PC-Win7.raw" --profile=Win7SP1x64 netscan',
    purpose:
      "Identified network connections, listening ports, local addresses, remote addresses, and associated processes.",
  },
  {
    name: "YARA string scan",
    command:
      'volatility.exe -f "C:\\Memory Forensics Evidence\\ALICE-PC-Win7.raw" --profile=Win7SP1x64 yarascan -Y "tior.exe"',
    purpose:
      "Searched memory for references to a suspicious executable or matching string.",
  },
  {
    name: "Process privileges",
    command:
      'volatility.exe -f "C:\\Memory Forensics Evidence\\ALICE-PC-Win7.raw" --profile=Win7SP1x64 privs -p <PID> --silent',
    purpose:
      "Examined enabled privileges associated with selected processes.",
  },
];

function WindowsForensicsProject() {
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
          <p className="sectionNumber">Project 02 / Digital Forensics</p>

          <h1>Windows Memory Forensics</h1>

          <p className="caseStudyIntroduction">
            A forensic investigation of a Windows 7 memory image using
            Volatility to examine running processes, process relationships,
            network connections, privileges, and suspicious artifacts.
          </p>

          <div className="caseStudyTags">
            <span>Windows 7</span>
            <span>Volatility</span>
            <span>Memory Forensics</span>
            <span>Incident Response</span>
            <span>YARA</span>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">01 / Objective</p>
            <h2>Project objective</h2>
          </div>

          <div>
            <p>
              The purpose of this project was to analyze a captured Windows
              memory image and identify evidence that could help reconstruct
              system activity during a suspected security incident.
            </p>

            <p>
              The investigation focused on active processes, parent-child
              process relationships, network activity, process privileges, and
              memory references connected to potentially suspicious software.
            </p>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">02 / Environment</p>
            <h2>Lab environment</h2>
          </div>

          <div className="caseStudyList">
            <article>
              <h3>Memory image</h3>
              <p>ALICE-PC-Win7.raw</p>
            </article>

            <article>
              <h3>Operating-system profile</h3>
              <p>Win7SP1x64</p>
            </article>

            <article>
              <h3>Primary tool</h3>
              <p>Volatility memory-forensics framework</p>
            </article>

            <article>
              <h3>Evidence examined</h3>
              <p>
                Processes, process trees, sockets, network connections,
                privileges, and suspicious strings stored in memory.
              </p>
            </article>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">03 / Methodology</p>
            <h2>Investigation process</h2>
          </div>

          <div className="caseStudyList">
            <article>
              <h3>1. Identify the correct profile</h3>
              <p>
                The memory image was analyzed using the Windows 7 Service Pack
                1 64-bit profile so Volatility could correctly interpret
                operating-system structures.
              </p>
            </article>

            <article>
              <h3>2. Review running processes</h3>
              <p>
                Process listings and process-tree output were reviewed to
                identify unexpected applications, unusual executable names,
                abnormal parent processes, and suspicious execution paths.
              </p>
            </article>

            <article>
              <h3>3. Analyze network activity</h3>
              <p>
                Network artifacts were examined to identify listening services,
                established connections, remote systems, ports, and the
                processes responsible for those connections.
              </p>
            </article>

            <article>
              <h3>4. Search memory for suspicious artifacts</h3>
              <p>
                A YARA-based string scan was used to locate references to
                suspicious executable names or content inside process memory.
              </p>
            </article>

            <article>
              <h3>5. Review privileges</h3>
              <p>
                Selected processes were examined for powerful or unusual
                Windows privileges that could indicate elevated access or
                malicious activity.
              </p>
            </article>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">04 / Commands</p>
            <h2>Volatility commands used</h2>
          </div>

          <div className="commandList">
            {commands.map((item) => (
              <article className="commandCard" key={item.name}>
                <h3>{item.name}</h3>

                <pre>
                  <code>{item.command}</code>
                </pre>

                <p>{item.purpose}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">05 / Evidence</p>
            <h2>Evidence reviewed</h2>
          </div>

          <div className="memoryGrid">
            <article>
              <span>Processes</span>
              <h3>Active applications</h3>
              <p>
                Reviewed active process names, process identifiers, start
                times, parent processes, and executable relationships.
              </p>
            </article>

            <article>
              <span>Process tree</span>
              <h3>Execution relationships</h3>
              <p>
                Examined how processes were launched and whether their
                parent-child relationships were consistent with normal Windows
                behavior.
              </p>
            </article>

            <article>
              <span>Network</span>
              <h3>Connections and ports</h3>
              <p>
                Reviewed local and remote IP addresses, ports, connection
                states, and the processes associated with network activity.
              </p>
            </article>

            <article>
              <span>Privileges</span>
              <h3>Process permissions</h3>
              <p>
                Investigated processes with elevated or security-sensitive
                privileges that could allow system modification or access to
                protected resources.
              </p>
            </article>

            <article>
              <span>YARA</span>
              <h3>Suspicious strings</h3>
              <p>
                Searched memory for references to the suspicious string
                <code> tior.exe</code> and recorded the matching process or
                memory location.
              </p>
            </article>

            <article>
              <span>Timeline</span>
              <h3>Incident reconstruction</h3>
              <p>
                Compared process and connection evidence to understand the
                likely sequence of activity captured in memory.
              </p>
            </article>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">06 / Findings</p>
            <h2>Investigation findings</h2>
          </div>

          <div>
            <div className="findingNotice">
              Replace the bracketed items below with facts from your actual
              Volatility output before publishing.
            </div>

            <ul className="findingsList">
              <li>
                The process listing identified
                <strong> [suspicious process name]</strong> with process ID
                <strong> [PID]</strong>.
              </li>

              <li>
                The process tree showed that the process was launched by
                <strong> [parent process]</strong>, which was
                <strong> [normal or unusual]</strong> for that executable.
              </li>

              <li>
                The network scan associated process ID
                <strong> [PID]</strong> with a connection to
                <strong> [sanitized remote IP]</strong> over port
                <strong> [port number]</strong>.
              </li>

              <li>
                The YARA scan located references to
                <strong> tior.exe</strong> in
                <strong> [process or memory location]</strong>.
              </li>

              <li>
                The privilege analysis showed
                <strong> [privilege name]</strong> enabled for
                <strong> [process name]</strong>.
              </li>
            </ul>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">07 / Conclusion</p>
            <h2>Forensic conclusion</h2>
          </div>

          <div>
            <p>
              The memory analysis demonstrated how volatile evidence can reveal
              activity that may not be immediately visible through normal
              file-system analysis.
            </p>

            <p>
              By correlating processes, network connections, privileges, and
              memory strings, an investigator can develop a stronger
              understanding of suspicious behavior and identify evidence that
              should receive further examination.
            </p>

            <p>
              Replace this paragraph with your final conclusion after reviewing
              your saved lab output. State whether the evidence supported
              malicious activity, suspicious activity requiring further
              investigation, or normal system behavior.
            </p>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">08 / Lessons</p>
            <h2>What I learned</h2>
          </div>

          <div>
            <ul className="findingsList">
              <li>
                Memory captures can preserve running processes, active
                connections, credentials, injected code, and other volatile
                evidence.
              </li>

              <li>
                A process name alone is not enough to determine whether
                activity is malicious.
              </li>

              <li>
                Parent-child relationships help explain how suspicious
                processes were executed.
              </li>

              <li>
                Network evidence becomes more valuable when it is connected to
                a specific process identifier.
              </li>

              <li>
                Multiple artifacts should be correlated before reaching a
                forensic conclusion.
              </li>
            </ul>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">09 / Screenshots</p>
            <h2>Sanitized evidence</h2>
          </div>

          <div>
            <p>
              Add sanitized screenshots of your process tree, network scan,
              YARA results, and privilege analysis here.
            </p>

            <div className="screenshotPlaceholder">
              Screenshot section coming soon
            </div>

            <p>
              Remove student information, passwords, sensitive addresses,
              assignment instructions, and unrelated personal information
              before publishing screenshots.
            </p>
          </div>
        </section>

        <section className="caseStudyFooter">
          <p>Next project</p>
          <h2>Network Traffic Analysis</h2>
          <span>Case study coming soon</span>

          <Link className="primaryButton" to="/">
            Return to homepage
          </Link>
        </section>
      </main>
    </div>
  );
}

export default WindowsForensicsProject;