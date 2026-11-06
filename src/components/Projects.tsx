import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section className="section work-section" id="work">
      <div className="section-wrap">
        <SectionHeading index="01" label="SELECTED WORK" title="Things I've" accent="built." />
        <div className="work-intro" data-reveal>
          <p>A selection of products, platforms and engineering work. Some details are intentionally high-level where projects are private.</p>
          <span className="mono">2022 — 2026</span>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project project--${project.accent}`} key={project.number} data-reveal>
              <div className="project-number mono">{project.number}</div>
              <div className="project-main">
                <div className="project-type mono">{project.type} <span> / {project.year}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
              <div className="project-art" aria-hidden="true">
                <div className="art-ring art-ring--one" />
                <div className="art-ring art-ring--two" />
                <div className="art-cross">+</div>
                <MoveUpRight size={30} strokeWidth={1} />
              </div>
              <a className="project-link" href={project.href || "#contact"} aria-label={`Discuss ${project.title}`}><ArrowUpRight size={20} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
