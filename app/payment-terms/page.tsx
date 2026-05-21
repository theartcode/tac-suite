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

  .tac-pt-wrap *, .tac-pt-wrap *::before, .tac-pt-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .tac-pt-wrap {
    background: var(--surface);
    font-family: 'DM Sans', sans-serif;
    color: var(--ink);
    min-height: 100vh;
  }

  .tac-pt-hero {
    background: var(--ink);
    padding: 157px 24px 56px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .tac-pt-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 60% at 50% -10%, rgba(200,169,110,.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .tac-pt-hero-eyebrow {
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
  .tac-pt-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 16px;
  }
  .tac-pt-hero-sub {
    color: rgba(255,255,255,.55);
    font-size: .95rem;
    font-weight: 300;
    max-width: 580px;
    margin: 0 auto 28px;
    line-height: 1.7;
  }
  .tac-pt-hero-meta {
    display: flex;
    justify-content: center;
    gap: 28px;
    flex-wrap: wrap;
    font-size: .8rem;
    color: rgba(255,255,255,.45);
  }
  .tac-pt-hero-meta span { display: flex; align-items: center; gap: 6px; }
  .tac-pt-hero-meta span::before { content: ''; display: block; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }

  .tac-pt-body {
    max-width: 1100px;
    margin: 0 auto;
    padding: 56px 32px 80px;
  }

  .tac-pt-section {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 36px 40px;
    margin-bottom: 24px;
    box-shadow: var(--shadow);
    scroll-margin-top: 24px;
  }
  .tac-pt-section-num {
    font-size: .68rem;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 6px;
  }
  .tac-pt-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--ink);
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--border);
  }
  .tac-pt-section p {
    font-size: .9rem;
    line-height: 1.78;
    color: #3a3a50;
    margin-bottom: 14px;
  }
  .tac-pt-section p:last-child { margin-bottom: 0; }

  .tac-pt-sub-heading {
    font-weight: 700;
    color: var(--ink);
    font-size: .92rem;
    margin: 22px 0 10px;
  }

  .tac-pt-clause {
    margin-bottom: 18px;
    padding-left: 16px;
    border-left: 2px solid var(--border);
  }
  .tac-pt-clause-num {
    font-size: .76rem;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 4px;
    letter-spacing: .04em;
  }
  .tac-pt-clause p { margin-bottom: 0; }

  .tac-pt-sublist {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 8px 0 0 0;
  }
  .tac-pt-sublist li {
    font-size: .87rem;
    line-height: 1.7;
    color: #3a3a50;
    display: flex;
    gap: 10px;
  }
  .tac-pt-sublist li .sub-num {
    flex-shrink: 0;
    font-weight: 700;
    color: var(--accent);
    font-size: .76rem;
    min-width: 48px;
    margin-top: 2px;
  }

  .tac-pt-lettered {
    margin: 12px 0 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .tac-pt-lettered li {
    font-size: .88rem;
    line-height: 1.7;
    color: #3a3a50;
    display: flex;
    gap: 10px;
  }
  .tac-pt-lettered li .ltr {
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

  .tac-pt-tbl-wrap {
    width: 100%;
    overflow-x: auto;
    margin: 18px 0;
    border-radius: 10px;
    border: 1px solid var(--border);
    box-shadow: 0 2px 12px rgba(26,26,46,.06);
  }
  .tac-pt-tbl {
    width: 100%;
    border-collapse: collapse;
    font-size: .83rem;
  }
  .tac-pt-tbl thead tr { background: var(--tbl-head); }
  .tac-pt-tbl thead th {
    color: #fff;
    font-weight: 600;
    text-align: left;
    padding: 13px 16px;
    font-size: .78rem;
    letter-spacing: .04em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .tac-pt-tbl thead th:first-child { border-radius: 10px 0 0 0; }
  .tac-pt-tbl thead th:last-child  { border-radius: 0 10px 0 0; }
  .tac-pt-tbl tbody tr { transition: background .15s; }
  .tac-pt-tbl tbody tr:nth-child(odd)  { background: #fff; }
  .tac-pt-tbl tbody tr:nth-child(even) { background: var(--tbl-alt); }
  .tac-pt-tbl tbody tr:hover { background: #edeae3; }
  .tac-pt-tbl td {
    padding: 13px 16px;
    color: #3a3a50;
    vertical-align: top;
    border-bottom: 1px solid var(--border);
    line-height: 1.65;
  }
  .tac-pt-tbl td strong { font-weight: 600; color: var(--ink); }
  .tac-pt-tbl tbody tr:last-child td { border-bottom: none; }

  .tac-pt-notice {
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
  .tac-pt-notice-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 1px; }

  .tac-pt-warning {
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

  .tac-pt-price-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 14px;
    margin: 18px 0;
  }
  .tac-pt-price-card {
    background: var(--tbl-alt);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .tac-pt-price-card-icon { font-size: 1.5rem; }
  .tac-pt-price-card-label { font-size: .75rem; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: .06em; }
  .tac-pt-price-card-amount { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700; color: var(--ink); }
  .tac-pt-price-card-desc { font-size: .78rem; color: var(--muted); line-height: 1.55; margin-top: 2px; }

  .tac-pt-contact {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 16px;
  }
  .tac-pt-contact-pill {
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
  .tac-pt-contact-pill:hover { background: #2d2d4e; }
  .tac-pt-contact-pill span { font-size: .95rem; }

  .tac-pt-contact-card {
    background: var(--ink);
    color: #fff;
    border-radius: var(--radius);
    padding: 28px 32px;
    margin-top: 4px;
  }
  .tac-pt-contact-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: var(--accent);
    margin-bottom: 14px;
  }
  .tac-pt-contact-card p { font-size: .88rem; color: rgba(255,255,255,.75); line-height: 1.75; margin-bottom: 8px; }
  .tac-pt-contact-card a { color: var(--accent2); text-decoration: none; font-weight: 600; }
  .tac-pt-contact-card .cc-row { display: flex; gap: 8px; align-items: flex-start; margin-bottom: 6px; }
  .tac-pt-contact-card .cc-icon { flex-shrink: 0; margin-top: 2px; }

  @media (max-width: 768px) {
    .tac-pt-body { padding: 32px 16px 60px; }
    .tac-pt-section { padding: 24px 20px; }
    .tac-pt-price-grid { grid-template-columns: 1fr 1fr; }
  }
`;

export default function PaymentTermsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <Navbar />
      <div className="tac-pt-wrap">

        {/* Hero */}
        <div className="tac-pt-hero">
          <div className="tac-pt-hero-eyebrow">Legal Document</div>
          <h1>Payment Terms &amp; Conditions</h1>
          <p className="tac-pt-hero-sub">
            All financial transactions between you and The Art Code — subscriptions, events, offline courses, and
            institutional programmes — are governed by these terms.
          </p>
          <div className="tac-pt-hero-meta">
            <span>TAC School of Modern Learning Pvt. Ltd.</span>
            <span>Powered by JODO</span>
            <span>RBI &amp; GST Compliant</span>
          </div>
        </div>

        <div className="tac-pt-body">

          {/* Section 1 */}
          <section className="tac-pt-section" id="s1">
            <div className="tac-pt-section-num">Section 01</div>
            <h2>Scope and Applicability</h2>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">1.1</div>
              <p>These Payment Terms and Conditions (&ldquo;Payment Terms&rdquo;) govern all financial transactions between You and TAC School of Modern Learning Private Limited (operating as The Art Code / TAC) in connection with any subscription, single-event purchase, offline course enrolment, or institutional programme fee payment.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">1.2</div>
              <p>These Payment Terms must be read together with TAC&rsquo;s Terms and Conditions, Privacy Policy, and Refund and Cancellation Policy. In the event of any conflict between these Payment Terms and the Terms and Conditions, the Terms and Conditions shall prevail.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">1.3</div>
              <p>By completing any payment transaction with TAC, You confirm that You have read, understood, and agree to be bound by these Payment Terms.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="tac-pt-section" id="s2">
            <div className="tac-pt-section-num">Section 02</div>
            <h2>Payment Gateway — JODO</h2>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">2.1</div>
              <p>All digital payments to TAC — including subscription fees, webinar fees, bootcamp fees, and any other platform-related charges — are processed exclusively through JODO (Jodo Financial Solutions Private Limited), operating the Jodo Flex recurring payments platform at www.jodo.in. JODO is TAC&rsquo;s designated and exclusive payment gateway for digital transactions.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">2.2</div>
              <p>JODO processes payments using NPCI&rsquo;s UPI AutoPay infrastructure and eNACH (Electronic National Automated Clearing House) mandates, both of which are Reserve Bank of India (RBI) regulated recurring payment mechanisms.</p>
            </div>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">2.3 — TAC Never Stores Your Payment Credentials</div>
              <p>TAC does not store, process, or have access to any of the following sensitive payment credentials:</p>
              <ul className="tac-pt-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">2.3.1</span><span>Full debit card or credit card numbers;</span></li>
                <li><span className="sub-num">2.3.2</span><span>Card Verification Value (CVV) codes;</span></li>
                <li><span className="sub-num">2.3.3</span><span>Net banking usernames and passwords;</span></li>
                <li><span className="sub-num">2.3.4</span><span>UPI PINs or transaction PINs; or</span></li>
                <li><span className="sub-num">2.3.5</span><span>OTPs issued by banks or payment providers.</span></li>
              </ul>
            </div>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">2.4</div>
              <p>All such data is processed and stored exclusively by JODO in compliance with PCI-DSS Level 1 standards and applicable RBI guidelines. TAC holds no responsibility for any security incident or data breach occurring within JODO&rsquo;s payment infrastructure.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">2.5</div>
              <p>For any JODO-specific platform, mandate management, or payment processing queries that cannot be resolved through TAC&rsquo;s support channels, You may contact JODO directly at <a href="mailto:support@jodopay.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@jodopay.com</a>.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="tac-pt-section" id="s3">
            <div className="tac-pt-section-num">Section 03</div>
            <h2>Accepted Payment Methods</h2>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">3.1 — Accepted Methods for Digital Transactions via JODO</div>
              <ul className="tac-pt-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">3.1.1</span><span><strong>UPI AutoPay</strong> via all UPI-enabled applications registered with NPCI, including Google Pay, PhonePe, Paytm, BHIM, and bank-native UPI apps;</span></li>
                <li><span className="sub-num">3.1.2</span><span><strong>eNACH mandate</strong> via net banking (supported banks include SBI, HDFC, ICICI, Axis, Kotak, Yes Bank, PNB, Bank of Baroda, and all other major scheduled commercial banks);</span></li>
                <li><span className="sub-num">3.1.3</span><span><strong>Debit cards</strong> issued by Indian banks (Visa, Mastercard, RuPay networks);</span></li>
                <li><span className="sub-num">3.1.4</span><span><strong>Credit cards</strong> issued by Indian financial institutions and banks (Visa, Mastercard, RuPay, American Express networks); and</span></li>
                <li><span className="sub-num">3.1.5</span><span>Such other methods as JODO may make available on the TAC Platform from time to time.</span></li>
              </ul>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">3.2</div>
              <p>Not all payment methods are available for all transaction types. JODO will display the available payment methods at the time of checkout. TAC makes no guarantee that any specific payment method will be available at all times.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="tac-pt-section" id="s4">
            <div className="tac-pt-section-num">Section 04</div>
            <h2>Currency, Pricing, and GST</h2>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">4.1</div>
              <p>All prices displayed on the TAC Platform and in TAC&rsquo;s marketing communications are denominated in Indian Rupees (₹).</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">4.2</div>
              <p>All subscription prices and other fees are inclusive of applicable Goods and Services Tax (GST) at the prevailing rate (currently eighteen per cent (18%)) unless explicitly stated to be exclusive of GST.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">4.3</div>
              <p>TAC will automatically generate and issue a GST-compliant tax invoice to your registered email address after each successful payment transaction.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">4.4 — B2B Subscribers &amp; GST Input Tax Credit</div>
              <p>If You are a GST-registered entity seeking to claim Input Tax Credit (ITC) on TAC&rsquo;s subscription fees, You must update your GSTIN in your User Account under <em>Account Settings &gt; Tax Information</em> before making payment. TAC will issue a B2B tax invoice reflecting your GSTIN for all eligible transactions. ITC eligibility is subject to applicable GST law and You are solely responsible for verifying your entitlement to ITC.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">4.5</div>
              <p>Any applicable TDS (Tax Deducted at Source) on subscription payments is the responsibility of the User/organisation where applicable under Indian income tax law. TAC may require You to furnish TDS certificates if deduction has been made.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="tac-pt-section" id="s5">
            <div className="tac-pt-section-num">Section 05</div>
            <h2>Subscription Billing and Auto-Pay Mandate</h2>

            <p className="tac-pt-sub-heading">5.1 — Mandate Setup</p>
            <ul className="tac-pt-sublist">
              <li><span className="sub-num">5.1.1</span><span>When You subscribe to the Creator Pass or Module Pass for the first time, the checkout process on the TAC Platform will prompt You to set up a recurring payment mandate through JODO. This mandate authorises JODO to initiate an automatic debit of the applicable subscription fee from your chosen payment instrument on each Billing Date, without requiring further action or confirmation from You.</span></li>
              <li><span className="sub-num">5.1.2</span><span>The mandate setup requires You to authenticate the mandate using your UPI PIN (for UPI AutoPay) or net banking credentials / debit card (for eNACH). This authentication constitutes your legally binding consent to recurring auto-debits.</span></li>
              <li><span className="sub-num">5.1.3</span><span>The maximum per-transaction amount set in the mandate corresponds to the applicable subscription price (₹2,999 for Creator Pass; ₹499 for Module Pass) at the time of mandate setup. If TAC revises subscription prices under Clause 12, a new mandate may be required at the revised amount.</span></li>
            </ul>

            <div className="tac-pt-price-grid" style={{ marginTop: '20px' }}>
              <div className="tac-pt-price-card">
                <div className="tac-pt-price-card-icon">🎨</div>
                <div className="tac-pt-price-card-label">Creator Pass</div>
                <div className="tac-pt-price-card-amount">₹2,999</div>
                <div className="tac-pt-price-card-desc">Per month · Auto-debited via JODO mandate</div>
              </div>
              <div className="tac-pt-price-card">
                <div className="tac-pt-price-card-icon">📦</div>
                <div className="tac-pt-price-card-label">Module Pass</div>
                <div className="tac-pt-price-card-amount">₹499</div>
                <div className="tac-pt-price-card-desc">Per month · Auto-debited via JODO mandate</div>
              </div>
              <div className="tac-pt-price-card">
                <div className="tac-pt-price-card-icon">🎙️</div>
                <div className="tac-pt-price-card-label">SAT DROP Webinar</div>
                <div className="tac-pt-price-card-amount">₹149</div>
                <div className="tac-pt-price-card-desc">Per session · Single non-recurring payment</div>
              </div>
              <div className="tac-pt-price-card">
                <div className="tac-pt-price-card-icon">🚀</div>
                <div className="tac-pt-price-card-label">Bootcamp</div>
                <div className="tac-pt-price-card-amount">₹999</div>
                <div className="tac-pt-price-card-desc">Per event · Single non-recurring payment</div>
              </div>
            </div>

            <p className="tac-pt-sub-heading">5.2 — Billing Date and Cycle</p>
            <ul className="tac-pt-sublist">
              <li><span className="sub-num">5.2.1</span><span>Your first Billing Date is the date on which you first successfully subscribed. Your subsequent Billing Dates are the corresponding calendar date in each following month.</span></li>
              <li><span className="sub-num">5.2.2</span><span>Where the Billing Date would fall on a date that does not exist in the applicable month (e.g., the 30th or 31st in February), the debit will be initiated on the last calendar day of that month.</span></li>
              <li><span className="sub-num">5.2.3</span><span>The billing cycle for each subscription month runs from the Billing Date to the day before the next Billing Date. Access to the Platform during the billing cycle is subject to successful payment.</span></li>
            </ul>

            <p className="tac-pt-sub-heading">5.3 — Pre-Debit Notifications</p>
            <ul className="tac-pt-sublist">
              <li><span className="sub-num">5.3.1</span><span>TAC, through JODO, will send You a pre-debit notification by email and SMS to your registered email address and mobile number at least three (3) calendar days before each Billing Date. This notification constitutes advance notice of the upcoming debit, as required by RBI&rsquo;s recurring payment guidelines.</span></li>
              <li><span className="sub-num">5.3.2</span><span>You have the right to cancel or modify the mandate before the Billing Date upon receiving this notification, as set out in Clause 5.5.</span></li>
            </ul>

            <p className="tac-pt-sub-heading">5.4 — Auto-Debit Process on Billing Date</p>
            <ul className="tac-pt-sublist">
              <li><span className="sub-num">5.4.1</span><span>On each Billing Date, JODO will initiate the auto-debit from your registered payment instrument. The debit typically occurs between 00:00 and 06:00 hours IST on the Billing Date.</span></li>
              <li><span className="sub-num">5.4.2</span><span>Upon successful debit, a payment confirmation and GST invoice will be emailed to your registered email address within two (2) hours.</span></li>
              <li><span className="sub-num">5.4.3</span><span>Platform access for the new billing cycle is renewed automatically upon receipt of payment confirmation by TAC&rsquo;s systems.</span></li>
            </ul>

            <p className="tac-pt-sub-heading">5.5 — Cancellation of Mandate</p>
            <p style={{ fontSize: '.88rem', color: '#3a3a50', marginBottom: '10px' }}>5.5.1 — You may cancel the recurring payment mandate at any time before your next Billing Date by any of the following means:</p>
            <ul className="tac-pt-sublist">
              <li><span className="sub-num">5.5.1.1</span><span>Logging in to your User Account &gt; Account Settings &gt; Subscription &gt; Cancel Subscription;</span></li>
              <li><span className="sub-num">5.5.1.2</span><span>Emailing <a href="mailto:support@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@theartcode.org</a> with the subject line <em>&lsquo;Subscription Cancellation – [Name] – [Registered Mobile]&rsquo;</em>;</span></li>
              <li><span className="sub-num">5.5.1.3</span><span>Revoking the UPI AutoPay mandate directly through your UPI application (GPay/PhonePe/Paytm &gt; Autopay / Recurring Payments &gt; TAC &gt; Cancel); or</span></li>
              <li><span className="sub-num">5.5.1.4</span><span>Contacting your bank to cancel the eNACH mandate associated with TAC/JODO.</span></li>
            </ul>
            <ul className="tac-pt-sublist" style={{ marginTop: '12px' }}>
              <li><span className="sub-num">5.5.2</span><span>Cancellation of the mandate takes effect from the next Billing Date. The current billing cycle will complete as paid, and You retain Platform access until its expiry.</span></li>
              <li><span className="sub-num">5.5.3</span><span>Cancellation of the mandate does not trigger a refund of any amount already debited. See the Refund and Cancellation Policy for the complete refund framework.</span></li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="tac-pt-section" id="s6">
            <div className="tac-pt-section-num">Section 06</div>
            <h2>Bundle Plans — Payment Terms</h2>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">6.1</div>
              <p>Bundle Plans (3-month, 6-month, annual, and combo offers) are paid through a single upfront charge processed through JODO at the time of purchase. No recurring mandate is created for Bundle Plans.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">6.2</div>
              <p>Bundle Plan payments are non-refundable in full once the Platform access is activated upon successful payment. No pro-rated refund is available for unused months.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">6.3</div>
              <p>Where a Bundle Plan is offered at a discounted price for a limited period, TAC will specify the validity period of the offer at the time of purchase. Failure to complete the purchase before the offer expires will result in the standard price applying.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">6.4</div>
              <p>Bundle Plan prices are fixed for the purchased duration and will not be revised during the active bundle period, even if TAC&rsquo;s standard monthly subscription prices change.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="tac-pt-section" id="s7">
            <div className="tac-pt-section-num">Section 07</div>
            <h2>Single-Event Purchases — Webinars and Bootcamps</h2>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">7.1</div>
              <p>SAT DROP Webinar (₹149 per session) and Bootcamp (₹999 per event) purchases are single, non-recurring transactions processed through JODO. No mandate is created.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">7.2</div>
              <p>Payment must be completed before the webinar or bootcamp registration is confirmed. Access to the event is contingent upon receipt of payment confirmation by TAC.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">7.3</div>
              <p>In the event that a webinar or bootcamp session is oversubscribed and You are unable to secure a seat despite completing payment, TAC will refund the full amount to your original payment instrument within five (5) Working Days.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="tac-pt-section" id="s8">
            <div className="tac-pt-section-num">Section 08</div>
            <h2>Offline Course Payments</h2>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">8.1</div>
              <p>Payment terms for TAC Suite and DM Batch offline courses are communicated at the time of enrolment through the course-specific fee schedule and admission form.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">8.2</div>
              <p>As a general policy, the full course fee is due and payable in cleared funds on or before Orientation Day. TAC will not admit a student to any classroom session until the full fee is paid. Partial payment does not grant rights to partial access.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">8.3 — Instalment Arrangements</div>
              <p>Where an instalment arrangement is agreed in writing between TAC and a student prior to enrolment, the following terms apply:</p>
              <ul className="tac-pt-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">8.3.1</span><span>Each instalment is due on the specific date agreed and communicated in the written instalment schedule;</span></li>
                <li><span className="sub-num">8.3.2</span><span>Failure to pay any instalment within five (5) calendar days of the due date will result in suspension of the student&rsquo;s access to ongoing class sessions until arrears are cleared;</span></li>
                <li><span className="sub-num">8.3.3</span><span>TAC reserves the right to revoke an instalment arrangement and require full payment if two or more instalments are paid late in a single batch; and</span></li>
                <li><span className="sub-num">8.3.4</span><span>Instalment arrangements are entirely at TAC&rsquo;s discretion and no student has an inherent right to payment in instalments.</span></li>
              </ul>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">8.4</div>
              <p>TAC will issue a payment receipt for all offline fee payments. It is the student&rsquo;s responsibility to collect and retain this receipt.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="tac-pt-section" id="s9">
            <div className="tac-pt-section-num">Section 09</div>
            <h2>Failed Transactions — Bank Debit Without TAC Receipt</h2>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">9.1</div>
              <p>A Failed Transaction occurs when your bank or payment provider debits your account but the payment fails to reach TAC&rsquo;s account due to a technical error in the payment network. In this scenario, TAC has not received your funds and your subscription or registration has not been activated.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">9.2</div>
              <p>The amount held in the payment network will be returned to your account in accordance with your bank&rsquo;s or JODO&rsquo;s standard reversal timelines. TAC cannot accelerate or influence this process.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">9.3</div>
              <p>To report a suspected Failed Transaction, email <a href="mailto:support@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@theartcode.org</a> with full details including the transaction date, time, amount, registered mobile number, and transaction reference number.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">9.4</div>
              <p>TAC will issue a reconciliation confirmation letter within two (2) Working Days if the transaction is confirmed as not received by TAC. You may use this letter with your bank to expedite the reversal.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="tac-pt-section" id="s10">
            <div className="tac-pt-section-num">Section 10</div>
            <h2>Duplicate Charges</h2>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">10.1</div>
              <p>If, due to a JODO system error, You are charged twice for the same subscription period within the same billing cycle (i.e., two identical charges on or around the same Billing Date), the duplicate charge will be identified through TAC&rsquo;s standard monthly reconciliation.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">10.2</div>
              <p>Upon identification and verification, the duplicate charge will be refunded to your original payment instrument within five (5) to seven (7) Working Days.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">10.3</div>
              <p>To report a suspected duplicate charge, email <a href="mailto:support@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@theartcode.org</a> with both transaction reference numbers.</p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="tac-pt-section" id="s11">
            <div className="tac-pt-section-num">Section 11</div>
            <h2>Charge After Confirmed Cancellation</h2>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">11.1</div>
              <p>If You are auto-debited after a subscription cancellation has been confirmed in writing by TAC (i.e., after a cancellation confirmation email has been sent to You), that charge is an erroneous debit and will be refunded within five (5) to seven (7) Working Days of the error being identified and verified.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">11.2</div>
              <p>This provision applies only where the cancellation was confirmed before the relevant Billing Date. Charges that occur because cancellation was requested on or after the Billing Date are not eligible for refund.</p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="tac-pt-section" id="s12">
            <div className="tac-pt-section-num">Section 12</div>
            <h2>Price Changes</h2>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">12.1 — Active Monthly Subscriptions</div>
              <p>TAC reserves the right to change subscription prices, bundle prices, or the price of any other TAC Service. In respect of active monthly subscriptions, the following procedure applies to price changes:</p>
              <ul className="tac-pt-sublist" style={{ marginTop: '10px' }}>
                <li><span className="sub-num">12.1.1</span><span>TAC will provide not less than thirty (30) days&rsquo; advance written notice of any price increase to your registered email address;</span></li>
                <li><span className="sub-num">12.1.2</span><span>The revised price will apply from the first Billing Date falling after the expiry of the notice period;</span></li>
                <li><span className="sub-num">12.1.3</span><span>If You do not accept the revised price, You must cancel your subscription before the first Billing Date on which the new price applies; and</span></li>
                <li><span className="sub-num">12.1.4</span><span>Failure to cancel before that date constitutes acceptance of the revised price.</span></li>
              </ul>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">12.2</div>
              <p>Prices for one-time purchases (webinars, bootcamps) may change at any time for future events without advance notice. Price changes do not affect purchases already made.</p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="tac-pt-section" id="s13">
            <div className="tac-pt-section-num">Section 13</div>
            <h2>Security and Fraud Prevention</h2>

            <div className="tac-pt-warning">
              <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: '1px' }}>🚨</span>
              <span><strong>13.1 — TAC will never, under any circumstances, ask You to share your UPI PIN, OTP, CVV, net banking password, or any other sensitive payment credential</strong> through any channel, including email, telephone, WhatsApp, or chat. Any communication claiming to be from TAC and asking for such information is fraudulent.</span>
            </div>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">13.2</div>
              <p>If You receive any such communication, do not respond and immediately report it to <a href="mailto:support@theartcode.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>support@theartcode.org</a> with details of the communication.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">13.3</div>
              <p>TAC is not liable for any financial loss arising from your disclosure of payment credentials to any third party, including persons impersonating TAC.</p>
            </div>
            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">13.4 — Chargeback Misuse</div>
              <p>Filing a chargeback or payment reversal with your bank in respect of a legitimate TAC transaction (i.e., one where payment was received by TAC and access was provided) constitutes fraud and a material breach of this Agreement. TAC reserves the right to pursue recovery of chargedback amounts, account suspension, and legal action in such cases.</p>
            </div>
          </section>

          {/* Section 14 */}
          <section className="tac-pt-section" id="s14">
            <div className="tac-pt-section-num">Section 14</div>
            <h2>GST Compliance Obligations of Users</h2>

            <div className="tac-pt-clause">
              <div className="tac-pt-clause-num">14.1</div>
              <p>Where You are required under Indian law to deduct TDS (Tax Deducted at Source) on subscription payments to TAC (applicable to certain business entities), You must notify TAC in advance and furnish the relevant TDS certificate within the statutory deadline. Non-furnishing of TDS certificates does not absolve You of liability for the gross amount.</p>
            </div>
          </section>

          {/* Section 15 */}
          <section className="tac-pt-section" id="s15">
            <div className="tac-pt-section-num">Section 15</div>
            <h2>Contact for Payment Queries</h2>

            <div className="tac-pt-contact-card">
              <h3>Payment Support</h3>
              <div className="cc-row"><span className="cc-icon">✉️</span><p><strong style={{ color: '#fff' }}>Email:</strong> <a href="mailto:support@theartcode.org">support@theartcode.org</a></p></div>
              <div className="cc-row"><span className="cc-icon">📋</span><p><strong style={{ color: '#fff' }}>Subject line format:</strong> <em style={{ color: 'rgba(255,255,255,.65)' }}>&lsquo;Payment Query – [Name] – [Transaction Reference]&rsquo;</em></p></div>
              <div className="cc-row"><span className="cc-icon">📎</span><p><strong style={{ color: '#fff' }}>Include:</strong> <span style={{ color: 'rgba(255,255,255,.65)' }}>Registered mobile number · JODO/transaction reference number · Date and amount of transaction · Nature of query</span></p></div>
              <div className="cc-row"><span className="cc-icon">⏱️</span><p><strong style={{ color: '#fff' }}>Response Time:</strong> <span style={{ color: 'rgba(255,255,255,.65)' }}>Same Working Day for urgent payment failures · Up to two (2) Working Days for invoicing, GST, and other billing matters</span></p></div>
            </div>

            <div className="tac-pt-contact" style={{ marginTop: '20px' }}>
              <a href="mailto:support@theartcode.org" className="tac-pt-contact-pill"><span>✉️</span> support@theartcode.org</a>
              <a href="mailto:legal@theartcode.org" className="tac-pt-contact-pill"><span>⚖️</span> legal@theartcode.org</a>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
