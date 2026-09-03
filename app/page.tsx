import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Backpack,
  BedDouble,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  FileCheck2,
  Heart,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  ShieldCheck,
  Siren,
  Sparkles,
  Sun,
  UserRoundCheck,
  Utensils,
  WalletCards,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const schedule = [
  ["8:30–9:00", "Breakfast"],
  ["9:00–10:00", "Free play, activities & diaper check"],
  ["10:00–10:30", "Handwashing & morning snack"],
  ["10:30–11:00", "Circle time"],
  ["11:00–11:45", "Outdoor play & diaper check"],
  ["11:45–12:50", "Lunch"],
  ["12:50–1:00", "Toothbrushing & diaper check"],
  ["1:00–3:00", "Story time, rest & nap"],
  ["3:00–3:30", "Afternoon snack"],
  ["3:30–4:30", "Table activities & diaper check"],
  ["4:30–5:00", "Afternoon circle time"],
  ["5:00–5:30", "Outdoor play & parent pick-up"],
];

const fees = [
  ["5 days / week", "$1,750"],
  ["3 days / week", "$1,350"],
  ["2 days / week", "$1,250"],
];

const documents = [
  "Registration form",
  "Parent agreement form",
  "Photo, walking & sunscreen permission form",
  "Consent for emergency medical treatment",
  "Two passport-size photos of your child",
  "Child Care Subsidy documentation, if applicable",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bear’s House home">
          <span className="brand-mark" aria-hidden="true">BH</span>
          <span><strong>Bear’s House</strong><small>Child Care Centre</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#program">Our program</a>
          <a href="#day">A day with us</a>
          <a href="#parent-guide">Parent guide</a>
          <a href="#fees">Fees &amp; enrollment</a>
        </nav>
        <a className="pill-button pill-button--ink" href={`tel:${siteConfig.phoneHref}`}>
          <Phone size={16} aria-hidden="true" /> Talk to us
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Welcome to Bear’s House</p>
          <h1>A small place for <em>big beginnings.</em></h1>
          <p className="hero-lede">
            Safe, nurturing, play-based care where children can explore,
            create, build confidence, and grow at their own pace.
          </p>
          <div className="hero-actions">
            <a className="pill-button pill-button--blue" href={`tel:${siteConfig.phoneHref}`}>
              <Phone size={18} aria-hidden="true" /> Call about a space
            </a>
            <a className="text-link" href="#parent-guide">
              Explore the parent guide <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <ul className="trust-row" aria-label="Program highlights">
            <li><ShieldCheck size={17} /> Licensed educators</li>
            <li><Sun size={17} /> Daily outdoor play</li>
            <li><Sparkles size={17} /> Screen-free program</li>
          </ul>
        </div>

        <div className="hero-board" aria-label="At a glance">
          <div className="board-card board-card--yellow">
            <span className="board-icon"><Clock3 size={20} /></span>
            <p>Open weekdays</p><strong>8:30–5:30</strong>
          </div>
          <div className="board-card board-card--mint">
            <span className="board-icon"><Heart size={20} /></span>
            <p>Our approach</p><strong>Play, connection &amp; care</strong>
          </div>
          <div className="board-card board-card--coral">
            <span className="board-icon"><Sun size={20} /></span>
            <p>Outdoor active play</p><strong>60–90 min daily</strong>
          </div>
          <div className="board-note">
            <span>Nut-free</span><span>ECE qualified</span><span>Family-centred</span>
          </div>
        </div>
      </section>

      <section className="quick-strip" aria-label="Quick information">
        <div className="shell quick-strip__inner">
          <p>Looking for a quick answer?</p>
          <a href="#fees">See monthly fees <ArrowUpRight size={16} /></a>
          <a href="#day">View the daily schedule <ArrowUpRight size={16} /></a>
          <a href="#bring">What to bring <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <div className="content-layout shell">
        <div className="content-main">
          <section className="section philosophy" id="program">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow"><span /> Our philosophy</p>
                <h2>Care designed around the whole child.</h2>
              </div>
              <p>
                Children learn best when they feel safe, known, and encouraged.
                Through play, positive relationships, and open family partnerships,
                we support every child’s strengths, interests, and developmental needs.
              </p>
            </div>
            <div className="development-grid">
              <article><span>01</span><h3>Physical</h3><p>Movement, coordination, outdoor play, and healthy daily rhythms.</p></article>
              <article><span>02</span><h3>Social</h3><p>Friendship, cooperation, communication, and belonging.</p></article>
              <article><span>03</span><h3>Emotional</h3><p>Confidence, self-regulation, empathy, and safe expression.</p></article>
              <article><span>04</span><h3>Cognitive</h3><p>Curiosity, discovery, problem-solving, and creative thinking.</p></article>
            </div>
            <div className="staff-card">
              <div className="icon-tile"><UserRoundCheck size={25} /></div>
              <div><p className="card-kicker">Qualified care</p><h3>Educators parents can trust</h3></div>
              <p>
                Our educators hold valid ECE credentials and, where applicable,
                Infant Toddler certificates. They maintain current First Aid,
                meet BC licensing requirements, and complete Criminal Record Checks.
                Supervised ECE practicum students may occasionally join the program.
              </p>
            </div>
          </section>

          <section className="section day-section" id="day">
            <div className="section-heading">
              <p className="eyebrow"><span /> A day at Bear’s House</p>
              <h2>Familiar rhythms. Plenty of room to play.</h2>
              <p className="section-intro">
                Our daily flow balances meals, movement, connection, discovery, and rest.
                Timing may shift with children’s needs, weather, and special activities.
              </p>
            </div>
            <div className="schedule-card">
              {schedule.map(([time, activity], index) => (
                <div className="schedule-row" key={time}>
                  <time>{time}</time>
                  <span className="schedule-dot" aria-hidden="true">{index + 1}</span>
                  <p>{activity}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section guide-section" id="parent-guide">
            <div className="section-heading">
              <p className="eyebrow"><span /> Parent guide</p>
              <h2>The details families need, all in one place.</h2>
              <p className="section-intro">Open any topic for a clear summary of the handbook.</p>
            </div>

            <div className="guide-list">
              <details id="bring" open>
                <summary><span className="summary-icon summary-icon--yellow"><Backpack size={21} /></span><span><small>Daily essentials</small>What to bring &amp; wear</span><ChevronDown size={20} /></summary>
                <div className="detail-body columns-2">
                  <div><h3>Every day</h3><ul><li>Weather-appropriate clothing for outdoor play</li><li>Extra shirt, pants, underwear, and socks</li><li>Clearly label every item with your child’s name</li></ul></div>
                  <div><h3>Summer</h3><ul><li>Shorts and T-shirt</li><li>Sunhat</li><li>Sunscreen</li></ul></div>
                  <div><h3>Winter</h3><ul><li>Waterproof outdoor clothing and rubber boots</li><li>Snow pants and winter coat</li><li>Mittens or gloves and a warm hat</li></ul></div>
                  <div><h3>Rest time</h3><ul><li>Fitted sheet, small pillow, and small blanket</li><li>Bedding goes home weekly for laundering</li></ul></div>
                  <div className="mini-callout"><Siren size={19} /><p><strong>Emergency package</strong>Pack a labelled bottle of water, suitable non-perishable snack, optional comfort item, and extra clothing. Replace supplies as needed.</p></div>
                </div>
              </details>

              <details>
                <summary><span className="summary-icon summary-icon--mint"><Utensils size={21} /></span><span><small>Well-being</small>Food, allergies &amp; illness</span><ChevronDown size={20} /></summary>
                <div className="detail-body columns-2">
                  <div><h3>Nut-free facility</h3><p>No nuts or nut-containing products may enter the centre. Tell staff about every allergy and supply care plans and emergency medication when required.</p></div>
                  <div><h3>Lunches &amp; snacks</h3><p>Families provide nutritious food unless enrolled in a meal program. We encourage Canada’s Food Guide choices. Children do not share food.</p></div>
                  <div><h3>Please leave at home</h3><ul><li>Candy, gum, chocolate bars, chips</li><li>Pop, soft drinks, and foods high in added sugar</li></ul></div>
                  <div><h3>When to stay home</h3><p>Keep children home when symptoms affect participation or may spread illness, including fever, vomiting, diarrhea, persistent cough, breathing difficulty, undiagnosed rash, or pink eye.</p></div>
                  <div className="mini-callout"><Phone size={19} /><p><strong>If illness begins at care</strong>A parent or emergency contact will be called to arrange prompt pick-up. Children may return once they can participate and are no longer contagious.</p></div>
                </div>
              </details>

              <details>
                <summary><span className="summary-icon summary-icon--coral"><FileCheck2 size={21} /></span><span><small>Health procedures</small>Medication</span><ChevronDown size={20} /></summary>
                <div className="detail-body">
                  <p>Medication is given only with written parental authorization and according to the child’s care plan or written instructions.</p>
                  <ul className="check-grid">
                    <li><Check size={17} /> Original labelled container</li>
                    <li><Check size={17} /> Child’s name clearly shown</li>
                    <li><Check size={17} /> Dosage and instructions included</li>
                    <li><Check size={17} /> Stored safely out of children’s reach</li>
                    <li><Check size={17} /> Given only as instructed</li>
                    <li><Check size={17} /> Medication, dose, date, and time recorded</li>
                  </ul>
                </div>
              </details>

              <details>
                <summary><span className="summary-icon summary-icon--blue"><ShieldCheck size={21} /></span><span><small>Arrival &amp; departure</small>Safe release of children</span><ChevronDown size={20} /></summary>
                <div className="detail-body columns-2">
                  <div><h3>Authorized pick-up</h3><p>Children are released only to a parent, guardian, or authorized person listed on the registration form. No child is released to anyone under age 16.</p></div>
                  <div><h3>Changes</h3><p>Tell the centre before an alternate person picks up. We may refuse release when a person appears unable to care for or transport the child safely.</p></div>
                  <div><h3>Custody arrangements</h3><p>Provide current custody agreements or court orders. Staff follow the legal documents held by the centre.</p></div>
                </div>
              </details>

              <details>
                <summary><span className="summary-icon summary-icon--yellow"><Activity size={21} /></span><span><small>Healthy development</small>Active play, rest &amp; screens</span><ChevronDown size={20} /></summary>
                <div className="detail-body columns-2">
                  <div><h3>Move every day</h3><p>Children have opportunities for outdoor play, gross-motor activity, balance, coordination, and movement exploration—typically 60–90 minutes outdoors, weather permitting.</p></div>
                  <div><h3>Rest without pressure</h3><p>Children are encouraged to rest during quiet time and are never forced to sleep.</p></div>
                  <div><h3>Screen-free</h3><p>Televisions, tablets, phones, computers, and other screens are not part of the regular program.</p></div>
                </div>
              </details>

              <details>
                <summary><span className="summary-icon summary-icon--blue"><Heart size={21} /></span><span><small>Positive relationships</small>Behaviour guidance</span><ChevronDown size={20} /></summary>
                <div className="detail-body columns-2">
                  <div><h3>What we nurture</h3><p>Respect, positive reinforcement, self-regulation, problem-solving, and emotional development.</p></div>
                  <div><h3>How we guide</h3><p>Clear expectations, positive language, appropriate choices, redirection, natural consequences, and opportunities to repair relationships.</p></div>
                  <div className="mini-callout"><ShieldCheck size={19} /><p><strong>Every child is treated with care</strong>Physical punishment is never used. Serious behavioural concerns are documented and discussed collaboratively with families.</p></div>
                </div>
              </details>

              <details>
                <summary><span className="summary-icon summary-icon--coral"><Siren size={21} /></span><span><small>Prepared together</small>Emergency procedures</span><ChevronDown size={20} /></summary>
                <div className="detail-body columns-2">
                  <div><h3>Our plan covers</h3><p>Fire, earthquake, severe weather, utility failure, emergency closure, evacuation, relocation, family communication, and reunification.</p></div>
                  <div><h3>Practice &amp; preparation</h3><p>Staff are trained, emergency supplies are maintained, fire drills happen monthly, and other emergency procedures are practised at least annually.</p></div>
                  <div className="relocation-card"><MapPin size={20} /><p><strong>Emergency relocation site</strong>Nelson Elementary School<br />4859 Irmin Street, Burnaby, BC</p></div>
                  <div><h3>Keeping families connected</h3><p>Parents or emergency contacts are notified as soon as reasonably possible. Children remain supervised until safely released to an authorized person. The full Emergency Plan is available on request.</p></div>
                </div>
              </details>

              <details>
                <summary><span className="summary-icon summary-icon--mint"><MessagesSquare size={21} /></span><span><small>Family partnership</small>Communication &amp; concerns</span><ChevronDown size={20} /></summary>
                <div className="detail-body columns-2">
                  <div><h3>Staying in touch</h3><p>Families receive updates through daily conversations, parent-teacher meetings, information boards, newsletters, and written communication.</p></div>
                  <div><h3>Please keep us informed</h3><p>Share important family, health, or developmental changes, and keep all contact, emergency, and health information current.</p></div>
                  <div className="steps-card"><span>1</span><p><strong>Speak with the staff member involved.</strong>Many concerns can be resolved through a direct, respectful conversation.</p><span>2</span><p><strong>Contact the Daycare Manager.</strong>Reach out when more support is needed.</p></div>
                </div>
              </details>
            </div>
          </section>

          <section className="section fees-section" id="fees">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow"><span /> Fees &amp; enrollment</p><h2>A simple path from interest to enrollment.</h2></div>
              <p>Start by calling or emailing the centre. We encourage families to visit, meet the team, and help their child become comfortable before the first day.</p>
            </div>

            <div className="fees-grid">
              <article className="fee-panel">
                <div className="panel-heading"><WalletCards size={22} /><div><small>Children aged 3–36 months</small><h3>Monthly fees</h3></div></div>
                <div className="fee-list">
                  {fees.map(([label, price]) => <div key={label}><span>{label}</span><strong>{price}</strong></div>)}
                </div>
                <p>Fees are monthly. Full-time spaces receive priority when enrollment is full, and contracted days are not transferable.</p>
              </article>

              <article className="enrollment-panel">
                <div className="panel-heading"><CalendarDays size={22} /><div><small>Before the first day</small><h3>Registration checklist</h3></div></div>
                <ul>{documents.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
                <div className="deposit-note"><span>$400</span><p><strong>Registration deposit</strong>Held during enrollment, then applied to final tuition or refunded after outstanding charges are paid.</p></div>
              </article>
            </div>

            <div className="policy-grid">
              <article><h3>Payments</h3><p>Fees are due on the first day of each month. Four post-dated cheques are required per payment period. Fees remain payable during absences, vacations, illness, statutory holidays, and scheduled closures. Families cover any amount not paid by government funding.</p><p><strong>Late payment: $50 · NSF cheque: $40</strong><br />Annual receipts are issued at year-end.</p></article>
              <article><h3>Late pick-up</h3><p>The centre closes promptly at 5:30 p.m. The fee is $20 for the first 15 minutes—or part of it—plus $20 for each additional 15-minute period, per child. Arrange an authorized alternate when delayed.</p></article>
              <article><h3>Withdrawal</h3><p>Give one full calendar month’s written notice. For a March 31 last day, notice is due by February 28/29; for April 30, it is due by March 31. Missing the deadline may result in another month’s fee.</p></article>
              <article><h3>Prepayment refunds</h3><p>Unused prepaid fees may be refunded when the daycare ends care for reasons outside the Withdrawal Policy. Refunds follow the applicable notice requirements.</p></article>
            </div>

            <div className="closure-note"><Clock3 size={20} /><p><strong>Hours &amp; closures</strong>Open Monday to Friday, 8:30 a.m.–5:30 p.m. Closed on statutory holidays and scheduled Christmas and Professional Development days. Families receive advance notice of closure dates.</p></div>
          </section>

          <section className="cta-band">
            <div><p className="eyebrow eyebrow--light"><span /> Ready when you are</p><h2>Ask about your child’s next chapter.</h2><p>Contact Bear’s House directly to ask about space, arrange a visit, or begin registration.</p></div>
            <div className="cta-actions">
              <a className="pill-button pill-button--white" href={`tel:${siteConfig.phoneHref}`}><Phone size={18} /> {siteConfig.phoneDisplay}</a>
              <a className="pill-button pill-button--ghost" href={`mailto:${siteConfig.email}?subject=Bear's House enrollment inquiry`}><Mail size={18} /> Email the centre</a>
            </div>
          </section>
        </div>

        <aside className="contact-rail" aria-label="Contact Bear’s House">
          <div className="contact-rail__top">
            <p className="eyebrow eyebrow--light"><span /> Enrollment</p>
            <h2>Let’s talk about your child.</h2>
            <p>Ask about availability, arrange a visit, or begin registration.</p>
          </div>
          <div className="contact-list">
            <a href={`tel:${siteConfig.phoneHref}`}><span><Phone size={18} /></span><span><small>Call</small>{siteConfig.phoneDisplay}</span></a>
            <a href={`mailto:${siteConfig.email}?subject=Bear's House enrollment inquiry`}><span><Mail size={18} /></span><span><small>Email</small>{siteConfig.email}</span></a>
            <a href={siteConfig.mapUrl} target="_blank" rel="noreferrer"><span><MapPin size={18} /></span><span><small>Visit</small>{siteConfig.addressLines[0]}<br />{siteConfig.addressLines[1]}</span></a>
          </div>
          <p className="contact-hours">{siteConfig.hours}</p>
          <a className="rail-link" href="#fees">Enrollment details <ArrowRight size={16} /></a>
        </aside>
      </div>

      <footer>
        <div className="shell footer-inner">
          <a className="brand" href="#top"><span className="brand-mark">BH</span><span><strong>Bear’s House</strong><small>Child Care Centre</small></span></a>
          <p>Parent information based on the Bear’s House Parent Handbook.</p>
          <a href="#top">Back to top <ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </main>
  );
}
