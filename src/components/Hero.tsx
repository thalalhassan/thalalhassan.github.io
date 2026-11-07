import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-topline mono">
        <span>INDEPENDENT ENGINEER / INDIA</span>
        <span className="live">
          <i /> OPEN TO SELECT OPPORTUNITIES
        </span>
      </div>

      <div className="hero-title__backdrop" aria-hidden="true">
        <span>ENGINEER</span>
        <span>BUILDING</span>
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> HELLO, I&apos;M
          </p>
          <h1>
            THALAL
            <br />
            <span>HASSAN</span>
            <b>.</b>
          </h1>
          <p className="hero-role">Senior Software Engineer</p>
          <p className="hero-description">
            I design and build dependable software — from backend systems and distributed architectures to cloud
            infrastructure and user-facing products.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#work">
              EXPLORE MY WORK <ArrowUpRight size={16} />
            </a>
            <a className="button button--text" href="#contact">
              GET IN TOUCH <ArrowDown size={15} />
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <span className="mono">GO · SYSTEMS · CLOUD</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait of Thalal Hassan">
          <div className="portrait-glow" />

          <div className="portrait-frame">
            <div className="portrait-grain" />

            <img src="/portrait.png" alt="Thalal Hassan - Senior Software Engineer" className="hero-portrait" />

            <div className="portrait-caption mono">PORTRAIT / 01</div>
            <div className="portrait-index mono">
              KASARAGOD
              <br />
              INDIA
            </div>
          </div>

          <div className="portrait-orbit">
            <span />
          </div>

          <div className="float-tag float-tag--one mono">
            <i /> GO / BACKEND
          </div>

          <div className="float-tag float-tag--two mono">SYSTEMS THINKER ↗</div>

          <div className="float-tag float-tag--three mono">BUILD / SHIP / LEARN</div>
        </div>
      </div>

      <div className="hero-bottom mono">
        <span>
          SCROLL TO EXPLORE <ArrowDown size={13} />
        </span>
        <span>01 — 05</span>
        <span>CRAFTED WITH INTENTION</span>
      </div>
    </section>
  );
}
