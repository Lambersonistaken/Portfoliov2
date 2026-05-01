/* global React */
const { useState, useEffect, useRef } = React;

// ---------- Icons ----------
const IconSun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
);
const IconMoon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const IconArrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/>
    <polyline points="7 7 17 7 17 17"/>
  </svg>
);

// ---------- Hooks ----------
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids.join(",")]);
  return active;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

// ---------- Header ----------
function Header({ active, theme, onToggleTheme, name }) {
  const scrolled = useScrolled();
  const links = [
    { id: "about",      label: "About" },
    { id: "stack",      label: "Stack" },
    { id: "projects",   label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact",    label: "Contact" }
  ];
  const logo = theme === "dark" ? "assets/whitelogo.svg" : "assets/blacklogo.svg";
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <a href="#top" className="brand">
          <img src={logo} alt="Logo" className="brand-logo" />
          <span>{name}</span>
        </a>
        <nav className="nav">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={`nav-link ${active === l.id ? "active" : ""}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-end">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <IconSun /> : <IconMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}

// ---------- Hero variants ----------
function HeroQuiet({ data }) {
  return (
    <section className="hero" id="top">
      <div>
        <div className="hero-eyebrow">
          <span><b>01</b> Portfolio</span>
          <span><b>—</b> {data.year}</span>
          <span><b>·</b> {data.status}</span>
        </div>
        <h1 className="hero-title hero-name">
          <span className="line"><span className="word">{data.name.toUpperCase()}</span></span>
        </h1>
        <div className="hero-role">{data.role}</div>
      </div>
      <div className="hero-bottom">
        <div className="hero-tagline">
          {data.about.lead}
        </div>
        <div className="hero-meta">
        </div>
        <div className="hero-meta" style={{ textAlign: "right" }}>
          <a href="#projects" className="hero-cta">
            See selected work <IconArrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function HeroGrid({ data }) {
  const rows = [
    { num: "01", key: "Name",     val: data.name },
    { num: "02", key: "Role",     val: data.role },
    { num: "03", key: "Stack",    val: "TypeScript · React · Vue · Next.js · Django · PostgreSQL" },
    { num: "04", key: "Location", val: data.about.side[0].value },
    { num: "05", key: "Status",   val: data.status },
    { num: "06", key: "Year",     val: data.year }
  ];
  return (
    <section className="hero variant-grid" id="top">
      <div>
        <div className="hero-eyebrow">
          <span><b>Index</b> 01 — 06</span>
          <span><b>·</b> Portfolio {data.year}</span>
        </div>
        <h1 className="hero-title hero-name">
          {data.name.toUpperCase()}
        </h1>
        <div className="hero-role">{data.role}</div>
      </div>
      <div className="hero-grid">
        {rows.map((r) => (
          <div className="hero-grid-row" key={r.num}>
            <div className="grid-num">{r.num}</div>
            <div className="grid-key">{r.key}</div>
            <div className="grid-val">{r.val}</div>
          </div>
        ))}
      </div>
      <div className="hero-bottom">
        <div className="hero-tagline">{data.about.lead}</div>
        <div></div>
        <div style={{ textAlign: "right" }}>
          <a href="#projects" className="hero-cta">
            See selected work <IconArrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function HeroMarquee({ data }) {
  const text = data.name.toUpperCase();
  return (
    <section className="hero variant-marquee" id="top">
      <div>
        <div className="hero-eyebrow">
          <span><b>01</b> Portfolio</span>
          <span><b>—</b> {data.year}</span>
        </div>
        <div className="marquee" aria-hidden="true">
          <span>{text}</span><span className="dot"></span>
          <span>{text}</span><span className="dot"></span>
          <span>{text}</span><span className="dot"></span>
          <span>{text}</span><span className="dot"></span>
        </div>
        <div className="hero-role" style={{ marginTop: 40 }}>{data.role}</div>
      </div>
      <div className="hero-bottom">
        <div className="hero-tagline">{data.about.lead}</div>
        <div className="hero-meta">
        </div>
        <div className="hero-meta" style={{ textAlign: "right" }}>
          <a href="#projects" className="hero-cta">
            See selected work <IconArrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function Hero({ variant, data }) {
  if (variant === "grid")    return <HeroGrid data={data} />;
  if (variant === "marquee") return <HeroMarquee data={data} />;
  return <HeroQuiet data={data} />;
}

// ---------- About ----------
function About({ data }) {
  return (
    <section className="section" id="about">
      <div className="section-label reveal">About — 01</div>
      <div className="about-grid">
        <div className="about-side reveal">
          {data.about.side.map((s, i) => (
            <div className="about-side-block" key={i}>
              <span className="label">{s.label}</span>
              <span className="value">{s.value}</span>
            </div>
          ))}
        </div>
        <div className="about-prose reveal">
          <p>{data.about.lead}</p>
        </div>
      </div>
    </section>
  );
}

// ---------- Stack ----------
function Stack({ data }) {
  return (
    <section className="section" id="stack">
      <div className="section-label reveal">Stack — 02</div>
      <h2 className="section-title reveal">The tools<br/>I trust.</h2>
      <div className="stack-grid reveal">
        {data.stack.map((s, i) => (
          <div className="stack-cell" key={s.name}>
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className="name">{s.name}</div>
              <div className="kind">{s.kind}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Projects ----------
function Projects({ data }) {
  return (
    <section className="section" id="projects">
      <div className="section-label reveal">Projects — 03</div>
      <div className="projects-intro reveal">
        <h2 className="section-title" style={{ margin: 0 }}>Selected<br/>work.</h2>
        <span className="projects-count">{String(data.projects.length).padStart(2, "0")} pieces</span>
      </div>
      <div className="projects-grid">
        {data.projects.map((p) => (
          <article className="project reveal" key={p.num}>
            <div className="project-media" style={p.image ? { backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
              {!p.image && <span className="placeholder-label">{p.placeholder}</span>}
            </div>
            <div className="project-head">
              <span className="project-num">{p.num}</span>
              <h3 className="project-name">{p.name}</h3>
              <a href={p.link || "#"} target="_blank" rel="noreferrer" className="project-link" aria-label="View project">
                View <IconArrowUpRight size={11} />
              </a>
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => <span className="project-tag" key={t}>{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ---------- Experience ----------
function Experience({ data }) {
  return (
    <section className="section" id="experience">
      <div className="section-label reveal">Experience — 04</div>
      <h2 className="section-title reveal">A short<br/>history.</h2>
      <div className="exp-list reveal">
        {data.experience.map((e) => (
          <div className="exp-card" key={e.num}>
            <div className="exp-card-header">
              {e.logo && <img src={e.logo} alt={e.org} className="exp-logo" />}
              <div className="exp-card-title">
                <span className="exp-num">{e.num}</span>
                <h3 className="exp-role">{e.role}</h3>
                <span className="exp-org">{e.org}</span>
              </div>
              <span className="exp-period">{e.period}</span>
            </div>
            {e.desc && (
              <ul className="exp-desc-list">
                {Array.isArray(e.desc) ? e.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                )) : <li>{e.desc}</li>}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Contact ----------
function Contact({ data }) {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="reveal">
          <div className="section-label" style={{ marginBottom: 32 }}>Contact — 05</div>
          <h2 className="contact-headline">
            Let's<br/>
            <a href={`mailto:${data.contact.email}`}>talk.</a>
          </h2>
        </div>
        <div className="contact-side reveal">
          <a className="contact-link" href={`mailto:${data.contact.email}`}>
            <span className="platform">Email</span>
            <span className="handle">{data.contact.email}</span>
            <span className="arrow"><IconArrowUpRight /></span>
          </a>
          {data.contact.links.map((l) => (
            <a className="contact-link" key={l.platform} href={l.url} target="_blank" rel="noreferrer">
              <span className="platform">{l.platform}</span>
              <span className="handle">{l.handle}</span>
              <span className="arrow"><IconArrowUpRight /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer({ data }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {data.year} — {data.name}</span>
      </div>
    </footer>
  );
}

Object.assign(window, {
  Header, Hero, About, Stack, Projects, Experience, Contact, Footer,
  useActiveSection, useReveal
});
