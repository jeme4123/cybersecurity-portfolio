import { Link } from "react-router";
import "../App.css";

const securityLayers = [
  {
    title: "Asset Identification",
    description:
      "Identify mission-essential functions, critical cyber systems, supporting services, owners, locations, dependencies, and recovery priorities.",
  },
  {
    title: "Network Segmentation",
    description:
      "Separate enterprise IT, control-center systems, operational technology, remote access, and field-device networks using controlled security zones.",
  },
  {
    title: "Identity and Access",
    description:
      "Apply least privilege, multifactor authentication, privileged-account controls, access reviews, and secure administrative pathways.",
  },
  {
    title: "Continuous Monitoring",
    description:
      "Collect and correlate logs from firewalls, servers, endpoints, identity systems, VPNs, jump hosts, SCADA systems, and engineering workstations.",
  },
  {
    title: "Incident Response",
    description:
      "Use documented playbooks, defined roles, secure communications, evidence collection, containment procedures, and recurring exercises.",
  },
  {
    title: "Recovery and Resilience",
    description:
      "Maintain tested backups, redundant infrastructure, restoration priorities, alternate operating procedures, and black-start planning.",
  },
];

const technologies = [
  {
    name: "SCADA",
    description:
      "Supports centralized monitoring, operator visibility, alarms, telemetry, and supervisory control of grid operations.",
  },
  {
    name: "PLC and RTU",
    description:
      "Connect field equipment and control processes by collecting sensor data and executing operational commands.",
  },
  {
    name: "Historian Servers",
    description:
      "Store operational data used for analysis, troubleshooting, reporting, forecasting, and incident investigation.",
  },
  {
    name: "Engineering Workstations",
    description:
      "Provide specialized access for configuring industrial controllers, protection systems, and operational equipment.",
  },
  {
    name: "SIEM",
    description:
      "Centralizes security logs and helps analysts correlate activity across IT and operational-technology systems.",
  },
  {
    name: "ICS-Aware Monitoring",
    description:
      "Detects unusual industrial protocols, unauthorized commands, configuration changes, and abnormal communication patterns.",
  },
];

function CriticalInfrastructureProject() {
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
          <p className="sectionNumber">
            Project 04 / Critical Infrastructure
          </p>

          <h1>Power-Grid Cybersecurity Strategy</h1>

          <p className="caseStudyIntroduction">
            A defense-in-depth and mission-assurance strategy designed to
            protect power-grid information systems, industrial-control
            environments, operational communications, and recovery
            capabilities.
          </p>

          <div className="caseStudyTags">
            <span>SCADA</span>
            <span>ICS Security</span>
            <span>SIEM</span>
            <span>Zero Trust</span>
            <span>NIST</span>
            <span>NERC CIP</span>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">01 / Scenario</p>
            <h2>Security challenge</h2>
          </div>

          <div>
            <p>
              Power-grid organizations depend on interconnected information
              technology and operational-technology systems to generate,
              transmit, distribute, monitor, and restore electrical power.
            </p>

            <p>
              A successful cyberattack, equipment failure, communication
              outage, unauthorized configuration change, or compromised remote
              connection could affect both cybersecurity and operational
              reliability.
            </p>

            <p>
              The strategy therefore focused on protecting critical systems
              while ensuring that essential operations could continue during
              attacks, failures, and other disruptions.
            </p>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">02 / Objective</p>
            <h2>Project objective</h2>
          </div>

          <div>
            <p>
              The objective was to develop a practical cybersecurity and
              mission-assurance plan for a large power-grid environment.
            </p>

            <p>
              The project examined critical assets, industrial-control
              technologies, cybersecurity risks, network-defense technologies,
              operational procedures, incident response, and recovery
              requirements.
            </p>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">03 / Mission</p>
            <h2>Mission-essential functions</h2>
          </div>

          <div>
            <ul className="findingsList">
              <li>Safely generate, transmit, and distribute electrical power.</li>

              <li>
                Monitor frequency, voltage, equipment status, alarms, and power
                flow.
              </li>

              <li>
                Operate protection systems, substations, control centers, and
                field communications.
              </li>

              <li>
                Coordinate outage management, emergency operations, and system
                restoration.
              </li>

              <li>
                Preserve backup control capabilities and black-start recovery
                procedures.
              </li>

              <li>
                Maintain reliable communications between operators, engineers,
                field personnel, and external partners.
              </li>
            </ul>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">04 / Architecture</p>
            <h2>Critical technologies</h2>
          </div>

          <div className="memoryGrid">
            {technologies.map((technology) => (
              <article key={technology.name}>
                <span>{technology.name}</span>
                <h3>{technology.name}</h3>
                <p>{technology.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">05 / Threats</p>
            <h2>Primary security risks</h2>
          </div>

          <div>
            <ul className="findingsList">
              <li>
                Phishing and credential theft targeting operators, engineers,
                administrators, and remote-access users.
              </li>

              <li>
                Unauthorized remote access through compromised VPN accounts,
                vendor connections, or weak authentication.
              </li>

              <li>
                Malware affecting control centers, engineering workstations,
                historian servers, or operator interfaces.
              </li>

              <li>
                Lateral movement from enterprise networks into operational
                environments.
              </li>

              <li>
                Supply-chain compromise involving software, hardware, firmware,
                contractors, or managed services.
              </li>

              <li>
                Unauthorized controller changes, altered configurations,
                disrupted communications, and manipulated operator displays.
              </li>

              <li>
                Ransomware, destructive attacks, insider threats, and denial of
                service.
              </li>
            </ul>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">06 / Controls</p>
            <h2>Defense-in-depth strategy</h2>
          </div>

          <div className="caseStudyList">
            {securityLayers.map((layer, index) => (
              <article key={layer.title}>
                <h3>
                  {index + 1}. {layer.title}
                </h3>

                <p>{layer.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">07 / Segmentation</p>
            <h2>Recommended security zones</h2>
          </div>

          <div className="architectureFlow">
            <article>
              <span>Zone 1</span>
              <h3>Enterprise IT</h3>
              <p>
                Email, business applications, user workstations, internet
                access, and administrative systems.
              </p>
            </article>

            <div className="flowArrow">↓</div>

            <article>
              <span>Zone 2</span>
              <h3>Industrial DMZ</h3>
              <p>
                Controlled data exchange, proxy services, replicated
                historians, update staging, and secure remote-access gateways.
              </p>
            </article>

            <div className="flowArrow">↓</div>

            <article>
              <span>Zone 3</span>
              <h3>Control Center</h3>
              <p>
                SCADA servers, energy-management systems, operator interfaces,
                authentication services, and application servers.
              </p>
            </article>

            <div className="flowArrow">↓</div>

            <article>
              <span>Zone 4</span>
              <h3>Field and Substation Systems</h3>
              <p>
                RTUs, PLCs, protective relays, intelligent electronic devices,
                sensors, and operational communications.
              </p>
            </article>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">08 / Monitoring</p>
            <h2>SIEM and centralized logging</h2>
          </div>

          <div>
            <p>
              The proposed SIEM collects security and operational logs from
              network devices, servers, endpoints, identity systems, remote
              access, SCADA servers, historian systems, jump hosts, and
              engineering workstations.
            </p>

            <p>
              Centralized logging helps analysts connect related events across
              systems. For example, failed VPN attempts, a privileged login, a
              newly created account, an OT jump-host session, and an
              engineering-workstation configuration change may collectively
              indicate an intrusion.
            </p>

            <p>
              The design also includes redundant log collectors, secure log
              transfer, backup collection locations, time synchronization, and
              sufficient retention for investigations and threat hunting.
            </p>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">09 / Access</p>
            <h2>Zero-trust remote access</h2>
          </div>

          <div>
            <ul className="findingsList">
              <li>
                Require multifactor authentication for remote and privileged
                access.
              </li>

              <li>
                Route administrative access through hardened jump servers.
              </li>

              <li>
                Separate standard user accounts from administrator accounts.
              </li>

              <li>
                Approve access according to role, device health, location,
                purpose, and time.
              </li>

              <li>
                Record privileged sessions and alert on unusual commands or
                access patterns.
              </li>

              <li>
                Remove inactive accounts and review vendor access regularly.
              </li>
            </ul>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">10 / Operations</p>
            <h2>Operational security procedures</h2>
          </div>

          <div className="memoryGrid">
            <article>
              <span>Change Management</span>
              <h3>Controlled modifications</h3>
              <p>
                Review, approve, test, document, and validate system and
                configuration changes before production deployment.
              </p>
            </article>

            <article>
              <span>Patch Management</span>
              <h3>Risk-based maintenance</h3>
              <p>
                Evaluate security risk, operational impact, vendor guidance,
                testing requirements, outage windows, and compensating controls.
              </p>
            </article>

            <article>
              <span>Access Reviews</span>
              <h3>Permission validation</h3>
              <p>
                Regularly verify user accounts, administrator rights, service
                accounts, vendor access, and role assignments.
              </p>
            </article>

            <article>
              <span>Backups</span>
              <h3>Restoration readiness</h3>
              <p>
                Protect offline and immutable backups of system configurations,
                application data, controller logic, and operational records.
              </p>
            </article>

            <article>
              <span>Training</span>
              <h3>Workforce readiness</h3>
              <p>
                Train operators, engineers, administrators, incident responders,
                managers, and third-party personnel.
              </p>
            </article>

            <article>
              <span>Exercises</span>
              <h3>Response validation</h3>
              <p>
                Conduct tabletop exercises, technical simulations, restoration
                tests, and cross-functional incident-response drills.
              </p>
            </article>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">11 / Response</p>
            <h2>Incident-response priorities</h2>
          </div>

          <div>
            <ol className="numberedFindings">
              <li>
                Protect personnel and maintain safe physical operations.
              </li>

              <li>
                Confirm the affected systems, operational impact, and attack
                scope.
              </li>

              <li>
                Isolate compromised systems without causing unnecessary grid
                instability.
              </li>

              <li>
                Preserve volatile data, logs, configurations, and forensic
                evidence.
              </li>

              <li>
                Activate alternate communications and backup control
                capabilities when required.
              </li>

              <li>
                Eradicate malicious access and restore systems from trusted
                configurations.
              </li>

              <li>
                Validate operational integrity before returning systems to
                service.
              </li>

              <li>
                Document lessons learned and update controls, procedures, and
                training.
              </li>
            </ol>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">12 / Frameworks</p>
            <h2>Standards and guidance</h2>
          </div>

          <div className="caseStudyList">
            <article>
              <h3>NIST Cybersecurity Framework</h3>
              <p>
                Used to organize governance, identification, protection,
                detection, response, and recovery activities.
              </p>
            </article>

            <article>
              <h3>NERC Critical Infrastructure Protection</h3>
              <p>
                Used as a regulatory and operational reference for identifying
                critical cyber systems and protecting reliable grid operations.
              </p>
            </article>

            <article>
              <h3>Zero-Trust Principles</h3>
              <p>
                Used to reduce implicit trust, continuously evaluate access, and
                limit the impact of compromised identities and devices.
              </p>
            </article>

            <article>
              <h3>Defense in Depth</h3>
              <p>
                Used to combine technical, administrative, operational, and
                physical safeguards rather than relying on one security
                product.
              </p>
            </article>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">13 / Recommendations</p>
            <h2>Key recommendations</h2>
          </div>

          <div>
            <ul className="findingsList">
              <li>
                Maintain an accurate inventory of critical systems, software,
                firmware, dependencies, and owners.
              </li>

              <li>
                Enforce strong segmentation between business and operational
                networks.
              </li>

              <li>
                Use secure jump hosts and multifactor authentication for
                privileged access.
              </li>

              <li>
                Deploy centralized logging and industrial-aware network
                monitoring.
              </li>

              <li>
                Protect backups and regularly test restoration procedures.
              </li>

              <li>
                Apply formal change management and risk-based patching.
              </li>

              <li>
                Conduct recurring incident-response and continuity exercises.
              </li>

              <li>
                Evaluate suppliers, contractors, software, hardware, and remote
                services for supply-chain risk.
              </li>
            </ul>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">14 / Lessons</p>
            <h2>What I learned</h2>
          </div>

          <div>
            <ul className="findingsList">
              <li>
                Cybersecurity controls must support operational safety and
                reliability.
              </li>

              <li>
                IT and operational-technology environments require different
                risk and maintenance considerations.
              </li>

              <li>
                Network segmentation reduces exposure and limits lateral
                movement.
              </li>

              <li>
                A SIEM is most valuable when logs from identity, network,
                endpoint, and operational systems are correlated.
              </li>

              <li>
                Incident-response plans must account for continued operation,
                not only system containment.
              </li>

              <li>
                Resilience depends on people, procedures, architecture,
                redundancy, training, and tested recovery plans.
              </li>
            </ul>
          </div>
        </section>

        <section className="caseStudySection">
          <div>
            <p className="sectionNumber">15 / Visuals</p>
            <h2>Architecture diagrams</h2>
          </div>

          <div>
            <p>
              This section will contain sanitized network-segmentation,
              defense-in-depth, mission-assurance, and incident-response
              diagrams.
            </p>

            <div className="screenshotPlaceholder">
              Critical-infrastructure diagrams coming soon
            </div>

            <p>
              Only original diagrams and properly attributed public references
              should be published. Remove instructor materials, restricted
              information, and assignment-specific instructions.
            </p>
          </div>
        </section>

        <section className="caseStudyFooter">
          <p>Portfolio milestone</p>
          <h2>Four cybersecurity case studies completed.</h2>
          <span>
            Linux security, Windows memory forensics, network analysis, and
            critical-infrastructure protection.
          </span>

          <Link className="primaryButton" to="/">
            Return to homepage
          </Link>
        </section>
      </main>
    </div>
  );
}

export default CriticalInfrastructureProject;