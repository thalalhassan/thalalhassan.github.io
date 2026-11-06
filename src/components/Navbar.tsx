import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Expertise", "#expertise"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Thalal Hassan home">
        <span className="brand-mark">T</span>
        <span>
          THALAL HASSAN<span className="brand-dot">.</span>
        </span>
      </a>
      <nav
        className={open ? "nav nav--open" : "nav"}
        aria-label="Main navigation"
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="mailto:i.thalalhassan@gmail.com">
          LET&apos;S TALK <ArrowUpRight size={13} />
        </a>
      </nav>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
