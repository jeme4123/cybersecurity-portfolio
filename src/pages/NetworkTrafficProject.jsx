import { Link } from "react-router";
import "../App.css";

const filters = [
  {
    name: "IP address",
    filter: "ip.addr == 192.0.2.10",
    purpose:
      "Displays traffic sent to or received from one selected IP address.",
  },
  {
    name: "TCP traffic",
    filter: "tcp",
    purpose:
      "Displays TCP packets so sessions, flags, ports, and handshakes can be examined.",
  },
  {
    name: "DNS traffic",
    filter: "dns",
    purpose:
      "Displays domain-name queries and responses captured in the packet file.",
  },
  {
    name: "HTTP traffic",
    filter: "http",
    purpose:
      "Displays unencrypted web requests, responses, methods, and headers.",
  },
  {
    name: "FTP traffic",
    filter: "ftp || ftp-data",
    purpose:
      "Displays FTP commands, responses, authentication activity, and transferred data.",
  },
  {
    name: "Failed TCP connections",
    filter: "tcp.flags.reset == 1",
    purpose:
      "Displays TCP reset packets that may indicate rejected or terminated connections.",
  },
];

function NetworkTrafficProject() {
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
          <p className="sectionNumber">Project 03 / Network Security</p>

          <h1>Network Traffic Analysis</h1>

          <p className="caseStudyIntroduction">
            An investigation of captured network traffic using Wireshark and
            NetWitness Investigator to examine protocols, endpoints, sessions,
            ports, file transfers, and possible indicators of suspicious
            activity.
          </p>

          <div className="caseStudyTags">
            <span>Wireshark</span>
            <span>NetWitness</span>
            <span>PCAP</span>
            <span>TCP/IP</span>
            <span>Network Forensics</span>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">01 / Objective</p>
            <h2>Project objective</h2>
          </div>

          <div>
            <p>
              The purpose of this project was to examine a packet-capture file
              and identify the systems, protocols, services, and communication
              patterns present in the traffic.
            </p>

            <p>
              The analysis focused on reconstructing network sessions,
              identifying communicating endpoints, reviewing port activity,
              examining file-transfer behavior, and recognizing activity that
              could require further investigation.
            </p>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">02 / Environment</p>
            <h2>Tools and evidence</h2>
          </div>

          <div className="caseStudyList">
            <article>
              <h3>Evidence source</h3>
              <p>A packet-capture file containing recorded network traffic.</p>
            </article>

            <article>
              <h3>Wireshark</h3>
              <p>
                Used for packet-level inspection, protocol filtering, stream
                analysis, endpoint review, and conversation analysis.
              </p>
            </article>

            <article>
              <h3>NetWitness Investigator</h3>
              <p>
                Used to organize network sessions, inspect metadata, review
                service activity, and analyze traffic over time.
              </p>
            </article>

            <article>
              <h3>Protocols examined</h3>
              <p>
                TCP, UDP, DNS, HTTP, FTP, and other protocols present in the
                captured evidence.
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
              <h3>1. Review capture statistics</h3>
              <p>
                Examined the packet count, capture duration, protocols, and
                overall traffic distribution to understand the scope of the
                evidence.
              </p>
            </article>

            <article>
              <h3>2. Identify endpoints</h3>
              <p>
                Reviewed source and destination addresses to identify the most
                active systems and the direction of communication.
              </p>
            </article>

            <article>
              <h3>3. Examine conversations</h3>
              <p>
                Compared TCP and UDP conversations to identify repeated
                connections, unusual ports, large data transfers, and
                communication with external systems.
              </p>
            </article>

            <article>
              <h3>4. Filter protocols</h3>
              <p>
                Applied Wireshark display filters to isolate DNS, HTTP, FTP,
                TCP, and other activity relevant to the investigation.
              </p>
            </article>

            <article>
              <h3>5. Reconstruct sessions</h3>
              <p>
                Followed selected TCP streams to examine the sequence of
                requests, responses, authentication attempts, commands, and
                transferred content.
              </p>
            </article>

            <article>
              <h3>6. Correlate metadata</h3>
              <p>
                Used NetWitness metadata and its Time Graph to connect sessions,
                services, endpoints, and traffic patterns across the capture.
              </p>
            </article>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">04 / Filters</p>
            <h2>Wireshark filters used</h2>
          </div>

          <div className="commandList">
            {filters.map((item) => (
              <article className="commandCard" key={item.name}>
                <h3>{item.name}</h3>

                <pre>
                  <code>{item.filter}</code>
                </pre>

                <p>{item.purpose}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">05 / Analysis</p>
            <h2>Traffic examined</h2>
          </div>

          <div className="memoryGrid">
            <article>
              <span>Endpoints</span>
              <h3>Source and destination systems</h3>
              <p>
                Identified the systems that generated or received the largest
                amounts of network traffic.
              </p>
            </article>

            <article>
              <span>Ports</span>
              <h3>Network services</h3>
              <p>
                Reviewed source and destination ports to determine which
                services were being accessed.
              </p>
            </article>

            <article>
              <span>DNS</span>
              <h3>Name resolution</h3>
              <p>
                Examined domain queries and responses for unusual names,
                repeated lookups, failed responses, or suspicious destinations.
              </p>
            </article>

            <article>
              <span>TCP</span>
              <h3>Connection behavior</h3>
              <p>
                Reviewed handshakes, acknowledgments, retransmissions, resets,
                and session termination behavior.
              </p>
            </article>

            <article>
              <span>FTP</span>
              <h3>File-transfer activity</h3>
              <p>
                Examined FTP commands, passive-mode connections, authentication
                activity, and data-transfer sessions.
              </p>
            </article>

            <article>
              <span>Timeline</span>
              <h3>Traffic over time</h3>
              <p>
                Used session timing and the NetWitness Time Graph to identify
                activity spikes and reconstruct the sequence of events.
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
              Replace the bracketed information with facts from your actual
              packet-capture analysis before sharing this page professionally.
            </div>

            <ul className="findingsList">
              <li>
                The most active internal system was
                <strong> [sanitized IP address]</strong>.
              </li>

              <li>
                The system communicated with
                <strong> [sanitized destination]</strong> using destination
                port <strong>[port number]</strong>.
              </li>

              <li>
                The capture contained
                <strong> [protocol or service]</strong> activity that was
                <strong> [expected, unusual, or suspicious]</strong>.
              </li>

              <li>
                An FTP session used
                <strong> [active or passive]</strong> mode and transferred
                <strong> [sanitized filename or file type]</strong>.
              </li>

              <li>
                The timeline showed increased activity at
                <strong> [sanitized time or capture offset]</strong>.
              </li>

              <li>
                Further analysis was recommended for
                <strong> [system, session, protocol, or destination]</strong>.
              </li>
            </ul>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">07 / Security Impact</p>
            <h2>Why the evidence matters</h2>
          </div>

          <div>
            <p>
              Network captures can reveal how a system communicates even when
              the investigator does not have direct access to the endpoint.
            </p>

            <p>
              Unencrypted protocols can expose commands, usernames, file names,
              requests, and other sensitive information. Unusual ports,
              destinations, connection patterns, and transferred data may also
              provide indicators of compromise.
            </p>

            <p>
              Network evidence should be correlated with endpoint logs, memory
              evidence, authentication records, and threat intelligence before
              reaching a final incident conclusion.
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
                Display filters make large packet captures easier to analyze.
              </li>

              <li>
                IP addresses and port numbers provide context but do not prove
                that activity is malicious.
              </li>

              <li>
                Following a TCP stream helps reconstruct an application-level
                conversation.
              </li>

              <li>
                FTP can create separate command and data connections,
                especially when passive mode is used.
              </li>

              <li>
                Session metadata and packet-level evidence complement each
                other during an investigation.
              </li>

              <li>
                Findings should be supported by several related artifacts
                rather than one packet or indicator.
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
              This section will include sanitized screenshots showing selected
              Wireshark filters, endpoint statistics, conversations, TCP
              streams, NetWitness metadata, and the Time Graph.
            </p>

            <div className="screenshotPlaceholder">
              Network-analysis screenshots coming soon
            </div>

            <p>
              Before publishing, remove personal information, real public IP
              addresses, credentials, student information, file paths, and
              unrelated assignment content.
            </p>
          </div>
        </section>

        <section className="caseStudyFooter">
          <p>Next project</p>
          <h2>Critical Infrastructure Security</h2>
          <span>Case study coming soon</span>

          <Link className="primaryButton" to="/">
            Return to homepage
          </Link>
        </section>
      </main>
    </div>
  );
}

export default NetworkTrafficProject;