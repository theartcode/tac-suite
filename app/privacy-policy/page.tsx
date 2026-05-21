import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --ink:        #1a1a2e;
    --accent:     #c8a96e;
    --accent2:    #e8c990;
    --surface:    #faf9f6;
    --card:       #ffffff;
    --muted:      #6b6b80;
    --border:     #e5e0d8;
    --tbl-head:   #1a1a2e;
    --tbl-alt:    #f5f3ef;
    --radius:     12px;
    --shadow:     0 4px 24px rgba(26,26,46,0.08);
  }

  .tac-pp-wrap *, .tac-pp-wrap *::before, .tac-pp-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .tac-pp-wrap {
    background: var(--surface);
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    min-height: 100vh;
  }

  .tac-pp-hero {
    background: var(--ink);
    padding: 157px 24px 56px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .tac-pp-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(200,169,110,.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .tac-pp-hero-eyebrow {
    display: inline-block;
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: var(--accent);
    border: 1px solid rgba(200,169,110,.35);
    border-radius: 40px;
    padding: 5px 16px;
    margin-bottom: 20px;
  }
  .tac-pp-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 16px;
  }
  .tac-pp-hero-sub {
    color: rgba(255,255,255,.55);
    font-size: .95rem;
    font-weight: 300;
    max-width: 520px;
    margin: 0 auto 28px;
    line-height: 1.7;
  }
  .tac-pp-hero-meta {
    display: flex;
    justify-content: center;
    gap: 28px;
    flex-wrap: wrap;
    font-size: .8rem;
    color: rgba(255,255,255,.45);
  }
  .tac-pp-hero-meta span { display: flex; align-items: center; gap: 6px; }
  .tac-pp-hero-meta span::before { content: ''; display: block; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }

  .tac-pp-body {
    max-width: 1100px;
    margin: 0 auto;
    padding: 56px 32px 80px;
  }

  .tac-pp-content { min-width: 0; }

  .tac-pp-section {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 36px 40px;
    margin-bottom: 24px;
    box-shadow: var(--shadow);
    scroll-margin-top: 24px;
  }
  .tac-pp-section-num {
    font-size: .68rem;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 6px;
  }
  .tac-pp-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--border);
  }
  .tac-pp-section p {
    font-size: .9rem;
    line-height: 1.78;
    color: #3a3a50;
    margin-bottom: 14px;
  }
  .tac-pp-section p:last-child { margin-bottom: 0; }

  .tac-pp-clause {
    margin-bottom: 18px;
    padding-left: 16px;
    border-left: 2px solid var(--border);
  }
  .tac-pp-clause-num {
    font-size: .76rem;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 4px;
    letter-spacing: .04em;
  }
  .tac-pp-clause p { margin-bottom: 0; }

  .tac-pp-lettered {
    margin: 12px 0 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .tac-pp-lettered li {
    font-size: .88rem;
    line-height: 1.7;
    color: #3a3a50;
    display: flex;
    gap: 10px;
  }
  .tac-pp-lettered li .ltr {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    background: var(--tbl-alt);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .65rem;
    font-weight: 700;
    color: var(--ink);
    margin-top: 2px;
  }

  .tac-pp-sublist {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 4px 0 0 0;
  }
  .tac-pp-sublist li {
    font-size: .87rem;
    line-height: 1.7;
    color: #3a3a50;
    display: flex;
    gap: 10px;
  }
  .tac-pp-sublist li .sub-num {
    flex-shrink: 0;
    font-weight: 700;
    color: var(--accent);
    font-size: .76rem;
    min-width: 38px;
    margin-top: 2px;
  }

  .tac-pp-tbl-wrap {
    width: 100%;
    overflow-x: auto;
    margin: 18px 0;
    border-radius: 10px;
    border: 1px solid var(--border);
    box-shadow: 0 2px 12px rgba(26,26,46,.06);
  }
  .tac-pp-tbl {
    width: 100%;
    border-collapse: collapse;
    font-size: .83rem;
    margin: 0;
  }
  .tac-pp-tbl thead tr { background: var(--tbl-head); }
  .tac-pp-tbl thead th {
    color: #fff;
    font-weight: 600;
    text-align: left;
    padding: 13px 16px;
    font-size: .78rem;
    letter-spacing: .04em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .tac-pp-tbl thead th:first-child { border-radius: 10px 0 0 0; }
  .tac-pp-tbl thead th:last-child  { border-radius: 0 10px 0 0; }
  .tac-pp-tbl tbody tr { transition: background .15s; }
  .tac-pp-tbl tbody tr:nth-child(odd)  { background: #fff; }
  .tac-pp-tbl tbody tr:nth-child(even) { background: var(--tbl-alt); }
  .tac-pp-tbl tbody tr:hover { background: #edeae3; }
  .tac-pp-tbl td {
    padding: 13px 16px;
    color: #3a3a50;
    vertical-align: top;
    border-bottom: 1px solid var(--border);
    line-height: 1.65;
  }
  .tac-pp-tbl td strong { font-weight: 600; color: var(--ink); }
  .tac-pp-tbl tbody tr:last-child td { border-bottom: none; }

  .tac-pp-info-card {
    background: var(--tbl-alt);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px 24px;
    margin: 18px 0;
  }
  .tac-pp-info-card p { margin-bottom: 8px; font-size: .88rem; }
  .tac-pp-info-card a { color: var(--accent); text-decoration: none; font-weight: 600; }

  .tac-pp-notice {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    background: #fff8ee;
    border: 1px solid #e8c990;
    border-left: 4px solid var(--accent);
    border-radius: 8px;
    padding: 16px 18px;
    margin: 16px 0;
    font-size: .87rem;
    line-height: 1.7;
    color: #3a3a50;
  }
  .tac-pp-notice-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 1px; }

  .tac-pp-rights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
    margin: 18px 0;
  }
  .tac-pp-right-card {
    background: var(--tbl-alt);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .tac-pp-right-card-icon { font-size: 1.4rem; }
  .tac-pp-right-card-title { font-weight: 700; font-size: .82rem; color: var(--ink); }
  .tac-pp-right-card-desc { font-size: .78rem; color: var(--muted); line-height: 1.55; }

  .tac-pp-contact {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 16px;
  }
  .tac-pp-contact-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--ink);
    color: #fff;
    padding: 9px 18px;
    border-radius: 40px;
    font-size: .82rem;
    font-weight: 500;
    text-decoration: none;
    transition: background .2s;
  }
  .tac-pp-contact-pill:hover { background: #2d2d4e; }
  .tac-pp-contact-pill span { font-size: .95rem; }

  @media (max-width: 768px) {
    .tac-pp-body { padding: 32px 16px 60px; }
    .tac-pp-section { padding: 24px 20px; }
  }
`;

export default function PrivacyPolicyPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Navbar />

      <div className="tac-pp-wrap">

        {/* Hero */}
        <div className="tac-pp-hero">
          <div className="tac-pp-hero-eyebrow">Legal Document</div>
          <h1>Privacy Policy</h1>
          <p className="tac-pp-hero-sub">How The Art Code collects, uses, and protects your personal data across our platform and services.</p>
          <div className="tac-pp-hero-meta">
            <span>TAC School of Modern Learning Pvt. Ltd.</span>
            <span>Hyderabad, India</span>
            <span>DPDPA 2023 Compliant</span>
          </div>
        </div>

        <div className="tac-pp-body">
          <div className="tac-pp-content">

            {/* Section 1 */}
            <section className="tac-pp-section" id="s1">
              <div className="tac-pp-section-num">Section 01</div>
              <h2>Introduction and Scope</h2>

              <div className="tac-pp-clause">
                <div className="tac-pp-clause-num">1.1</div>
                <p>This Privacy Policy (&ldquo;Policy&rdquo;) describes how TAC School of Modern Learning Private Limited, operating as The Art Code (&ldquo;TAC&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), collects, uses, stores, discloses, transfers, and protects your personal data in connection with your use of the TAC Platform and all related Services.</p>
              </div>

              <div className="tac-pp-clause">
                <div className="tac-pp-clause-num">1.2 — Compliance Framework</div>
                <p>This Policy is issued in compliance with:</p>
                <ul className="tac-pp-sublist" style={{ marginTop: '10px' }}>
                  <li><span className="sub-num">1.2.1</span><span>Section 43A and Section 72A of the Information Technology Act, 2000;</span></li>
                  <li><span className="sub-num">1.2.2</span><span>The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (&ldquo;SPDI Rules&rdquo;);</span></li>
                  <li><span className="sub-num">1.2.3</span><span>The Digital Personal Data Protection Act, 2023 and the rules framed thereunder; and</span></li>
                  <li><span className="sub-num">1.2.4</span><span>The Consumer Protection Act, 2019 and Consumer Protection (E-Commerce) Rules, 2020.</span></li>
                </ul>
              </div>

              <div className="tac-pp-clause">
                <div className="tac-pp-clause-num">1.3</div>
                <p>This Policy applies to all personal data processed by TAC in connection with users&rsquo; access and use of the TAC Platform, including data collected through the website (www.theartcode.org), mobile applications, webinar registrations, bootcamp enrolments, offline course admissions, and institutional partnerships.</p>
              </div>

              <div className="tac-pp-clause">
                <div className="tac-pp-clause-num">1.4</div>
                <p>By using any TAC Service, you signify your consent to the collection and processing of your personal data as described in this Policy. If you do not consent to any part of this Policy, you must not use our Services. For users under eighteen (18) years of age, parental or guardian consent is mandatory.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="tac-pp-section" id="s2">
              <div className="tac-pp-section-num">Section 02</div>
              <h2>Data Controller</h2>
              <p>2.1 — The data controller responsible for your personal data is:</p>
              <div className="tac-pp-tbl-wrap">
                <table className="tac-pp-tbl">
                  <thead>
                    <tr><th>Field</th><th>Details</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Name</strong></td><td>TAC School of Modern Learning Private Limited (The Art Code)</td></tr>
                    <tr><td><strong>Address</strong></td><td>Madhapur, Hyderabad – 500081, Telangana, India</td></tr>
                    <tr><td><strong>Data Privacy Email</strong></td><td><a href="mailto:legal@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>legal@theartcode.org</a></td></tr>
                    <tr><td><strong>Support Email</strong></td><td><a href="mailto:support@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@theartcode.org</a></td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section className="tac-pp-section" id="s3">
              <div className="tac-pp-section-num">Section 03</div>
              <h2>Categories of Personal Data Collected</h2>

              <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '10px' }}>3.1 — Data Provided Directly by You</p>
              <ul className="tac-pp-lettered">
                <li><span className="ltr">a</span><span><strong>Registration data:</strong> Full legal name, email address, mobile telephone number, city and state of residence, date of birth (for age verification), and optionally a profile photograph.</span></li>
                <li><span className="ltr">b</span><span><strong>Educational and professional data:</strong> Educational qualifications, current occupation, career goals, skills and areas of interest, and portfolio work submitted through the Platform.</span></li>
                <li><span className="ltr">c</span><span><strong>Financial and billing data:</strong> Billing address, GSTIN (where provided for B2B invoicing), and payment-related metadata such as transaction IDs, payment confirmation status, and subscription history. TAC does not store full card numbers, CVVs, net banking passwords, or UPI PINs — these are handled exclusively by JODO.</span></li>
                <li><span className="ltr">d</span><span><strong>Communication data:</strong> Content of messages, queries, complaints, and feedback submitted through support channels, community forums, or any TAC communication interface.</span></li>
                <li><span className="ltr">e</span><span><strong>User-generated content:</strong> Projects, assignments, portfolio submissions, testimonials, and community posts submitted to or through the Platform.</span></li>
              </ul>

              <p style={{ fontWeight: 600, color: 'var(--ink)', margin: '20px 0 10px' }}>3.2 — Data Collected Automatically</p>
              <ul className="tac-pp-lettered">
                <li><span className="ltr">a</span><span><strong>Device and technical data:</strong> IP address, device type and model, operating system version, browser type and version, screen resolution, and unique device identifiers.</span></li>
                <li><span className="ltr">b</span><span><strong>Usage and engagement data:</strong> Pages visited, content accessed and viewed, watch duration per video, search queries on the Platform, course progress and completion status, login timestamps, and session duration.</span></li>
                <li><span className="ltr">c</span><span><strong>Location data:</strong> Approximate geographic location derived from IP address (city/state level only). TAC does not collect precise GPS coordinates unless explicitly provided by you.</span></li>
                <li><span className="ltr">d</span><span><strong>Cookie data:</strong> As described in Section 9 of this Policy.</span></li>
              </ul>

              <p style={{ fontWeight: 600, color: 'var(--ink)', margin: '20px 0 10px' }}>3.3 — Data Received from Third Parties</p>
              <ul className="tac-pp-lettered">
                <li><span className="ltr">a</span><span><strong>Social login providers:</strong> If you choose to register or log in via Google or another third-party authentication service, TAC receives your name and email address from that provider.</span></li>
                <li><span className="ltr">b</span><span><strong>JODO:</strong> TAC receives payment confirmation status, transaction identifiers, and mandate status from JODO in connection with subscription billing and auto-pay management.</span></li>
                <li><span className="ltr">c</span><span><strong>College and institutional partners:</strong> Where you are enrolled in the DM Online programme through an institutional MoU, TAC may receive your name, contact details, student ID, and enrolment information from the partner institution.</span></li>
                <li><span className="ltr">d</span><span><strong>Publicly available data:</strong> TAC may supplement your profile data with information available in public registers or professional networks where relevant.</span></li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="tac-pp-section" id="s4">
              <div className="tac-pp-section-num">Section 04</div>
              <h2>Purposes and Legal Bases for Processing</h2>
              <div className="tac-pp-tbl-wrap">
                <table className="tac-pp-tbl">
                  <thead>
                    <tr><th>Purpose</th><th>Data Categories Used</th><th>Legal Basis</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Account creation and authentication</strong></td><td>Name, email, phone, DOB</td><td>Contractual necessity</td></tr>
                    <tr><td><strong>Subscription management and auto-pay via JODO</strong></td><td>Email, phone, transaction IDs, mandate status</td><td>Contractual necessity</td></tr>
                    <tr><td><strong>Content delivery and progress tracking</strong></td><td>Usage data, course progress, device data</td><td>Contractual necessity</td></tr>
                    <tr><td><strong>Customer support and grievance resolution</strong></td><td>Name, email, communication data, order history</td><td>Contractual necessity; Legal obligation</td></tr>
                    <tr><td><strong>GST invoicing and financial compliance</strong></td><td>Name, address, GSTIN, transaction data</td><td>Legal obligation (GST Act, 2017)</td></tr>
                    <tr><td><strong>Marketing and re-engagement communications</strong></td><td>Email, phone, usage patterns, location</td><td>Consent (withdrawable at any time)</td></tr>
                    <tr><td><strong>Platform analytics and product improvement</strong></td><td>Anonymised and aggregated usage data</td><td>Legitimate interest</td></tr>
                    <tr><td><strong>Placement and career support</strong></td><td>Profile, portfolio, course completion data</td><td>Consent (explicit, per student)</td></tr>
                    <tr><td><strong>Fraud detection and platform security</strong></td><td>IP address, device data, transaction patterns</td><td>Legitimate interest; Legal obligation</td></tr>
                    <tr><td><strong>Compliance with court orders or regulatory demands</strong></td><td>All categories as required</td><td>Legal obligation</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5 */}
            <section className="tac-pp-section" id="s5">
              <div className="tac-pp-section-num">Section 05</div>
              <h2>Disclosure of Personal Data</h2>

              <div className="tac-pp-notice">
                <span className="tac-pp-notice-icon">🔒</span>
                <span>5.1 — TAC does not sell, rent, or trade your personal data to any third party for their independent commercial or marketing purposes. Personal data is disclosed only in the circumstances set out below.</span>
              </div>

              <p style={{ fontWeight: 600, color: 'var(--ink)', margin: '16px 0 10px' }}>5.2 — Data Processors (Service Providers)</p>
              <p>TAC shares personal data with the following categories of third-party data processors who process data on TAC&rsquo;s behalf and under TAC&rsquo;s instructions:</p>
              <ul className="tac-pp-sublist" style={{ marginTop: '12px' }}>
                <li><span className="sub-num">5.2.1</span><span><strong>JODO</strong> (Jodo Financial Solutions Pvt. Ltd., www.jodo.in): Processes payment data and manages subscription mandates (eNACH and UPI AutoPay).</span></li>
                <li><span className="sub-num">5.2.2</span><span><strong>Cloud hosting providers</strong> (e.g., Amazon Web Services India or equivalent): Provide secure data hosting and storage infrastructure.</span></li>
                <li><span className="sub-num">5.2.3</span><span><strong>Video streaming and CDN providers:</strong> Deliver video content to users with minimal latency.</span></li>
                <li><span className="sub-num">5.2.4</span><span><strong>Email and messaging service providers:</strong> Send transactional communications (billing reminders, receipts, platform notifications) and marketing communications.</span></li>
                <li><span className="sub-num">5.2.5</span><span><strong>WhatsApp Business API providers:</strong> Send automated notifications regarding subscriptions and course schedules.</span></li>
                <li><span className="sub-num">5.2.6</span><span><strong>Analytics platforms</strong> (e.g., Google Analytics): Receive anonymised, aggregated usage data for platform improvement purposes.</span></li>
              </ul>

              <p style={{ fontWeight: 600, color: 'var(--ink)', margin: '20px 0 10px' }}>5.3 — Business Partners (Limited)</p>
              <ul className="tac-pp-sublist">
                <li><span className="sub-num">5.3.1</span><span><strong>College partners (DM Online programme):</strong> TAC shares student enrolment data (name, contact details, student ID) with the specific institution that enrolled the student under the relevant MoU.</span></li>
                <li><span className="sub-num">5.3.2</span><span><strong>Corporate placement partners:</strong> Student profiles and portfolio data are shared with prospective employers only with the explicit prior written consent of the student.</span></li>
                <li><span className="sub-num">5.3.3</span><span><strong>SAT DROP industry speakers:</strong> Minimal identifying data (attendance list) may be shared with confirmed event speakers for session delivery purposes.</span></li>
              </ul>

              <p style={{ fontWeight: 600, color: 'var(--ink)', margin: '20px 0 8px' }}>5.4 — Legal Disclosures</p>
              <p>TAC may disclose your personal data to government bodies, regulatory authorities, courts, tribunals, law enforcement agencies, or other public bodies where required or authorised by Applicable Law, including under court orders, government directions, or regulatory compliance obligations.</p>

              <p style={{ fontWeight: 600, color: 'var(--ink)', margin: '20px 0 8px' }}>5.5 — Business Transfers</p>
              <p>In the event of a merger, acquisition, demerger, or sale of all or substantially all of TAC&rsquo;s business or assets, your personal data may be transferred to the acquiring or succeeding entity. TAC will provide you with not less than fourteen (14) days&rsquo; advance notice by email before any such transfer is completed. The transferee will be required to maintain data protection standards equivalent to or more stringent than this Policy.</p>
            </section>

            {/* Section 6 */}
            <section className="tac-pp-section" id="s6">
              <div className="tac-pp-section-num">Section 06</div>
              <h2>Cross-Border Data Transfers</h2>
              <p>6.1 — TAC stores all personal data on servers located within the territory of India wherever practicable. Where data is processed or stored by third-party service providers outside India, TAC ensures that such transfers are made only to jurisdictions with adequate data protection frameworks or under contractual arrangements that impose equivalent data protection obligations on the recipient.</p>
            </section>

            {/* Section 7 */}
            <section className="tac-pp-section" id="s7">
              <div className="tac-pp-section-num">Section 07</div>
              <h2>Data Retention</h2>
              <div className="tac-pp-tbl-wrap">
                <table className="tac-pp-tbl">
                  <thead>
                    <tr><th>Data Category</th><th>Retention Period</th><th>Basis</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Active account and profile data</strong></td><td>Duration of account + 6 months post-closure</td><td>Contractual necessity</td></tr>
                    <tr><td><strong>Payment and transaction records</strong></td><td>7 years from date of transaction</td><td>GST Act / tax compliance</td></tr>
                    <tr><td><strong>GST invoices and billing records</strong></td><td>7 years</td><td>CGST Act, 2017 — Section 36</td></tr>
                    <tr><td><strong>Course completion and certificates</strong></td><td>Indefinitely</td><td>Verification and legitimate interest</td></tr>
                    <tr><td><strong>Support and communication records</strong></td><td>3 years from date of communication</td><td>Consumer grievance obligations</td></tr>
                    <tr><td><strong>Marketing preference records</strong></td><td>Duration of consent + 3 years</td><td>Proof of consent — DPDPA 2023</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8 */}
            <section className="tac-pp-section" id="s8">
              <div className="tac-pp-section-num">Section 08</div>
              <h2>Security Measures</h2>
              <p>8.1 — TAC implements the following technical and organisational security measures to protect your personal data from unauthorised access, disclosure, alteration, or destruction:</p>
              <ul className="tac-pp-sublist" style={{ marginTop: '12px' }}>
                <li><span className="sub-num">8.1.1</span><span>TLS/SSL encryption for all data transmitted between your device and the TAC Platform;</span></li>
                <li><span className="sub-num">8.1.2</span><span>Encryption at rest for all sensitive personal data stored on TAC&rsquo;s servers;</span></li>
                <li><span className="sub-num">8.1.3</span><span>Role-based access controls limiting access to personal data to only those TAC personnel who require it for their specific job functions;</span></li>
                <li><span className="sub-num">8.1.4</span><span>Multi-factor authentication for all internal administrative systems;</span></li>
                <li><span className="sub-num">8.1.5</span><span>Regular security vulnerability assessments and penetration testing;</span></li>
                <li><span className="sub-num">8.1.6</span><span>Incident response and data breach protocols as required by the Digital Personal Data Protection Act, 2023; and</span></li>
                <li><span className="sub-num">8.1.7</span><span>Data minimisation practices ensuring only data necessary for the stated purpose is collected.</span></li>
              </ul>
              <div className="tac-pp-notice" style={{ marginTop: '18px' }}>
                <span className="tac-pp-notice-icon">⚠️</span>
                <span>8.2 — TAC will notify you within seventy-two (72) hours of becoming aware of any personal data breach that is likely to result in a risk to your rights, freedoms, or safety, as required by Section 8(6) of the Digital Personal Data Protection Act, 2023. Such notification will be made to your registered email address.</span>
              </div>
            </section>

            {/* Section 9 */}
            <section className="tac-pp-section" id="s9">
              <div className="tac-pp-section-num">Section 09</div>
              <h2>Cookie Policy</h2>
              <div className="tac-pp-tbl-wrap">
                <table className="tac-pp-tbl">
                  <thead>
                    <tr><th>Cookie Type</th><th>Specific Purpose</th><th>Duration</th><th>Opt-Out</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Essential / Strictly Necessary</strong></td>
                      <td>Login session management, CSRF protection, core platform functionality. Cannot be disabled without impairing service delivery.</td>
                      <td>Session</td>
                      <td style={{ color: '#c0392b', fontWeight: 600 }}>Not available</td>
                    </tr>
                    <tr>
                      <td><strong>Functional / Preference</strong></td>
                      <td>Remembers playback settings, language preferences, notification preferences, and UI customisations.</td>
                      <td>1 year</td>
                      <td style={{ color: '#27ae60', fontWeight: 600 }}>Via cookie settings</td>
                    </tr>
                    <tr>
                      <td><strong>Analytics</strong></td>
                      <td>Tracks user navigation patterns and content engagement using anonymised data to improve the Platform (Google Analytics with IP anonymisation).</td>
                      <td>2 years</td>
                      <td style={{ color: '#27ae60', fontWeight: 600 }}>Via cookie settings</td>
                    </tr>
                    <tr>
                      <td><strong>Marketing / Targeting</strong></td>
                      <td>Meta Pixel and Google Ads tracking for retargeting campaigns and ad performance measurement. Connects your Platform activity to ad serving systems.</td>
                      <td>90 days</td>
                      <td style={{ color: '#27ae60', fontWeight: 600 }}>Via cookie settings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10 */}
            <section className="tac-pp-section" id="s10">
              <div className="tac-pp-section-num">Section 10</div>
              <h2>Your Rights as a Data Principal</h2>
              <p>10.1 — Under the Digital Personal Data Protection Act, 2023 and other Applicable Law, you have the following rights in respect of your personal data:</p>

              <div className="tac-pp-rights-grid">
                <div className="tac-pp-right-card">
                  <div className="tac-pp-right-card-icon">🔍</div>
                  <div className="tac-pp-right-card-title">Right to Access</div>
                  <div className="tac-pp-right-card-desc">Request a summary of the personal data TAC holds about you and the purposes for which it is processed.</div>
                </div>
                <div className="tac-pp-right-card">
                  <div className="tac-pp-right-card-icon">✏️</div>
                  <div className="tac-pp-right-card-title">Right to Correction</div>
                  <div className="tac-pp-right-card-desc">Request that any inaccurate, incomplete, or outdated personal data be corrected or completed.</div>
                </div>
                <div className="tac-pp-right-card">
                  <div className="tac-pp-right-card-icon">🗑️</div>
                  <div className="tac-pp-right-card-title">Right to Erasure</div>
                  <div className="tac-pp-right-card-desc">Request deletion of your personal data where it is no longer necessary, subject to legal retention obligations.</div>
                </div>
                <div className="tac-pp-right-card">
                  <div className="tac-pp-right-card-icon">↩️</div>
                  <div className="tac-pp-right-card-title">Right to Withdraw Consent</div>
                  <div className="tac-pp-right-card-desc">Withdraw consent for processing at any time. Withdrawal does not affect validity of prior processing.</div>
                </div>
                <div className="tac-pp-right-card">
                  <div className="tac-pp-right-card-icon">📦</div>
                  <div className="tac-pp-right-card-title">Right to Data Portability</div>
                  <div className="tac-pp-right-card-desc">Request a copy of your data in a structured, machine-readable format.</div>
                </div>
                <div className="tac-pp-right-card">
                  <div className="tac-pp-right-card-icon">⚖️</div>
                  <div className="tac-pp-right-card-title">Right to Grievance Redressal</div>
                  <div className="tac-pp-right-card-desc">File a complaint with TAC&rsquo;s Grievance Officer, or with the Data Protection Board of India.</div>
                </div>
                <div className="tac-pp-right-card">
                  <div className="tac-pp-right-card-icon">👤</div>
                  <div className="tac-pp-right-card-title">Right to Nominate</div>
                  <div className="tac-pp-right-card-desc">Nominate another individual to exercise your rights in the event of your death or incapacity.</div>
                </div>
              </div>

              <div className="tac-pp-notice" style={{ marginTop: '6px' }}>
                <span className="tac-pp-notice-icon">📧</span>
                <span>10.2 — To exercise any of the above rights, send a written request to <strong>legal@theartcode.org</strong> with the subject line <em>&ldquo;Data Rights Request — [Your Name]&rdquo;</em>. TAC will acknowledge your request within three (3) Working Days and respond substantively within fifteen (15) Working Days.</span>
              </div>
            </section>

            {/* Section 11 */}
            <section className="tac-pp-section" id="s11">
              <div className="tac-pp-section-num">Section 11</div>
              <h2>Third-Party Links and Platforms</h2>
              <p>11.1 — The TAC Platform may contain links to third-party websites, social media platforms, or other services. TAC is not responsible for the privacy practices, terms of service, or data collection practices of such third parties. You access those platforms at your own risk and are advised to review their privacy policies independently.</p>
            </section>

            {/* Section 12 */}
            <section className="tac-pp-section" id="s12">
              <div className="tac-pp-section-num">Section 12</div>
              <h2>Children&rsquo;s Privacy</h2>
              <p>12.1 — TAC does not knowingly collect or process personal data from individuals under the age of thirteen (13) years. If TAC becomes aware that personal data has been inadvertently collected from a child under 13, it will be deleted promptly. Users between 13 and 18 must register with verified parental consent. Where consent is given on behalf of a child, the parent or guardian assumes all obligations under this Policy in respect of the child&rsquo;s data.</p>
            </section>

            {/* Section 13 */}
            <section className="tac-pp-section" id="s13">
              <div className="tac-pp-section-num">Section 13</div>
              <h2>Amendments</h2>
              <p>13.1 — This Policy may be amended from time to time to reflect changes in Applicable Law, data processing practices, or TAC&rsquo;s business. Material amendments will be communicated by email and by notice on the Platform at least fourteen (14) days before they take effect. The &lsquo;Effective Date&rsquo; at the top of this Policy reflects the most recent revision.</p>

              <div className="tac-pp-contact">
                <a href="mailto:legal@theartcode.org" className="tac-pp-contact-pill"><span>✉️</span> legal@theartcode.org</a>
                <a href="mailto:support@theartcode.org" className="tac-pp-contact-pill"><span>💬</span> support@theartcode.org</a>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
