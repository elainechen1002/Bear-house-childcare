import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  Phone,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const schedule = [
  ['8:30–9:00', 'Breakfast'],
  ['9:00–10:00', 'Free play, activities & diaper check'],
  ['10:00–10:30', 'Handwashing & morning snack'],
  ['10:30–11:00', 'Circle time'],
  ['11:00–11:45', 'Outdoor play & diaper check'],
  ['11:45–12:50', 'Lunch'],
  ['12:50–1:00', 'Toothbrushing & diaper check'],
  ['1:00–3:00', 'Story time, rest & nap'],
  ['3:00–3:30', 'Afternoon snack'],
  ['3:30–4:30', 'Table activities & diaper check'],
  ['4:30–5:00', 'Afternoon circle time'],
  ['5:00–5:30', 'Outdoor play & parent pick-up'],
];

const documents = [
  'Registration form',
  'Parent agreement form',
  'Photo, walking & sunscreen permission form',
  'Consent for emergency medical treatment',
  'Two passport-size photos of your child',
  'Child Care Subsidy documents, if applicable',
];

const fees = [
  ['5 days per week', '$1,750'],
  ['3 days per week', '$1,350'],
  ['2 days per week', '$1,250'],
];

function BearPair({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`bear-pair${small ? ' bear-pair--small' : ''}`}
      aria-hidden="true"
    >
      <img src="/bear-left.png" alt="" width="269" height="364" />
      <img src="/bear-right.png" alt="" width="277" height="361" />
    </span>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="header-inner shell">
          <a className="brand" href="#top" aria-label="Bear’s House home">
            <BearPair small />
            <span className="brand-copy">
              <strong>Bear’s House</strong>
              <small>Child Care Centre</small>
            </span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#program">Our care</a>
            <a href="#guide">Parent guide</a>
            <a href="#fees">Fees</a>
          </nav>
          <a
            className="button button--small button--nav"
            href={`tel:${siteConfig.phoneHref}`}
          >
            <Phone size={16} /> Call us
          </a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner shell">
          <img
            className="hero-bear hero-bear--left"
            src="/bear-right.png"
            alt=""
            width="277"
            height="361"
            aria-hidden="true"
          />
          <div className="hero-copy">
            <p className="eyebrow">Serving Metro Vancouver since 2003</p>
            <h1 id="hero-title">Bear’s House Childcare</h1>
            <p className="hero-tagline">Know your child is in good hands.</p>
            <p className="lede">
              More than two decades of experience caring for children from 3
              to 36 months.
            </p>
            <div className="hero-actions">
              <a
                className="button button--primary"
                href={`tel:${siteConfig.phoneHref}`}
              >
                <Phone size={18} /> Call about enrollment
              </a>
              <a
                className="button button--secondary"
                href={`mailto:${siteConfig.email}?subject=Bear's House enrollment inquiry`}
              >
                <Mail size={18} /> Email about enrollment
              </a>
            </div>
          </div>
          <img
            className="hero-bear hero-bear--right"
            src="/bear-left.png"
            alt=""
            width="269"
            height="364"
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="facts-band" aria-label="Program at a glance">
        <div className="shell facts-grid">
          <div>
            <Clock3 size={21} />
            <span>
              <small>Open</small>Monday–Friday
              <br />
              8:30 a.m.–5:30 p.m.
            </span>
          </div>
          <div>
            <span className="fact-number">2003</span>
            <span>
              <small>Established</small>Caring for Metro Vancouver families
              since 2003
            </span>
          </div>
          <div>
            <span className="fact-dot" aria-hidden="true" />
            <span>
              <small>Every day</small>Nut-free and screen-free
            </span>
          </div>
        </div>
      </section>

      <div className="content-layout">
        <div className="content-main">
          <section className="section program-section" id="program">
            <div className="section-inner shell">
              <p className="eyebrow">Our program</p>
              <h2>
                Care shaped around the <span>whole child.</span>
              </h2>
              <div className="intro-grid">
                <p>
                  We support each child’s physical, social, emotional, and
                  cognitive development. Children are encouraged to explore,
                  create, discover, and build confidence through experiences
                  shaped around their strengths, interests, and developmental
                  needs.
                </p>
                <p>
                  Families and educators work as partners. Open communication
                  helps us provide responsive care and a comfortable transition
                  into the centre.
                </p>
              </div>

              <div className="program-photos">
                <figure>
                  <img
                    src="/bears-house-learning-space.jpg"
                    alt="A bright Bear’s House indoor learning space with toys, child-sized furniture, and play areas"
                    width="1600"
                    height="1139"
                    loading="lazy"
                  />
                  <figcaption>Our indoor learning space.</figcaption>
                </figure>
                <figure>
                  <img
                    src="/bears-house-playground.jpg"
                    alt="Bear’s House outdoor playground with play structures and space for active play"
                    width="1400"
                    height="1052"
                    loading="lazy"
                  />
                  <figcaption>Our outdoor playground.</figcaption>
                </figure>
              </div>

              <div
                className="development-grid"
                aria-label="Four areas of development"
              >
                <article>
                  <h3>Physical</h3>
                  <p>
                    Movement, coordination, outdoor play, and healthy routines.
                  </p>
                </article>
                <article>
                  <h3>Social</h3>
                  <p>Friendship, cooperation, communication, and belonging.</p>
                </article>
                <article>
                  <h3>Emotional</h3>
                  <p>Confidence, self-regulation, empathy, and expression.</p>
                </article>
                <article>
                  <h3>Cognitive</h3>
                  <p>Curiosity, problem-solving, creativity, and discovery.</p>
                </article>
              </div>

              <div className="qualified-card">
                <div className="qualified-title">
                  <span aria-hidden="true">✓</span>
                  <h3>Qualified care</h3>
                </div>
                <p>
                  Educators hold valid ECE credentials and, where applicable,
                  Infant Toddler certificates. They maintain current First Aid,
                  meet BC Child Care Licensing requirements, and complete
                  Criminal Record Checks. Supervised ECE practicum students may
                  occasionally join the program.
                </p>
              </div>
            </div>
          </section>

          <section className="section guide-section" id="guide">
            <div className="section-inner shell">
              <p className="eyebrow">Parent guide</p>
              <h2>
                Clear answers for <span>everyday care.</span>
              </h2>
              <p className="section-lede">
                Choose a topic below for the details from the parent handbook.
              </p>

              <div className="guide-list">
                <details open>
                  <summary>
                    <span>A typical day</span>
                    <ChevronDown size={20} />
                  </summary>
                  <div className="schedule-wrap">
                    <p>
                      The rhythm may shift with children’s needs, weather, and
                      special activities.
                    </p>
                    <div className="schedule">
                      {schedule.map(([time, activity]) => (
                        <div key={time}>
                          <time>{time}</time>
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>

                <details>
                  <summary>
                    <span>What to bring &amp; wear</span>
                    <ChevronDown size={20} />
                  </summary>
                  <div className="detail-grid">
                    <div>
                      <h3>Every day</h3>
                      <ul>
                        <li>Weather-appropriate clothing</li>
                        <li>Extra shirt, pants, underwear, and socks</li>
                        <li>Clearly label every item</li>
                      </ul>
                    </div>
                    <div>
                      <h3>Summer</h3>
                      <ul>
                        <li>Shorts and T-shirt</li>
                        <li>Sunhat and sunscreen</li>
                      </ul>
                    </div>
                    <div>
                      <h3>Winter</h3>
                      <ul>
                        <li>Waterproof clothing and rubber boots</li>
                        <li>Snow pants, winter coat, mittens, and warm hat</li>
                      </ul>
                    </div>
                    <div>
                      <h3>Rest time</h3>
                      <ul>
                        <li>Fitted sheet, small pillow, and small blanket</li>
                        <li>Bedding goes home weekly for laundering</li>
                      </ul>
                    </div>
                    <div className="full">
                      <h3>Emergency package</h3>
                      <p>
                        Pack a labelled bottle of water, a suitable
                        non-perishable snack, an optional comfort item, and
                        extra clothing. Replace supplies as needed.
                      </p>
                    </div>
                  </div>
                </details>

                <details>
                  <summary>
                    <span>Food, allergies &amp; illness</span>
                    <ChevronDown size={20} />
                  </summary>
                  <div className="detail-grid">
                    <div>
                      <h3>Nut-free facility</h3>
                      <p>
                        No nuts or nut-containing products may enter the centre.
                        Tell staff about all allergies and provide care plans
                        and emergency medication when required.
                      </p>
                    </div>
                    <div>
                      <h3>Lunches &amp; snacks</h3>
                      <p>
                        Families provide nutritious food unless enrolled in a
                        meal program. We encourage Canada’s Food Guide choices,
                        and children do not share food.
                      </p>
                    </div>
                    <div>
                      <h3>Please do not send</h3>
                      <p>
                        Candy, gum, chocolate bars, pop, soft drinks, chips, or
                        foods high in added sugar.
                      </p>
                    </div>
                    <div>
                      <h3>When to stay home</h3>
                      <p>
                        Keep children home with fever, vomiting, diarrhea,
                        persistent cough, breathing difficulty, undiagnosed
                        rash, pink eye, or symptoms that limit participation or
                        may spread illness.
                      </p>
                    </div>
                    <div className="full">
                      <h3>If illness begins at care</h3>
                      <p>
                        A parent or emergency contact will be called to arrange
                        prompt pick-up. Children may return once they can
                        participate and are no longer contagious.
                      </p>
                    </div>
                  </div>
                </details>

                <details>
                  <summary>
                    <span>Medication</span>
                    <ChevronDown size={20} />
                  </summary>
                  <div className="details-copy">
                    <p>
                      Medication is given only with written parental
                      authorization and according to the child’s care plan or
                      written instructions. It must:
                    </p>
                    <ul className="check-list">
                      <li>
                        <Check size={16} />
                        Stay in its original labelled container
                      </li>
                      <li>
                        <Check size={16} />
                        Clearly show the child’s name
                      </li>
                      <li>
                        <Check size={16} />
                        Include dosage and instructions
                      </li>
                      <li>
                        <Check size={16} />
                        Be stored safely out of reach
                      </li>
                      <li>
                        <Check size={16} />
                        Be given only as instructed
                      </li>
                      <li>
                        <Check size={16} />
                        Be recorded with medication, dose, date, and time
                      </li>
                    </ul>
                  </div>
                </details>

                <details>
                  <summary>
                    <span>Safe pick-up &amp; custody</span>
                    <ChevronDown size={20} />
                  </summary>
                  <div className="detail-grid">
                    <div>
                      <h3>Authorized people only</h3>
                      <p>
                        Children are released only to a parent, guardian, or
                        authorized person listed on the registration form. No
                        child is released to anyone under age 16.
                      </p>
                    </div>
                    <div>
                      <h3>Changes and safety</h3>
                      <p>
                        Tell the centre before an alternate person picks up. We
                        may refuse release when a person appears unable to care
                        for or transport the child safely.
                      </p>
                    </div>
                    <div className="full">
                      <h3>Custody arrangements</h3>
                      <p>
                        Provide current custody agreements or court orders.
                        Staff follow the legal documents held by the centre.
                      </p>
                    </div>
                  </div>
                </details>

                <details>
                  <summary>
                    <span>Behaviour guidance, play &amp; rest</span>
                    <ChevronDown size={20} />
                  </summary>
                  <div className="detail-grid">
                    <div>
                      <h3>Positive guidance</h3>
                      <p>
                        We use clear expectations, positive language, choices,
                        redirection, natural consequences, and opportunities to
                        repair relationships. Physical punishment is never used.
                      </p>
                    </div>
                    <div>
                      <h3>Active play</h3>
                      <p>
                        Children develop movement, balance, and coordination,
                        with approximately 60–90 minutes of outdoor active play
                        daily when conditions permit.
                      </p>
                    </div>
                    <div>
                      <h3>Rest without pressure</h3>
                      <p>
                        Children are encouraged to rest during quiet time and
                        are never forced to sleep.
                      </p>
                    </div>
                    <div>
                      <h3>Screen-free program</h3>
                      <p>
                        Televisions, tablets, phones, computers, and other
                        screens are not part of the regular program.
                      </p>
                    </div>
                    <div className="full">
                      <p>
                        Serious behavioural concerns are documented and
                        discussed collaboratively with families.
                      </p>
                    </div>
                  </div>
                </details>

                <details>
                  <summary>
                    <span>Emergency procedures</span>
                    <ChevronDown size={20} />
                  </summary>
                  <div className="detail-grid">
                    <div>
                      <h3>Prepared for</h3>
                      <p>
                        Fire, earthquake, severe weather, utility failure,
                        emergency closure, evacuation, relocation, family
                        communication, and reunification.
                      </p>
                    </div>
                    <div>
                      <h3>Practice</h3>
                      <p>
                        Staff are trained, supplies are maintained, fire drills
                        happen monthly, and other procedures are practised at
                        least annually.
                      </p>
                    </div>
                    <div>
                      <h3>Relocation site</h3>
                      <p>
                        <strong>Nelson Elementary School</strong>
                        <br />
                        4859 Irmin Street, Burnaby, BC
                      </p>
                    </div>
                    <div>
                      <h3>Family communication</h3>
                      <p>
                        Parents or emergency contacts are notified as soon as
                        reasonably possible. Children remain supervised until
                        safely released. The full Emergency Plan is available on
                        request.
                      </p>
                    </div>
                  </div>
                </details>

                <details>
                  <summary>
                    <span>Communication &amp; concerns</span>
                    <ChevronDown size={20} />
                  </summary>
                  <div className="detail-grid">
                    <div>
                      <h3>Staying in touch</h3>
                      <p>
                        Updates come through daily conversations, parent-teacher
                        meetings, information boards, newsletters, and written
                        communication. Keep contact, emergency, and health
                        information current.
                      </p>
                    </div>
                    <div>
                      <h3>Resolving a concern</h3>
                      <p>
                        First, speak directly with the staff member involved.
                        Contact the Daycare Manager if more support is needed.
                        We are committed to respectful, collaborative
                        problem-solving.
                      </p>
                    </div>
                    <div className="full">
                      <p>
                        Please share important family, health, or developmental
                        changes that may affect your child.
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </section>

          <section className="section fees-section" id="fees">
            <div className="section-inner shell">
              <p className="eyebrow">Fees &amp; enrollment</p>
              <h2>
                A straightforward path to <span>getting started.</span>
              </h2>
              <p className="section-lede">
                Call or email to ask about space. Families are encouraged to
                visit and meet the team before the first day.
              </p>

              <div className="fees-grid">
                <article className="fee-card">
                  <small>Children aged 3–36 months</small>
                  <h3>Monthly fees</h3>
                  {fees.map(([label, price]) => (
                    <div className="fee-row" key={label}>
                      <span>{label}</span>
                      <strong>{price}</strong>
                    </div>
                  ))}
                  <p>
                    Full-time spaces receive priority when enrollment is full.
                    Contracted days are not transferable.
                  </p>
                </article>
                <article className="registration-card">
                  <small>Before the first day</small>
                  <h3>Registration checklist</h3>
                  <ul>
                    {documents.map((item) => (
                      <li key={item}>
                        <Check size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="deposit">
                    <strong>$400 registration deposit</strong>Held during
                    enrollment, then applied to final tuition or refunded after
                    outstanding charges are paid.
                  </p>
                </article>
              </div>

              <div className="policy-list">
                <article>
                  <h3>Payments</h3>
                  <div>
                    <p>
                      Due on the first day of each month. Four post-dated
                      cheques are required per payment period. Fees remain
                      payable during absences, vacations, illness, statutory
                      holidays, and scheduled closures. Families cover amounts
                      not paid by government funding.
                    </p>
                    <p>
                      <strong>Late payment: $50 · NSF cheque: $40</strong>
                      <br />
                      Annual receipts are issued at year-end.
                    </p>
                  </div>
                </article>
                <article>
                  <h3>Late pick-up</h3>
                  <p>
                    The centre closes at 5:30 p.m. The fee is $20 for the first
                    15 minutes—or portion of it—plus $20 for each additional
                    15-minute period, per child. Please arrange an authorized
                    alternate when delayed.
                  </p>
                </article>
                <article>
                  <h3>Withdrawal</h3>
                  <p>
                    Give one full calendar month’s written notice. For a March
                    31 last day, notice is due February 28/29; for April 30, it
                    is due March 31. Missing the deadline may result in another
                    month’s fee.
                  </p>
                </article>
                <article>
                  <h3>Prepayment refunds</h3>
                  <p>
                    Unused prepaid fees may be refunded when the daycare ends
                    care for reasons outside the Withdrawal Policy. Refunds
                    follow the applicable notice requirements.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>

        <aside className="contact-card" aria-label="Contact Bear’s House">
          <div className="contact-inner shell">
            <div className="contact-bears">
              <BearPair />
            </div>
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Ask about a space.</h2>
              <p>
                Call or email to ask about availability at our Metro Vancouver
                locations.
              </p>
              <p className="contact-hours">
                <Clock3 size={15} /> {siteConfig.hours}
              </p>
            </div>
            <div className="contact-links">
              <a className="contact-call" href={`tel:${siteConfig.phoneHref}`}>
                <Phone size={19} />
                <span>
                  <small>Call now</small>
                  {siteConfig.phoneDisplay}
                </span>
                <ArrowUpRight size={16} />
              </a>
              <a
                className="contact-email"
                href={`mailto:${siteConfig.email}?subject=Bear's House enrollment inquiry`}
              >
                <Mail size={19} />
                <span>
                  <small>Send an email</small>
                  {siteConfig.email}
                </span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </aside>
      </div>

      <footer>
        <div className="shell">
          <p>© 2026 Bear’s House Child Care Centre. All rights reserved.</p>
          <a href="#top">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
      </footer>
    </main>
  );
}
