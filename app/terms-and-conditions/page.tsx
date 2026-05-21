import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --ink:      #1a1a2e;
    --accent:   #c8a96e;
    --accent2:  #e8c990;
    --surface:  #faf9f6;
    --card:     #ffffff;
    --muted:    #6b6b80;
    --border:   #e5e0d8;
    --tbl-head: #1a1a2e;
    --tbl-alt:  #f5f3ef;
    --radius:   12px;
    --shadow:   0 4px 24px rgba(26,26,46,0.08);
  }

  .tac-tc-wrap *, .tac-tc-wrap *::before, .tac-tc-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .tac-tc-wrap {
    background: var(--surface);
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    min-height: 100vh;
  }

  .tac-tc-hero {
    background: var(--ink);
    padding: 157px 24px 56px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .tac-tc-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(200,169,110,.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .tac-tc-hero-eyebrow {
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
  .tac-tc-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 16px;
  }
  .tac-tc-hero-sub {
    color: rgba(255,255,255,.55);
    font-size: .95rem;
    font-weight: 300;
    max-width: 600px;
    margin: 0 auto 28px;
    line-height: 1.7;
  }
  .tac-tc-hero-meta {
    display: flex;
    justify-content: center;
    gap: 28px;
    flex-wrap: wrap;
    font-size: .8rem;
    color: rgba(255,255,255,.45);
  }
  .tac-tc-hero-meta span { display: flex; align-items: center; gap: 6px; }
  .tac-tc-hero-meta span::before { content: ''; display: block; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }

  .tac-tc-part {
    max-width: 1100px;
    margin: 40px auto 0;
    padding: 0 32px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .tac-tc-part-label {
    font-size: .68rem;
    font-weight: 700;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--accent);
    white-space: nowrap;
    background: var(--ink);
    padding: 6px 16px;
    border-radius: 40px;
  }
  .tac-tc-part-line { flex: 1; height: 1px; background: var(--border); }
  .tac-tc-part-title {
    font-family: 'Playfair Display', serif;
    font-size: .92rem;
    font-weight: 600;
    color: var(--muted);
    white-space: nowrap;
  }

  .tac-tc-body {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px 32px 80px;
  }

  .tac-tc-section {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 36px 40px;
    margin-bottom: 24px;
    box-shadow: var(--shadow);
    scroll-margin-top: 24px;
  }
  .tac-tc-section-num {
    font-size: .68rem;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 6px;
  }
  .tac-tc-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--border);
  }
  .tac-tc-section p {
    font-size: .9rem;
    line-height: 1.78;
    color: #3a3a50;
    margin-bottom: 14px;
  }
  .tac-tc-section p:last-child { margin-bottom: 0; }

  .tac-tc-sub-heading {
    font-weight: 700;
    color: var(--ink);
    font-size: .92rem;
    margin: 22px 0 10px;
  }

  .tac-tc-clause {
    margin-bottom: 18px;
    padding-left: 16px;
    border-left: 2px solid var(--border);
  }
  .tac-tc-clause-num {
    font-size: .76rem;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 4px;
    letter-spacing: .04em;
  }
  .tac-tc-clause p { margin-bottom: 0; }

  .tac-tc-sublist {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 8px 0 0 0;
  }
  .tac-tc-sublist li {
    font-size: .87rem;
    line-height: 1.7;
    color: #3a3a50;
    display: flex;
    gap: 10px;
  }
  .tac-tc-sublist li .sub-num {
    flex-shrink: 0;
    font-weight: 700;
    color: var(--accent);
    font-size: .76rem;
    min-width: 52px;
    margin-top: 2px;
  }

  .tac-tc-lettered {
    margin: 12px 0 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .tac-tc-lettered li {
    font-size: .88rem;
    line-height: 1.7;
    color: #3a3a50;
    display: flex;
    gap: 10px;
  }
  .tac-tc-lettered li .ltr {
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

  .tac-tc-tbl-wrap {
    width: 100%;
    overflow-x: auto;
    margin: 18px 0;
    border-radius: 10px;
    border: 1px solid var(--border);
    box-shadow: 0 2px 12px rgba(26,26,46,.06);
  }
  .tac-tc-tbl { width: 100%; border-collapse: collapse; font-size: .83rem; }
  .tac-tc-tbl thead tr { background: var(--tbl-head); }
  .tac-tc-tbl thead th {
    color: #fff;
    font-weight: 600;
    text-align: left;
    padding: 13px 16px;
    font-size: .78rem;
    letter-spacing: .04em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .tac-tc-tbl thead th:first-child { border-radius: 10px 0 0 0; }
  .tac-tc-tbl thead th:last-child  { border-radius: 0 10px 0 0; }
  .tac-tc-tbl tbody tr { transition: background .15s; }
  .tac-tc-tbl tbody tr:nth-child(odd)  { background: #fff; }
  .tac-tc-tbl tbody tr:nth-child(even) { background: var(--tbl-alt); }
  .tac-tc-tbl tbody tr:hover { background: #edeae3; }
  .tac-tc-tbl td {
    padding: 13px 16px;
    color: #3a3a50;
    vertical-align: top;
    border-bottom: 1px solid var(--border);
    line-height: 1.65;
  }
  .tac-tc-tbl td strong { font-weight: 600; color: var(--ink); }
  .tac-tc-tbl tbody tr:last-child td { border-bottom: none; }

  .tac-tc-notice {
    display: flex; gap: 14px; align-items: flex-start;
    background: #fff8ee; border: 1px solid #e8c990; border-left: 4px solid var(--accent);
    border-radius: 8px; padding: 16px 18px; margin: 16px 0;
    font-size: .87rem; line-height: 1.7; color: #3a3a50;
  }
  .tac-tc-notice-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 1px; }

  .tac-tc-warning {
    display: flex; gap: 14px; align-items: flex-start;
    background: #fff4f4; border: 1px solid #f5c6c6; border-left: 4px solid #e05252;
    border-radius: 8px; padding: 16px 18px; margin: 16px 0;
    font-size: .87rem; line-height: 1.7; color: #3a3a50;
  }

  .tac-tc-success {
    display: flex; gap: 14px; align-items: flex-start;
    background: #f0faf4; border: 1px solid #b8e0c8; border-left: 4px solid #3caa6e;
    border-radius: 8px; padding: 16px 18px; margin: 16px 0;
    font-size: .87rem; line-height: 1.7; color: #3a3a50;
  }

  .tac-tc-banner {
    background: var(--ink); color: #fff;
    border-radius: 10px; padding: 24px 28px; margin: 16px 0;
  }
  .tac-tc-banner-title {
    font-family: 'Playfair Display', serif;
    font-size: .95rem; font-weight: 700;
    color: var(--accent); margin-bottom: 10px;
  }
  .tac-tc-banner p {
    font-size: .87rem; color: rgba(255,255,255,.78);
    line-height: 1.72; margin-bottom: 0;
  }

  .tac-tc-def-grid {
    display: flex; flex-direction: column; gap: 0;
    margin: 16px 0; border: 1px solid var(--border);
    border-radius: 10px; overflow: hidden;
  }
  .tac-tc-def-row {
    display: grid; grid-template-columns: 220px 1fr;
    border-bottom: 1px solid var(--border); transition: background .15s;
  }
  .tac-tc-def-row:last-child { border-bottom: none; }
  .tac-tc-def-row:nth-child(odd) { background: #fff; }
  .tac-tc-def-row:nth-child(even) { background: var(--tbl-alt); }
  .tac-tc-def-row:hover { background: #edeae3; }
  .tac-tc-def-term {
    padding: 13px 16px; font-weight: 700; font-size: .82rem;
    color: var(--ink); border-right: 1px solid var(--border); line-height: 1.5;
  }
  .tac-tc-def-meaning { padding: 13px 16px; font-size: .83rem; color: #3a3a50; line-height: 1.65; }

  .tac-tc-services-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 14px; margin: 18px 0;
  }
  .tac-tc-service-card {
    background: var(--tbl-alt); border: 1px solid var(--border);
    border-radius: 10px; padding: 20px; display: flex; flex-direction: column; gap: 6px;
  }
  .tac-tc-service-card-icon { font-size: 1.5rem; }
  .tac-tc-service-card-type { font-size: .68rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; color: var(--muted); }
  .tac-tc-service-card-name { font-weight: 700; font-size: .95rem; color: var(--ink); }
  .tac-tc-service-card-price { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: var(--accent); }
  .tac-tc-service-card-desc { font-size: .78rem; color: var(--muted); line-height: 1.55; margin-top: 2px; }

  .tac-tc-contact-card {
    background: var(--ink); color: #fff;
    border-radius: var(--radius); padding: 28px 32px; margin-top: 4px;
  }
  .tac-tc-contact-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem; color: var(--accent); margin-bottom: 14px;
  }
  .tac-tc-contact-card .cc-row { display: flex; gap: 8px; align-items: flex-start; margin-bottom: 10px; }
  .tac-tc-contact-card .cc-icon { flex-shrink: 0; margin-top: 2px; }
  .tac-tc-contact-card p { font-size: .88rem; color: rgba(255,255,255,.75); line-height: 1.7; margin-bottom: 0; }
  .tac-tc-contact-card a { color: var(--accent2); text-decoration: none; font-weight: 600; }

  .tac-tc-contact { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px; }
  .tac-tc-contact-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--ink); color: #fff; padding: 9px 18px;
    border-radius: 40px; font-size: .82rem; font-weight: 500;
    text-decoration: none; transition: background .2s;
  }
  .tac-tc-contact-pill:hover { background: #2d2d4e; }

  @media (max-width: 768px) {
    .tac-tc-body { padding: 20px 16px 60px; }
    .tac-tc-section { padding: 24px 20px; }
    .tac-tc-part { padding: 0 16px; }
    .tac-tc-def-row { grid-template-columns: 1fr; }
    .tac-tc-def-term { border-right: none; border-bottom: 1px solid var(--border); }
    .tac-tc-services-grid { grid-template-columns: 1fr 1fr; }
  }
`;

export default function TermsAndConditionsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Navbar />

      <div className="tac-tc-wrap">

        {/* Hero */}
        <div className="tac-tc-hero">
          <div className="tac-tc-hero-eyebrow">Legal Document</div>
          <h1>Terms &amp; Conditions</h1>
          <p className="tac-tc-hero-sub">A legally enforceable agreement between You and TAC School of Modern Learning Private Limited governing all access, subscriptions, content, and transactions on The Art Code platform.</p>
          <div className="tac-tc-hero-meta">
            <span>TAC School of Modern Learning Pvt. Ltd.</span>
            <span>IT Act, 2000 &amp; Consumer Protection Act, 2019</span>
            <span>Hyderabad, Telangana, India</span>
          </div>
        </div>

        {/* PART I */}
        <div className="tac-tc-part">
          <span className="tac-tc-part-label">Part I</span>
          <div className="tac-tc-part-line"></div>
          <span className="tac-tc-part-title">Preliminary</span>
        </div>

        <div className="tac-tc-body">

          {/* Section 1 */}
          <section className="tac-tc-section" id="s1">
            <div className="tac-tc-section-num">Section 01</div>
            <h2>Preamble and Nature of Agreement</h2>

            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">1.1</div>
              <p>These Terms and Conditions (hereinafter referred to as the &ldquo;Agreement&rdquo; or &ldquo;Terms&rdquo;) constitute a legally enforceable agreement between TAC School of Modern Learning Private Limited, a company incorporated under the Companies Act, 2013, having its registered office at Madhapur, Hyderabad – 500081, Telangana, India, operating under the trade name &ldquo;The Art Code&rdquo; / &ldquo;TAC&rdquo;, and any natural person, legal entity, or institution that accesses, registers on, subscribes to, or otherwise uses any of TAC&rsquo;s services, platforms, or products (hereinafter referred to as &ldquo;User&rdquo;, &ldquo;Subscriber&rdquo;, &ldquo;Student&rdquo;, or &ldquo;You&rdquo;).</p>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">1.2</div>
              <p>This Agreement, when read together with TAC&rsquo;s Privacy Policy, Payment Terms and Conditions, and Refund and Cancellation Policy (collectively the &ldquo;TAC Legal Framework&rdquo;), forms the complete and exclusive agreement between the parties. In the event of any inconsistency between these Terms and any other document in the TAC Legal Framework, these Terms shall prevail to the extent of the inconsistency unless the other document expressly states otherwise.</p>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">1.3</div>
              <p>This Agreement is an electronic record within the meaning of Section 2(1)(t) of the Information Technology Act, 2000 and has been formulated in accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. This Agreement does not require any physical or digital signature to be legally binding upon the parties.</p>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">1.4 — Acceptance by Conduct</div>
              <p>By performing any of the following acts, You conclusively acknowledge that You have read, understood, and unconditionally agreed to be legally bound by this Agreement and the entire TAC Legal Framework:</p>
              <ul className="tac-tc-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">(a)</span><span>Accessing the TAC website at www.theartcode.org or any subdomain thereof;</span></li>
                <li><span className="sub-num">(b)</span><span>Creating a user account on the TAC platform;</span></li>
                <li><span className="sub-num">(c)</span><span>Subscribing to any TAC plan or product;</span></li>
                <li><span className="sub-num">(d)</span><span>Completing a payment transaction with TAC;</span></li>
                <li><span className="sub-num">(e)</span><span>Attending a webinar, bootcamp, or offline programme organised by TAC; or</span></li>
                <li><span className="sub-num">(f)</span><span>Otherwise availing of any TAC service.</span></li>
              </ul>
              <p style={{ marginTop: '12px' }}>If You do not agree to any provision of this Agreement, You must immediately and permanently cease use of all TAC services and cancel any active subscriptions.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="tac-tc-section" id="s2">
            <div className="tac-tc-section-num">Section 02</div>
            <h2>Definitions</h2>
            <p>2.1 — Unless the context otherwise requires, the following expressions shall have the meanings ascribed to them below:</p>
            <div className="tac-tc-def-grid">
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">Agreement</div><div className="tac-tc-def-meaning">These Terms and Conditions as updated from time to time, together with all schedules, annexures, and documents incorporated by reference.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">Applicable Law</div><div className="tac-tc-def-meaning">All central, state, and local laws applicable in India, including the IT Act 2000, Consumer Protection Act 2019, Indian Contract Act 1872, Copyright Act 1957, Trade Marks Act 1999, Digital Personal Data Protection Act 2023, Bharatiya Nyaya Sanhita 2023, and the GST Act 2017.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">Bundle Plan</div><div className="tac-tc-def-meaning">Any pre-paid multi-month subscription plan (3-month, 6-month, or 12-month) offered by TAC at a consolidated discounted price, as described in Clause 7.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">Content</div><div className="tac-tc-def-meaning">All materials made available through the TAC Platform, including video recordings, live streams, audio, course notes, scripts, templates, source files, graphics, design assets, software tools, text, and any other intellectual or creative work.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">Creator Pass</div><div className="tac-tc-def-meaning">TAC&rsquo;s premium all-access subscription plan at ₹2,999 per month (inclusive of GST), providing full access to the TAC Platform.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">Force Majeure Event</div><div className="tac-tc-def-meaning">Any event beyond the reasonable control of a party — including acts of God, natural disasters, pandemics, government lockdowns, acts of war or terrorism, or internet infrastructure failures caused by third parties.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">GST</div><div className="tac-tc-def-meaning">Goods and Services Tax as levied under the Central Goods and Services Tax Act, 2017 and the Integrated Goods and Services Tax Act, 2017.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">Intellectual Property Rights</div><div className="tac-tc-def-meaning">All patents, copyrights, database rights, design rights, trade marks, trade secrets, know-how, moral rights, and all other intellectual or industrial property rights, whether registered or unregistered, subsisting anywhere in the world.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">JODO</div><div className="tac-tc-def-meaning">Jodo Financial Solutions Private Limited, TAC&rsquo;s authorised payment gateway and recurring payment service provider, operating the Jodo Flex platform at www.jodo.in.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">Module Pass</div><div className="tac-tc-def-meaning">TAC&rsquo;s limited-access subscription plan at ₹499 per month (inclusive of GST), providing access to the Modules section of the TAC Platform only.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">Platform</div><div className="tac-tc-def-meaning">TAC&rsquo;s digital learning platform accessible at www.theartcode.org and through any associated mobile applications, including all features, tools, Content, and community functionalities.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">Services</div><div className="tac-tc-def-meaning">Collectively: Creator Pass, Module Pass, SAT DROP Webinars, Bootcamps, TAC Suite offline programme, DM Offline Batches, DM Online (College Programme), and any other products or services offered by TAC from time to time.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">Subscription Mandate</div><div className="tac-tc-def-meaning">The standing authorisation granted by the User to JODO to debit the applicable subscription fee from the User&rsquo;s registered payment instrument on each Billing Date without requiring further action from the User.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">User Account</div><div className="tac-tc-def-meaning">The personalised account created by the User upon registration on the TAC Platform.</div></div>
              <div className="tac-tc-def-row"><div className="tac-tc-def-term">Working Day</div><div className="tac-tc-def-meaning">Any day other than a Saturday, Sunday, or a public holiday as declared by the Government of Telangana or the Central Government of India.</div></div>
            </div>
          </section>

        </div>

        {/* PART II */}
        <div className="tac-tc-part">
          <span className="tac-tc-part-label">Part II</span>
          <div className="tac-tc-part-line"></div>
          <span className="tac-tc-part-title">Eligibility, Registration and Accounts</span>
        </div>

        <div className="tac-tc-body" style={{ paddingTop: '24px' }}>

          {/* Section 3 */}
          <section className="tac-tc-section" id="s3">
            <div className="tac-tc-section-num">Section 03</div>
            <h2>Eligibility to Use TAC Services</h2>

            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">3.1 — You must satisfy all of the following eligibility criteria:</div>
              <ul className="tac-tc-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">3.1.1</span><span>You are a natural person who is at least eighteen (18) years of age, or between sixteen (16) and eighteen (18) years of age accessing the Platform with the express, verified, and documented consent of a parent or legal guardian;</span></li>
                <li><span className="sub-num">3.1.2</span><span>You have the full legal capacity to enter into binding contracts under the Indian Contract Act, 1872;</span></li>
                <li><span className="sub-num">3.1.3</span><span>You are not a person who has previously been suspended or terminated from any TAC service for breach of this Agreement or any other TAC policy;</span></li>
                <li><span className="sub-num">3.1.4</span><span>Your use of the Services does not violate any law, rule, or regulation applicable to You in Your jurisdiction; and</span></li>
                <li><span className="sub-num">3.1.5</span><span>You are accessing the Services from within the territory of India, or from outside India in circumstances where such access is not prohibited by law.</span></li>
              </ul>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">3.2</div>
              <p>TAC reserves the right, at its absolute discretion, to refuse registration to any person or entity and to verify the eligibility of any User at any time. Provision of false information to establish eligibility is a material breach of this Agreement and will result in immediate account termination.</p>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">3.3</div>
              <p>Institutions, coaching centres, and corporate entities seeking to enrol multiple users must execute a separate institutional agreement with TAC. Access under individual subscriptions for bulk or institutional use without such an agreement is prohibited and constitutes a breach of Clause 12 of this Agreement.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="tac-tc-section" id="s4">
            <div className="tac-tc-section-num">Section 04</div>
            <h2>User Account Registration</h2>

            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">4.1 — By creating a User Account, You represent and warrant the following:</div>
              <ul className="tac-tc-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">4.1.1</span><span>All information provided during registration — including your full legal name, email address, mobile telephone number, and any other details requested — is accurate, complete, current, and not misleading;</span></li>
                <li><span className="sub-num">4.1.2</span><span>You will promptly update your User Account information to ensure it remains accurate and current at all times;</span></li>
                <li><span className="sub-num">4.1.3</span><span>You have not previously been the holder of a User Account terminated by TAC for breach of this Agreement or any predecessor policy;</span></li>
                <li><span className="sub-num">4.1.4</span><span>You will not create more than one (1) User Account unless expressly authorised in writing by TAC; and</span></li>
                <li><span className="sub-num">4.1.5</span><span>The email address and mobile number provided are ones You actively use and can be contacted on for notices, billing reminders, and service communications.</span></li>
              </ul>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">4.2 — User Accounts are strictly personal and non-transferable. You shall not:</div>
              <ul className="tac-tc-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">4.2.1</span><span>Share your login credentials (username, password, OTP, or any authentication token) with any other person, whether for payment or otherwise;</span></li>
                <li><span className="sub-num">4.2.2</span><span>Allow any other person to access the Platform using your User Account;</span></li>
                <li><span className="sub-num">4.2.3</span><span>Use another person&rsquo;s User Account credentials to access the Platform; or</span></li>
                <li><span className="sub-num">4.2.4</span><span>Sell, transfer, sublicense, or otherwise dispose of your User Account or any rights arising from your subscription to any third party.</span></li>
              </ul>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">4.3</div>
              <p>You are solely and entirely responsible for maintaining the confidentiality and security of your User Account credentials. All activity conducted through your User Account will be attributed to You and You shall be fully liable for such activity, whether or not You authorised it.</p>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">4.4</div>
              <p>If You know or reasonably suspect that your User Account credentials have been compromised or that any unauthorised access has occurred, You must notify TAC immediately by email at <a href="mailto:support@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@theartcode.org</a> and change your password forthwith. TAC shall not be liable for any loss or damage arising from your failure to promptly report a security breach.</p>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">4.5</div>
              <p>TAC reserves the right to suspend or terminate any User Account that is found to be shared, transferred, sold, or used by multiple individuals simultaneously, without prior notice and without refund of any fees paid.</p>
            </div>
          </section>

        </div>

        {/* PART III */}
        <div className="tac-tc-part">
          <span className="tac-tc-part-label">Part III</span>
          <div className="tac-tc-part-line"></div>
          <span className="tac-tc-part-title">Services, Subscriptions and Bundle Plans</span>
        </div>

        <div className="tac-tc-body" style={{ paddingTop: '24px' }}>

          {/* Section 5 */}
          <section className="tac-tc-section" id="s5">
            <div className="tac-tc-section-num">Section 05</div>
            <h2>Description of Services</h2>

            <p className="tac-tc-sub-heading">5.1.1 — Digital Subscription Services</p>
            <div className="tac-tc-services-grid">
              <div className="tac-tc-service-card">
                <div className="tac-tc-service-card-icon">🎨</div>
                <div className="tac-tc-service-card-type">Monthly Subscription</div>
                <div className="tac-tc-service-card-name">Creator Pass</div>
                <div className="tac-tc-service-card-price">₹2,999 / month</div>
                <div className="tac-tc-service-card-desc">Unlimited access to all Content — live &amp; recorded courses, Modules, archived webinar replays, TAC Gateway, T-Shaped Portfolio roadmap, community features, and all future Content drops.</div>
              </div>
              <div className="tac-tc-service-card">
                <div className="tac-tc-service-card-icon">📦</div>
                <div className="tac-tc-service-card-type">Monthly Subscription</div>
                <div className="tac-tc-service-card-name">Module Pass</div>
                <div className="tac-tc-service-card-price">₹499 / month</div>
                <div className="tac-tc-service-card-desc">Access exclusively to the Modules section only. Creator Pass, live webinars, TAC Gateway, and archived course videos are not accessible under this plan.</div>
              </div>
              <div className="tac-tc-service-card">
                <div className="tac-tc-service-card-icon">🎙️</div>
                <div className="tac-tc-service-card-type">Single-Session Purchase</div>
                <div className="tac-tc-service-card-name">SAT DROP Webinar</div>
                <div className="tac-tc-service-card-price">₹149 / session</div>
                <div className="tac-tc-service-card-desc">Access to one live webinar event on a specified date, plus a 48-hour replay window from the conclusion of the live event. One-time purchase; no recurring subscription.</div>
              </div>
              <div className="tac-tc-service-card">
                <div className="tac-tc-service-card-icon">🚀</div>
                <div className="tac-tc-service-card-type">Single-Event Purchase</div>
                <div className="tac-tc-service-card-name">Bootcamp</div>
                <div className="tac-tc-service-card-price">₹999 / bootcamp</div>
                <div className="tac-tc-service-card-desc">Access to a specific three-day live intensive programme. Access is limited to the specific bootcamp for which payment is made.</div>
              </div>
            </div>

            <p className="tac-tc-sub-heading">5.1.2 — Offline Educational Programmes</p>
            <ul className="tac-tc-lettered">
              <li><span className="ltr">a</span><span><strong>TAC Suite:</strong> An in-person creative skills programme conducted at TAC&rsquo;s campus in Madhapur, Hyderabad, structured as a fixed-term batch programme. Pricing and batch schedules are communicated separately at the time of enrolment.</span></li>
              <li><span className="ltr">b</span><span><strong>Digital Marketing (DM) Offline Batches:</strong> An in-person structured digital marketing programme conducted at TAC&rsquo;s campus. Pricing, batch schedules, and specific terms are communicated separately.</span></li>
            </ul>

            <p className="tac-tc-sub-heading">5.1.3 — Institutional Programme</p>
            <ul className="tac-tc-lettered">
              <li><span className="ltr">a</span><span><strong>DM Online (College Partnership Programme):</strong> A digital marketing curriculum delivered to enrolled students of partner educational institutions under a signed Memorandum of Understanding (MoU). The terms of this programme are governed by the specific institutional MoU and are supplemental to this Agreement.</span></li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="tac-tc-section" id="s6">
            <div className="tac-tc-section-num">Section 06</div>
            <h2>Monthly Subscription — Creator Pass and Module Pass</h2>

            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">6.1 — Commencement</div>
              <p>A subscription commences on the date and time that a successful payment confirmation is issued by JODO and received by TAC&rsquo;s systems. Platform access is activated automatically upon payment confirmation.</p>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">6.2 — Billing Date</div>
              <p>The Billing Date for monthly subscriptions is the calendar day in each subsequent month corresponding to the original date of subscription activation. If the Billing Date falls on a day that does not exist in the relevant month (e.g., the 31st in a month with only 30 days), the debit will occur on the last calendar day of that month.</p>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">6.3 — Automatic Renewal</div>
              <p>Monthly subscriptions renew automatically on each Billing Date. By subscribing, You explicitly and irrevocably authorise TAC, through JODO&rsquo;s Jodo Flex platform, to debit the applicable subscription fee from your registered payment instrument on each Billing Date without requiring any additional action, instruction, or approval from You. This auto-debit mandate continues indefinitely until You take affirmative steps to cancel as specified in Clause 6.7.</p>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">6.4 — Advance Billing Reminder</div>
              <p>TAC will send You an email and SMS notification at least three (3) calendar days before each Billing Date as a courtesy reminder. Non-receipt of such reminder due to a change in your registered contact details, spam filtering, or any other reason attributable to You shall not constitute grounds to dispute a charge.</p>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">6.5 — Failed Auto-Debit</div>
              <p>If an auto-debit attempt on the Billing Date fails for any reason attributable to the User (insufficient funds, expired instrument, blocked card, bank-imposed limits, or UPI mandate suspension):</p>
              <ul className="tac-tc-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">6.5.1</span><span>JODO will re-attempt the debit up to two (2) additional times over a period of five (5) Working Days from the original Billing Date;</span></li>
                <li><span className="sub-num">6.5.2</span><span>You will be notified by email and SMS of each failed attempt;</span></li>
                <li><span className="sub-num">6.5.3</span><span>If all retry attempts fail, TAC will suspend your Platform access. Access will be restored immediately and automatically upon successful clearance of the outstanding amount;</span></li>
                <li><span className="sub-num">6.5.4</span><span>TAC shall not be liable for any loss, inconvenience, or harm arising from the suspension of access due to a failed debit; and</span></li>
                <li><span className="sub-num">6.5.5</span><span>TAC reserves the right to terminate a subscription that has remained in a failed-payment state for more than fifteen (15) consecutive days without successful resolution, without any obligation to provide a refund.</span></li>
              </ul>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">6.6 — Access Period</div>
              <p>The access period for each subscription month runs from the successful payment date to the day immediately preceding the next Billing Date. Access during this period is subject to the terms of this Agreement.</p>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">6.7 — Cancellation Procedure</div>
              <p>To stop future auto-debits, You must cancel your subscription by taking one or more of the following steps before your next Billing Date:</p>
              <ul className="tac-tc-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">6.7.1</span><span>Logging in to your User Account &gt; Account Settings &gt; Subscription Management &gt; Cancel Subscription;</span></li>
                <li><span className="sub-num">6.7.2</span><span>Sending an email to <a href="mailto:support@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@theartcode.org</a> with the subject line <em>&lsquo;Subscription Cancellation Request – [Registered Name]&rsquo;</em> and your registered mobile number; or</span></li>
                <li><span className="sub-num">6.7.3</span><span>Directly revoking the UPI AutoPay or eNACH mandate from your bank&rsquo;s net banking portal, UPI application (Google Pay, PhonePe, Paytm, or BHIM), or by contacting your bank or card issuer.</span></li>
              </ul>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">6.8 — Effect of Cancellation</div>
              <ul className="tac-tc-sublist" style={{ marginTop: '6px' }}>
                <li><span className="sub-num">6.8.1</span><span>No further auto-debits will be initiated after the cancellation is confirmed by TAC;</span></li>
                <li><span className="sub-num">6.8.2</span><span>Your access to the Platform continues uninterrupted until the last day of the billing period for which payment has already been made;</span></li>
                <li><span className="sub-num">6.8.3</span><span>No refund will be issued for the current billing period or any prior period (subject to the limited exceptions in the Refund Policy); and</span></li>
                <li><span className="sub-num">6.8.4</span><span>Upon expiry of your paid access period, your User Account will be deactivated. Your data, progress, and history will be preserved for six (6) months from the date of deactivation, during which You may reactivate your account by re-subscribing.</span></li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="tac-tc-section" id="s7">
            <div className="tac-tc-section-num">Section 07</div>
            <h2>Bundle Plans and Combo Offers</h2>

            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">7.1 — Available Bundle Plans include:</div>
              <ul className="tac-tc-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">7.1.1</span><span>A <strong>Three-Month Bundle</strong> (3 consecutive months of Creator Pass access at a consolidated discounted price);</span></li>
                <li><span className="sub-num">7.1.2</span><span>A <strong>Six-Month Bundle</strong> (6 consecutive months of Creator Pass access at a further discounted consolidated price);</span></li>
                <li><span className="sub-num">7.1.3</span><span>An <strong>Annual Bundle</strong> (12 consecutive months of Creator Pass access at the maximum discounted consolidated price); and</span></li>
                <li><span className="sub-num">7.1.4</span><span><strong>Combo Offers</strong> combining Creator Pass subscription with SAT DROP webinar credits, Bootcamp access, or other TAC products at a bundled price.</span></li>
              </ul>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">7.2 — Bundle Plans are subject to the following terms:</div>
              <ul className="tac-tc-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">7.2.1</span><span>A Bundle Plan is purchased through a single, upfront, non-recurring payment. Platform access is activated for the entire duration of the bundle upon successful payment.</span></li>
                <li><span className="sub-num">7.2.2</span><span>Bundle Plans do not automatically renew. Upon expiry, no further charges will be levied unless You voluntarily re-subscribe.</span></li>
                <li><span className="sub-num">7.2.3</span><span>Bundle Plans are non-refundable once activated. No pro-rated refund will be issued for any unused portion of the bundle period.</span></li>
                <li><span className="sub-num">7.2.4</span><span>Bundle discounts apply exclusively from the date of bundle purchase. Discounts are not retroactively applied to individual monthly subscriptions previously paid.</span></li>
                <li><span className="sub-num">7.2.5</span><span>If a user subscribes to a Bundle Plan while an existing monthly subscription is active, TAC will credit the unused days of the current monthly period to the bundle duration, or apply a pro-rated adjustment, at TAC&rsquo;s sole discretion.</span></li>
                <li><span className="sub-num">7.2.6</span><span>TAC reserves the right to withdraw, modify, or replace any Bundle Plan or Combo Offer at any time without prior notice. Such action does not affect Bundle Plans already purchased and activated.</span></li>
                <li><span className="sub-num">7.2.7</span><span>Any specific terms, restrictions, or features communicated at the time of purchase form part of this Agreement with respect to that specific plan.</span></li>
              </ul>
            </div>
          </section>

        </div>

        {/* PART IV */}
        <div className="tac-tc-part">
          <span className="tac-tc-part-label">Part IV</span>
          <div className="tac-tc-part-line"></div>
          <span className="tac-tc-part-title">Payment, JODO and Billing</span>
        </div>

        <div className="tac-tc-body" style={{ paddingTop: '24px' }}>

          {/* Section 8 */}
          <section className="tac-tc-section" id="s8">
            <div className="tac-tc-section-num">Section 08</div>
            <h2>Payment Gateway — JODO</h2>

            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">8.1</div>
              <p>All payments for TAC&rsquo;s digital Services are processed through JODO (www.jodo.in), TAC&rsquo;s authorised education payment gateway and recurring payment service provider. JODO operates the Jodo Flex platform, which enables UPI AutoPay and eNACH-based recurring mandates for subscription fee collection.</p>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">8.2 — By subscribing and initiating payment through JODO, You acknowledge and agree that:</div>
              <ul className="tac-tc-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">8.2.1</span><span>Your payment and subscription mandate will be governed by JODO&rsquo;s terms of service and privacy policy in addition to this Agreement;</span></li>
                <li><span className="sub-num">8.2.2</span><span>TAC does not store, retain, or have access to your full card number, UPI PIN, net banking password, or any other sensitive payment credential — all such data is handled exclusively and securely by JODO in accordance with RBI guidelines and PCI-DSS standards;</span></li>
                <li><span className="sub-num">8.2.3</span><span>The Subscription Mandate You set up through JODO authorises JODO to debit the applicable subscription fee on each Billing Date automatically and without requiring further instruction from You; and</span></li>
                <li><span className="sub-num">8.2.4</span><span>For queries specific to JODO&rsquo;s platform or mandate management, You may contact JODO directly at <a href="mailto:support@jodopay.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@jodopay.com</a>.</span></li>
              </ul>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">8.3 — Accepted payment modes through JODO:</div>
              <ul className="tac-tc-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">8.3.1</span><span>UPI AutoPay via all UPI-enabled applications registered with NPCI;</span></li>
                <li><span className="sub-num">8.3.2</span><span>eNACH (Electronic National Automated Clearing House) mandate setup via debit card or net banking;</span></li>
                <li><span className="sub-num">8.3.3</span><span>Debit cards issued by Indian banks (Visa, Mastercard, RuPay);</span></li>
                <li><span className="sub-num">8.3.4</span><span>Credit cards issued by Indian banks and financial institutions (Visa, Mastercard, RuPay, American Express);</span></li>
                <li><span className="sub-num">8.3.5</span><span>Net banking via any major Indian bank that supports NPCI&rsquo;s payment infrastructure; and</span></li>
                <li><span className="sub-num">8.3.6</span><span>Such other payment methods as JODO may make available on the TAC Platform from time to time.</span></li>
              </ul>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">8.4</div>
              <p>All prices displayed on the TAC Platform are in Indian Rupees (₹) and are inclusive of applicable GST at the prevailing rate (currently 18%). TAC will issue a GST-compliant invoice to your registered email address after each successful payment.</p>
            </div>
            <div className="tac-tc-warning">
              <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: '1px' }}>⚠️</span>
              <span><strong>8.5 —</strong> Framing, price or payment manipulation, or exploitation of any technical bug or error to obtain TAC Services at an incorrect price or without payment shall constitute fraud and will be pursued under Applicable Law, including the Bharatiya Nyaya Sanhita, 2023.</span>
            </div>
          </section>

          {/* Section 9 */}
          <section className="tac-tc-section" id="s9">
            <div className="tac-tc-section-num">Section 09</div>
            <h2>Failed Transaction — Bank Debit Without TAC Receiving Payment</h2>

            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">9.1</div>
              <p>A &lsquo;Failed Transaction&rsquo; occurs when funds are debited from a User&rsquo;s bank account or payment instrument by JODO during a payment attempt, but the corresponding payment is not successfully received and confirmed by TAC&rsquo;s systems due to a technical failure in the payment network (including payment gateway timeouts, NPCI infrastructure errors, or bank-side processing failures).</p>
            </div>

            <div className="tac-tc-banner">
              <div className="tac-tc-banner-title">⚡ Critical Distinction — JODO Debit Without TAC Receipt</div>
              <p>In a Failed Transaction, TAC has not received your money. Your subscription has not been activated or renewed. TAC is not in possession of the debited amount. The pending amount rests with the payment network (JODO/NPCI/bank) and will be returned to your account automatically under their standard reversal timelines. TAC cannot hold, release, or accelerate this refund. Your remedy is against your bank or JODO, not against TAC.</p>
            </div>

            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">9.2 — How to identify a Failed Transaction:</div>
              <ul className="tac-tc-sublist" style={{ marginTop: '6px' }}>
                <li><span className="sub-num">9.2.1</span><span>You receive an SMS/notification from your bank confirming a debit of the subscription amount;</span></li>
                <li><span className="sub-num">9.2.2</span><span>You do not receive a payment confirmation email from TAC or JODO; and</span></li>
                <li><span className="sub-num">9.2.3</span><span>Your subscription is not activated or renewed on the TAC Platform within two (2) hours of the debit.</span></li>
              </ul>
            </div>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">9.3 — Procedure to Report and Resolve:</div>
              <ul className="tac-tc-sublist" style={{ marginTop: '6px' }}>
                <li><span className="sub-num">9.3.1</span><span>Wait for twenty-four (24) hours from the time of the debit, as many failed transactions auto-reconcile and either complete or reverse automatically;</span></li>
                <li><span className="sub-num">9.3.2</span><span>If not resolved within twenty-four (24) hours, email <a href="mailto:support@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@theartcode.org</a> with the subject line <em>&lsquo;Failed Transaction – [Name] – [Date]&rsquo;</em>, providing your registered mobile number, the date and time of the transaction, and the reference number from your bank statement or UPI app;</span></li>
                <li><span className="sub-num">9.3.3</span><span>TAC will initiate a reconciliation inquiry with JODO within one (1) Working Day of receiving your email; and</span></li>
                <li><span className="sub-num">9.3.4</span><span>If TAC&rsquo;s reconciliation confirms the amount was not received by TAC, a written confirmation will be issued. You may present this to your bank or JODO to facilitate the reversal.</span></li>
              </ul>
            </div>

            <p className="tac-tc-sub-heading">9.4 — Expected Reversal Timelines (bank/JODO timelines — not under TAC&rsquo;s control)</p>
            <div className="tac-tc-tbl-wrap">
              <table className="tac-tc-tbl">
                <thead>
                  <tr><th>Payment Method</th><th>Expected Reversal Timeline</th><th>Contact for Delay</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>UPI AutoPay (GPay, PhonePe, etc.)</strong></td><td>1–3 Working Days</td><td>Your UPI app / NPCI helpline</td></tr>
                  <tr><td><strong>eNACH (Net Banking)</strong></td><td>5–7 Working Days</td><td>Your bank</td></tr>
                  <tr><td><strong>Debit Card</strong></td><td>5–7 Working Days</td><td>Your issuing bank</td></tr>
                  <tr><td><strong>Credit Card</strong></td><td>7–10 Working Days</td><td>Your card-issuing bank</td></tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>

        {/* PART V */}
        <div className="tac-tc-part">
          <span className="tac-tc-part-label">Part V</span>
          <div className="tac-tc-part-line"></div>
          <span className="tac-tc-part-title">Intellectual Property and Content Rights</span>
        </div>

        <div className="tac-tc-body" style={{ paddingTop: '24px', paddingBottom: '80px' }}>
          <section className="tac-tc-section" id="s10">
            <div className="tac-tc-section-num">Section 10</div>
            <h2>Ownership of Intellectual Property</h2>
            <div className="tac-tc-clause">
              <div className="tac-tc-clause-num">10.1</div>
              <p>All Intellectual Property Rights in and to the TAC Platform, all Content made available through the Platform, and all materials created or developed by TAC in connection with any Service are and shall remain the exclusive property of TAC School of Modern Learning Private Limited. No subscription, payment, or use of the Platform transfers any Intellectual Property Rights to the User.</p>
            </div>
          </section>
        </div>

      </div>

      <Footer />
    </>
  );
}
