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

  .tac-rp-wrap *, .tac-rp-wrap *::before, .tac-rp-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .tac-rp-wrap {
    background: var(--surface);
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    min-height: 100vh;
  }

  .tac-rp-hero {
    background: var(--ink);
    padding: 157px 24px 56px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .tac-rp-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(200,169,110,.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .tac-rp-hero-eyebrow {
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
  .tac-rp-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 16px;
  }
  .tac-rp-hero-sub {
    color: rgba(255,255,255,.55);
    font-size: .95rem;
    font-weight: 300;
    max-width: 580px;
    margin: 0 auto 28px;
    line-height: 1.7;
  }
  .tac-rp-hero-meta {
    display: flex;
    justify-content: center;
    gap: 28px;
    flex-wrap: wrap;
    font-size: .8rem;
    color: rgba(255,255,255,.45);
  }
  .tac-rp-hero-meta span { display: flex; align-items: center; gap: 6px; }
  .tac-rp-hero-meta span::before { content: ''; display: block; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }

  .tac-rp-body {
    max-width: 1100px;
    margin: 0 auto;
    padding: 56px 32px 80px;
  }

  .tac-rp-section {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 36px 40px;
    margin-bottom: 24px;
    box-shadow: var(--shadow);
    scroll-margin-top: 24px;
  }
  .tac-rp-section-num {
    font-size: .68rem;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 6px;
  }
  .tac-rp-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--border);
  }
  .tac-rp-section p {
    font-size: .9rem;
    line-height: 1.78;
    color: #3a3a50;
    margin-bottom: 14px;
  }
  .tac-rp-section p:last-child { margin-bottom: 0; }

  .tac-rp-sub-heading {
    font-weight: 700;
    color: var(--ink);
    font-size: .92rem;
    margin: 22px 0 10px;
  }

  .tac-rp-clause {
    margin-bottom: 18px;
    padding-left: 16px;
    border-left: 2px solid var(--border);
  }
  .tac-rp-clause-num {
    font-size: .76rem;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 4px;
    letter-spacing: .04em;
  }
  .tac-rp-clause p { margin-bottom: 0; }

  .tac-rp-sublist {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 8px 0 0 0;
  }
  .tac-rp-sublist li {
    font-size: .87rem;
    line-height: 1.7;
    color: #3a3a50;
    display: flex;
    gap: 10px;
  }
  .tac-rp-sublist li .sub-num {
    flex-shrink: 0;
    font-weight: 700;
    color: var(--accent);
    font-size: .76rem;
    min-width: 52px;
    margin-top: 2px;
  }

  .tac-rp-tbl-wrap {
    width: 100%;
    overflow-x: auto;
    margin: 18px 0;
    border-radius: 10px;
    border: 1px solid var(--border);
    box-shadow: 0 2px 12px rgba(26,26,46,.06);
  }
  .tac-rp-tbl {
    width: 100%;
    border-collapse: collapse;
    font-size: .83rem;
  }
  .tac-rp-tbl thead tr { background: var(--tbl-head); }
  .tac-rp-tbl thead th {
    color: #fff;
    font-weight: 600;
    text-align: left;
    padding: 13px 16px;
    font-size: .78rem;
    letter-spacing: .04em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .tac-rp-tbl thead th:first-child { border-radius: 10px 0 0 0; }
  .tac-rp-tbl thead th:last-child  { border-radius: 0 10px 0 0; }
  .tac-rp-tbl tbody tr { transition: background .15s; }
  .tac-rp-tbl tbody tr:nth-child(odd)  { background: #fff; }
  .tac-rp-tbl tbody tr:nth-child(even) { background: var(--tbl-alt); }
  .tac-rp-tbl tbody tr:hover { background: #edeae3; }
  .tac-rp-tbl td {
    padding: 13px 16px;
    color: #3a3a50;
    vertical-align: top;
    border-bottom: 1px solid var(--border);
    line-height: 1.65;
  }
  .tac-rp-tbl td strong { font-weight: 600; color: var(--ink); }
  .tac-rp-tbl tbody tr:last-child td { border-bottom: none; }

  .tac-rp-notice {
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
  .tac-rp-notice-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 1px; }

  .tac-rp-warning {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    background: #fff4f4;
    border: 1px solid #f5c6c6;
    border-left: 4px solid #e05252;
    border-radius: 8px;
    padding: 16px 18px;
    margin: 16px 0;
    font-size: .87rem;
    line-height: 1.7;
    color: #3a3a50;
  }

  .tac-rp-banner {
    background: var(--ink);
    color: #fff;
    border-radius: 10px;
    padding: 28px 32px;
    margin: 4px 0 20px;
  }
  .tac-rp-banner-title {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 14px;
    letter-spacing: .02em;
  }
  .tac-rp-banner p {
    font-size: .87rem;
    color: rgba(255,255,255,.8);
    line-height: 1.75;
    margin-bottom: 10px;
  }
  .tac-rp-banner p:last-child { margin-bottom: 0; }
  .tac-rp-banner ul {
    list-style: none;
    padding: 0;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .tac-rp-banner ul li {
    font-size: .85rem;
    color: rgba(255,255,255,.7);
    display: flex;
    gap: 8px;
    align-items: flex-start;
  }
  .tac-rp-banner ul li::before {
    content: '•';
    color: var(--accent);
    flex-shrink: 0;
    font-weight: 700;
  }

  .tac-rp-exception-header {
    background: var(--tbl-alt);
    border: 1px solid var(--border);
    border-left: 4px solid var(--accent);
    border-radius: 8px;
    padding: 16px 20px;
    margin-bottom: 20px;
    font-size: .88rem;
    line-height: 1.7;
    color: #3a3a50;
    font-style: italic;
  }

  .tac-rp-event-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 14px;
    margin: 18px 0;
  }
  .tac-rp-event-card {
    background: var(--tbl-alt);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
  }
  .tac-rp-event-card-icon { font-size: 1.5rem; margin-bottom: 8px; }
  .tac-rp-event-card-label { font-size: .75rem; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 4px; }
  .tac-rp-event-card-title { font-weight: 700; font-size: .95rem; color: var(--ink); margin-bottom: 6px; }
  .tac-rp-event-card-desc { font-size: .8rem; color: var(--muted); line-height: 1.55; }

  .tac-rp-wallet-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
    margin: 16px 0;
  }
  .tac-rp-wallet-item {
    background: var(--tbl-alt);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .tac-rp-wallet-item-icon { font-size: 1.3rem; }
  .tac-rp-wallet-item-title { font-weight: 700; font-size: .82rem; color: var(--ink); }
  .tac-rp-wallet-item-desc { font-size: .78rem; color: var(--muted); line-height: 1.55; }

  .tac-rp-contact-card {
    background: var(--ink);
    color: #fff;
    border-radius: var(--radius);
    padding: 28px 32px;
    margin-top: 4px;
  }
  .tac-rp-contact-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: var(--accent);
    margin-bottom: 14px;
  }
  .tac-rp-contact-card p { font-size: .88rem; color: rgba(255,255,255,.75); line-height: 1.75; margin-bottom: 8px; }
  .tac-rp-contact-card a { color: var(--accent2); text-decoration: none; font-weight: 600; }
  .tac-rp-contact-card .cc-row { display: flex; gap: 8px; align-items: flex-start; margin-bottom: 8px; }
  .tac-rp-contact-card .cc-icon { flex-shrink: 0; margin-top: 2px; }

  .tac-rp-contact {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 16px;
  }
  .tac-rp-contact-pill {
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
  .tac-rp-contact-pill:hover { background: #2d2d4e; }

  .tac-rp-success {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    background: #f0faf4;
    border: 1px solid #b8e0c8;
    border-left: 4px solid #3caa6e;
    border-radius: 8px;
    padding: 16px 18px;
    margin: 16px 0;
    font-size: .87rem;
    line-height: 1.7;
    color: #3a3a50;
  }

  @media (max-width: 768px) {
    .tac-rp-body { padding: 32px 16px 60px; }
    .tac-rp-section { padding: 24px 20px; }
    .tac-rp-event-grid { grid-template-columns: 1fr; }
    .tac-rp-wallet-grid { grid-template-columns: 1fr 1fr; }
  }
`;

export default function RefundPolicyPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Navbar />

      <div className="tac-rp-wrap">

        {/* Hero */}
        <div className="tac-rp-hero">
          <div className="tac-rp-hero-eyebrow">Legal Document</div>
          <h1>Refund &amp; Cancellation Policy</h1>
          <p className="tac-rp-hero-sub">Governing all refund and cancellation requests for TAC subscriptions, bundle plans, webinars, bootcamps, and offline courses. Read carefully before making any payment.</p>
          <div className="tac-rp-hero-meta">
            <span>TAC School of Modern Learning Pvt. Ltd.</span>
            <span>Consumer Protection Act, 2019 Compliant</span>
            <span>Hyderabad, India</span>
          </div>
        </div>

        <div className="tac-rp-body">

          {/* Section 1 */}
          <section className="tac-rp-section" id="s1">
            <div className="tac-rp-section-num">Section 01</div>
            <h2>Preliminary — Statement of TAC&rsquo;s Refund Position</h2>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">1.1</div>
              <p>This Refund and Cancellation Policy (&ldquo;Policy&rdquo;) governs all refund and cancellation requests in respect of payments made to TAC School of Modern Learning Private Limited (&ldquo;TAC&rdquo;, &ldquo;The Art Code&rdquo;) for any TAC Service, including digital subscriptions, bundle plans, SAT DROP webinars, bootcamps, offline course fees, and institutional programme fees.</p>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">1.2</div>
              <p>TAC&rsquo;s fundamental position on refunds is set out in Clause 2 below. Users are strongly advised to read this Policy in its entirety before making any payment to TAC.</p>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">1.3</div>
              <p>This Policy must be read together with TAC&rsquo;s Terms and Conditions, Payment Terms and Conditions, and Privacy Policy. Capitalised terms used in this Policy have the meanings ascribed to them in the Terms and Conditions unless otherwise defined herein.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="tac-rp-section" id="s2">
            <div className="tac-rp-section-num">Section 02</div>
            <h2>The No-Refund Policy — Core Position</h2>

            <div className="tac-rp-banner">
              <div className="tac-rp-banner-title">⚠️ TAC&rsquo;s Core Position: All Payments Are Final and Non-Refundable</div>
              <p>Subject only to the specific, exhaustively listed exceptions in Clauses 3, 4, 5, 6, and 7 of this Policy, ALL payments made to TAC are final and non-refundable. This applies without exception to:</p>
              <ul>
                <li>Monthly subscription fees (Creator Pass ₹2,999 and Module Pass ₹499)</li>
                <li>Bundle plan payments (3-month, 6-month, annual, and all combo offers)</li>
                <li>SAT DROP webinar purchase fees (₹149 per session)</li>
                <li>Bootcamp fees (₹999 per event)</li>
                <li>Offline course fees (TAC Suite and DM Batches)</li>
                <li>Institutional programme fees (DM Online)</li>
              </ul>
              <p>By making any payment to TAC, You irrevocably acknowledge and accept this no-refund position. The making of payment constitutes conclusive evidence of Your acceptance.</p>
            </div>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">2.2 — Basis for No-Refund Policy</div>
              <p>TAC&rsquo;s platform is a digital content subscription service. Upon payment, access to a substantial library of pre-existing and continuously updated digital content is immediately granted. The delivery of the subscribed service commences at the moment of payment confirmation. Because the service is delivered digitally and instantaneously, and because TAC incurs substantial fixed costs (content production, tutor fees, platform hosting, licensing) regardless of how much content a subscriber consumes, no refund is granted for the subscription period once it has commenced.</p>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">2.3 — Relationship to Consumer Protection Law</div>
              <p>Nothing in this Policy excludes or limits Your rights under the Consumer Protection Act, 2019 in cases of provably defective service delivery, unfair trade practice, or deceptive representation by TAC. The narrow exceptions in this Policy represent TAC&rsquo;s voluntary undertaking in good faith and in addition to, not in substitution for, any statutory rights You may have.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="tac-rp-section" id="s3">
            <div className="tac-rp-section-num">Section 03</div>
            <h2>Exception 1 — Failed Transaction (Bank Debit Without TAC Receipt)</h2>

            <div className="tac-rp-exception-header">
              This is the <strong>primary exception</strong> to the no-refund policy and applies in a narrow, specific technical circumstance. A &lsquo;Failed Transaction&rsquo; occurs where Your bank account is debited by JODO during a payment attempt but the corresponding payment amount is <strong>NOT received and credited to TAC&rsquo;s account</strong> due to a technical failure in the payment network. In this situation, TAC has not received Your money, Your subscription has not been activated, and TAC has not delivered any service in exchange for the debited amount.
            </div>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">3.1 — Applicable Circumstances</div>
              <p>This exception applies exclusively where <strong>all four</strong> of the following conditions are simultaneously met:</p>
              <ul className="tac-rp-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">3.1.1</span><span>Your bank account, UPI account, or payment instrument is debited by JODO;</span></li>
                <li><span className="sub-num">3.1.2</span><span>You do not receive a payment confirmation email from TAC or JODO within two (2) hours of the debit;</span></li>
                <li><span className="sub-num">3.1.3</span><span>Your TAC subscription is not activated or renewed on the Platform within two (2) hours of the debit; and</span></li>
                <li><span className="sub-num">3.1.4</span><span>The transaction is confirmed as unreconciled and not received by TAC following TAC&rsquo;s reconciliation inquiry with JODO.</span></li>
              </ul>
            </div>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">3.2 — Refund Mechanism</div>
              <ul className="tac-rp-sublist" style={{ marginTop: '6px' }}>
                <li><span className="sub-num">3.2.1</span><span>TAC is not the holder of the debited funds and cannot initiate, process, or accelerate the refund;</span></li>
                <li><span className="sub-num">3.2.2</span><span>The debited amount is held within the NPCI/JODO/bank payment network and will be automatically reversed to Your payment instrument under the standard reversal protocols of NPCI and your bank;</span></li>
                <li><span className="sub-num">3.2.3</span><span>TAC will, upon Your request, issue a written reconciliation confirmation letter confirming that the transaction was not received by TAC; and</span></li>
                <li><span className="sub-num">3.2.4</span><span>You may present this letter to Your bank or JODO to facilitate the reversal. Expected reversal timelines are as specified in the Payment Terms and Conditions.</span></li>
              </ul>
            </div>

            <div className="tac-rp-notice">
              <span className="tac-rp-notice-icon">📋</span>
              <span><strong>3.3 — Procedure:</strong> To invoke this exception, email <a href="mailto:support@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@theartcode.org</a> with Your name, registered mobile number, JODO/bank transaction reference, date and time of debit, and amount debited — within <strong>seven (7) calendar days</strong> of the debit.</span>
            </div>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">3.4 — Non-Applicable Scenarios</div>
              <p>This exception does <strong>NOT</strong> apply to circumstances where:</p>
              <ul className="tac-rp-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">3.4.1</span><span>Payment is received by TAC and subscription/access is activated (even if You subsequently change your mind or do not use the Platform);</span></li>
                <li><span className="sub-num">3.4.2</span><span>You dispute a transaction that was for a service actually received (chargeback misuse); or</span></li>
                <li><span className="sub-num">3.4.3</span><span>The debit failure was caused by your own bank&rsquo;s system (e.g., your bank placed a hold on the funds). In such cases, the resolution lies between You and your bank.</span></li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="tac-rp-section" id="s4">
            <div className="tac-rp-section-num">Section 04</div>
            <h2>Exception 2 — Duplicate Charge</h2>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">4.1</div>
              <p>A Duplicate Charge occurs where JODO, due to a system error, initiates and processes two (2) separate debits of the same subscription amount from Your payment instrument within the same billing cycle (i.e., two debits for the same billing period on or around the same Billing Date).</p>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">4.2</div>
              <p>Upon identification of a verified Duplicate Charge (either by TAC through routine reconciliation or by You through a written report to TAC), TAC will arrange the refund of the duplicate amount through JODO to Your original payment instrument within <strong>five (5) to seven (7) Working Days</strong> of verification.</p>
            </div>
            <div className="tac-rp-notice">
              <span className="tac-rp-notice-icon">📧</span>
              <span><strong>4.3 — Reporting:</strong> To report a suspected Duplicate Charge, email <a href="mailto:support@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@theartcode.org</a> with both transaction reference numbers.</span>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">4.4 — A Duplicate Charge does NOT include:</div>
              <ul className="tac-rp-sublist" style={{ marginTop: '6px' }}>
                <li><span className="sub-num">4.4.1</span><span>Two charges from two different subscription plans active simultaneously (e.g., Creator Pass and Module Pass — these are separate products); or</span></li>
                <li><span className="sub-num">4.4.2</span><span>A charge for the current billing cycle and a charge for an overdue prior month&rsquo;s subscription that was not debited on its Billing Date.</span></li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="tac-rp-section" id="s5">
            <div className="tac-rp-section-num">Section 05</div>
            <h2>Exception 3 — Charge After Confirmed Cancellation</h2>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">5.1</div>
              <p>If JODO debits Your payment instrument after TAC has issued a written subscription cancellation confirmation to You (i.e., after a cancellation confirmation email timestamped <strong>before</strong> the relevant Billing Date has been sent to Your registered email), that charge constitutes an erroneous charge and will be refunded within <strong>five (5) to seven (7) Working Days</strong>.</p>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">5.2 — This exception does NOT apply where:</div>
              <ul className="tac-rp-sublist" style={{ marginTop: '6px' }}>
                <li><span className="sub-num">5.2.1</span><span>You submitted the cancellation request on or after the Billing Date on which the charge in question was made;</span></li>
                <li><span className="sub-num">5.2.2</span><span>The cancellation confirmation from TAC bears a timestamp that is after the relevant Billing Date; or</span></li>
                <li><span className="sub-num">5.2.3</span><span>You attempted to cancel by revoking the mandate directly through your bank or UPI app and did not receive any confirmation from TAC.</span></li>
              </ul>
            </div>
            <div className="tac-rp-notice">
              <span className="tac-rp-notice-icon">📎</span>
              <span><strong>5.3 — To invoke this exception,</strong> You must provide TAC with a copy of the cancellation confirmation email (including headers) and the JODO transaction reference for the disputed charge.</span>
            </div>
          </section>

          {/* Section 6 */}
          <section className="tac-rp-section" id="s6">
            <div className="tac-rp-section-num">Section 06</div>
            <h2>Digital Subscription Refunds — Creator Pass and Module Pass</h2>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">6.1 — Monthly Subscription: No Partial-Period Refunds</div>
              <p>Once a monthly subscription fee is successfully debited by JODO and access is activated for that billing cycle, no refund will be issued for any portion of that billing cycle, regardless of:</p>
              <ul className="tac-rp-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">6.1.1</span><span>How much or how little of the Platform&rsquo;s content You accessed or consumed during that period;</span></li>
                <li><span className="sub-num">6.1.2</span><span>Whether You cancel on Day 1, Day 3, Day 10, or any other day of the billing cycle;</span></li>
                <li><span className="sub-num">6.1.3</span><span>Whether You experienced personal, professional, or financial circumstances that prevented You from using the Platform during that period;</span></li>
                <li><span className="sub-num">6.1.4</span><span>Whether You were dissatisfied with specific content, a specific tutor&rsquo;s style, or the Platform&rsquo;s user interface; or</span></li>
                <li><span className="sub-num">6.1.5</span><span>Whether You forgot that the auto-debit was scheduled or failed to cancel before the Billing Date.</span></li>
              </ul>
            </div>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">6.2 — Bundle Plans: No Pro-Rated Refunds</div>
              <p>Bundle Plans (3-month, 6-month, annual, and combo offers) are non-refundable once activated. No pro-rated refund will be issued for any unused months remaining in the bundle period at the time of cancellation.</p>
              <ul className="tac-rp-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">6.2.1</span><span>For example: if You purchase a 6-month Creator Pass bundle and cancel after 2 months of use, no refund will be issued for the remaining 4 months.</span></li>
                <li><span className="sub-num">6.2.2</span><span>The bundle period will continue to run following cancellation, and You will retain access to the Platform until the last day of the bundle period.</span></li>
              </ul>
            </div>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">6.3 — Circumstances That Specifically Do NOT Qualify for a Refund</div>
              <ul className="tac-rp-sublist" style={{ marginTop: '6px' }}>
                <li><span className="sub-num">6.3.1</span><span>Forgetting to cancel before the Billing Date — the pre-debit notification sent three (3) days before the Billing Date constitutes adequate advance notice;</span></li>
                <li><span className="sub-num">6.3.2</span><span>Change of mind at any point after payment is made and access is activated;</span></li>
                <li><span className="sub-num">6.3.3</span><span>Non-usage of the Platform — the right to access and use the Platform is the service delivered, regardless of whether that right is exercised;</span></li>
                <li><span className="sub-num">6.3.4</span><span>Dissatisfaction with a specific tutor&rsquo;s delivery style or personality — platform-wide service delivery is not impaired by individual tutor preferences;</span></li>
                <li><span className="sub-num">6.3.5</span><span>Temporary inability to use the Platform due to personal circumstances (travel, illness, examinations, or emergencies) not caused by TAC;</span></li>
                <li><span className="sub-num">6.3.6</span><span>Platform downtime of less than seventy-two (72) continuous hours;</span></li>
                <li><span className="sub-num">6.3.7</span><span>Dissatisfaction with the quality of a specific community feature or non-core platform element; or</span></li>
                <li><span className="sub-num">6.3.8</span><span>Internet connectivity or device issues not caused by TAC&rsquo;s infrastructure.</span></li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="tac-rp-section" id="s7">
            <div className="tac-rp-section-num">Section 07</div>
            <h2>SAT DROP Webinar Refunds (₹149 per session)</h2>

            <div className="tac-rp-warning">
              <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: '1px' }}>🚫</span>
              <span><strong>No refund is issued for SAT DROP webinar purchases once the payment is successfully processed.</strong></span>
            </div>

            <p style={{ fontWeight: 600, color: 'var(--ink)', margin: '18px 0 12px' }}>7.1 — Specific Circumstances</p>

            <div className="tac-rp-event-grid">
              <div className="tac-rp-event-card">
                <div className="tac-rp-event-card-icon">❌</div>
                <div className="tac-rp-event-card-label">7.1.1</div>
                <div className="tac-rp-event-card-title">Webinar Cancelled by TAC</div>
                <div className="tac-rp-event-card-desc">You will be offered: (a) full ₹149 credit to your TAC Wallet, or (b) transfer to a future SAT DROP of your choice. A cash refund is only available if formally requested in writing within seven (7) calendar days of the cancellation notice.</div>
              </div>
              <div className="tac-rp-event-card">
                <div className="tac-rp-event-card-icon">🙅</div>
                <div className="tac-rp-event-card-label">7.1.2</div>
                <div className="tac-rp-event-card-title">User Unable to Attend</div>
                <div className="tac-rp-event-card-desc">No refund is issued. You retain the right to access the 48-hour replay from the conclusion of the live event.</div>
              </div>
              <div className="tac-rp-event-card">
                <div className="tac-rp-event-card-icon">📡</div>
                <div className="tac-rp-event-card-label">7.1.3</div>
                <div className="tac-rp-event-card-title">Technical Failure (TAC&rsquo;s Side)</div>
                <div className="tac-rp-event-card-desc">If TAC&rsquo;s streaming infrastructure fails (not your internet/device), report within 24 hours of the live event&rsquo;s conclusion. TAC may extend replay access as a goodwill gesture — this is not a refund entitlement.</div>
              </div>
              <div className="tac-rp-event-card">
                <div className="tac-rp-event-card-icon">⏰</div>
                <div className="tac-rp-event-card-label">7.1.4</div>
                <div className="tac-rp-event-card-title">Post-Event Requests</div>
                <div className="tac-rp-event-card-desc">No refund request will be entertained after the 48-hour replay window has expired.</div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="tac-rp-section" id="s8">
            <div className="tac-rp-section-num">Section 08</div>
            <h2>Bootcamp Refunds (₹999 per bootcamp)</h2>

            <div className="tac-rp-warning">
              <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: '1px' }}>🚫</span>
              <span><strong>No refund is issued for bootcamp purchases once payment is made, except as set out below.</strong></span>
            </div>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">8.1 — Bootcamp Cancelled by TAC</div>
              <p>If TAC cancels a bootcamp, You will receive a full refund to your original payment instrument within <strong>seven (7) Working Days</strong>. Alternatively, You may opt for transfer to the next scheduled bootcamp on the same topic.</p>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">8.2 — Seat Transfer Option</div>
              <p>You may transfer your confirmed bootcamp seat to a named third party by notifying <a href="mailto:support@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@theartcode.org</a> in writing at least twenty-four (24) hours before Day 1 of the bootcamp. No more than one seat transfer is permitted per purchase. No refund is issued in lieu of a transfer.</p>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">8.3 — Post-Commencement</div>
              <p>Once Day 1 of a bootcamp has commenced, no refund, credit, or transfer will be issued under any circumstances.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="tac-rp-section" id="s9">
            <div className="tac-rp-section-num">Section 09</div>
            <h2>Offline Course Refunds — TAC Suite and DM Batches</h2>

            <div className="tac-rp-warning">
              <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: '1px' }}>🚫</span>
              <span><strong>Once a batch has commenced (i.e., Orientation Day has passed), no refund of any amount is available under any circumstances, except for TAC-initiated batch cancellations.</strong></span>
            </div>

            <p className="tac-rp-sub-heading">9.1 — Pre-Commencement Cancellation Schedule</p>
            <div className="tac-rp-tbl-wrap">
              <table className="tac-rp-tbl">
                <thead>
                  <tr>
                    <th>Cancellation Request Received</th>
                    <th>Refund Entitlement</th>
                    <th>Process and Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>More than 10 Working Days before Orientation Day</strong></td>
                    <td><strong>Full fee paid MINUS ₹1,000 administrative fee</strong></td>
                    <td>Written cancellation request required. Refund processed within 7 Working Days.</td>
                  </tr>
                  <tr>
                    <td><strong>5 to 10 Working Days before Orientation Day</strong></td>
                    <td><strong>50% of fee paid</strong></td>
                    <td>Written cancellation request required. Batch transfer offered as alternative. Refund within 7 Working Days.</td>
                  </tr>
                  <tr>
                    <td><strong>Fewer than 5 Working Days before Orientation Day</strong></td>
                    <td><strong>No refund</strong></td>
                    <td>One batch transfer to next available batch may be offered at TAC&rsquo;s sole discretion.</td>
                  </tr>
                  <tr>
                    <td><strong>After Orientation Day</strong></td>
                    <td><strong>No refund</strong></td>
                    <td>Documented medical emergency: written request with official medical documentation submitted within 5 Working Days of missed session — batch transfer may be considered at TAC&rsquo;s discretion only.</td>
                  </tr>
                  <tr>
                    <td><strong>TAC cancels the batch</strong></td>
                    <td><strong>100% full refund of all fees paid</strong></td>
                    <td>Refund processed within 7 Working Days of cancellation notice. No deduction of any kind.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="tac-rp-sub-heading">9.2 — Batch Transfer Policy</p>
            <ul className="tac-rp-sublist">
              <li><span className="sub-num">9.2.1</span><span>Each student is entitled to one (1) free batch transfer during their entire enrolment with TAC for offline courses;</span></li>
              <li><span className="sub-num">9.2.2</span><span>A transfer request must be submitted in writing at least five (5) Working Days before Orientation Day of the original batch;</span></li>
              <li><span className="sub-num">9.2.3</span><span>Transfer is contingent upon availability of the next batch. TAC does not guarantee availability; and</span></li>
              <li><span className="sub-num">9.2.4</span><span>The transferred student is bound by the fees, terms, and conditions of the new batch.</span></li>
            </ul>

            <p className="tac-rp-sub-heading">9.3 — Non-Refundable Costs</p>
            <p style={{ fontSize: '.88rem', color: '#3a3a50', marginBottom: '8px' }}>The following costs are non-refundable under any circumstances:</p>
            <ul className="tac-rp-sublist">
              <li><span className="sub-num">9.3.1</span><span>The ₹1,000 administrative fee applicable to pre-commencement cancellations;</span></li>
              <li><span className="sub-num">9.3.2</span><span>Any course material costs or access fees paid separately; and</span></li>
              <li><span className="sub-num">9.3.3</span><span>Any tuition or coaching fees paid to any third-party resource recommended by TAC.</span></li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="tac-rp-section" id="s10">
            <div className="tac-rp-section-num">Section 10</div>
            <h2>Cancellation Procedure — Digital Subscriptions</h2>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">10.1 — You may cancel your digital subscription at any time using any of the following methods:</div>
              <ul className="tac-rp-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">10.1.1</span><span>Log in &gt; Account Settings &gt; Subscription Management &gt; Cancel Subscription;</span></li>
                <li><span className="sub-num">10.1.2</span><span>Email <a href="mailto:support@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@theartcode.org</a> with subject <em>&lsquo;Subscription Cancellation – [Full Name] – [Registered Mobile]&rsquo;</em>; or</span></li>
                <li><span className="sub-num">10.1.3</span><span>Revoke the JODO mandate directly through your UPI app or bank&rsquo;s net banking portal.</span></li>
              </ul>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">10.2</div>
              <p>TAC will send a written cancellation confirmation to Your registered email address within twenty-four (24) hours of processing. Retain this confirmation for your records.</p>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">10.3 — Post-Cancellation Access</div>
              <p>Following cancellation, Your access to the Platform continues until the last day of the billing period for which payment has already been made. No access extension is available beyond this period.</p>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">10.4 — Data Retention Post-Cancellation</div>
              <p>Your User Account, course progress, bookmarks, and community activity will be preserved for six (6) months following the expiry of your final paid access period. Re-subscribing within this six (6) month window will restore your full account history.</p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="tac-rp-section" id="s11">
            <div className="tac-rp-section-num">Section 11</div>
            <h2>TAC Wallet Credits</h2>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">11.1</div>
              <p>In circumstances where TAC issues a credit instead of a cash refund (as described in Clause 7.1.1 for webinar cancellations), the credit is issued to your TAC Wallet associated with your User Account.</p>
            </div>

            <p style={{ fontWeight: 600, color: 'var(--ink)', margin: '16px 0 12px' }}>11.2 — TAC Wallet Credits Are Subject to the Following Terms:</p>
            <div className="tac-rp-wallet-grid">
              <div className="tac-rp-wallet-item">
                <div className="tac-rp-wallet-item-icon">✅</div>
                <div className="tac-rp-wallet-item-title">Usable Across All Products</div>
                <div className="tac-rp-wallet-item-desc">Credits may be applied against any future TAC purchase — subscription, webinar, bootcamp, or offline course fee.</div>
              </div>
              <div className="tac-rp-wallet-item">
                <div className="tac-rp-wallet-item-icon">🔒</div>
                <div className="tac-rp-wallet-item-title">Non-Transferable</div>
                <div className="tac-rp-wallet-item-desc">Credits are non-transferable to any other User Account.</div>
              </div>
              <div className="tac-rp-wallet-item">
                <div className="tac-rp-wallet-item-icon">🚫</div>
                <div className="tac-rp-wallet-item-title">Not Encashable</div>
                <div className="tac-rp-wallet-item-desc">Credits cannot be converted to cash or transferred to any bank account.</div>
              </div>
              <div className="tac-rp-wallet-item">
                <div className="tac-rp-wallet-item-icon">📅</div>
                <div className="tac-rp-wallet-item-title">12-Month Expiry</div>
                <div className="tac-rp-wallet-item-desc">Credits expire twelve (12) months from date of issue if not utilised.</div>
              </div>
              <div className="tac-rp-wallet-item">
                <div className="tac-rp-wallet-item-icon">⚠️</div>
                <div className="tac-rp-wallet-item-title">No Liability for Expiry</div>
                <div className="tac-rp-wallet-item-desc">TAC is not responsible for credits that expire due to inactivity or non-use.</div>
              </div>
            </div>
          </section>

          {/* Section 12 */}
          <section className="tac-rp-section" id="s12">
            <div className="tac-rp-section-num">Section 12</div>
            <h2>Refund Processing — Method, Timeline, and TAC&rsquo;s Role</h2>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">12.1</div>
              <p>All refunds authorised under this Policy will be processed to the <strong>original payment instrument</strong> used for the relevant transaction. TAC does not issue refunds by cash, cheque, or bank transfer to an account different from the payment source.</p>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">12.2 — Refund Timelines by Payment Method</div>
            </div>

            <div className="tac-rp-tbl-wrap">
              <table className="tac-rp-tbl">
                <thead>
                  <tr>
                    <th>Payment Method</th>
                    <th>TAC Initiation</th>
                    <th>Expected Credit to Your Account</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>UPI AutoPay</strong></td>
                    <td>Within 2 Working Days of refund approval</td>
                    <td>2–3 Working Days after TAC initiation</td>
                  </tr>
                  <tr>
                    <td><strong>eNACH / Net Banking</strong></td>
                    <td>Within 2 Working Days of refund approval</td>
                    <td>5–7 Working Days after TAC initiation</td>
                  </tr>
                  <tr>
                    <td><strong>Debit Card</strong></td>
                    <td>Within 2 Working Days of refund approval</td>
                    <td>5–7 Working Days after TAC initiation</td>
                  </tr>
                  <tr>
                    <td><strong>Credit Card</strong></td>
                    <td>Within 2 Working Days of refund approval</td>
                    <td>7–10 Working Days after TAC initiation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">12.3</div>
              <p>TAC will not issue a refund to any payment instrument other than the original source of payment under any circumstances.</p>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">12.4</div>
              <p>Where a refund is initiated but You do not see the credit within the maximum stated timeline, TAC will furnish You with the JODO refund reference number, which You may present to Your bank for tracking.</p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="tac-rp-section" id="s13">
            <div className="tac-rp-section-num">Section 13</div>
            <h2>Procedure to Submit a Refund Request</h2>

            <div className="tac-rp-contact-card">
              <h3>How to Submit a Refund Request</h3>
              <div className="cc-row"><span className="cc-icon">✉️</span><p><strong style={{ color: '#fff' }}>Email:</strong> <a href="mailto:support@theartcode.org">support@theartcode.org</a></p></div>
              <div className="cc-row"><span className="cc-icon">📋</span><p><strong style={{ color: '#fff' }}>Subject line:</strong> <em style={{ color: 'rgba(255,255,255,.65)' }}>&lsquo;Refund Request – [Full Name] – [Transaction Reference]&rsquo;</em></p></div>
              <div className="cc-row"><span className="cc-icon">📎</span><p><strong style={{ color: '#fff' }}>Include in body:</strong> <span style={{ color: 'rgba(255,255,255,.65)' }}>Full name · Registered mobile number · JODO transaction reference or order ID · Date of transaction · Amount in question · Clear description of the exception under this Policy on which your refund claim is based</span></p></div>
              <div className="cc-row"><span className="cc-icon">🗂️</span><p><strong style={{ color: '#fff' }}>Attach:</strong> <span style={{ color: 'rgba(255,255,255,.65)' }}>Bank statement excerpt showing debit · Screenshot of transaction · TAC cancellation confirmation email (if applicable)</span></p></div>
            </div>

            <p className="tac-rp-sub-heading" style={{ marginTop: '20px' }}>13.1 — TAC&rsquo;s Response Timeline</p>
            <ul className="tac-rp-sublist">
              <li><span className="sub-num">13.1.4</span><span>TAC will <strong>acknowledge</strong> your request within one (1) Working Day;</span></li>
              <li><span className="sub-num">13.1.5</span><span>TAC will complete its <strong>investigation and communicate its decision</strong> within five (5) Working Days of acknowledgement; and</span></li>
              <li><span className="sub-num">13.1.6</span><span>Where a refund is approved, it will be <strong>initiated through JODO</strong> within two (2) Working Days of the approval decision.</span></li>
            </ul>

            <div className="tac-rp-notice" style={{ marginTop: '16px' }}>
              <span className="tac-rp-notice-icon">⚠️</span>
              <span><strong>13.2 —</strong> Refund requests submitted outside the timeframes specified in this Policy will not be entertained. TAC&rsquo;s decision on all refund requests is final, subject to any rights you may have under the Consumer Protection Act, 2019.</span>
            </div>
          </section>

          {/* Section 14 */}
          <section className="tac-rp-section" id="s14">
            <div className="tac-rp-section-num">Section 14</div>
            <h2>Statutory Consumer Rights</h2>

            <div className="tac-rp-success">
              <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: '1px' }}>⚖️</span>
              <span><strong>14.1 —</strong> Nothing in this Policy restricts, limits, or excludes any rights to which you are entitled as a consumer under the Consumer Protection Act, 2019, the Consumer Protection (E-Commerce) Rules, 2020, or any other Applicable Law that cannot be contractually excluded.</span>
            </div>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">14.2 — If you believe TAC has engaged in an unfair trade practice, restrictive trade practice, or a deficiency in service, you may:</div>
              <ul className="tac-rp-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">14.2.1</span><span>File a written complaint with TAC&rsquo;s Grievance Officer at <a href="mailto:legal@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>legal@theartcode.org</a> — response within fifteen (15) Working Days;</span></li>
                <li><span className="sub-num">14.2.2</span><span>Escalate your complaint to the appropriate Consumer Disputes Redressal Commission (District, State, or National level) under Section 35 or Section 47 of the Consumer Protection Act, 2019, as applicable;</span></li>
                <li><span className="sub-num">14.2.3</span><span>Access the <strong>National Consumer Helpline</strong> at <strong>1800-11-4000</strong> (toll-free, Monday–Saturday, 9:30 AM – 5:30 PM IST); or</span></li>
                <li><span className="sub-num">14.2.4</span><span>Use the Central Consumer Protection Authority&rsquo;s Integrated Grievance Redressal Mechanism at <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 600 }}>consumerhelpline.gov.in</a>.</span></li>
              </ul>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">14.3</div>
              <p>All disputes arising out of or in connection with this Policy are subject to the exclusive jurisdiction of the courts of competent jurisdiction situated at <strong>Hyderabad, Telangana, India</strong>, as set out in Clause 15 of the Terms and Conditions.</p>
            </div>
          </section>

          {/* Section 15 */}
          <section className="tac-rp-section" id="s15">
            <div className="tac-rp-section-num">Section 15</div>
            <h2>Amendments to This Policy</h2>

            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">15.1</div>
              <p>TAC reserves the right to amend this Policy at any time. Where amendments are material — in particular, where they tighten refund entitlements or expand the scope of the no-refund position — TAC will provide not less than <strong>fourteen (14) days&rsquo; advance written notice</strong> by email before the amendments take effect.</p>
            </div>
            <div className="tac-rp-clause">
              <div className="tac-rp-clause-num">15.2</div>
              <p>Your continued use of the Services or retention of an active subscription after the effective date of any amendment constitutes acceptance of the amended Policy.</p>
            </div>

            <div className="tac-rp-contact">
              <a href="mailto:support@theartcode.org" className="tac-rp-contact-pill"><span>✉️</span> support@theartcode.org</a>
              <a href="mailto:legal@theartcode.org" className="tac-rp-contact-pill"><span>⚖️</span> legal@theartcode.org</a>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}
